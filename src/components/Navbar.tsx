'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectionLabels, basePath } from "@/data/society";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const sectionId = (label: string) => label.toLowerCase().replace(/\s+/g, "-");
  const primarySections = ["About", "Amenities", "Plots", "Payment Plan"];
  const moreSections = sectionLabels.slice(1).filter((label) => !primarySections.includes(label));

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => {
      const sections = sectionLabels.map((label) => document.getElementById(sectionId(label)));
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
  }, [pathname]);

  const scrollTo = (index: number) => {
    const id = sectionId(sectionLabels[index]);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
    setMoreOpen(false);
  };

  const goToSection = (label: string) => {
    const index = sectionLabels.indexOf(label);
    if (pathname === "/") scrollTo(index);
    else window.location.href = `/#${sectionId(label)}`;
  };

  const linkClass = (active: boolean) => `whitespace-nowrap rounded-lg px-2.5 py-2.5 text-[13px] xl:text-sm font-semibold tracking-wide transition-all duration-200 border ${active
    ? "border-[#d6b65f]/60 bg-[#d6b65f]/15 text-[#f1d58d] shadow-sm"
    : "border-transparent text-white/90 hover:border-[#d6b65f]/35 hover:bg-white/10 hover:text-[#f1d58d]"}`;

  const mobileLinkClass = (active: boolean) => `block w-full rounded-lg px-5 py-3 text-left text-sm font-semibold transition-colors ${active ? "text-[#f1d58d] bg-[#d6b65f]/15" : "text-white/90 hover:bg-white/10"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 min-h-[76px] border-b border-[#d6b65f]/25 bg-[#080b09]/95 shadow-xl shadow-black/30 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center gap-4 px-4 xl:px-6">
        <Link href="/" aria-label="Zahoor Orchards home" className="shrink-0">
          <img src={`${basePath}/images/logo.jpg`} alt="Zahoor Orchards" className="h-10 w-10 rounded-full border-2 border-[#d6b65f] object-cover" />
        </Link>

        <div className="ml-auto hidden items-center justify-end gap-1 xl:flex">
          {primarySections.map((label) => {
            const index = sectionLabels.indexOf(label);
            return (
              <button key={label} onClick={() => goToSection(label)} className={linkClass(pathname === "/" && activeIndex === index)}>
                {label}
              </button>
            );
          })}
          <Link href="/indoor-cricket-arena" className={linkClass(pathname === "/indoor-cricket-arena")}>
            Indoor Cricket Arena
          </Link>
          <Link href="/ali-poly-clinic" className={linkClass(pathname === "/ali-poly-clinic")}>
            Ali Poly Clinic
          </Link>
          <div className="relative">
            <button type="button" aria-expanded={moreOpen} onClick={() => setMoreOpen(!moreOpen)} className={linkClass(moreOpen || moreSections.some((label) => pathname === "/" && activeIndex === sectionLabels.indexOf(label)))}>
              More <span className="ml-1 text-xs">▾</span>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-[#d6b65f]/25 bg-[#080b09] p-2 shadow-2xl">
                {moreSections.map((label) => (
                  <button key={label} onClick={() => goToSection(label)} className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-[#f1d58d]">
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button aria-label="Toggle navigation menu" aria-expanded={mobileOpen}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-[#d6b65f]/40 bg-white/5 text-white hover:bg-white/10 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-[#d6b65f]/25 bg-[#080b09] px-4 py-3 shadow-2xl xl:hidden">
          {sectionLabels.slice(1).map((label) => {
            const index = sectionLabels.indexOf(label);
            return (
              <button key={label} onClick={() => goToSection(label)} className={mobileLinkClass(pathname === "/" && activeIndex === index)}>
                {label}
              </button>
            );
          })}
          <Link href="/indoor-cricket-arena" onClick={() => setMobileOpen(false)} className={mobileLinkClass(pathname === "/indoor-cricket-arena")}>
            Indoor Cricket Arena
          </Link>
          <Link href="/ali-poly-clinic" onClick={() => setMobileOpen(false)} className={mobileLinkClass(pathname === "/ali-poly-clinic")}>
            Ali Poly Clinic
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
