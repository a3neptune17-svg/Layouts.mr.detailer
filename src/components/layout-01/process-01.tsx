"use client"

import { CheckCircle2, ShieldCheck, Sparkles, Sliders, Search, ArrowRight } from "lucide-react"

const STEPS = [
  {
    num: "01",
    title: "Decontamination Bath",
    time: "45 Mins",
    desc: "Iron fallout removal, pH-neutral foam wash, and clay bar treatment to remove sub-surface contaminants.",
    icon: Search,
  },
  {
    num: "02",
    title: "Paint Inspection & Polish",
    time: "2 Hours",
    desc: "Digital thickness measurement followed by multi-pass machine polish to erase 90%+ swirl marks.",
    icon: Sliders,
  },
  {
    num: "03",
    title: "Ceramic / Film Application",
    time: "4 Hours",
    desc: "Precision cleanroom installation of 9H nano-ceramic coating or self-healing PPF wrap.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Infrared Cure & QC Inspection",
    time: "1 Hour",
    desc: "Shortwave infrared lamp baking and 2,000-lumen light handover inspection.",
    icon: ShieldCheck,
  },
]

export function Process01() {
  return (
    <section id="process" className="relative bg-ink py-12 lg:py-16 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand border border-brand/30">
            <Sparkles className="size-3.5" /> 4-Step Studio Workflow
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Transparent Studio Execution
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Every vehicle undergoes our rigorous 4-stage precision cleanroom protocol.
          </p>
        </div>

        {/* Horizontal Connected Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="relative bg-white/5 border border-white/10 hover:border-brand/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-brand font-mono">{step.num}</span>
                    <span className="text-[10px] font-bold uppercase bg-white/10 px-2.5 py-1 rounded-full text-white/80 border border-white/10">
                      {step.time}
                    </span>
                  </div>

                  <div className="size-10 rounded-2xl bg-brand/20 flex items-center justify-center text-brand mb-4">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-brand">
                  <CheckCircle2 className="size-3.5" /> Stage Verified
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
