"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react"

export function Hero02() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col justify-center overflow-hidden bg-black text-white">
      {/* Background Full-bleed Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50 scale-105"
      >
        <source src="/videos/lv_0_20260905165108.mp4" type="video/mp4" />
      </video>

      {/* Dark Ambient Vignette & Neon Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-bold text-brand backdrop-blur-xl shadow-[0_0_20px_rgba(229,252,160,0.2)]">
          <Sparkles className="size-4" /> Dark Luxury Studio · Dallas Cleanroom
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white drop-shadow-2xl">
          THE ART OF AUTOMOTIVE <br />
          <span className="bg-gradient-to-r from-brand via-white to-brand bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(229,252,160,0.4)]">
            PERFECTION & ARMOR
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-sm sm:text-base text-white/80 leading-relaxed font-light">
          Museum-grade paint correction, 9H nano-ceramic glass shields, and self-healing clear PPF armor tailored for exotic and ultra-luxury automobiles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-xs font-extrabold text-brand-foreground shadow-[0_0_30px_rgba(229,252,160,0.3)] transition-transform hover:scale-105"
          >
            <span>Reserve Studio Bay</span>
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-xs font-bold text-white backdrop-blur-xl transition-all hover:border-brand hover:bg-brand/10 hover:text-brand"
          >
            <span>Custom Spec Quote</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/10 text-xs text-white/60 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-brand" /> XPEL & Gtechniq Certified
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5 text-brand">
            <Star className="size-4 fill-brand" /> 5.0 Rating (480+ Reviews)
          </div>
        </div>
      </div>
    </section>
  )
}
