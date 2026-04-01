import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Voltican — Real Results, Real Clients",
  description:
    "Explore how Voltican has delivered measurable AI transformation outcomes for Fortune 500 firms, healthcare networks, and mid-market manufacturers.",
};

const tagColors: Record<string, string> = {
  "GenAI": "bg-purple-500/15 text-purple-300",
  "SAP S/4HANA": "bg-blue-500/15 text-blue-300",
  "Azure OpenAI": "bg-sky-500/15 text-sky-300",
  "Finance Automation": "bg-green-500/15 text-green-300",
  "Agentic AI": "bg-violet-500/15 text-violet-300",
  "Supply Chain": "bg-orange-500/15 text-orange-300",
  "Healthcare AI": "bg-teal-500/15 text-teal-300",
  "Data Modernization": "bg-amber-500/15 text-amber-300",
};

function tagClass(tag: string) {
  return tagColors[tag] ?? "bg-white/10 text-white/60";
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* Page hero */}
      <section className="bg-gradient-to-b from-[#001f3d] to-[#003163] pt-36 pb-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-brand-orange" />
            <span className="text-brand-orange text-xs font-semibold tracking-widest uppercase">Client Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight max-w-3xl mb-5">
            Outcomes that speak for themselves
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Real engagements. Real results. Explore how Voltican has helped enterprises
            harness AI to cut costs, accelerate operations, and build lasting competitive advantage.
          </p>
        </div>
      </section>

      {/* Case study grid */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Color bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, #E87D27, #1a6fcf)` }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-semibold text-brand-orange uppercase tracking-widest mb-0.5">
                      {cs.industry}
                    </p>
                    <p className="text-slate-400 text-xs">{cs.client} · {cs.date}</p>
                  </div>
                  <span className="text-slate-300 text-xs">{cs.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-800 leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                  {cs.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {cs.subtitle}
                </p>

                {/* Metrics row */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {cs.outcomes.slice(0, 2).map((o) => (
                    <div key={o.label} className="bg-slate-50 rounded-xl p-3">
                      <p className="text-2xl font-bold text-brand-blue leading-none mb-0.5">{o.metric}</p>
                      <p className="text-xs text-slate-500 leading-tight">{o.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cs.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagClass(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-brand-blue text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Read case study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-14 bg-gradient-to-r from-[#001f3d] to-[#003475] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to be our next success story?</h3>
            <p className="text-white/60 text-sm">Book a free AI Readiness Assessment and discover what's possible.</p>
          </div>
          <Link
            href="/#ai-assessment"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 whitespace-nowrap shadow-lg shadow-brand-orange/20"
          >
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
