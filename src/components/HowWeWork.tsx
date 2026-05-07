'use client';

import { useEffect, useRef, useState } from 'react';

/* ── 3D Photorealistic SVG Icons ─────────────────────────────────────── */

function IconDiscover({ hovered }: { hovered: boolean }) {
  const g1 = hovered ? '#FF9800' : '#0a67c7';
  const g2 = hovered ? '#e68a00' : '#004a8f';
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <defs>
        <linearGradient id="disc-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={g1} />
          <stop offset="100%" stopColor={g2} />
        </linearGradient>
        <radialGradient id="disc-glass" cx="0.35" cy="0.3" r="0.65">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="disc-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor={g2} floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#disc-shadow)">
        {/* Handle */}
        <rect x="38" y="38" width="18" height="7" rx="3.5" transform="rotate(-45 38 38)"
          fill="url(#disc-body)" stroke={g2} strokeWidth="1" />
        {/* Lens ring */}
        <circle cx="26" cy="26" r="17" fill="url(#disc-body)" />
        <circle cx="26" cy="26" r="13" fill="#001e36" />
        {/* Inner lens */}
        <circle cx="26" cy="26" r="11" fill="url(#disc-body)" opacity="0.3" />
        {/* Glass highlight */}
        <circle cx="26" cy="26" r="13" fill="url(#disc-glass)" />
        {/* Specular */}
        <ellipse cx="21" cy="21" rx="5" ry="3" fill="#fff" opacity="0.35" transform="rotate(-30 21 21)" />
      </g>
    </svg>
  );
}

function IconStrategy({ hovered }: { hovered: boolean }) {
  const g1 = hovered ? '#FF9800' : '#0a67c7';
  const g2 = hovered ? '#e68a00' : '#004a8f';
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <defs>
        <linearGradient id="strat-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={g1} />
          <stop offset="100%" stopColor={g2} />
        </linearGradient>
        <radialGradient id="strat-shine" cx="0.3" cy="0.25" r="0.7">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="strat-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor={g2} floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#strat-shadow)">
        {/* Board */}
        <rect x="8" y="6" width="48" height="52" rx="6" fill="url(#strat-bg)" />
        <rect x="8" y="6" width="48" height="52" rx="6" fill="url(#strat-shine)" />
        {/* Grid lines */}
        <line x1="14" y1="20" x2="50" y2="20" stroke="#fff" strokeWidth="1" opacity="0.3" />
        <line x1="14" y1="32" x2="50" y2="32" stroke="#fff" strokeWidth="1" opacity="0.2" />
        <line x1="14" y1="44" x2="50" y2="44" stroke="#fff" strokeWidth="1" opacity="0.15" />
        {/* Route path */}
        <path d="M16 46 L24 36 L32 40 L40 24 L48 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        {/* Nodes */}
        <circle cx="16" cy="46" r="3" fill="#fff" opacity="0.9" />
        <circle cx="24" cy="36" r="2.5" fill="#fff" opacity="0.8" />
        <circle cx="32" cy="40" r="2.5" fill="#fff" opacity="0.8" />
        <circle cx="40" cy="24" r="2.5" fill="#fff" opacity="0.8" />
        <circle cx="48" cy="16" r="3" fill="#fff" />
        {/* Pin on destination */}
        <circle cx="48" cy="14" r="4" fill="#fff" opacity="0.3" />
      </g>
    </svg>
  );
}

function IconBuild({ hovered }: { hovered: boolean }) {
  const g1 = hovered ? '#FF9800' : '#0a67c7';
  const g2 = hovered ? '#e68a00' : '#004a8f';
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <defs>
        <linearGradient id="rock-body" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor={g1} />
          <stop offset="100%" stopColor={g2} />
        </linearGradient>
        <radialGradient id="rock-shine" cx="0.35" cy="0.25" r="0.6">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rock-flame" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#ff4400" />
          <stop offset="50%" stopColor="#ff9800" />
          <stop offset="100%" stopColor="#ffcc00" />
        </linearGradient>
        <filter id="rock-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor={g2} floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#rock-shadow)">
        {/* Flame exhaust */}
        <path d="M27 52 Q32 42 32 48 Q32 42 37 52 Q33 47 32 52 Q31 47 27 52Z" fill="url(#rock-flame)" opacity="0.85" />
        <path d="M29 54 Q32 48 35 54" fill="#ff4400" opacity="0.5" />
        {/* Body */}
        <path d="M32 6 L44 38 Q44 48 38 48 L26 48 Q20 48 20 38 Z" fill="url(#rock-body)" />
        {/* Nose cone highlight */}
        <path d="M32 6 L36 22 L28 22 Z" fill="url(#rock-shine)" />
        {/* Windows */}
        <circle cx="32" cy="26" r="4" fill="#001e36" />
        <circle cx="32" cy="26" r="3" fill={g1} opacity="0.3" />
        <ellipse cx="30.5" cy="24.5" rx="1.5" ry="1" fill="#fff" opacity="0.4" />
        {/* Fins */}
        <path d="M20 38 L14 48 L22 46 Z" fill={g2} />
        <path d="M44 38 L50 48 L42 46 Z" fill={g2} />
        {/* Body shine */}
        <path d="M32 6 L36 38 L32 40 Z" fill="#fff" opacity="0.12" />
      </g>
    </svg>
  );
}

function IconOptimize({ hovered }: { hovered: boolean }) {
  const g1 = hovered ? '#FF9800' : '#0a67c7';
  const g2 = hovered ? '#e68a00' : '#004a8f';
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <defs>
        <linearGradient id="opt-bg" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={g2} />
          <stop offset="100%" stopColor={g1} />
        </linearGradient>
        <radialGradient id="opt-shine" cx="0.3" cy="0.25" r="0.7">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="opt-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor={g2} floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#opt-shadow)">
        {/* Circular gauge background */}
        <circle cx="32" cy="32" r="26" fill="url(#opt-bg)" />
        <circle cx="32" cy="32" r="26" fill="url(#opt-shine)" />
        {/* Inner ring */}
        <circle cx="32" cy="32" r="20" fill="#001e36" />
        <circle cx="32" cy="32" r="18" fill="url(#opt-bg)" opacity="0.15" />
        {/* Gauge arc */}
        <path d="M32 14 A18 18 0 1 1 14 32" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
        {/* Gauge segments */}
        <path d="M32 14 A18 18 0 0 1 50 32" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Needle */}
        <line x1="32" y1="32" x2="44" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        {/* Center hub */}
        <circle cx="32" cy="32" r="4" fill="#fff" />
        <circle cx="32" cy="32" r="2.5" fill={g1} />
        {/* Specular highlight */}
        <ellipse cx="26" cy="24" rx="6" ry="4" fill="#fff" opacity="0.15" transform="rotate(-20 26 24)" />
        {/* Arrow indicator */}
        <path d="M46 18 L50 12 L44 16 Z" fill="#fff" opacity="0.9" />
      </g>
    </svg>
  );
}

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Discover & Assess',
    description:
      'Stakeholder interviews, data audits, and AI readiness assessments to map your current state and identify your highest-value opportunities.',
    Icon: IconDiscover,
    accent: '#0a67c7',
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Design Strategy',
    description:
      'Custom roadmaps — never templates. We align technology and data investments to phased business outcomes that your leadership can stand behind.',
    Icon: IconStrategy,
    accent: '#0a67c7',
  },
  {
    number: '03',
    phase: 'Delivery',
    title: 'Build & Implement',
    description:
      'From proof of concept to production. Cloud, data, automation, and AI — integrated into your existing enterprise platforms by our global delivery team.',
    Icon: IconBuild,
    accent: '#FF9800',
  },
  {
    number: '04',
    phase: 'Operations',
    title: 'Sustain & Optimize',
    description:
      'Ongoing managed services, model monitoring, and continuous improvement so your AI investments compound and deliver measurable returns over time.',
    Icon: IconOptimize,
    accent: '#FF9800',
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, delay]);
}

function GlowConnector({ active }: { active: boolean }) {
  return (
    <div className="hidden lg:flex absolute top-[32px] left-[calc(50%+32px)] right-[-16px] items-center z-0">
      <div className="relative w-full h-[2px]">
        {/* Base line */}
        <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
        {/* Animated glow line */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
          style={{
            background: active
              ? 'linear-gradient(90deg, rgba(255,152,0,0.6), rgba(10,103,199,0.6))'
              : 'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            boxShadow: active
              ? '0 0 12px rgba(255,152,0,0.3), 0 0 4px rgba(10,103,199,0.2)'
              : 'none',
          }}
        />
        {/* Flowing particle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,152,0,0.7), transparent)',
            animation: 'flowRight 2.5s ease-in-out infinite',
          }}
        />
      </div>
      {/* End dot */}
      <div
        className="w-[6px] h-[6px] rounded-full shrink-0 -ml-[3px] transition-all duration-500"
        style={{
          background: active ? '#FF9800' : 'rgba(255,255,255,0.1)',
          boxShadow: active ? '0 0 8px rgba(255,152,0,0.5)' : 'none',
        }}
      />
    </div>
  );
}

export default function HowWeWork() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  useReveal(headingRef as React.RefObject<HTMLElement | null>);
  useReveal(gridRef as React.RefObject<HTMLElement | null>);

  return (
    <section id="how-we-work" className="relative min-h-screen py-20 lg:py-28 2xl:py-32 bg-brand-navy flex flex-col justify-center overflow-hidden">

      {/* Keyframes for connector particle animation */}
      <style>{`
        @keyframes flowRight {
          0%   { left: -10%; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>

      <div className="relative z-10 w-full px-12 sm:px-16 lg:px-16">
        {/* Header */}
        <div ref={headingRef} className="reveal max-w-2xl mb-16">
          <p className="text-white/35 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
            A proven methodology, evolved for AI
          </h2>
          <p className="mt-4 text-brand-ice/60 text-base leading-relaxed">
            Our four-phase approach ensures every engagement delivers measurable business impact — not just technology for technology&apos;s sake.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={gridRef}
          className="reveal grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-5 items-stretch"
        >
          {steps.map((step, i) => {
            const isHovered = hoveredIdx === i;
            const { Icon } = step;

            return (
              <div
                key={step.number}
                className="reveal-child relative flex flex-col"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Connector line (not on last item) */}
                {i < steps.length - 1 && (
                  <GlowConnector active={hoveredIdx !== null && (hoveredIdx >= i)} />
                )}

                {/* Card */}
                <div
                  className="relative z-10 rounded-2xl p-6 transition-all duration-500 ease-out cursor-default flex-1 flex flex-col"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: isHovered
                      ? `1px solid rgba(255,152,0,0.3)`
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isHovered
                      ? `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${step.accent}15, inset 0 1px 0 rgba(255,255,255,0.1)`
                      : '0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Glossy highlight at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, transparent 10%, ${step.accent}60 50%, transparent 90%)`
                        : 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)',
                    }}
                  />

                  {/* Number + icon row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 relative overflow-hidden"
                      style={{
                        background: isHovered
                          ? `linear-gradient(145deg, ${step.accent}30, ${step.accent}10)`
                          : 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                        border: isHovered
                          ? `1px solid ${step.accent}40`
                          : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: isHovered
                          ? `0 4px 16px ${step.accent}20, inset 0 1px 0 rgba(255,255,255,0.1)`
                          : 'inset 0 1px 0 rgba(255,255,255,0.05)',
                      }}
                    >
                      {/* Glow ring on hover */}
                      {isHovered && (
                        <div
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: `radial-gradient(circle at center, ${step.accent}15 0%, transparent 70%)`,
                            animation: 'pulseGlow 2s ease-in-out infinite',
                          }}
                        />
                      )}
                      <div className="relative z-10 transition-transform duration-500" style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}>
                        <Icon hovered={isHovered} />
                      </div>
                    </div>
                    <span
                      className="font-mono text-3xl font-black select-none transition-colors duration-500"
                      style={{
                        color: isHovered ? `${step.accent}50` : 'rgba(255,255,255,0.08)',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Phase tag */}
                  <p
                    className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 transition-colors duration-500"
                    style={{ color: isHovered ? step.accent : 'rgba(255,255,255,0.25)' }}
                  >
                    {step.phase}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed transition-colors duration-500 flex-1"
                    style={{ color: isHovered ? 'rgba(202,220,252,0.75)' : 'rgba(202,220,252,0.45)' }}
                  >
                    {step.description}
                  </p>

                  {/* Bottom accent bar */}
                  <div
                    className="mt-5 h-[2px] rounded-full transition-all duration-500"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, ${step.accent}, transparent)`
                        : 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)',
                      width: isHovered ? '60%' : '30%',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
