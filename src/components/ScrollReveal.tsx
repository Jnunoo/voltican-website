"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** If true, direct children get staggered .reveal-child class delays */
  stagger?: boolean;
  /** Delay before the reveal fires (ms) */
  delay?: number;
  /** How far from the bottom the element must be before revealing (px) */
  rootMargin?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
  delay = 0,
  rootMargin = "-40px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply stagger class to direct children if requested
    if (stagger) {
      Array.from(el.children).forEach((child) => {
        child.classList.add("reveal-child");
      });
    }

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: `0px 0px ${rootMargin} 0px` }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, delay, rootMargin]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
