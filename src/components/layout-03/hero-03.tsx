"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, Shield, Star, CheckCircle } from "lucide-react"

export function Hero03() {
  return (
    <section className="relative flex min-h-[65vh] w-full flex-col justify-center overflow-hidden bg-gray-900 text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      >
        <source src="/videos/Video%20Project%202.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-extrabold uppercase text-brand border border-brand/30">
          <Sparkles className="size-3.5 text-brand" /> Seamless Rhythmic Layout
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Precision Detailing & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-white to-brand">
            Rhythmic Protection.
          </span>
        </h1>

        <p className="mx-auto max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed">
          Seamlessly tailored ceramic coatings, paint correction, and interior detailing designed to elevate your vehicle&apos;s luster.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-extrabold text-brand-foreground shadow-lg hover:scale-105 transition-transform"
          >
            <span>Discover Services</span>
            <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/80 px-6 py-3.5 text-xs font-bold text-white hover:bg-gray-700"
          >
            <span>Request Quote</span>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-800 text-xs font-semibold text-gray-400">
          <span className="flex items-center gap-1.5"><CheckCircle className="size-4 text-emerald-400" /> XPEL Certified</span>
          <span>·</span>
          <span className="flex items-center gap-1.5"><Star className="size-4 fill-amber-400 text-amber-400" /> 4.9/5 Google Rating</span>
        </div>
      </div>
    </section>
  )
}
