const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 text-base-content">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm opacity-60 mb-8">Last updated: May 30, 2026</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Overview</h2>
                <p className="opacity-80 leading-relaxed">
                    Sailing Debrief is a local desktop application. Your sailing data never leaves your device —
                    we do not collect, store, or have access to any of your race files, recordings, or analysis.
                    This policy describes only the limited account and billing information we handle to provide
                    the Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <h3 className="font-medium mb-2">Account Information</h3>
                <p className="opacity-80 leading-relaxed mb-4">
                    When you create an account, we collect your email address and a hashed password. This is
                    managed through <strong>Supabase</strong>, our authentication and database provider. We use
                    this information solely to authenticate you and manage your subscription status.
                </p>
                <h3 className="font-medium mb-2">Payment Information</h3>
                <p className="opacity-80 leading-relaxed mb-4">
                    Subscription billing is handled by <strong>Stripe</strong>. We do not store your credit card
                    number or payment details on our servers. Stripe handles all payment processing and stores
                    payment data according to their own privacy policy and PCI-DSS compliance standards.
                </p>
                <h3 className="font-medium mb-2">What We Do Not Collect</h3>
                <p className="opacity-80 leading-relaxed">
                    We do not collect, transmit, or store any sailing data, race files, audio recordings, GPS
                    tracks, or any other content you work with in the Sailing Debrief application. All of that
                    data stays on your device.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <ul className="list-disc list-inside opacity-80 leading-relaxed space-y-1">
                    <li>To create and manage your account</li>
                    <li>To verify your subscription status when the app connects to the Service</li>
                    <li>To send transactional emails (account confirmation, password reset) via Supabase</li>
                    <li>To process subscription payments via Stripe</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
                <p className="opacity-80 leading-relaxed mb-2">
                    We use the following third-party services, each governed by their own privacy policies:
                </p>
                <ul className="list-disc list-inside opacity-80 leading-relaxed space-y-1">
                    <li><strong>Supabase</strong> — authentication and account data storage</li>
                    <li><strong>Stripe</strong> — subscription billing and payment processing</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Data Retention and Deletion</h2>
                <p className="opacity-80 leading-relaxed">
                    Your account data is retained for as long as your account is active. You can delete your
                    account at any time from the account settings page, which will remove your account
                    information from our systems. Stripe may retain payment records as required by financial
                    regulations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Security</h2>
                <p className="opacity-80 leading-relaxed">
                    We rely on Supabase's security infrastructure for account data and Stripe's PCI-compliant
                    infrastructure for payment data. Passwords are never stored in plain text.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
                <p className="opacity-80 leading-relaxed">
                    The Service is not directed at children under 13. We do not knowingly collect personal
                    information from children under 13.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
                <p className="opacity-80 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of significant
                    changes by updating the date at the top of this page.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Contact</h2>
                <p className="opacity-80 leading-relaxed">
                    For privacy questions or requests, contact us at{" "}
                    <a href="mailto:team@sailing-debrief.com" className="link link-primary">
                        team@sailing-debrief.com
                    </a>.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
