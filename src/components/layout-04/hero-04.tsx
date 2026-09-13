"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react"

export function Hero04() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden bg-[#08090C] text-white border-b border-white/10">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40 scale-105"
      >
        <source src="/videos/lv_0_20260905165108.mp4" type="video/mp4" />
      </video>

      {/* Cyber Dark Ambient Overlay & Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/50 to-black/75" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-brand/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-bold text-brand backdrop-blur-xl shadow-[0_0_20px_rgba(229,252,160,0.25)]">
          <Sparkles className="size-4" /> Layout 04 · Cyber Dark Armor Studio
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-2xl">
          MR. DETAILER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-white to-brand drop-shadow-[0_0_25px_rgba(229,252,160,0.5)]">
            CERAMIC & PPF ARMOR STUDIO
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed font-normal">
          Museum-grade paint correction, 9H nano-ceramic glass shields, and self-healing clear PPF armor engineered for luxury automobiles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-xs font-extrabold text-brand-foreground shadow-[0_0_30px_rgba(229,252,160,0.35)] transition-transform hover:scale-105"
          >
            <span>Explore Services Matrix</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
          >
            <span>Book Studio Bay</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8 border-t border-white/10 text-xs text-white/70 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand" /> Certified XPEL Installers
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5 text-brand font-bold">
            <Star className="size-4 fill-brand text-brand" /> 5.0 Star Rating (480+ Reviews)
          </div>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-white/80">10-Year Film Warranty</span>
        </div>
      </div>
    </section>
  )
}

