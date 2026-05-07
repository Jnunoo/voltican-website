"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cycleProps = [
  "Enterprise-grade AI expertise",
  "AI-first approach to every engagement",
  "Global delivery, local accountability",
];

const CYCLE_MS = 3200;

/** Cinematic video hero background — administered via CRM in the future */
const HERO_VIDEO_SRC = "/videos/Image_to_Cinematic_Video.mp4";

/** Live-signal cycling value prop — client only */
function CyclingSignal() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % cycleProps.length);
      setProgressKey((prev) => prev + 1);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {/* Live indicator row */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
        </span>
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-semibold select-none">
          Why Voltican
        </span>
      </div>

      {/* Cycling text — sizer reserves width of the longest message so the absolute span stays visible */}
      <div className="relative h-[22px] overflow-hidden">
        <span
          aria-hidden="true"
          className="invisible block text-sm font-medium leading-[22px] whitespace-nowrap"
        >
          {cycleProps.reduce((a, b) => (a.length >= b.length ? a : b))}
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIdx}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 text-white/80 text-sm font-medium leading-[22px] whitespace-nowrap"
          >
            {cycleProps[activeIdx]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Progress bar + dot indicators */}
      <div className="flex items-center gap-3 pt-0.5">
        {/* Animated progress bar */}
        <div className="relative h-px w-16 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            key={progressKey}
            className="absolute inset-y-0 left-0 bg-brand-orange rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
          />
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {cycleProps.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIdx(i);
                setProgressKey((p) => p + 1);
              }}
              aria-label={`View prop ${i + 1}`}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor:
                  i === activeIdx
                    ? "#FF9800"
                    : "rgba(255,255,255,0.18)",
                transform: i === activeIdx ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** SSR-safe static fallback shown before hydration */
function StaticSignal() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-brand-orange shrink-0" />
        <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase font-semibold">
          Why Voltican
        </span>
      </div>
      <span className="text-white/80 text-sm font-medium leading-[22px]">
        {cycleProps[0]}
      </span>
      <div className="flex items-center gap-3 pt-0.5">
        <div className="h-px w-16 bg-white/10 rounded-full" />
        <div className="flex gap-1.5">
          {cycleProps.map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: i === 0 ? "#FF9800" : "rgba(255,255,255,0.18)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      {/* ── Cinematic Video Background ── */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <video
          src={HERO_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d]/70 via-transparent to-[#001f3d]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001f3d]/50 via-transparent to-transparent" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent via-40% to-black/50 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#003e6a] via-[#003e6a]/80 to-transparent pointer-events-none z-10" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 flex flex-col justify-between h-full w-full">

        {/* Upper content block */}
        <div className="w-full px-12 sm:px-16 lg:px-16 pt-32 md:pt-36">
          {/* Eyebrow */}
          {mounted ? (
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
          ) : (
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-orange/80" />
              <span className="text-brand-orange font-semibold text-xs tracking-[0.2em] uppercase">
                Global IT Consulting · Est. 2009
              </span>
            </div>
          )}

          {/* Headline */}
          {mounted ? (
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
          ) : (
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.05] max-w-3xl mb-6">
              <span className="text-white">AI-Powered Business</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                Transformation
              </span>
            </h1>
          )}

          {/* Subtext */}
          {mounted ? (
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
          ) : (
            <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-xl mb-10">
              We bring 15+ years of enterprise technology expertise to the AI era —
              integrating intelligence into your core business processes to deliver
              measurable results.
            </p>
          )}

          {/* CTA row */}
          {mounted ? (
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
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
            </div>
          )}
        </div>

        {/* Lower bar — cycling signal left, featured article right */}
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="w-full px-12 sm:px-16 lg:px-16 pb-10 flex flex-col sm:flex-row items-end justify-between gap-6 sm:gap-4"
          >
            <CyclingSignal />

            {/* Featured article card */}
            <div className="flex flex-col items-end gap-3">
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
        ) : (
          <div className="w-full px-12 sm:px-16 lg:px-16 pb-10 flex flex-col sm:flex-row items-end justify-between gap-6 sm:gap-4">
            <StaticSignal />

            <div className="flex flex-col items-end gap-3">
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
          </div>
        )}
      </div>
    </section>
  );
}
