const TermsOfService = () => {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 text-base-content">
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-sm opacity-60 mb-8">Last updated: May 30, 2026</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="opacity-80 leading-relaxed">
                    By accessing or using Sailing Debrief ("the Service"), you agree to be bound by these Terms of
                    Service. If you do not agree to these terms, please do not use the Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
                <p className="opacity-80 leading-relaxed">
                    Sailing Debrief is a desktop application that helps sailors review and analyze their race
                    performance. The Service includes account management, subscription billing, and access to
                    application downloads.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. Accounts</h2>
                <p className="opacity-80 leading-relaxed mb-2">
                    You must provide accurate information when creating an account. You are responsible for
                    maintaining the security of your account credentials. We use Supabase for authentication
                    and account management.
                </p>
                <p className="opacity-80 leading-relaxed">
                    You may delete your account at any time from your account settings page. Upon deletion,
                    your account data held by us will be removed.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. Subscriptions and Billing</h2>
                <p className="opacity-80 leading-relaxed mb-2">
                    Some features of Sailing Debrief require a paid subscription. Billing is handled securely
                    through Stripe. By subscribing, you authorize Stripe to charge your payment method on a
                    recurring basis according to the plan you select.
                </p>
                <p className="opacity-80 leading-relaxed">
                    You may cancel your subscription at any time. Access to paid features will continue until
                    the end of your current billing period. We do not offer refunds for partial billing periods
                    unless required by applicable law.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">5. Your Data</h2>
                <p className="opacity-80 leading-relaxed">
                    Sailing Debrief is a local desktop application. Your sailing data — race files, recordings,
                    and analysis — is stored locally on your device and is never uploaded to our servers. We do
                    not have access to your sailing data.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">6. Acceptable Use</h2>
                <p className="opacity-80 leading-relaxed">
                    You agree not to misuse the Service, attempt to gain unauthorized access to any part of the
                    Service, or use the Service in any way that violates applicable laws or regulations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">7. Disclaimer of Warranties</h2>
                <p className="opacity-80 leading-relaxed">
                    The Service is provided "as is" without warranties of any kind, express or implied. We do
                    not warrant that the Service will be uninterrupted, error-free, or free of harmful
                    components.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <p className="opacity-80 leading-relaxed">
                    To the fullest extent permitted by law, Sailing Debrief shall not be liable for any
                    indirect, incidental, special, or consequential damages arising out of your use of the
                    Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
                <p className="opacity-80 leading-relaxed">
                    We may update these Terms from time to time. Continued use of the Service after changes
                    are posted constitutes acceptance of the updated Terms.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">10. Contact</h2>
                <p className="opacity-80 leading-relaxed">
                    For questions about these Terms, please contact us at{" "}
                    <a href="mailto:team@sailing-debrief.com" className="link link-primary">
                        team@sailing-debrief.com
                    </a>.
                </p>
            </section>
        </div>
    );
};

export default TermsOfService;
