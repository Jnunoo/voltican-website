import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Voltican',
  description:
    'Get in touch with Voltican — global AI and technology consulting headquartered in Houston, TX. Book a free AI assessment or reach our team directly.',
};

const offices = [
  { city: 'Houston, TX', label: 'Headquarters', flag: '🇺🇸' },
  { city: 'Sacramento, CA', label: 'West Coast', flag: '🇺🇸' },
  { city: 'India', label: 'Delivery Center', flag: '🇮🇳' },
  { city: 'Canada', label: 'North America', flag: '🇨🇦' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Navbar spacer */}
      <div className="h-16 bg-brand-navy" />

      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden py-20 lg:py-28">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-brand-orange font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-5">
            Let&apos;s talk about what&apos;s possible
          </h1>
          <p className="text-brand-ice/70 text-lg leading-relaxed">
            Whether you&apos;re exploring AI strategy, a data platform migration,
            or an ERP transformation — our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left: contact details */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-muted hover:text-brand-blue text-sm mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            <h2 className="text-2xl font-heading font-bold text-brand-navy mb-8">
              Reach our team
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+17137144965"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-brand-navy font-medium group-hover:text-brand-blue transition-colors">
                    (713) 714-4965
                  </p>
                </div>
              </a>

              <a
                href="mailto:admin@voltican.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-brand-navy font-medium group-hover:text-brand-blue transition-colors">
                    admin@voltican.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Business Hours</p>
                  <p className="text-brand-navy font-medium">Monday – Friday, 8 AM – 6 PM CST</p>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="mt-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Global Offices</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 ml-14">
                {offices.map((o) => (
                  <div
                    key={o.city}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <p className="text-xl mb-1">{o.flag}</p>
                    <p className="font-semibold text-brand-navy text-sm">{o.city}</p>
                    <p className="text-xs text-text-muted">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 lg:p-10">
            <h2 className="text-2xl font-heading font-bold text-brand-navy mb-2">
              Send us a message
            </h2>
            <p className="text-text-muted text-sm mb-8">
              We typically respond within one business day.
            </p>

            <form
              action="mailto:admin@voltican.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Area of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 bg-white text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="ai-strategy">AI Strategy &amp; Consulting</option>
                  <option value="data-analytics">Data &amp; Analytics</option>
                  <option value="data-governance">Data Governance</option>
                  <option value="automation-rpa">Automation (RPA)</option>
                  <option value="cloud-devsecops">Cloud &amp; DevSecOps</option>
                  <option value="saas-erp">SaaS &amp; ERP Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition resize-none"
                  placeholder="Tell us about your project or challenge..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-brand-navy text-center px-6">
        <p className="text-brand-ice/60 text-sm mb-4">Prefer to start with a free assessment?</p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm transition-colors"
        >
          Book Your Free AI Assessment
        </Link>
      </section>
    </main>
  );
}
