"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AI Services", href: "#ai-services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo — white on hero, colored when scrolled */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="Voltican"
            width={160}
            height={48}
            className="h-10 w-auto object-contain transition-all duration-300"
            style={
              scrolled
                ? {
                    filter:
                      "brightness(0) saturate(100%) invert(29%) sepia(89%) saturate(1200%) hue-rotate(199deg) brightness(90%) contrast(105%)",
                  }
                : { filter: "none" }
            }
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-foreground/70 hover:text-brand-blue"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#ai-assessment"
            className={`inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-brand-orange text-white hover:bg-brand-orange/90"
                : "bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25"
            }`}
          >
            Free AI Assessment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ai-assessment"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-orange text-white font-semibold mt-2"
            >
              Free AI Assessment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
