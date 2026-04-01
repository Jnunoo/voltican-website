'use client';

import { Search, Map, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Discover & Assess',
    description:
      'Stakeholder interviews, data audits, and AI readiness assessments to map your current state and identify your highest-value opportunities.',
    icon: Search,
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Design Strategy',
    description:
      'Custom roadmaps — never templates. We align technology and data investments to phased business outcomes that your leadership can stand behind.',
    icon: Map,
  },
  {
    number: '03',
    phase: 'Delivery',
    title: 'Build & Implement',
    description:
      'From proof of concept to production. Cloud, data, automation, and AI — integrated into your existing enterprise platforms by our global delivery team.',
    icon: Rocket,
  },
  {
    number: '04',
    phase: 'Operations',
    title: 'Sustain & Optimize',
    description:
      'Ongoing managed services, model monitoring, and continuous improvement so your AI investments compound and deliver measurable returns over time.',
    icon: TrendingUp,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="min-h-screen py-20 lg:py-28 bg-brand-navy flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-white/35 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
            A proven methodology, evolved for AI
          </h2>
          <p className="mt-4 text-brand-ice/60 text-base leading-relaxed">
            Our four-phase approach ensures every engagement delivers measurable business impact — not just technology for technology&apos;s sake.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line (not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[26px] left-[calc(50%+28px)] right-0 h-px bg-white/10 z-0" />
              )}

              <div className="relative z-10 pr-0 lg:pr-8">
                {/* Number + icon row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center shrink-0 group-hover:border-brand-orange/40 group-hover:bg-brand-orange/10 transition-all duration-300">
                    <step.icon className="w-5 h-5 text-brand-ice/70 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-white/15 group-hover:text-brand-orange/40 transition-colors duration-300 select-none">
                    {step.number}
                  </span>
                </div>

                {/* Phase tag */}
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-1.5">
                  {step.phase}
                </p>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-white mb-3 leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-ice/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
