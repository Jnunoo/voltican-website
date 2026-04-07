'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { services } from '@/data/services';

function useStaggerReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [containerRef]);
}

function useHeadingReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useHeadingReveal(headingRef as React.RefObject<HTMLElement | null>);
  useHeadingReveal(subRef as React.RefObject<HTMLElement | null>, 150);
  useStaggerReveal(gridRef as React.RefObject<HTMLElement | null>);

  return (
    <section id="services" className="relative min-h-screen py-20 lg:py-28 bg-white flex flex-col justify-center overflow-hidden">

      {/* Ghost watermark — Ajax-Ed style */}
      <div
        className="ghost-text select-none pointer-events-none"
        aria-hidden="true"
        style={{
          top: '50%',
          left: '-2%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(100px, 18vw, 200px)',
          color: 'rgba(10, 103, 199, 0.09)',
          fontFamily: 'var(--font-heading, Inter, sans-serif)',
          zIndex: 0,
        }}
      >
        SERVICES
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header — slide up separately */}
        <div className="max-w-2xl mb-14">
          <p className="text-slate-400 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            Our Services
          </p>
          <div
            ref={headingRef}
            className="reveal-heading"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
              Enterprise technology solutions that drive growth
            </h2>
          </div>
          <p
            ref={subRef}
            className="reveal mt-4 text-text-muted text-base leading-relaxed"
          >
            Six core practice areas spanning the full technology lifecycle —
            from strategy and architecture through implementation and support.
          </p>
        </div>

        {/* Card grid — staggered entrance */}
        <div ref={gridRef} className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="reveal-child group flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-5 aspect-[16/9] bg-slate-100">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tag */}
              <p className="text-[11px] font-semibold text-slate-400 tracking-widest uppercase mb-2">
                {service.tag}
              </p>

              {/* Title */}
              <h3 className="text-[17px] font-heading font-bold text-brand-navy leading-snug mb-2 group-hover:text-brand-blue transition-colors duration-200">
                {service.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {service.summary}
              </p>

              {/* Read more arrow */}
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors duration-200">
                <span>Learn more</span>
                <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
