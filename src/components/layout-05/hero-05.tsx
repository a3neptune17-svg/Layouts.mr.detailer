"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, Award, Star, CheckCircle2 } from "lucide-react"

export function Hero05() {
  return (
    <section className="relative w-full bg-[#0b0d0a] py-16 md:py-20 text-white border-b border-gray-800 overflow-hidden">
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

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0a]/85 via-[#0b0d0a]/30 to-[#0b0d0a]/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/20 px-5 py-1.5 text-xs font-black uppercase tracking-widest text-brand">
          <Sparkles className="size-3.5 text-brand" /> STUDIO
        </div>

        {/* Clean Solid Non-Shiny Text */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none">
          MR. DETAILER <br />
          <span className="text-brand">EXECUTIVE PROTECTION</span>
        </h1>

        <p className="text-xs font-black tracking-[0.3em] text-brand uppercase">
          CERAMIC · PPF · POLISH
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-xs font-black uppercase tracking-widest text-[#0c1206] shadow-xl hover:scale-105 transition-transform"
          >
            <span>CATALOG</span>
            <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 px-7 py-4 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black"
          >
            <span>INSPECTION</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 text-xs font-black uppercase tracking-widest text-white/90">
          <div className="flex items-center justify-center gap-1.5 bg-black/60 p-2.5 rounded-xl border border-white/10">
            <ShieldCheck className="size-3.5 text-brand" /> XPEL
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-black/60 p-2.5 rounded-xl border border-white/10">
            <Award className="size-3.5 text-brand" /> GTECHNIQ
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-black/60 p-2.5 rounded-xl border border-white/10">
            <Star className="size-3.5 text-brand fill-brand" /> 5.0 ★
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-black/60 p-2.5 rounded-xl border border-white/10">
            <CheckCircle2 className="size-3.5 text-brand" /> STUDIO
          </div>
        </div>
      </div>
    </section>
  )
}
