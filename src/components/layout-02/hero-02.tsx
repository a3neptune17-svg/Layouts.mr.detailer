"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react"

export function Hero02() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden bg-[#0b0d0a] text-white">
      {/* Background Full-bleed Video - Clear Visibility */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="/videos/video-project-2.mp4" type="video/mp4" />
      </video>

      {/* Light Overlay Frame */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0a]/85 via-[#0b0d0a]/25 to-[#0b0d0a]/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/60 bg-brand/20 px-5 py-1.5 text-xs font-black text-brand uppercase tracking-widest backdrop-blur-xl">
          <Sparkles className="size-4" /> STUDIO
        </div>

        {/* Clean Solid Non-Shiny Text */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white uppercase">
          PERFECTION & <br />
          <span className="text-brand">
            ARMOR
          </span>
        </h1>

        <p className="text-xs font-black tracking-[0.3em] text-brand uppercase">
          CERAMIC · PPF · POLISH
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand px-9 py-4 text-xs font-black uppercase tracking-widest text-[#0c1206] shadow-xl transition-transform hover:scale-105"
          >
            <span>BOOK</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 px-8 py-4 text-xs font-black uppercase tracking-widest text-brand backdrop-blur-xl transition-all hover:bg-brand hover:text-black"
          >
            <span>QUOTE</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/15 text-xs text-white/90 font-black tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand" /> CERTIFIED
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5 text-brand">
            <Star className="size-4 fill-brand text-brand" /> 5.0 ★
          </div>
        </div>
      </div>
    </section>
  )
}
