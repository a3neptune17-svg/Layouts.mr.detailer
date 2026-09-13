"use client"

import { Star, ShieldCheck, Quote } from "lucide-react"

const REVIEWS = [
  {
    name: "ALEX R.",
    car: "PORSCHE 911",
    rating: 5,
    tag: "CERAMIC",
    highlight: "FLAWLESS GLOSS",
  },
  {
    name: "PRIYA K.",
    car: "BMW M3",
    rating: 5,
    tag: "PPF",
    highlight: "UNMATCHED QUALITY",
  },
  {
    name: "MARCUS D.",
    car: "AUDI RS6",
    rating: 5,
    tag: "POLISH",
    highlight: "METICULOUS WORK",
  },
  {
    name: "ELENA V.",
    car: "AMG GT",
    rating: 5,
    tag: "INTERIOR",
    highlight: "FACTORY RESTORED",
  },
]

export function RatingsSection() {
  return (
    <section id="ratings" className="relative w-full bg-slate-50 py-16 lg:py-24 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1 rounded-full bg-brand text-brand-foreground px-3.5 py-1 text-xs font-black">
                <Star className="size-3.5 fill-brand-foreground text-brand-foreground" /> 4.98 ★
              </span>
              <span className="text-xs font-black tracking-widest text-slate-400 uppercase">
                REVIEWS
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 uppercase leading-none">
              RATINGS
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="text-3xl font-black text-slate-950">4,800+</div>
              <div className="text-[10px] text-slate-400 font-black tracking-widest uppercase">CARS</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="text-3xl font-black text-slate-950">100%</div>
              <div className="text-[10px] text-slate-400 font-black tracking-widest uppercase">QUALITY</div>
            </div>
            <div className="hidden sm:block bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="text-3xl font-black text-slate-950">10-YR</div>
              <div className="text-[10px] text-slate-400 font-black tracking-widest uppercase">WARRANTY</div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-950 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-foreground bg-brand px-2.5 py-0.5 rounded-full">
                    {review.tag}
                  </span>
                </div>

                <Quote className="size-5 text-slate-300 mb-2" />

                <h4 className="text-lg font-black uppercase text-slate-950 tracking-tight">
                  {review.highlight}
                </h4>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase text-slate-950">{review.name}</div>
                  <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">{review.car}</div>
                </div>
                <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-900 border border-slate-200">
                  <ShieldCheck className="size-4 text-black" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
