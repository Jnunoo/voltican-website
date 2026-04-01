"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Globe } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

const valueProps = [
  { icon: CheckCircle, label: "Enterprise-grade expertise" },
  { icon: Zap, label: "AI-first approach" },
  { icon: Globe, label: "Global delivery" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050e1e]">
      {/* WebGL Shader Background */}
      <ShaderBackground />

      {/* Gradient overlay — darkens edges so text pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-orange font-semibold text-sm tracking-widest uppercase mb-6"
          >
            Global IT Consulting &bull; Est. 2009
          </motion.p>

          {/* Animated title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold mb-6 tracking-tighter leading-[1.1]">
            {["AI-Powered", "Business"].map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 sm:mr-5 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.4 + wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-ice"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
            <br />
            {["Transformation"].map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`t-${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.7 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We bring 15+ years of enterprise data and technology expertise to the
            AI era. From strategy through implementation, we integrate AI into
            your core business processes to deliver measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <div className="inline-block group relative bg-gradient-to-b from-brand-orange/30 to-brand-orange/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Button
                asChild
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 group-hover:-translate-y-0.5 hover:shadow-md"
              >
                <a href="#ai-assessment">
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    Get a Free AI Assessment
                  </span>
                  <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                    →
                  </span>
                </a>
              </Button>
            </div>

            <div className="inline-block group relative bg-gradient-to-b from-white/10 to-white/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Button
                asChild
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-white/20 hover:shadow-md"
              >
                <a href="#services">
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    View Our Services
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Value props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.15, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                  <prop.icon className="w-5 h-5 text-brand-ice" />
                </div>
                <span className="text-white/60 text-sm font-medium">
                  {prop.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
