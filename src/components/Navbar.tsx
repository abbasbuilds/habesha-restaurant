"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu",    href: "#menu" },
  { label: "Buffet",  href: "#buffet" },
  { label: "Events",  href: "#events" },
  { label: "Find Us", href: "#visit" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/96 backdrop-blur-md py-3 border-b border-brand-gold/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-oswald text-lg sm:text-xl text-brand-cream tracking-[0.12em] font-medium uppercase"
        >
          Habesha Restaurant
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-dm text-xs text-brand-cream/55 hover:text-brand-gold transition-colors tracking-[0.12em] uppercase"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+18192089729"
          className="hidden md:inline-flex px-5 py-2 bg-brand-gold text-brand-dark font-dm font-semibold text-xs tracking-[0.12em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
        >
          Reserve
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-md border-t border-brand-gold/10 px-6 py-6 space-y-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block font-dm text-sm text-white/70 hover:text-brand-gold transition-colors uppercase tracking-[0.12em]"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+18192089729"
            className="block text-center px-5 py-3 bg-brand-gold text-brand-dark font-dm font-semibold text-sm tracking-[0.12em] uppercase rounded-full mt-2"
          >
            Call to Reserve
          </a>
        </div>
      )}
    </nav>
  );
}
