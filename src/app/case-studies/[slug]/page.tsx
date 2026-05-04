import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: `${cs.title} | Voltican Case Study`,
    description: cs.subtitle,
  };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.indexOf(cs);
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="min-h-screen bg-white">
      {/* Full-bleed hero photo with dark overlay */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src={cs.image}
          alt={cs.industry}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Deep gradient so text is legible */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, ${cs.heroColor}ee 75%, ${cs.heroColor} 100%)`,
          }}
        />

        {/* Content over photo */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl pb-10">
            {/* Breadcrumb navigation */}
            <div className="flex items-center gap-2 text-white/55 text-sm mb-6">
              <Link
                href="/"
                className="hover:text-white transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/case-studies"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Case Studies
              </Link>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">{cs.industry}</span>
              <span className="text-white/25 text-xs">·</span>
              <span className="text-white/40 text-xs">{cs.date}</span>
              <span className="text-white/25 text-xs">·</span>
              <span className="text-white/40 text-xs">{cs.readTime}</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight max-w-4xl">
              {cs.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Outcome metrics bar — white bg */}
      <section className="bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.outcomes.map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#001f3d] mb-1">{o.metric}</p>
                <p className="text-slate-500 text-sm leading-tight">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subtitle callout */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl py-6">
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">{cs.subtitle}</p>
        </div>
      </div>

      {/* Body — white bg */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-l-2 border-[#001f3d] pl-3">The Challenge</h2>
              <p className="text-slate-600 text-base leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 border-l-2 border-[#001f3d] pl-3">Our Approach</h2>
              <p className="text-slate-600 text-base leading-relaxed">{cs.solution}</p>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-l-2 border-[#001f3d] pl-3">Results Delivered</h2>
              <div className="grid grid-cols-2 gap-4">
                {cs.outcomes.map((o) => (
                  <div key={o.label} className="bg-[#001f3d] rounded-2xl p-5">
                    <p className="text-2xl font-bold text-white mb-1">{o.metric}</p>
                    <p className="text-white/55 text-sm">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tech tags */}
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement details */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4">Engagement Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Client</p>
                  <p className="text-slate-700 text-sm font-medium">{cs.client}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Industry</p>
                  <p className="text-slate-700 text-sm font-medium">{cs.industry}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Completed</p>
                  <p className="text-slate-700 text-sm font-medium">{cs.date}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#001f3d] rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2 text-sm">Ready for results like these?</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Book a free AI Readiness Assessment with our team.
              </p>
              <Link
                href="/contact"
                className="bg-white hover:bg-white/90 text-[#001f3d] text-xs font-bold px-5 py-2.5 rounded-full inline-block transition-all duration-200"
              >
                Get a Free Assessment
              </Link>
            </div>

            {/* Back to listing */}
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-slate-500 hover:text-[#001f3d] text-sm font-medium transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              All case studies
            </Link>
          </div>
        </div>

        {/* Next case study */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4 font-medium">Next case study</p>
          <Link
            href={`/case-studies/${nextCase.slug}`}
            className="group relative rounded-2xl overflow-hidden flex flex-col md:flex-row md:items-center gap-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: nextCase.heroColor }}
          >
            <div className="relative h-32 md:w-56 md:h-auto md:shrink-0 overflow-hidden">
              <Image
                src={nextCase.image}
                alt={nextCase.industry}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="256px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--nc)] hidden md:block"
                style={{ '--nc': nextCase.heroColor } as React.CSSProperties} />
            </div>
            <div className="p-6 flex flex-1 items-center justify-between gap-4">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{nextCase.industry}</p>
                <h3 className="text-white font-bold text-base leading-snug max-w-xl group-hover:text-white/90 transition-colors">
                  {nextCase.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white shrink-0 transition-colors" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
