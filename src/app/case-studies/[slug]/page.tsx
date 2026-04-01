import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
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
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* Hero header */}
      <section
        className="pt-36 pb-16"
        style={{ background: `linear-gradient(135deg, ${cs.heroColor} 0%, #003475 100%)` }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-brand-orange text-xs font-semibold uppercase tracking-widest">{cs.industry}</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/40 text-xs">{cs.date}</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/40 text-xs">{cs.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight max-w-4xl mb-5">
            {cs.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
            {cs.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {cs.tags.map((tag) => (
              <span key={tag} className="bg-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome metrics */}
      <section className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.outcomes.map((o) => (
              <div key={o.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">{o.metric}</p>
                <p className="text-slate-500 text-sm leading-tight">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3">The Challenge</h2>
              <p className="text-slate-600 text-base leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <h2 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-3">Our Approach</h2>
              <p className="text-slate-600 text-base leading-relaxed">{cs.solution}</p>
            </div>

            <div className="h-px bg-slate-100" />

            <div>
              <h2 className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-4">Results Delivered</h2>
              <div className="grid grid-cols-2 gap-4">
                {cs.outcomes.map((o) => (
                  <div key={o.label} className="bg-slate-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-brand-blue mb-1">{o.metric}</p>
                    <p className="text-slate-500 text-sm">{o.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About the engagement */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
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
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">Technologies</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#001f3d] to-[#003475] rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-2 text-sm">Ready for results like these?</h3>
              <p className="text-white/55 text-xs leading-relaxed mb-4">
                Book a free AI Readiness Assessment with our team.
              </p>
              <Link
                href="/#ai-assessment"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-block transition-all duration-200"
              >
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Next case study */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-xs text-slate-400 uppercase tracking-widest mb-4 font-medium">Next case study</p>
          <Link
            href={`/case-studies/${nextCase.slug}`}
            className="group flex items-start justify-between gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>
              <p className="text-brand-orange text-xs font-semibold uppercase tracking-wider mb-1">{nextCase.industry}</p>
              <h3 className="text-slate-800 font-bold text-lg group-hover:text-brand-blue transition-colors leading-snug max-w-xl">
                {nextCase.title}
              </h3>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-brand-blue shrink-0 mt-1 transition-colors" />
          </Link>
        </div>
      </section>
    </main>
  );
}
