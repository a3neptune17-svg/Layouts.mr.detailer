"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, Shield, Sparkles, Layers, Disc3 } from "lucide-react"

const HERO_SERVICES = [
  { id: "01", title: "GRAPHENE COATING", tag: "10H OXIDE ARMOR", desc: "Extreme hydrophobicity & thermal resilience." },
  { id: "02", title: "PAINT PROTECTION FILM", tag: "SELF-HEALING PPF", desc: "XPEL certified optical polyurethane shield." },
  { id: "03", title: "CERAMIC COATING", tag: "9H NANO MATRIX", desc: "Permanent chemical bond & high-gloss reflection." },
  { id: "04", title: "PAINT CORRECTION", tag: "ZERO DEFECTS", desc: "Multi-pass machine polish erasing 95% of swirls." },
  { id: "05", title: "INTERIOR DETAILING", tag: "CABIN SPA", desc: "Steam extraction, organic leather care & ozone purge." },
]

export function OhioHero() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_SERVICES.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const currentSrv = HERO_SERVICES[activeIdx]

  return (
    <section className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE HERO (full-bleed immersive, < 1024px)
          =================================================== */}
      <div className="lg:hidden relative min-h-[100svh] flex flex-col">
        {/* Full-bleed video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/videos/video-project-2.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent pointer-events-none" />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-between h-full min-h-[100svh] px-6 pt-24 pb-8">

          {/* Top Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.3em] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E5FCA0]/20">
              AUTOMOTIVE CRAFTSMANSHIP
            </span>
          </div>

          {/* Center Headline */}
          <div className="space-y-4 py-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-[0.25em] block">
                MR. DETAILER STUDIO
              </span>
              <h1 className="text-[clamp(2.8rem,12vw,5rem)] font-black uppercase tracking-tight text-white leading-[0.88]">
                ARMORED<br />
                <span className="text-[#E5FCA0]">BRIL&shy;LIANCE.</span>
              </h1>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-[280px] font-normal">
              High-end automotive detailing studio in Ludhiana &amp; Jammu. Certified XPEL PPF &amp; 10H graphene coatings.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black active:scale-95 transition-transform shadow-lg shadow-[#E5FCA0]/20"
              >
                <span>BOOK NOW</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white border border-white/20 active:scale-95 transition-transform"
              >
                SERVICES
              </Link>
            </div>
          </div>

          {/* Bottom: Ticker + Scroll Indicator */}
          <div className="space-y-4">
            {/* Service Ticker */}
            <div className="bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 p-4 space-y-2">
              <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.25em] block">
                {currentSrv.tag}
              </span>
              <h2 className="text-lg font-black uppercase tracking-tight text-white leading-tight">
                {currentSrv.title}
              </h2>
              <p className="text-[11px] text-white/60 leading-relaxed">{currentSrv.desc}</p>

              {/* Progress indicators */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  {HERO_SERVICES.map((srv, idx) => (
                    <button
                      key={srv.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`h-1 rounded-full transition-all cursor-pointer ${
                        activeIdx === idx ? "w-6 bg-[#E5FCA0]" : "w-2 bg-white/25 hover:bg-white/40"
                      }`}
                      aria-label={`Select ${srv.title}`}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-white/40">
                  {String(activeIdx + 1).padStart(2, "0")} / 05
                </span>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center gap-2 text-white/40">
              <ChevronDown className="size-4 animate-bounce" />
              <span className="text-[9px] font-mono uppercase tracking-widest">Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================
          DESKTOP HERO (1024px+)
          - FULL-WIDTH CINEMATIC HERO (Studio Specialties panel REMOVED from right side)
          - Centered, balanced, symmetrical visual core
          - Video canvas spans 100% of viewport width
          - Transparent left rail overlays cleanly without squeezing content
          - NO black separator stripe
          =================================================== */}
      <div className="hidden lg:flex flex-col justify-between w-full min-h-[92vh] relative px-10 xl:px-16 py-14 overflow-hidden">
        {/* Full-bleed video background across entire viewport */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.55] contrast-[1.08] pointer-events-none"
        >
          <source src="/videos/video-project-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/30 to-black/50 pointer-events-none" />

        {/* Top Studio Indicator Bar */}
        <div className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto pl-56">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold text-[#E5FCA0] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 uppercase tracking-[0.25em]">
              CERTIFIED SURFACE REFINEMENT
            </span>
            <span className="text-[10px] font-mono text-white/50 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
              OHIO STUDIO
            </span>
          </div>

          <div className="text-[11px] font-mono text-white/50 flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#E5FCA0] animate-pulse" />
            <span>XPEL CERTIFIED FACILITY</span>
          </div>
        </div>

        {/* Centered, Symmetrical, Balanced Hero Core */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 my-auto py-8 pl-56">
          <span className="text-xs font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.35em] block">
            AUTOMOTIVE CRAFTSMANSHIP &amp; SURFACE SCIENCE
          </span>

          <h1 className="text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
            ARMORED <br />
            <span className="text-[#E5FCA0]">BRILLIANCE.</span>
          </h1>

          <p className="text-base text-white/80 max-w-xl mx-auto leading-relaxed font-normal">
            High-end automotive detailing studio operating in Ludhiana &amp; Jammu. Certified XPEL PPF armor &amp; 10H graphene oxide coatings.
          </p>

          {/* Action CTAs */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-8 py-4 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-xl active:scale-95"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-black/50 backdrop-blur-md px-7 py-4 text-xs font-black uppercase tracking-wider text-white hover:bg-white/20 transition-all border border-white/20 active:scale-95"
            >
              <span>EXPLORE SERVICES</span>
            </Link>
          </div>
        </div>

        {/* Bottom Disciplines Strip: Content Preserved in Clean Full-Width Row */}
        <div className="relative z-10 w-full max-w-6xl mx-auto pt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono text-white/70 pl-56">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="size-3.5 text-[#E5FCA0]" />
              <span className="font-bold text-white">XPEL PPF ARMOR</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-3.5 text-[#E5FCA0]" />
              <span className="font-bold text-white">10H GRAPHENE OXIDE</span>
            </div>
            <div className="flex items-center gap-2">
              <Disc3 className="size-3.5 text-[#E5FCA0]" />
              <span className="font-bold text-white">PAINT CORRECTION</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="size-3.5 text-[#E5FCA0]" />
              <span className="font-bold text-white">CABIN SPA</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/40">
            <ChevronDown className="size-4 animate-bounce" />
            <span className="text-[10px] uppercase tracking-widest">SCROLL TO DISCOVER</span>
          </div>
        </div>

      </div>

    </section>
  )
}
