"use client"

import Image from "next/image"
import Link from "next/link"
import { Sparkles, Shield, Gauge, Droplets, ArrowRight, Check } from "lucide-react"

export function Services04() {
  return (
    <section id="services" className="relative w-full bg-[#0d0f0c] py-12 lg:py-16 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Bento Grid Architecture
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Core Service Matrix
            </h2>
            <p className="mt-1 text-sm text-white/60 max-w-lg">
              Asymmetric modular Bento layout for instant visual comparison.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-extrabold text-brand-foreground shadow-lg hover:scale-105 transition-transform shrink-0"
          >
            Get Custom Quote <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* BENTO BOX GRID MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* BENTO TILE 1: Ceramic Coating (Span 8) */}
          <div className="md:col-span-8 bg-neutral-900/90 border border-white/10 hover:border-brand/50 rounded-3xl p-6 lg:p-8 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-black">
              <Image
                src="/images/IMG_20260809_182044.jpg.jpeg"
                alt="Ceramic Coating"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-brand px-3.5 py-1 text-xs font-extrabold text-brand-foreground">
                Flagship Protection
              </span>
              <span className="absolute bottom-4 right-4 text-xl font-black text-white bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                From $599
              </span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand/20 text-brand">
                  <Sparkles className="size-4" />
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                  9H Nano Ceramic Coating
                </h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Creates a permanent 9H ceramic bond preventing oxidation, acid rain etch, and bird drop marks while maintaining high-gloss finish.
              </p>

              <div className="flex flex-wrap gap-2">
                {["9H Glass Matrix Bond", "Self-Cleaning Hydrophobic", "5-Year Warranty"].map((sp) => (
                  <span key={sp} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    <Check className="size-3 text-brand stroke-[3]" /> {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BENTO TILE 2: PPF Armor (Span 4) */}
          <div className="md:col-span-4 bg-neutral-900/90 border border-white/10 hover:border-brand/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-black">
              <Image
                src="/images/IMG_20260809_182113.jpg.jpeg"
                alt="PPF Film"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <span className="absolute bottom-4 right-4 text-lg font-black text-white bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                From $899
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="size-5 text-brand" />
                <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">Paint Protection Film</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                10-mil clear polyurethane film absorbing rock chips and scratches with heat self-healing technology.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["10-Mil Urethane", "Self-Healing", "10-Yr Film"].map((sp) => (
                  <span key={sp} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/80">
                    <Check className="size-3 text-brand stroke-[3]" /> {sp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BENTO TILE 3: Paint Correction (Span 6) */}
          <div className="md:col-span-6 bg-neutral-900/90 border border-white/10 hover:border-brand/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand/20 text-brand">
                  <Gauge className="size-4" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">Paint Correction & Polish</h3>
                  <span className="text-[10px] text-white/50">Showroom Scratch Erasure</span>
                </div>
              </div>
              <span className="text-lg font-black text-brand font-mono">From $399</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Multi-stage rotary compounding leveling to remove up to 95% swirl marks and buffer trails.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Depth Gauge Measured", "Multi-Pass Polish", "Zero Holograms"].map((sp) => (
                <span key={sp} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Check className="size-3 text-brand stroke-[3]" /> {sp}
                </span>
              ))}
            </div>
          </div>

          {/* BENTO TILE 4: Interior Spa (Span 6) */}
          <div className="md:col-span-6 bg-neutral-900/90 border border-white/10 hover:border-brand/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand/20 text-brand">
                  <Droplets className="size-4" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">Executive Interior Extraction</h3>
                  <span className="text-[10px] text-white/50">Sanitized & Conditioned</span>
                </div>
              </div>
              <span className="text-lg font-black text-brand font-mono">From $249</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              Hot-water extraction, leather hydration, alcantara restoration, and anti-bacterial ozone treatment.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Hot Water Extraction", "Leather Nourish", "Odor Purifier"].map((sp) => (
                <span key={sp} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Check className="size-3 text-brand stroke-[3]" /> {sp}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
