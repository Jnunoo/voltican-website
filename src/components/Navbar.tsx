"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks: { label: string; href: string; match?: string }[] = [
  { label: "About",        href: "/#about",        match: "/about" },
  { label: "Services",     href: "/#services",     match: "/services" },
  { label: "Case Studies", href: "/#case-studies", match: "/case-studies" },
  { label: "Insights",     href: "/blog",          match: "/blog" },
  { label: "Contact",      href: "/#contact",      match: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // On sub-pages, always show solid navbar immediately
    if (!isHome) {
      setScrolled(true);
      return;
    }
    // On home, transition on scroll
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHome]);

  // Dark navy — same style whether transparent (home top) or solid (scrolled / sub-pages)
  const solidStyle =
    "bg-[#003e6a]/97 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20";
  const transparentStyle = "bg-transparent border-b border-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? solidStyle : transparentStyle
      }`}
    >
      <div className="w-full px-12 sm:px-16 lg:px-16 flex items-center justify-between h-16">
        {/* Logo — always white on dark background */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="Voltican"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const matchPath = link.match ?? link.href;
            const isActive =
              matchPath !== "/" &&
              (pathname === matchPath || pathname.startsWith(`${matchPath}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={process.env.NEXT_PUBLIC_CRM_PORTAL_URL ?? 'http://localhost:3001'}
            className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-medium transition-all duration-300 border border-white/30 text-white/80 hover:text-white hover:border-white/60"
          >
            Sign In
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold transition-all duration-300 bg-brand-orange hover:bg-brand-orange/90 text-white shadow-md shadow-brand-orange/25 hover:-translate-y-0.5"
          >
            Free AI Assessment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-white"
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

      {/* Mobile menu — dark to match brand */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#003e6a]/97 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_CRM_PORTAL_URL ?? 'http://localhost:3001'}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-white/30 text-white/80 hover:text-white font-medium transition-all"
            >
              Sign In
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold mt-2 transition-all"
            >
              Free AI Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
