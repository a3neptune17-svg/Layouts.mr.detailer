"use client"

import { Clock, CheckCircle2, ShieldCheck, Sparkles, Sliders, Search } from "lucide-react"

const STEPS = [
  {
    num: "01",
    title: "Surface Prep & Iron Bath",
    time: "45 Mins",
    desc: "Digital paint depth gauge test & iron fallout chemical decon.",
    icon: Search,
  },
  {
    num: "02",
    title: "Dual-Action Machine Compound",
    time: "2 Hours",
    desc: "Precision compounding removing 95%+ swirl marks and scratches.",
    icon: Sliders,
  },
  {
    num: "03",
    title: "Cleanroom Ceramic / PPF Shield",
    time: "4 Hours",
    desc: "9H nano ceramic matrix or clear self-healing PPF wrap application.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Infrared Curing & Final QC",
    time: "1 Hour",
    desc: "Infrared heat lamp curing and 2,000-lumen light quality audit.",
    icon: ShieldCheck,
  },
]

export function Process05() {
  return (
    <section id="process" className="relative w-full bg-white py-12 lg:py-16 text-ink border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-extrabold uppercase text-ink">
              <Sparkles className="size-3.5 text-brand-foreground" /> Executive Workflow
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
              Timed Studio Protocol
            </h2>
            <p className="mt-1 text-sm text-ink/70 max-w-lg">
              Transparent step-by-step turn-around estimates for total vehicle care.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-ink bg-gray-100 border border-gray-200 px-4 py-2 rounded-full">
            <Clock className="size-4 text-emerald-600" /> Total Service Duration: ~7.5 Hours
          </div>
        </div>

        {/* Horizontal Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className="bg-gray-50 border border-gray-200 rounded-3xl p-6 hover:border-brand transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-brand-foreground font-mono">{step.num}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-white px-3 py-1 rounded-full border border-gray-200 text-ink">
                      <Clock className="size-3 text-emerald-600" /> {step.time}
                    </span>
                  </div>

                  <div className="size-10 rounded-2xl bg-brand/20 flex items-center justify-center text-ink mb-4">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-base font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-xs text-ink/70 leading-relaxed mb-4">{step.desc}</p>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="size-3.5" /> Certified Protocol Step
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
