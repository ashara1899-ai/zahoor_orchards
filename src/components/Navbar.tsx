'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sectionLabels, basePath } from "@/data/society";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionId = (label: string) => label.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 60);
      const about = document.getElementById('about');
      setShowLogo(about ? about.getBoundingClientRect().top <= 80 : false);
      const sections = sectionLabels.map((label) =>
        document.getElementById(sectionId(label))
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveIndex(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const id = sectionId(sectionLabels[index]);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 min-h-[76px] border-b border-[#d6b65f]/25 bg-[#080b09]/95 shadow-xl shadow-black/30 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 min-h-[76px] flex items-center gap-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to home"
          className={`shrink-0 transition-opacity duration-300 ${showLogo ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img src={`${basePath}/images/logo.jpg`} alt="Zahoor Orchards" className="w-10 h-10 rounded-full object-cover border-2 border-[#d6b65f]" />
        </button>

        <div className="ml-auto hidden md:flex items-center justify-end gap-1.5">
          {sectionLabels.slice(1).map((label, i) => {
            const idx = i + 1;
            const isActive = activeIndex === idx;
            return (
              <button key={label} onClick={() => scrollTo(idx)}
                className={`whitespace-nowrap rounded-lg px-3.5 py-3 text-[15px] lg:text-base font-semibold tracking-wide transition-all duration-200 border ${isActive
                  ? "border-[#d6b65f]/60 bg-[#d6b65f]/15 text-[#f1d58d] shadow-sm"
                  : "border-transparent text-white/90 hover:border-[#d6b65f]/35 hover:bg-white/10 hover:text-[#f1d58d]"}`}>
                {label}
              </button>
            );
          })}
        </div>

        <button aria-label="Toggle navigation menu" aria-expanded={mobileOpen}
          className="md:hidden ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-[#d6b65f]/40 bg-white/5 text-white hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="bg-[#080b09] border-t border-[#d6b65f]/25 px-4 py-3 md:hidden shadow-2xl">
          {sectionLabels.slice(1).map((label, i) => {
            const idx = i + 1;
            return (
              <button key={label} onClick={() => scrollTo(idx)}
                className={`block w-full rounded-lg text-left px-5 py-3.5 text-base font-semibold transition-colors ${activeIndex === idx ? "text-[#f1d58d] bg-[#d6b65f]/15" : "text-white/90 hover:bg-white/10"}`}>
                {label}
              </button>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
