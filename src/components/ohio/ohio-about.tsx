"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioAbout() {
  return (
    <section id="about" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Charcoal + Pearl White alternating composition
          =================================================== */}
      <div className="lg:hidden">
        {/* Large photo card */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: "280px" }}>
          <Image
            src="/images/IMG_20260809_180419.jpg.jpeg"
            alt="About Mr. Detailer Studio"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0E0E0E]" />
        </div>

        {/* Statement block — Pearl White */}
        <div className="bg-[#F2F0EB] px-6 py-10 space-y-5">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1A1C0A]/50 block">
            ABOUT MR. DETAILER
          </span>

          <blockquote className="text-[clamp(1.6rem,7vw,2.5rem)] font-black uppercase tracking-tight text-[#1A1C0A] leading-[0.95]">
            &ldquo;HAND-FINISHED PAINT CORRECTION, CERAMIC PROTECTION, AND XPEL PPF ARMOR ENGINEERED FOR LUXURY MOTORCARS.&rdquo;
          </blockquote>

          <div className="pt-4 border-t border-[#1A1C0A]/10 flex items-center justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#1A1C0A] block">MR. DETAILER STUDIO</span>
              <span className="text-[10px] font-mono text-[#1A1C0A]/60">Ludhiana Sarabha Nagar &amp; Jammu City</span>
            </div>

            <Link
              href="#contact"
              className="size-11 rounded-full bg-[#1A1C0A] flex items-center justify-center text-white active:bg-[#E5FCA0] active:text-black transition-colors"
              aria-label="Visit studio"
            >
              <ArrowUpRight className="size-5 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* Philosophy strip — dark */}
        <div className="px-6 py-8 bg-[#131512] flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-[#E5FCA0] uppercase tracking-widest block">STUDIO PHILOSOPHY</span>
            <p className="text-sm font-black uppercase text-white">RESTORATIVE SURFACING LAB</p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-[10px] font-black uppercase tracking-wider text-white active:bg-white/20 transition-colors"
          >
            VISIT
            <ArrowUpRight className="size-3 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Pearl White statement block + full-height photo
          - Spans under transparent rail
          =================================================== */}
      <div className="hidden lg:block">
        {/* 50/50 SPLIT BLOCK COMPOSITION */}
        <div className="grid grid-cols-12 divide-x divide-white/10">

          {/* Left Panel: Pearl White Statement Card (spans under transparent rail) */}
          <div className="col-span-6 bg-[#F4F2EC] text-[#141513] p-12 lg:pl-72 xl:lg:pl-80 lg:pr-14 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#141513]/60 uppercase tracking-widest block mb-4">
                STUDIO STATEMENT &bull; PHILOSOPHY
              </span>

              <blockquote className="text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight text-[#141513] leading-tight">
                &ldquo;HAND-FINISHED PAINT CORRECTION, CERAMIC PROTECTION, AND XPEL PPF ARMOR ENGINEERED FOR LUXURY MOTORCARS.&rdquo;
              </blockquote>
            </div>

            <div className="pt-8 border-t border-[#141513]/15 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider block text-[#141513]">MR. DETAILER STUDIO</span>
                <span className="text-[10px] font-mono text-[#141513]/70">Ludhiana Sarabha Nagar &amp; Jammu City</span>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#141513] px-6 py-3 text-xs font-black text-white hover:bg-[#E5FCA0] hover:text-black transition-all uppercase tracking-wider shadow-md"
              >
                <span>VISIT STUDIO</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Panel: Full-Height Photo */}
          <div className="col-span-6 relative min-h-[400px] bg-black overflow-hidden group p-8 flex flex-col justify-between">
            <Image
              src="/images/IMG_20260809_180419.jpg.jpeg"
              alt="About Mr. Detailer Studio"
              fill
              className="object-cover opacity-65 group-hover:scale-105 transition-transform duration-700"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl font-black uppercase text-white">RESTORATIVE SURFACING LAB</h3>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
