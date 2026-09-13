"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react"

export function Hero04() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden bg-[#08090C] text-white border-b border-white/10">
      {/* Background Video Layer - Bright Visibility */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="/videos/video-project-2.mp4" type="video/mp4" />
      </video>

      {/* Ambient Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-[#08090C]/30 to-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/20 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-brand backdrop-blur-xl">
          <Sparkles className="size-4" /> STUDIO
        </div>

        {/* Clean Solid Non-Shiny Text */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white uppercase">
          MR. DETAILER <br />
          <span className="text-brand">
            CERAMIC & PPF ARMOR
          </span>
        </h1>

        <p className="text-xs font-black tracking-[0.3em] text-brand uppercase">
          CERAMIC · PPF · POLISH
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand px-9 py-4 text-xs font-black uppercase tracking-widest text-[#0c1206] shadow-xl hover:scale-105 transition-transform"
          >
            <span>SERVICES</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 px-8 py-4 text-xs font-black uppercase tracking-widest text-brand backdrop-blur-xl transition-all hover:bg-brand hover:text-black"
          >
            <span>BOOK</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8 border-t border-white/10 text-xs text-white/90 font-black tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand" /> CERTIFIED
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5 text-brand font-black">
            <Star className="size-4 fill-brand text-brand" /> 5.0 ★
          </div>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-white/90">WARRANTY</span>
        </div>
      </div>
    </section>
  )
}
