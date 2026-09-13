"use client"

import Link from "next/link"
import { ArrowDown, ShieldCheck, Sparkles, Star } from "lucide-react"

export function Hero01() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col justify-center overflow-hidden bg-ink text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src="/videos/lv_0_20260905165108.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-semibold text-brand backdrop-blur-md border border-brand/30">
              <Sparkles className="size-3.5" /> Studio Grade Detailing
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-white/80">
              <Star className="size-3.5 fill-amber-400 text-amber-400" /> 4.9/5 (480+ Reviews)
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
            Flawless Finish. <br />
            <span className="bg-gradient-to-r from-brand via-white to-brand bg-clip-text text-transparent">
              Unmatched Protection.
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg max-w-xl">
            Precision Ceramic Coating, Paint Protection Film (PPF), and bespoke interior detailing engineered for automotive perfection.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-xs font-bold text-brand-foreground shadow-xl transition-transform hover:scale-[1.02]"
            >
              Explore Services <ArrowDown className="size-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Get Custom Quote
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" />
              <span>Certified Installers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>Mobile Detailing Available</span>
            </div>
            <div>
              <span className="font-bold text-white">4,800+</span> Vehicles Protected
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
