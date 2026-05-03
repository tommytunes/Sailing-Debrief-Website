// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import Stripe from "npm:stripe@14";
import { createClient, type SupabaseClient } from "jsr:@supabase/supabase-js@2"

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!);
const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

Deno.serve(async (req) => {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("Missing stripe-signature header", { status: 400 });

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret);
  } catch (err) {
    return new Response(`Webhook Error: ${err instanceof Error ? err.message : String(err)}`, { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      if (session.mode !== "subscription") break;
      const subscriptionId = typeof session.subscription === "string"
        ? session.subscription
        : session.subscription?.id;
      if (!subscriptionId || !session.client_reference_id) break;
      const sub = await stripe.subscriptions.retrieve(subscriptionId);
      await updateProfile(supabase, session.client_reference_id, sub);
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object;
      const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .single();
      if (data) await updateProfile(supabase, data.id, sub);
      break;
    }

    case "invoice.paid":
    case "invoice.payment_failed": {
      const invoice = event.data.object;
      const subscriptionId = typeof invoice.subscription === "string"
        ? invoice.subscription
        : invoice.subscription?.id;
      if (!subscriptionId) break;
      const sub = await stripe.subscriptions.retrieve(subscriptionId);
      const customerId = invoice.customer == null
        ? null
        : typeof invoice.customer === "string" ? invoice.customer : invoice.customer.id;
      if (!customerId) break;
      const { data } = await supabase
        .from("profiles")
        .select("id")
        .eq("stripe_customer_id", customerId)
        .single();
      if (data) await updateProfile(supabase, data.id, sub);
      break;
    }

  }

  return new Response(JSON.stringify({ received: true}), {status: 200});
})

async function updateProfile(supabase: SupabaseClient, userId: string, sub: Stripe.Subscription) {
  const item = sub.items.data[0];
  const customerId = typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  console.log("updateProfile called", { userId, subId: sub.id, customerId });
  const { data, error, count } = await supabase.from("profiles").update({
    stripe_customer_id: customerId,
    stripe_subscription_id: sub.id,
    subscription_status: sub.status,
    subscription_expires_at: new Date(sub.current_period_end * 1000).toISOString(),
  }).eq("id", userId).select();
  if (error) console.error("profiles update error:", JSON.stringify(error));
  else console.log("profiles updated rows:", data?.length ?? 0);
}

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/stripe-webhook' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
