"use client"

import { Star, ShieldCheck, Quote, Cpu } from "lucide-react"

const REVIEWS_04 = [
  {
    name: "ALEX R.",
    car: "PORSCHE 911 GT3",
    rating: 5,
    tag: "PPF MATRIX",
    highlight: "SURPASSES FACTORY METRICS",
    comment: "Flawless laser-aligned edge wrapping. Zero orange peel distortion under 4K studio lighting.",
  },
  {
    name: "PRIYA K.",
    car: "BMW M3 COMPETITION",
    rating: 5,
    tag: "CERAMIC 9H",
    highlight: "100% UNMATCHED HYDROPHOBICITY",
    comment: "Water sheet contact angle is unreal. Dust wipes off effortlessly with a single microfiber pass.",
  },
  {
    name: "MARCUS D.",
    car: "AUDI RS6 AVANT",
    rating: 5,
    tag: "PAINT CORRECTION",
    highlight: "MICRON-LEVEL PRECISION",
    comment: "Eliminated swirl marks while preserving clearcoat depth. Verified with paint depth gauge.",
  },
  {
    name: "ELENA V.",
    car: "MERCEDES AMG GT R",
    rating: 5,
    tag: "CLEANROOM PROTOCOL",
    highlight: "FLAWLESS FINISH",
    comment: "White glove drop-off and pickup. Every square inch of leather and carbon fiber was treated.",
  },
]

export function Ratings04() {
  return (
    <section id="ratings" className="relative w-full bg-[#060709] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-brand/20 border border-brand/40 px-3.5 py-1 text-xs font-mono font-bold text-brand uppercase tracking-widest">
                <Cpu className="size-3.5 text-brand" /> VERIFIED METRICS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              RATINGS BENTO
            </h2>
          </div>

          {/* Matrix Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-[#10141A] px-4 py-3 text-center">
              <div className="text-xl sm:text-2xl font-black text-brand">4.99</div>
              <div className="text-[9px] font-mono text-white/50 uppercase">Score</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#10141A] px-4 py-3 text-center">
              <div className="text-xl sm:text-2xl font-black text-white">4,800+</div>
              <div className="text-[9px] font-mono text-white/50 uppercase">Detailing Jobs</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#10141A] px-4 py-3 text-center">
              <div className="text-xl sm:text-2xl font-black text-brand">10-YR</div>
              <div className="text-[9px] font-mono text-white/50 uppercase">Warranty</div>
            </div>
          </div>
        </div>

        {/* Bento Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_04.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-white/15 bg-[#10141A] p-6 hover:border-brand/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-brand text-brand" />
                    ))}
                  </div>
                  <span className="rounded-full bg-brand/10 border border-brand/30 px-2.5 py-0.5 text-[10px] font-mono font-bold text-brand uppercase">
                    {review.tag}
                  </span>
                </div>

                <Quote className="size-5 text-white/20 mb-2" />

                <h4 className="text-base font-extrabold text-white uppercase tracking-tight mb-2">
                  {review.highlight}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase">{review.name}</div>
                  <div className="text-[10px] font-mono text-brand/80 uppercase">{review.car}</div>
                </div>
                <ShieldCheck className="size-4 text-brand" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
