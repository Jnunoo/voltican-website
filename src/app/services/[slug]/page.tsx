import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';

// Generate static params for all 6 service slugs
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Dynamic page title / og metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found | Voltican' };
  return {
    title: `${service.title} | Voltican`,
    description: service.summary,
    openGraph: {
      title: `${service.title} | Voltican`,
      description: service.summary,
      images: [service.heroImgUrl],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen">
      {/* ─── Navbar spacer ─── */}
      <div className="h-16 bg-brand-navy" />

      {/* ─── Hero ─── */}
      <section className="relative bg-brand-navy overflow-hidden py-24 lg:py-32">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Breadcrumb */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-ice/50 hover:text-brand-ice text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <p className="text-brand-orange font-semibold text-xs tracking-[0.18em] uppercase mb-4">
              {service.tag}
            </p>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
              {service.headline}
            </h1>
            <p className="text-brand-ice/70 text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange/90 transition-colors"
              >
                Start a conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/#ai-services"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={service.heroImgUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Capabilities ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-brand-blue font-semibold text-xs tracking-[0.18em] uppercase mb-3">
              What We Deliver
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
              Core capabilities
            </h2>
            <p className="mt-4 text-text-muted text-base leading-relaxed">
              Our {service.title} practice covers the full spectrum — from
              advisory through implementation and ongoing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-6 hover:border-brand-blue/20 hover:bg-brand-blue/[0.03] transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-base mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Approach ─── */}
      <section className="py-20 lg:py-28 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-orange font-semibold text-xs tracking-[0.18em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
              How we work with you
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.approach.map((phase, i) => (
              <div key={phase.step} className="relative group">
                {/* Connector line */}
                {i < service.approach.length - 1 && (
                  <div className="hidden lg:block absolute top-[22px] left-[calc(50%+24px)] right-0 h-px bg-white/10 z-0" />
                )}
                <div className="relative z-10">
                  <span className="font-mono text-3xl font-bold text-white/10 group-hover:text-brand-orange/30 transition-colors duration-300 select-none block mb-4">
                    {phase.step}
                  </span>
                  <h3 className="text-base font-heading font-bold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-brand-ice/50 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcomes ─── */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-blue font-semibold text-xs tracking-[0.18em] uppercase mb-3">
              Proven Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight mb-6">
              What clients achieve
            </h2>
            <p className="text-text-muted leading-relaxed">
              These are real outcomes from engagements we&apos;ve delivered — not
              marketing projections.
            </p>
          </div>

          <ul className="space-y-4">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-blue" />
                </div>
                <span className="text-brand-navy font-medium leading-snug">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 lg:py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-brand-ice/60 text-base leading-relaxed mb-10">
            Book a free 30-minute discovery call. We&apos;ll map your specific
            situation to a practical path forward — no generic pitch decks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ai-assessment"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange/90 transition-colors"
            >
              Book a Free Assessment
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              ← All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
