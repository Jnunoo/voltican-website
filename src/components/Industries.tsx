"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const industries = [
  {
    name: "Financial Services",
    tags: ["Financial Services", "Wealth Management", "Insurance"],
    imgUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Healthcare",
    tags: ["Healthcare", "Medical Devices", "Pharmaceuticals"],
    imgUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Manufacturing",
    tags: ["Manufacturing", "Supply Chain", "Distribution"],
    imgUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Professional Services",
    tags: ["Professional Services", "Consulting", "Legal"],
    imgUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Government",
    tags: ["Federal", "State & Local", "Public Sector"],
    imgUrl:
      "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Telecommunications",
    tags: ["Telecom", "Network", "5G Infrastructure"],
    imgUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1740&auto=format&fit=crop",
  },
];

const CARDS_PER_VIEW = 4;

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + CARDS_PER_VIEW < industries.length;

  const slide = (direction: "prev" | "next") => {
    if (isAnimating) return;
    if (direction === "prev" && !canPrev) return;
    if (direction === "next" && !canNext) return;

    setIsAnimating(true);
    const shift = direction === "next" ? 1 : -1;
    const cardWidthPct = 100 / CARDS_PER_VIEW;

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 480ms cubic-bezier(0.4,0,0.2,1)";
      trackRef.current.style.transform = `translateX(${-shift * cardWidthPct}%)`;

      setTimeout(() => {
        setCurrentIndex((prev) => prev + shift);
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = "translateX(0)";
        }
        setIsAnimating(false);
      }, 480);
    }
  };

  // Build the visible window (current + 1 extra for smooth slide)
  const visibleItems = industries.slice(
    currentIndex,
    currentIndex + CARDS_PER_VIEW + 1
  );

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          {/* Header row */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
                Industries
              </p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
                Industries we know inside out
              </h2>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-2 shrink-0 ml-6">
              <button
                onClick={() => slide("prev")}
                disabled={!canPrev || isAnimating}
                aria-label="Previous industry"
                className="w-10 h-10 rounded-full border border-brand-navy/20 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-brand-navy"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => slide("next")}
                disabled={!canNext || isAnimating}
                aria-label="Next industry"
                className="w-10 h-10 rounded-full border border-brand-navy/20 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-brand-navy"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={trackRef}
              className="flex"
              style={{ transform: "translateX(0)" }}
            >
              {visibleItems.map((industry, idx) => (
                <div
                  key={`${currentIndex}-${idx}`}
                  className="shrink-0 px-1.5 first:pl-0 last:pr-0"
                  style={{ width: `${100 / CARDS_PER_VIEW}%` }}
                >
                  <div className="relative overflow-hidden rounded-2xl group h-80 lg:h-96 cursor-pointer">
                    {/* Photo */}
                    <img
                      src={industry.imgUrl}
                      alt={industry.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle gradient overlay so tags are readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    {/* Tag pills — bottom left */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start gap-1.5">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-semibold px-3 py-1 rounded-md leading-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
