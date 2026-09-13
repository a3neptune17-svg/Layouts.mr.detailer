"use client"

import { Star, ShieldCheck, Quote, Award } from "lucide-react"

const REVIEWS_03 = [
  {
    name: "ALEX R.",
    car: "PORSCHE 911 GT3",
    rating: 5,
    tag: "FULL PPF",
    highlight: "SURPASSES FACTORY STANDARDS",
    comment: "The precision edges on my GT3 are invisible. Hand-cut ceramic application with zero razor touch marks.",
  },
  {
    name: "PRIYA K.",
    car: "BMW M3 COMPETITION",
    rating: 5,
    tag: "CERAMIC 9H",
    highlight: "IMPRESSIVE DEEP GLOSS",
    comment: "Dirt literally glides off during wash days. The ceramic sheen under sun reflection is unmatched.",
  },
  {
    name: "MARCUS D.",
    car: "AUDI RS6 AVANT",
    rating: 5,
    tag: "PAINT CORRECTION",
    highlight: "RESTORED TO CONCOURS SHOW CONDITION",
    comment: "Eliminated all heavy swirl marks from previous improper washes. The paint depth looks brand new.",
  },
  {
    name: "ELENA V.",
    car: "MERCEDES AMG GT R",
    rating: 5,
    tag: "INTERIOR RESTORE",
    highlight: "METICULOUS CLEANROOM FINISH",
    comment: "Full matte leather treatment and custom carbon protection. Pristine execution from start to finish.",
  },
]

export function Ratings03() {
  return (
    <section id="ratings" className="relative w-full bg-[#070809] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-brand text-black px-3.5 py-1 text-xs font-extrabold">
                <Star className="size-3.5 fill-black text-black" /> 4.99 VERIFIED
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-white/50 uppercase">
                REVIEWS & RATINGS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              CLIENT TESTIMONIALS
            </h2>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-[#121610] px-5 py-3">
              <div className="text-2xl font-black text-brand">4.99 / 5.0</div>
              <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Overall Rating</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#121610] px-5 py-3">
              <div className="text-2xl font-black text-white">100%</div>
              <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* 2x2 Grid of Luxury Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_03.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121610] p-8 hover:border-brand/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-brand text-brand" />
                    ))}
                  </div>
                  <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[10px] font-mono font-extrabold text-brand uppercase tracking-wider">
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
                  <div className="text-[10px] font-mono font-bold tracking-wider text-brand/80 uppercase">{review.car}</div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white/50 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="size-3.5 text-brand" /> VERIFIED CLIENT
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
