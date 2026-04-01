"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, Zap, Globe } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(10,103,199,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#0a67c7"
                        strokeWidth={path.width}
                        strokeOpacity={0.08 + path.id * 0.015}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const valueProps = [
    { icon: CheckCircle, label: "Enterprise-grade expertise" },
    { icon: Zap, label: "AI-first approach" },
    { icon: Globe, label: "Global delivery" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-brand-ice/20 to-white">
            {/* Animated background paths */}
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-28 pb-16 lg:pt-36 lg:pb-24">
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
                            <span
                                key={wordIndex}
                                className="inline-block mr-3 sm:mr-5 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                0.4 +
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-blue"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                        <br />
                        {["Transformation"].map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`t-${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                0.7 +
                                                letterIndex * 0.03,
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
                        className="text-lg lg:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10"
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
                        <div
                            className="inline-block group relative bg-gradient-to-b from-brand-orange/20 to-brand-orange/5 
                            p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Button
                                asChild
                                variant="ghost"
                                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-brand-orange hover:bg-brand-orange/90
                                text-white transition-all duration-300 
                                group-hover:-translate-y-0.5
                                hover:shadow-md"
                            >
                                <a href="#ai-assessment">
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        Get a Free AI Assessment
                                    </span>
                                    <span
                                        className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                        transition-all duration-300"
                                    >
                                        →
                                    </span>
                                </a>
                            </Button>
                        </div>

                        <div
                            className="inline-block group relative bg-gradient-to-b from-brand-navy/10 to-white/10 
                            p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Button
                                asChild
                                variant="ghost"
                                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-white/95 hover:bg-white/100
                                text-brand-navy transition-all duration-300 
                                group-hover:-translate-y-0.5 border border-brand-navy/10
                                hover:shadow-md"
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
                                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                    <prop.icon className="w-5 h-5 text-brand-blue" />
                                </div>
                                <span className="text-foreground/70 text-sm font-medium">
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
