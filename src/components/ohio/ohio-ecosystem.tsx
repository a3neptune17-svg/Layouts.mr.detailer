"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const MOBILE_SERVICES = [
  {
    id: "ppf",
    num: "01",
    title: "PAINT PROTECTION FILM",
    tag: "ARMOR",
    color: "bg-[#1A1C19]",
    accent: "text-[#E5FCA0]",
  },
  {
    id: "auto-mods",
    num: "02",
    title: "AUTO MODIFICATIONS",
    tag: "CUSTOMISE",
    color: "bg-[#131512]",
    accent: "text-[#E5FCA0]",
  },
  {
    id: "coatings",
    num: "03",
    title: "COATINGS",
    tag: "NANO",
    color: "bg-[#E5FCA0]",
    accent: "text-black",
  },
  {
    id: "wraps",
    num: "04",
    title: "WRAPS & SUNFILMS",
    tag: "STYLE",
    color: "bg-[#1A1C19]",
    accent: "text-[#E5FCA0]",
  },
]

export function OhioEcosystem() {
  return (
    <section id="services" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Section label → Big headline → Horizontal card rail
          =================================================== */}
      <div className="lg:hidden">
        {/* Section Header */}
        <div className="px-6 pt-14 pb-8 space-y-3">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block">
            OUR SERVICES
          </span>
          <h2 className="text-[clamp(2.2rem,9vw,3.5rem)] font-black uppercase tracking-tight text-white leading-[0.92]">
            WE DEFINE THE VISUAL LANGUAGE OF PROTECTIVE FINISHES.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed pt-1">
            Four disciplines. One obsession with perfection.
          </p>
        </div>

        {/* Horizontal Scrollable Service Cards */}
        <div
          className="flex gap-4 px-6 pb-10 overflow-x-auto"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {MOBILE_SERVICES.map((srv) => (
            <Link
              key={srv.id}
              href="#protection"
              className={`flex-none w-[68vw] max-w-[280px] rounded-2xl ${srv.color} p-6 flex flex-col justify-between min-h-[220px] border border-white/8 active:scale-[0.97] transition-transform`}
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${srv.accent}`}>
                  {srv.tag}
                </span>
                <div className={`size-8 rounded-full flex items-center justify-center border ${
                  srv.color === "bg-[#E5FCA0]"
                    ? "border-black/20 bg-black/10 text-black"
                    : "border-white/15 bg-white/5 text-white"
                }`}>
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                </div>
              </div>

              <div className="space-y-1 mt-auto">
                <span className={`text-[10px] font-mono font-bold block ${
                  srv.color === "bg-[#E5FCA0]" ? "text-black/50" : "text-white/30"
                }`}>
                  {srv.num}
                </span>
                <h3 className={`text-xl font-black uppercase leading-tight ${
                  srv.color === "bg-[#E5FCA0]" ? "text-black" : "text-white"
                }`}>
                  {srv.title}
                </h3>
              </div>
            </Link>
          ))}

          {/* Peek card — explore all */}
          <Link
            href="#protection"
            className="flex-none w-[52vw] max-w-[200px] rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center gap-3 active:scale-[0.97] transition-transform"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="size-12 rounded-full bg-[#E5FCA0] flex items-center justify-center">
              <ArrowUpRight className="size-5 text-black stroke-[2.5]" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-white text-center">
              ALL SERVICES
            </span>
          </Link>
        </div>

        {/* Swipe hint */}
        <div className="px-6 pb-6">
          <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">
            ← Swipe to explore →
          </span>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          3-column asymmetric layout with no separator stripe
          =================================================== */}
      <div className="hidden lg:block">
        {/* 3-COLUMN ASYMMETRIC CONNECTED PANELS */}
        <div className="grid grid-cols-12 divide-x divide-white/10">

          {/* Column 1 (5 cols): Statement Block (spans under transparent rail) */}
          <div className="col-span-5 bg-[#131512] p-12 lg:pl-72 xl:lg:pl-80 flex flex-col justify-between min-h-[380px]">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
                STUDIO DISCIPLINE
              </span>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white leading-tight">
                WE DEFINE THE VISUAL LANGUAGE OF PROTECTIVE FINISHES.
              </h2>
            </div>

            <div className="pt-6">
              <Link
                href="#protection"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E5FCA0] hover:text-black transition-all border border-white/15"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Column 2 (4 cols): Dark Specialty Panel */}
          <div className="col-span-4 bg-[#181A17] p-12 flex flex-col justify-between relative group min-h-[360px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono font-bold text-white/50 uppercase tracking-widest">
                ARMOR &amp; REFINEMENT
              </span>
              <Link
                href="#protection"
                className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-all cursor-pointer"
                aria-label="View Armor Services"
              >
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>

            <div className="space-y-6 my-auto py-4">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">01</span>
                <h3 className="text-xl font-black uppercase text-white">PAINT PROTECTION FILM</h3>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">02</span>
                <h3 className="text-xl font-black uppercase text-white">AUTO MODS</h3>
              </div>
            </div>
          </div>

          {/* Column 3 (3 cols): Selective Lime Accent Panel */}
          <div className="col-span-3 bg-[#E5FCA0] text-black p-12 flex flex-col justify-between relative group min-h-[360px]">
            <div className="flex items-center justify-between border-b border-black/15 pb-4">
              <span className="text-[10px] font-mono font-bold text-black/60 uppercase tracking-widest">
                COATINGS &amp; STYLING
              </span>
              <Link
                href="#protection"
                className="size-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="View Coating Services"
              >
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>

            <div className="space-y-6 my-auto py-4">
              <div className="border-b border-black/15 pb-4">
                <span className="text-[10px] font-mono font-bold text-black/60 block mb-1">03</span>
                <h3 className="text-xl font-black uppercase text-black">COATINGS</h3>
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold text-black/60 block mb-1">04</span>
                <h3 className="text-xl font-black uppercase text-black">WRAPS &amp; SUNFILMS</h3>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
