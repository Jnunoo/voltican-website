import { getPublishedServices } from "@/lib/cms/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Voltican — Enterprise AI & Technology Consulting",
  description:
    "Explore Voltican's full suite of enterprise services — from AI strategy and generative AI implementation to data architecture, cloud, and ERP modernization.",
};

// Each service gets a distinct-but-on-brand card colour (all navy-family)
const cardColors: Record<string, string> = {
  "data-analytics":    "#003e6a",
  "data-governance":   "#0a4a7a",
  "automation-rpa":    "#003558",
  "data-architecture": "#004a7a",
  "cloud-devsecops":   "#003e6a",
  "saas-erp":          "#0a3d5c",
};

export default async function ServicesPage() {
  const services = await getPublishedServices();
  return (
    <main className="min-h-screen bg-white">

      {/* ── Page header — white bg, navy text (matches Case Studies / Blog) ── */}
      <section className="pt-24 pb-8 bg-white border-b border-slate-100">
        <div className="w-full px-12 sm:px-16 lg:px-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-slate-300" />
            <span className="text-slate-400 text-xs font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#003e6a] tracking-tight leading-tight mb-3 whitespace-nowrap">
            Services built for enterprise impact
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            15+ years of enterprise technology expertise — from AI strategy and intelligent automation
            to data architecture, cloud, and ERP modernization. All under one roof.
          </p>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="bg-white py-10">
        <div className="w-full px-12 sm:px-16 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((svc) => {
              const bg = cardColors[svc.slug] ?? "#003e6a";
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 flex flex-col"
                  style={{ background: bg }}
                >
                  {/* Photo top panel */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={svc.imgUrl}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay — blends into card body colour */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[var(--bg)]"
                      style={{ "--bg": bg } as React.CSSProperties}
                    />
                    {/* Practice tag — top left */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-widest">
                        {svc.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-5" style={{ background: bg }}>
                    <h2 className="text-[15px] font-bold text-white leading-snug mb-2 group-hover:text-white/90 transition-colors">
                      {svc.title}
                    </h2>
                    <p className="text-white/55 text-[13px] leading-relaxed mb-4 line-clamp-2 flex-1">
                      {svc.summary}
                    </p>

                    {/* Capability pills — first 2 */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {svc.capabilities.slice(0, 2).map((cap) => (
                        <span
                          key={cap.title}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/55 border border-white/10"
                        >
                          {cap.title}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white text-[13px] font-medium group-hover:gap-3 transition-all duration-200 mt-auto">
                      View service <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-10 bg-[#003e6a] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Not sure which service fits your challenge?
              </h3>
              <p className="text-white/55 text-sm">
                Book a free AI Readiness Assessment — we&apos;ll map the right path for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 whitespace-nowrap shadow-md shadow-brand-orange/20 shrink-0"
            >
              Get a Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
