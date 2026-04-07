"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import ShaderBackground from "@/components/ui/shader-background";
import Link from "next/link";
import HeroImageSwitcher, { useHeroImage } from "@/components/HeroImageSwitcher";

const valueProps = [
  { icon: CheckCircle, label: "Enterprise-grade AI expertise" },
  { icon: Zap, label: "AI-first approach to every engagement" },
  { icon: Globe, label: "Global delivery, local accountability" },
];

export default function Hero() {
  const { active, select } = useHeroImage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* WebGL Shader Background — always present */}
      <ShaderBackground />

      {/* ── Hero Background Image Layer ── */}
      {active.src && (
        <div className="absolute inset-0 z-[5] pointer-events-none transition-opacity duration-700">
          <Image
            key={active.id}
            src={active.src}
            alt=""
            fill
            className="object-cover object-center transition-opacity duration-700"
            style={{
              opacity: active.opacity,
              mixBlendMode: active.blend as React.CSSProperties["mixBlendMode"],
            }}
            priority
            aria-hidden="true"
          />
          {/* Edge vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d]/70 via-transparent to-[#001f3d]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3d]/50 via-transparent to-transparent" />
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-black/50 pointer-events-none z-10" />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#003e6a] via-[#003e6a]/80 to-transparent pointer-events-none z-10" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 flex flex-col justify-between h-full w-full">

        {/* Upper content block — left-aligned, sits in the top ~60% */}
        <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-32 md:pt-36">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-brand-orange/80" />
            <span className="text-brand-orange font-semibold text-xs tracking-[0.2em] uppercase">
              Global IT Consulting · Est. 2009
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.05] max-w-3xl mb-6"
          >
            <span className="text-white">AI-Powered Business</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
              Transformation
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-white/65 leading-relaxed max-w-xl mb-10"
          >
            We bring 15+ years of enterprise technology expertise to the AI era —
            integrating intelligence into your core business processes to deliver
            measurable results.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <Button
              asChild
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-7 py-5 rounded-full text-sm shadow-lg shadow-brand-orange/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#ai-assessment">Get started today</a>
            </Button>

            <a
              href="#services"
              className="text-white/65 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-200"
            >
              View our services
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Lower bar — value props left, switcher + article right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="container mx-auto px-6 md:px-12 lg:px-16 pb-10 flex flex-col sm:flex-row items-end justify-between gap-6 sm:gap-4"
        >
          {/* Checkmark value props */}
          <div className="flex flex-col gap-2.5">
            {valueProps.map((prop) => (
              <div key={prop.label} className="flex items-center gap-2.5">
                <prop.icon className="w-4 h-4 text-brand-orange/80 shrink-0" />
                <span className="text-white/60 text-sm">{prop.label}</span>
              </div>
            ))}
          </div>

          {/* Right side: switcher + featured article stacked */}
          <div className="flex flex-col items-end gap-3">
            {/* ── Background Image Switcher ── */}
            <HeroImageSwitcher onSelect={select} current={active} />

            {/* Featured article card */}
            <Link
              href="/case-studies/genai-erp-transformation"
              className="group hidden sm:flex items-center gap-3 bg-white/8 hover:bg-white/12 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 max-w-xs cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-brand-blue/30 flex items-center justify-center">
                <Image
                  src="/hero-building.png"
                  alt=""
                  width={56}
                  height={56}
                  className="object-cover w-full h-full opacity-70"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/40 text-[11px] uppercase tracking-widest mb-0.5 font-medium">Featured case study</p>
                <p className="text-white/85 text-sm font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">
                  Embedding GenAI into a Legacy ERP to Cut Processing Time by 71%
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-brand-orange shrink-0 transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
