"use client"

import { CheckCircle2, ShieldCheck, Sparkles, Sliders, Search } from "lucide-react"

const STEPS = [
  {
    num: "01",
    title: "Laser Surface Inspection & Decon",
    time: "45 Mins",
    side: "left",
    desc: "Digital thickness gauge mapping and iron fallout bath to strip road grime and surface contaminants.",
    icon: Search,
  },
  {
    num: "02",
    title: "Multi-Pass Machine Compound",
    time: "2 Hours",
    side: "right",
    desc: "Dual-action jeweling polish eliminating up to 95% of micro-marring, swirl marks, and buffer trails.",
    icon: Sliders,
  },
  {
    num: "03",
    title: "Cleanroom Ceramic / PPF Shield",
    time: "4 Hours",
    side: "left",
    desc: "Application of 9H nano-glass coating or clear self-healing TPU protection film in a filtered cleanroom bay.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Infrared Curing & 2000-Lumen QC",
    time: "1 Hour",
    side: "right",
    desc: "Shortwave infrared lamp baking and multi-angle inspection under 2,000-lumen floodlights.",
    icon: ShieldCheck,
  },
]

export function Process02() {
  return (
    <section id="process" className="relative w-full bg-black py-12 lg:py-16 text-white border-b border-white/10 overflow-hidden">
      
      {/* Central Glowing Laser Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-brand to-transparent opacity-60 hidden md:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Cleanroom Workflow
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Precision 4-Stage Protocol
          </h2>
          <p className="mt-1 text-sm text-white/60">
            Alternating inspection steps ensuring zero compromise in finish quality.
          </p>
        </div>

        {/* Staggered Alternating Timeline Cards */}
        <div className="space-y-8 relative">
          {STEPS.map((step) => {
            const Icon = step.icon
            const isLeft = step.side === "left"

            return (
              <div
                key={step.num}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card (Half Width) */}
                <div className="w-full md:w-1/2">
                  <div className="bg-neutral-900/90 border border-white/10 hover:border-brand/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,252,160,0.1)] relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-brand font-mono">{step.num}</span>
                      <span className="text-[10px] font-bold uppercase bg-brand/10 text-brand px-2.5 py-1 rounded-full border border-brand/30">
                        {step.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex size-8 items-center justify-center rounded-xl bg-black border border-white/10 text-brand">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Central Laser Point Circle */}
                <div className="hidden md:flex size-10 rounded-full bg-black border-2 border-brand text-brand items-center justify-center font-bold text-xs shadow-[0_0_15px_rgba(229,252,160,0.5)] shrink-0 z-10">
                  {step.num}
                </div>

                {/* Empty Spacer (Half Width) */}
                <div className="hidden md:block w-1/2" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
