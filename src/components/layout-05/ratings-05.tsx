"use client"

import { Star, ShieldCheck, Quote, Award, CheckCircle2 } from "lucide-react"

const REVIEWS_05 = [
  {
    name: "ALEX R.",
    car: "PORSCHE 911 GT3 RS",
    rating: 5,
    tag: "CONCOURS DETAILING",
    highlight: "EXECUTIVE CLASS PRECISION",
    comment: "The absolute standard in high-end automotive care. Seamless process, clear updates, and extraordinary hand craft.",
  },
  {
    name: "PRIYA K.",
    car: "BMW M3 COMPETITION",
    rating: 5,
    tag: "FULL CERAMIC SEAL",
    highlight: "UNMATCHED CLEARCOAT GLOSS",
    comment: "The ceramic sheen depth is noticeable from 50 feet away. Extreme hydrophobic protection that lasts.",
  },
  {
    name: "MARCUS D.",
    car: "AUDI RS6 AVANT",
    rating: 5,
    tag: "PAINT RESTORATION",
    highlight: "ZERO DEFECT CLEARCOAT",
    comment: "Every trace of micro-swirls was corrected. The gloss restoration exceeded my highest expectations.",
  },
  {
    name: "ELENA V.",
    car: "MERCEDES AMG GT R",
    rating: 5,
    tag: "INTERIOR CLEANROOM",
    highlight: "FACTORY MATTE PRESERVATION",
    comment: "Original scent, zero greasy residue, pure matte leather nourishment. Truly exceptional care.",
  },
]

export function Ratings05() {
  return (
    <section id="ratings" className="relative w-full bg-[#050608] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-brand text-black px-3.5 py-1 text-xs font-black">
                <Star className="size-3.5 fill-black text-black" /> 4.99 AUDITED RATING
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              EXECUTIVE REVIEWS
            </h2>
          </div>

          {/* Audit Credentials */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#12161E] px-4 py-2 text-xs font-bold text-white">
              <ShieldCheck className="size-4 text-brand" /> 100% Certified Cleanroom
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#12161E] px-4 py-2 text-xs font-bold text-white">
              <Award className="size-4 text-brand" /> Master Craft Guarantee
            </div>
          </div>
        </div>

        {/* 2x2 Grid of Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_05.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#12161E] p-8 hover:border-brand/40 transition-all duration-300 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-brand text-brand" />
                    ))}
                  </div>
                  <span className="rounded-full bg-brand/10 border border-brand/30 px-3 py-1 text-[10px] font-mono font-bold text-brand uppercase">
                    {review.tag}
                  </span>
                </div>

                <Quote className="size-6 text-brand/30 mb-3" />

                <h4 className="text-lg font-extrabold text-white uppercase tracking-tight mb-2">
                  "{review.highlight}"
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {review.comment}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-white uppercase">{review.name}</div>
                  <div className="text-[10px] font-mono text-brand/80 uppercase">{review.car}</div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="size-3.5 text-brand" /> VERIFIED CLIENT
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
