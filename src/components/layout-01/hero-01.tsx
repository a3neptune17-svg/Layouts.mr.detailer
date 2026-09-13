"use client"

import Link from "next/link"
import { ArrowDown, ShieldCheck, Sparkles, Star } from "lucide-react"

export function Hero01() {
  return (
    <section className="relative flex min-h-[75vh] w-full flex-col justify-center overflow-hidden bg-[#0b0d0a] text-white">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="/videos/video-project-2.mp4" type="video/mp4" />
      </video>

      {/* Overlay Frame */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0a]/85 via-[#0b0d0a]/30 to-[#0b0d0a]/65" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 text-left">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-black uppercase text-brand-foreground tracking-widest">
              <Sparkles className="size-4" /> STUDIO
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-black text-white/90 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/10 tracking-widest">
              <Star className="size-3.5 fill-amber-400 text-amber-400" /> 4.98 ★
            </span>
          </div>

          {/* Clean Solid Text without Flashing / Glowing Effects */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
            FLAWLESS. <br />
            <span className="text-brand">
              ARMOR.
            </span>
          </h1>

          <p className="mt-5 text-xs font-black tracking-[0.3em] text-brand uppercase">
            CERAMIC · PPF · POLISH
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-xs font-black uppercase tracking-widest text-[#0c1206] transition-transform hover:scale-105 shadow-xl"
            >
              SERVICES <ArrowDown className="size-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 px-8 py-4 text-xs font-black uppercase tracking-widest text-brand backdrop-blur-md transition-all hover:bg-brand hover:text-black"
            >
              BOOK
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/15 pt-6 text-xs font-black tracking-widest text-white/90 uppercase">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" />
              <span>CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-brand animate-pulse" />
              <span>MOBILE</span>
            </div>
            <div>
              <span className="text-brand font-black text-sm">4,800+</span> CARS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
