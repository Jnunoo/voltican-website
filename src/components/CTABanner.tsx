'use client';

import { useEffect, useRef } from 'react';

export default function CTABanner() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="ai-assessment"
      className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-navy relative overflow-hidden"
    >
      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="ghost-text"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(60px, 12vw, 140px)',
          color: 'rgba(255,255,255,0.08)',
          fontFamily: 'var(--font-heading, Inter, sans-serif)',
          textAlign: 'center',
        }}
      >
        START TODAY
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[-4rem] left-[-4rem] w-64 h-64 rounded-full bg-brand-orange/10" />
      <div className="absolute bottom-[-4rem] right-[-4rem] w-80 h-80 rounded-full bg-white/5" />

      <div
        ref={contentRef}
        className="reveal relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
          Ready to accelerate with AI?
        </h2>
        <p className="mt-4 text-brand-ice/80 text-lg max-w-xl mx-auto">
          Start with a free AI Readiness Assessment. In 30 minutes, we&apos;ll map
          your highest-value AI opportunities and outline a practical path forward.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-brand-orange text-white font-semibold text-base hover:bg-brand-orange/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-brand-orange/25"
          >
            Book Your Free Assessment
          </a>
          <a
            href="tel:+17137144965"
            className="inline-flex items-center justify-center h-13 px-8 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            Call (713) 714-4965
          </a>
        </div>
        <p className="mt-6 text-brand-ice/50 text-sm">
          No sales pitch — just a consultative conversation about your AI opportunities.
        </p>
      </div>
    </section>
  );
}
