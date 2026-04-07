"use client";

import { useState, useEffect, useRef } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-cards";

const metrics = [
  { value: "95%", label: "Client Retention Rate" },
  { value: "200+", label: "Enterprise Implementations" },
  { value: "40%", label: "Avg. Cost Reduction" },
];

const testimonials = [
  {
    id: 11,
    testimonial:
      "Voltican transformed our data infrastructure and integrated AI into our forecasting pipeline — the ROI was visible within the first quarter.",
    author: "VP of Technology",
    role: "Fortune 500 Healthcare Company",
  },
  {
    id: 24,
    testimonial:
      "Their listening-first approach set them apart. They didn't just implement technology — they understood our business challenges and built solutions around them.",
    author: "Chief Data Officer",
    role: "National Financial Services Firm",
  },
  {
    id: 32,
    testimonial:
      "From cloud migration to AI-powered analytics, Voltican delivered on every milestone — on time and under budget. We've renewed our engagement three years running.",
    author: "Director of IT Operations",
    role: "Global Manufacturing Enterprise",
  },
];

export default function SocialProof() {
  const [positions, setPositions] = useState<
    ("front" | "middle" | "back")[]
  >(["front", "middle", "back"]);

  const headingRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [headingRef, metricsRef, bottomRef];
    const delays = [0, 100, 200];
    const observers = targets.map((ref, i) => {
      const el = ref.current;
      if (!el) return null;
      if (delays[i]) el.style.transitionDelay = `${delays[i]}ms`;
      // For metricsRef, stagger children
      if (i === 1) Array.from(el.children).forEach(c => c.classList.add('reveal-child'));
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const last = newPositions.pop();
    if (last) newPositions.unshift(last);
    setPositions(newPositions);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">


      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
            Results That Speak
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
            Trusted by enterprises to deliver{" "}
            <span className="text-brand-blue">measurable impact</span>
          </h2>
        </div>

        {/* Metrics strip — staggered */}
        <div ref={metricsRef} className="reveal grid sm:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="reveal-child bg-brand-navy rounded-2xl p-8 text-center"
            >
              <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-brand-ice/70">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={bottomRef} className="reveal flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">
              What our clients say
            </h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Drag the top card to shuffle through enterprise client
              testimonials. Each engagement represents a real partnership
              built on trust and measurable outcomes.
            </p>
            <p className="text-sm text-brand-blue font-medium cursor-pointer" onClick={handleShuffle}>
              ↗ Click to shuffle cards
            </p>
          </div>

          {/* Cards stack */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative h-[420px] w-[clamp(260px,90vw,320px)]">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  id={testimonial.id}
                  testimonial={testimonial.testimonial}
                  author={testimonial.author}
                  role={testimonial.role}
                  handleShuffle={handleShuffle}
                  position={positions[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
