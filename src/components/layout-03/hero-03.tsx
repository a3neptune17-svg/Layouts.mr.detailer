"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, Star, CheckCircle } from "lucide-react"

export function Hero03() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden bg-[#0b0d0a] text-white">
      {/* Background Video - Bright Visibility */}
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
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-brand border border-brand/40">
          <Sparkles className="size-3.5 text-brand" /> STUDIO
        </span>

        {/* Clean Solid Non-Shiny Text */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none">
          PRECISION & <br />
          <span className="text-brand">
            PROTECTION
          </span>
        </h1>

        <p className="text-xs font-black tracking-[0.3em] text-brand uppercase">
          CERAMIC · PPF · POLISH
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-xs font-black uppercase tracking-widest text-[#0c1206] shadow-xl hover:scale-105 transition-transform"
          >
            <span>SERVICES</span>
            <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 px-8 py-4 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black"
          >
            <span>QUOTE</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/15 text-xs font-black uppercase tracking-widest text-white/90">
          <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-brand" /> CERTIFIED</span>
          <span>·</span>
          <span className="flex items-center gap-1.5"><Star className="size-4 fill-brand text-brand" /> 4.9 ★</span>
        </div>
      </div>
    </section>
  )
}
