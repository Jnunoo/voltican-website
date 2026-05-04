import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Voltican',
  description: 'Voltican Privacy Policy — how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar spacer */}
      <div className="h-16 bg-brand-navy" />

      {/* Header */}
      <section className="bg-brand-navy py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-orange font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Legal
          </p>
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-ice/60 text-sm">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-brand-blue text-sm mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="prose prose-slate max-w-none text-brand-navy">
            {/* Placeholder notice */}
            <div className="rounded-xl border-2 border-dashed border-brand-orange/30 bg-brand-orange/5 p-6 mb-10">
              <p className="text-brand-orange font-semibold text-sm mb-1">Content Pending</p>
              <p className="text-text-muted text-sm">
                The full Privacy Policy content is being prepared by Madan Kumar and will be published
                here shortly. In the meantime, please contact us at{' '}
                <a href="mailto:admin@voltican.com" className="text-brand-blue underline">
                  admin@voltican.com
                </a>{' '}
                with any privacy-related questions.
              </p>
            </div>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">1. Introduction</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Voltican Inc. (&ldquo;Voltican&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy
              Policy describes how we collect, use, and share information when you visit our website,
              engage our consulting services, or otherwise interact with us.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">2. Information We Collect</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              We may collect information you provide directly to us, such as when you fill out a
              contact form, request an assessment, or communicate with our team. This may include
              your name, email address, phone number, company name, and the content of your
              communications.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">3. How We Use Your Information</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              We use the information we collect to respond to your inquiries, provide and improve our
              services, send relevant communications (with your consent), and comply with legal
              obligations.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">4. Contact Us</h2>
            <p className="text-text-muted leading-relaxed mb-2">
              For any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-1 text-text-muted">
              <li>
                <strong className="text-brand-navy">Email:</strong>{' '}
                <a href="mailto:admin@voltican.com" className="text-brand-blue hover:underline">
                  admin@voltican.com
                </a>
              </li>
              <li>
                <strong className="text-brand-navy">Phone:</strong>{' '}
                <a href="tel:+17137144965" className="text-brand-blue hover:underline">
                  (713) 714-4965
                </a>
              </li>
              <li>
                <strong className="text-brand-navy">Address:</strong> Voltican Inc., Houston, TX, USA
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
