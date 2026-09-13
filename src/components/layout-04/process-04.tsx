"use client"

import { Play, CheckCircle2, ShieldCheck, Sparkles, Sliders, Search, ArrowRight, ArrowDown } from "lucide-react"

const STEPS = [
  {
    num: "01",
    phase: "PHASE 01 OF 04",
    title: "DECON",
    subtitle: "CHEMICAL CLEANSE",
    time: "45 MIN",
    tag: "CLEANSE",
    icon: Search,
    next: "POLISH",
  },
  {
    num: "02",
    phase: "PHASE 02 OF 04",
    title: "POLISH",
    subtitle: "CLEARCOAT CORRECTION",
    time: "2 HR",
    tag: "RESTORE",
    icon: Sliders,
    next: "SHIELD",
  },
  {
    num: "03",
    phase: "PHASE 03 OF 04",
    title: "SHIELD",
    subtitle: "CERAMIC & PPF BOND",
    time: "4 HR",
    tag: "COAT",
    icon: Sparkles,
    next: "CURE",
  },
  {
    num: "04",
    phase: "PHASE 04 OF 04",
    title: "CURE",
    subtitle: "INFRARED BAKE",
    time: "1 HR",
    tag: "BAKE",
    icon: ShieldCheck,
    next: "COMPLETE",
  },
]

export function Process04() {
  return (
    <section id="process" className="relative w-full bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand">
              STEP-BY-STEP WORKFLOW
            </span>
            <h2 className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              HOW IT WORKS
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-black text-brand bg-brand/10 border border-brand/20 px-5 py-2.5 rounded-full uppercase tracking-widest">
            <Play className="size-4 fill-brand" /> 4-STAGE PROCESS REEL
          </div>
        </div>

        {/* Process Progression Banner (Horizontal Flow Overview) */}
        <div className="mb-12 hidden lg:flex items-center justify-between rounded-2xl border border-white/10 bg-[#121610] p-4 text-xs font-mono font-bold">
          {STEPS.map((step, idx) => (
            <div key={step.num} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-brand text-black font-black text-[11px]">
                  {step.num}
                </span>
                <span className="text-white font-extrabold uppercase tracking-wider">{step.title}</span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="flex items-center gap-2 text-brand mx-2">
                  <span className="w-12 h-px bg-brand/40" />
                  <ArrowRight className="size-4 text-brand shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4 Video Workflow Cards with Step Connector Arrows */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="relative flex flex-col">
                <div
                  className="bg-[#121610] border border-white/10 hover:border-brand/60 rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col justify-between p-1.5 shadow-2xl h-full"
                >
                  <div className="relative h-48 w-full bg-black overflow-hidden rounded-2xl">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60"
                    >
                      <source src="/videos/video-project-2.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121610] via-transparent to-transparent" />
                    
                    {/* Step Badges */}
                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-brand font-mono font-black text-xs px-3 py-1 rounded-lg border border-brand/30">
                      STEP {step.num}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-black text-white/90 bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
                      {step.time}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-brand">
                        {step.phase}
                      </span>
                      <Icon className="size-4 text-brand" />
                    </div>

                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{step.title}</h3>
                    <p className="text-[11px] font-mono text-white/60 uppercase mt-0.5">{step.subtitle}</p>
                    
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10">
                      <span className="flex items-center gap-1 text-[10px] text-white/70 font-mono font-bold uppercase">
                        <CheckCircle2 className="size-3.5 text-brand" /> VERIFIED
                      </span>
                      <span className="text-[10px] font-mono font-bold text-brand uppercase tracking-wider">
                        NEXT: {step.next} →
                      </span>
                    </div>
                  </div>
                </div>

                {/* DESKTOP CONNECTOR ARROW (Between Cards) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 size-8 items-center justify-center rounded-full bg-brand text-black font-black shadow-lg border border-black/20">
                    <ArrowRight className="size-4" />
                  </div>
                )}

                {/* MOBILE CONNECTOR ARROW (Between Vertical Stacked Cards) */}
                {idx < STEPS.length - 1 && (
                  <div className="lg:hidden flex items-center justify-center my-3 text-brand">
                    <div className="flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-mono font-bold text-brand">
                      <ArrowDown className="size-3.5 animate-bounce" /> STEP {STEPS[idx+1].num}: {STEPS[idx+1].title} NEXT
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
