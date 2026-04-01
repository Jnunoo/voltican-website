"use client";

import { Search, Map, Rocket, TrendingUp } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Discover & Assess",
    date: "Phase 01",
    content:
      "We listen first. Through stakeholder interviews, data audits, and AI readiness assessments, we understand your current state, pain points, and highest-value opportunities.",
    category: "Discovery",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design Strategy",
    date: "Phase 02",
    content:
      "Custom roadmaps — never templates. We map your technology and data landscape to a phased plan that aligns AI and digital investments with business outcomes.",
    category: "Strategy",
    icon: Map,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Build & Implement",
    date: "Phase 03",
    content:
      "From proof of concept to production. Our global delivery team implements solutions across cloud, data, automation, and AI — integrated into your existing enterprise platforms.",
    category: "Delivery",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Sustain & Optimize",
    date: "Phase 04",
    content:
      "Ongoing managed services, model monitoring, and continuous improvement. We measure results and iterate so your AI investments compound over time.",
    category: "Operations",
    icon: TrendingUp,
    relatedIds: [3, 1],
    status: "pending" as const,
    energy: 35,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative bg-brand-navy">
      {/* Section header */}
      <div className="relative z-10 pt-20 lg:pt-28 text-center px-6">
        <p className="text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3">
          How We Work
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
          A proven methodology, evolved for AI
        </h2>
        <p className="mt-4 text-brand-ice/60 text-lg max-w-2xl mx-auto">
          Our four-phase approach ensures every engagement delivers measurable
          business impact — not just technology for technology&apos;s sake.
          <br />
          <span className="text-brand-ice/40 text-sm mt-2 inline-block">
            Click a node to explore each phase. Connected nodes pulse to show
            dependencies.
          </span>
        </p>
      </div>

      {/* Orbital timeline */}
      <div className="h-[600px] lg:h-[700px]">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
