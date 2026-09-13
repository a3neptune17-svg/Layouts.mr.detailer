"use client"

import { Play, CheckCircle2, ShieldCheck, Sparkles, Sliders, Search } from "lucide-react"

const STEPS = [
  {
    num: "01",
    title: "Chemical Decon Bath",
    time: "45 Mins",
    desc: "Iron fallout bath and clay bar decontamination.",
    icon: Search,
  },
  {
    num: "02",
    title: "Precision Machine Polish",
    time: "2 Hours",
    desc: "Dual-action compound eliminating 95% swirl marks.",
    icon: Sliders,
  },
  {
    num: "03",
    title: "Cleanroom Ceramic Shield",
    time: "4 Hours",
    desc: "9H nano-glass matrix or self-healing PPF wrap.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Infrared Heat Lamp Bake",
    time: "1 Hour",
    desc: "Shortwave infrared lamp ceramic curing.",
    icon: ShieldCheck,
  },
]

export function Process04() {
  return (
    <section id="process" className="relative w-full bg-black py-12 lg:py-16 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Video Process Reel
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Studio Floor Execution
            </h2>
            <p className="mt-1 text-sm text-white/60 max-w-lg">
              Live footage of our 4-stage precision detailing workflow.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-3.5 py-1.5 rounded-full">
            <Play className="size-3.5 fill-brand" /> 4K Studio Reel Active
          </div>
        </div>

        {/* 4 Video Workflow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="bg-neutral-900 border border-white/10 hover:border-brand/50 rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 w-full bg-black overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60"
                  >
                    <source src="/videos/lv_0_20260905165108.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-brand font-mono font-bold text-xs px-2.5 py-0.5 rounded-md border border-brand/30">
                    STAGE {step.num}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold text-white/80 bg-black/60 px-2 py-0.5 rounded">
                    {step.time}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="size-4 text-brand" />
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">{step.desc}</p>
                  
                  <div className="flex items-center gap-1.5 text-[11px] text-brand font-semibold pt-3 border-t border-white/10">
                    <CheckCircle2 className="size-3.5" /> Stage Passed QC
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
