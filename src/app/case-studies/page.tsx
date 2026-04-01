import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Voltican — Real Results, Real Clients",
  description:
    "Explore how Voltican has delivered measurable AI transformation outcomes for Fortune 500 firms, healthcare networks, and mid-market manufacturers.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page header — white background, navy text */}
      <section className="pt-28 pb-14 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-300" />
            <span className="text-slate-400 text-xs font-semibold tracking-[0.2em] uppercase">Client Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#001f3d] tracking-tight leading-tight max-w-3xl mb-4">
            Outcomes that speak<br className="hidden md:block" /> for themselves
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            Real engagements. Real results. Explore how Voltican has helped enterprises
            harness AI to cut costs, accelerate operations, and build lasting competitive advantage.
          </p>
        </div>
      </section>

      {/* Card grid — white background, navy/dark cards */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 flex flex-col"
                style={{ background: cs.heroColor }}
              >
                {/* Photorealistic sector image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.industry}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Dark gradient overlay so text is always readable */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[var(--hero-color,#001f3d)]"
                    style={{ '--hero-color': cs.heroColor } as React.CSSProperties}
                  />
                  {/* Industry badge top-left */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      {cs.industry}
                    </span>
                  </div>
                  {/* Read time top-right */}
                  <div className="absolute top-4 right-4">
                    <span className="text-white/60 text-xs">{cs.readTime}</span>
                  </div>
                </div>

                {/* Card body — dark navy */}
                <div className="flex flex-col flex-1 p-7" style={{ background: cs.heroColor }}>
                  <p className="text-white/40 text-xs mb-1">{cs.client} · {cs.date}</p>
                  <h2 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-white/90 transition-colors flex-1">
                    {cs.title}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed mb-5 line-clamp-2">
                    {cs.subtitle}
                  </p>

                  {/* Metrics row */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {cs.outcomes.slice(0, 2).map((o) => (
                      <div key={o.label} className="bg-white/8 rounded-xl px-4 py-3">
                        <p className="text-xl font-bold text-white leading-none mb-0.5">{o.metric}</p>
                        <p className="text-xs text-white/45 leading-tight">{o.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/55 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-200 mt-auto">
                    Read case study <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA footer */}
          <div className="mt-16 bg-[#001f3d] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to be our next success story?</h3>
              <p className="text-white/55 text-sm">Book a free AI Readiness Assessment and discover what&apos;s possible.</p>
            </div>
            <Link
              href="/#ai-assessment"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 whitespace-nowrap shadow-md shadow-brand-orange/20"
            >
              Get a Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
