"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, Award, Star, CheckCircle2 } from "lucide-react"

export function Hero05() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-16 md:py-20 text-white border-b border-gray-800 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/videos/Video%20Project%202.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-4 py-1.5 text-xs font-bold text-gray-300">
          <Sparkles className="size-3.5 text-brand" /> Executive Fleet & Individual Detailing Studio
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          MR. DETAILER <br />
          <span className="text-brand">EXECUTIVE AUTOMOTIVE PROTECTION</span>
        </h1>

        <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
          Cleanroom precision 9H nano-ceramic coatings, self-healing TPU PPF film, and multi-stage paint correction delivered with certified warranties.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-extrabold text-brand-foreground shadow-lg hover:scale-105 transition-transform"
          >
            <span>Explore Catalog</span>
            <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/80 px-6 py-3.5 text-xs font-bold text-white hover:bg-gray-700"
          >
            <span>Schedule Inspection</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-800 text-xs text-gray-300">
          <div className="flex items-center justify-center gap-1.5 bg-gray-800/50 p-2.5 rounded-xl border border-gray-800">
            <ShieldCheck className="size-3.5 text-brand" /> XPEL Installer
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-gray-800/50 p-2.5 rounded-xl border border-gray-800">
            <Award className="size-3.5 text-brand" /> Gtechniq 9H
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-gray-800/50 p-2.5 rounded-xl border border-gray-800">
            <Star className="size-3.5 text-amber-400 fill-amber-400" /> 5.0 Star Rated
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-gray-800/50 p-2.5 rounded-xl border border-gray-800">
            <CheckCircle2 className="size-3.5 text-emerald-400" /> Dallas Studio
          </div>
        </div>
      </div>
    </section>
  )
}
