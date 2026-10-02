"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioNamex() {
  return (
    <section id="namex" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Large visual → short intro → strong CTA
          =================================================== */}
      <div className="lg:hidden">
        {/* Full-bleed video panel */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", minHeight: "240px" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          >
            <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0E0E0E]" />

          {/* NameX Watermark */}
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.3em] block mb-1">
                TECHNICAL DIVISION
              </span>
              <h3 className="text-2xl font-black uppercase text-white">
                NAMEX STUDIO
              </h3>
            </div>
          </div>
        </div>

        {/* Content block */}
        <div className="px-6 py-10 space-y-6">
          <div className="space-y-3">
            <span className="text-[9px] font-mono text-[#E5FCA0] uppercase tracking-[0.3em] block">
              SPECIALTY LAB
            </span>
            <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase tracking-tight text-white leading-[0.92]">
              AUTOMOTIVE CRAFTS&shy;MANSHIP &amp; SURFACE SCIENCE.
            </h2>
          </div>

          <p className="text-sm text-white/65 leading-relaxed">
            NameX Studio is our high-precision technical division. Custom-engineered PPF templates, multi-stage pad leveling, and hydrophobic 10H graphene oxide application.
          </p>

          {/* NameX logo badge */}
          <div className="flex items-center gap-3 py-4 border-y border-white/10">
            <div className="rounded-xl bg-white p-2 inline-block">
              <Image
                src="/images/Namex white background only.png"
                alt="NameX Studio"
                width={80}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-white block">NAMEX STUDIO</span>
              <span className="text-[9px] font-mono text-white/40">LUDHIANA &amp; JAMMU LABS</span>
            </div>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-4 text-xs font-black uppercase tracking-wider text-black active:scale-95 transition-transform shadow-lg shadow-[#E5FCA0]/20"
          >
            <span>CONSULT NAMEX STUDIO</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          60/40 Split Panel with video canvas spanning under transparent rail
          =================================================== */}
      <div className="hidden lg:block">
        {/* 60/40 SPLIT PANEL COMPOSITION */}
        <div className="grid grid-cols-12 divide-x divide-white/10">

          {/* Left Panel (7 cols): Dominant Video Canvas (spans under transparent rail) */}
          <div className="col-span-7 relative min-h-[460px] bg-black overflow-hidden group p-8 lg:py-12 lg:pr-10 lg:pl-72 xl:lg:pl-80 flex flex-col justify-between">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-105"
            >
              <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono font-bold text-[#E5FCA0] block mb-1">
                LUDHIANA &amp; JAMMU LABS
              </span>
              <h3 className="text-3xl font-black uppercase text-white">
                PRECISION SURFACE REFINEMENT
              </h3>
            </div>
          </div>

          {/* Right Panel (5 cols): Editorial Statement */}
          <div className="col-span-5 bg-[#131512] p-12 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
                SPECIALTY LAB
              </span>

              <h2 className="text-3xl font-black uppercase tracking-tight text-white leading-tight">
                AUTOMOTIVE CRAFTSMANSHIP &amp; SURFACE SCIENCE
              </h2>

              <p className="text-xs text-white/70 leading-relaxed font-normal">
                NameX Studio represents our high-precision technical division. We specialize in custom-engineered paint protection film templates, multi-stage pad leveling, and hydrophobic 10H graphene oxide application.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
              >
                <span>CONSULT NAMEX STUDIO</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
