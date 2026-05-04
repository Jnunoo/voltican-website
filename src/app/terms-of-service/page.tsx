import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Voltican',
  description: 'Voltican Terms of Service — the terms governing use of our website and services.',
};

export default function TermsOfServicePage() {
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
            Terms of Service
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
                The full Terms of Service content is being prepared by Madan Kumar and will be
                published here shortly. In the meantime, please contact us at{' '}
                <a href="mailto:admin@voltican.com" className="text-brand-blue underline">
                  admin@voltican.com
                </a>{' '}
                with any questions.
              </p>
            </div>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">1. Agreement to Terms</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              By accessing or using the Voltican Inc. website (&ldquo;Site&rdquo;), you agree to be
              bound by these Terms of Service. If you do not agree, please do not use our Site.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">2. Use of Site</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              You agree to use the Site only for lawful purposes and in a manner that does not
              infringe the rights of others or restrict their use and enjoyment of the Site. You may
              not use the Site to transmit any harmful, offensive, or disruptive content.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">3. Intellectual Property</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              All content on this Site — including text, graphics, logos, and software — is the
              property of Voltican Inc. or its content suppliers and is protected by applicable
              intellectual property laws. Reproduction or redistribution without express written
              permission is prohibited.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">4. Disclaimer of Warranties</h2>
            <p className="text-text-muted leading-relaxed mb-6">
              The Site and its content are provided &ldquo;as is&rdquo; without warranty of any kind,
              express or implied. Voltican Inc. does not warrant that the Site will be uninterrupted
              or error-free.
            </p>

            <h2 className="text-xl font-heading font-bold text-brand-navy mb-3">5. Contact Us</h2>
            <p className="text-text-muted leading-relaxed mb-2">
              For any questions about these Terms, please contact us:
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
