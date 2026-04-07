"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function IndustryCard({ industry }: { industry: typeof industries[number] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl group h-72 sm:h-80 lg:h-96 cursor-pointer">
      <img
        src={industry.imgUrl}
        alt={industry.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
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
  );
}

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex + CARDS_PER_VIEW < industries.length;

  // Heading reveal
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Mobile grid stagger
  useEffect(() => {
    const el = mobileGridRef.current;
    if (!el) return;
    Array.from(el.children).forEach(c => c.classList.add('reveal-child'));
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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

  const visibleItems = industries.slice(
    currentIndex,
    currentIndex + CARDS_PER_VIEW + 1
  );

  return (
    <section id="industries" ref={sectionRef} className="relative py-20 lg:py-28 bg-white overflow-hidden">

      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="ghost-text"
        style={{
          top: '50%',
          right: '-1%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(80px, 14vw, 160px)',
          color: 'rgba(0, 62, 106, 0.09)',
          fontFamily: 'var(--font-heading, Inter, sans-serif)',
        }}
      >
        INDUSTRIES
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div
          ref={headingRef}
          className="reveal flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
              Industries
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
              Industries we know inside out
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 ml-6">
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

        {/* Mobile: staggered grid */}
        <div className="lg:hidden">
          <div ref={mobileGridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div key={industry.name} className="reveal-child">
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: animated JS carousel */}
        <div className="hidden lg:block overflow-hidden rounded-2xl">
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
                <IndustryCard industry={industry} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
