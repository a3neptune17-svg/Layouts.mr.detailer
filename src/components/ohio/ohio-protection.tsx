"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const DETAILED_SERVICES = [
  {
    id: "ppf",
    num: "01",
    title: "PAINT PROTECTION FILM",
    sub: "XPEL CERTIFIED",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    imagePos: "object-center",
  },
  {
    id: "graphene",
    num: "02",
    title: "10H GRAPHENE COATING",
    sub: "OXIDE ARMOR",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    imagePos: "object-center",
  },
  {
    id: "ceramic",
    num: "03",
    title: "9H NANO CERAMIC",
    sub: "NANO MATRIX",
    image: "/images/IMG_20260809_181431.jpg.jpeg",
    imagePos: "object-center",
  },
  {
    id: "correction",
    num: "04",
    title: "PAINT CORRECTION",
    sub: "ZERO DEFECTS",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    imagePos: "object-center",
  },
  {
    id: "interior",
    num: "05",
    title: "LUXURY CABIN SPA",
    sub: "INTERIOR CARE",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    imagePos: "object-center",
  },
]

export function OhioProtection() {
  return (
    <section id="protection" className="relative w-full bg-[#0F1009] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Pearl White section header → large stacked clickable cards
          =================================================== */}
      <div className="lg:hidden">
        {/* Section header — Pearl White surface */}
        <div className="bg-[#F2F0EB] px-6 pt-12 pb-8 space-y-3">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1A1C0A] block">
            PROTECTION
          </span>
          <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase tracking-tight text-[#1A1C0A] leading-[0.92]">
            DISCIPLINARY SERVICES.
          </h2>
          <p className="text-sm text-[#1A1C0A]/60 leading-relaxed max-w-xs">
            Every treatment, a precision-engineered shield for your motorcar.
          </p>
        </div>

        {/* Large stacked protection cards */}
        <div className="px-4 py-6 space-y-4 bg-[#0F1009]">
          {DETAILED_SERVICES.map((item) => (
            <Link
              key={item.id}
              href="#contact"
              className="relative flex items-stretch rounded-2xl overflow-hidden min-h-[140px] border border-white/10 hover:border-[#E5FCA0]/50 group active:scale-[0.98] transition-all block cursor-pointer"
              aria-label={`Inquire about ${item.title}`}
            >
              {/* Image — left 45% */}
              <div className="relative w-[42%] shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.imagePos} group-active:scale-105 transition-transform duration-500`}
                  sizes="45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141610]/70" />
              </div>

              {/* Content — right 58% */}
              <div className="flex-1 bg-[#141610] px-5 py-5 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block mb-1">
                      {item.sub}
                    </span>
                    <span className="text-[10px] font-mono text-white/30">{item.num}</span>
                  </div>
                  {/* Arrow — interaction indicator */}
                  <div className="size-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white group-active:bg-[#E5FCA0] group-active:text-black group-active:border-[#E5FCA0] transition-all shrink-0">
                    <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  </div>
                </div>

                <h3 className="text-base font-black uppercase text-white leading-tight mt-2">
                  {item.title}
                </h3>

                <span className="text-[10px] font-mono text-[#E5FCA0] mt-2 uppercase tracking-wider">
                  TAP TO INQUIRE →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="px-4 pb-12">
          <Link
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E5FCA0] py-4 text-xs font-black uppercase tracking-wider text-black active:scale-95 transition-transform shadow-lg"
          >
            <span>BOOK A PROTECTION SERVICE</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Cards are OBVIOUSLY CLICKABLE (entire panel links to #contact,
            accent hover borders, hover image zoom, clear arrow indicator)
          - Left padding lg:pl-72 xl:lg:pl-80 spans under transparent rail
          =================================================== */}
      <div className="hidden lg:block lg:pl-72 xl:lg:pl-80">
        {/* Section Header Title inside section, not a black band */}
        <div className="px-10 pt-12 pb-6 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block mb-1">
              PROTECTION &bull; DISCIPLINARY SERVICES
            </span>
            <h2 className="text-2xl font-black uppercase text-white tracking-tight">
              PRECISION SHIELDING &amp; COATINGS
            </h2>
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            SELECT A DISCIPLINE TO INQUIRE
          </span>
        </div>

        {/* 3-COLUMN IMAGE DOMINANT GRID — FULLY CLICKABLE PANELS */}
        <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10">
          {DETAILED_SERVICES.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href="#contact"
              className="relative min-h-[420px] bg-[#131512] p-8 flex flex-col justify-between group overflow-hidden border-t-2 border-transparent hover:border-[#E5FCA0] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E5FCA0]"
              aria-label={`Inquire about ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent pointer-events-none" />

              {/* Top row with tag and prominent hover-animated arrow badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block mb-0.5">
                    {item.sub}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white/50">
                    {item.num}
                  </span>
                </div>
                <div className="size-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black group-hover:border-[#E5FCA0] group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom title and explicit interactive cue */}
              <div className="relative z-10 mt-auto space-y-2">
                <h3 className="text-2xl font-black uppercase text-white leading-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-wider flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>INQUIRE DISCIPLINE</span>
                  <ArrowUpRight className="size-3 stroke-[2.5]" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom 2-Column Split Cards — FULLY CLICKABLE PANELS */}
        <div className="grid grid-cols-2 divide-x divide-white/10">
          {DETAILED_SERVICES.slice(3, 5).map((item) => (
            <Link
              key={item.id}
              href="#contact"
              className="relative min-h-[360px] bg-[#181A17] p-8 flex flex-col justify-between group overflow-hidden border-t-2 border-transparent hover:border-[#E5FCA0] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E5FCA0]"
              aria-label={`Inquire about ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block mb-0.5">
                    {item.sub}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-white/50">
                    {item.num}
                  </span>
                </div>
                <div className="size-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black group-hover:border-[#E5FCA0] group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </div>
              </div>

              <div className="relative z-10 mt-auto space-y-2">
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-wider flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>INQUIRE DISCIPLINE</span>
                  <ArrowUpRight className="size-3 stroke-[2.5]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
