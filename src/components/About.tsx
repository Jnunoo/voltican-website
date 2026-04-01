"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Settings2,
  Users,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const leftCards = [
  {
    icon: Brain,
    title: "AI-First Strategy",
    description:
      "We embed artificial intelligence into your core business processes — not just as a prototype, but as lasting operational infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Turn raw data into executive-grade insights with predictive analytics, real-time KPIs, and AI/ML pipelines built for scale.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    description:
      "GDPR, HIPAA, and PCI DSS frameworks that protect your data estate while keeping your organization AI-ready.",
  },
];

const rightCards = [
  {
    icon: Settings2,
    title: "Enterprise Modernization",
    description:
      "Cloud migration, DevSecOps, and modern ERP implementations on SAP, Salesforce, and Dynamics 365 — delivered end-to-end.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Scale",
    description:
      "Leverage intelligent automation, RPA, and process mining to eliminate manual work and unlock team capacity for high-value work.",
  },
  {
    icon: Users,
    title: "People-Centered Approach",
    description:
      "Our listening-first model ensures every solution is shaped around what matters most to your organization and its people.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #003e6a 0%, #00284a 60%, #001d36 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
            How we create value
          </h2>
          <p className="mt-4 text-white/55 text-lg max-w-2xl mx-auto">
            Voltican Inc. is a global IT consulting firm headquartered in Houston,
            TX. Since 2009 we've helped enterprises harness technology to build
            sustainable competitive advantage.
          </p>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid lg:grid-cols-[1fr_360px_1fr] gap-5 items-start">
          {/* Left cards */}
          <div className="flex flex-col gap-5">
            {leftCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-4 group-hover:bg-brand-blue/30 transition-colors">
                  <card.icon className="w-5 h-5 text-brand-ice" />
                </div>
                <h3 className="text-white font-heading font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 lg:sticky lg:top-28"
            style={{ minHeight: "480px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop"
              alt="Voltican consultants collaborating"
              className="w-full h-full object-cover"
              style={{ minHeight: "480px" }}
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

            {/* Floating stat badge */}
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              {[
                { value: "15+", label: "Years" },
                { value: "6", label: "Practices" },
                { value: "8+", label: "Partners" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 text-center"
                >
                  <div className="text-xl font-heading font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-white/60 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="flex flex-col gap-5">
            {rightCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mb-4 group-hover:bg-brand-blue/30 transition-colors">
                  <card.icon className="w-5 h-5 text-brand-ice" />
                </div>
                <h3 className="text-white font-heading font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
