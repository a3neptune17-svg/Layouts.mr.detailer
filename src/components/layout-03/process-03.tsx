"use client"

import { useState } from "react"
import { CheckCircle2, ShieldCheck, Sparkles, Sliders, Search, ArrowRight } from "lucide-react"

const STEPS = [
  {
    num: "01",
    title: "Surface Inspection & Decon Bath",
    time: "45 Mins",
    desc: "Digital thickness gauge measurement followed by iron fallout bath and clay bar treatment to remove sub-surface road grit.",
    icon: Search,
    detail: "Prep stage ensures paint surface is completely clean and decontaminated before machine polish."
  },
  {
    num: "02",
    title: "Multi-Pass Machine Compound",
    time: "2 Hours",
    desc: "Dual-action jeweling polish eliminating up to 95% of micro-marring, swirl marks, and buffer trails.",
    icon: Sliders,
    detail: "Restores depth and gloss without cutting unnecessarily deep into factory clear coat."
  },
  {
    num: "03",
    title: "Cleanroom Ceramic / PPF Shield",
    time: "4 Hours",
    desc: "Cleanroom application of 9H nano-glass coating or clear self-healing TPU protection film.",
    icon: Sparkles,
    detail: "Installed in climate-controlled cleanroom bay to prevent dust nibs or environmental contamination."
  },
  {
    num: "04",
    title: "Infrared Curing & 2000-Lumen QC",
    time: "1 Hour",
    desc: "Shortwave infrared lamp baking and multi-angle inspection under 2,000-lumen floodlights.",
    icon: ShieldCheck,
    detail: "Ensures permanent chemical bond and flawless handover quality."
  },
]

export function Process03() {
  const [activeStep, setActiveStep] = useState(0)
  const currentStep = STEPS[activeStep]
  const Icon = currentStep.icon

  return (
    <section id="process" className="relative w-full bg-gray-50 py-12 lg:py-16 text-ink border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-extrabold uppercase text-ink">
            <Sparkles className="size-3.5 text-brand-foreground" /> Interactive Stepper
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-ink">
            Rhythmic 4-Stage Workflow
          </h2>
          <p className="mt-1 text-sm text-ink/70">
            Click any step tab to view technical execution details.
          </p>
        </div>

        {/* Step Tabs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isActive
                    ? "bg-ink text-white border-ink shadow-lg scale-[1.02]"
                    : "bg-white text-ink/70 border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-black font-mono ${isActive ? "text-brand" : "text-ink/40"}`}>{step.num}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-ink/60"}`}>{step.time}</span>
                </div>
                <div className="text-xs font-bold truncate">{step.title}</div>
              </button>
            )
          })}
        </div>

        {/* Active Step Detail Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand/20 text-ink font-bold">
                <Icon className="size-6 text-brand-foreground" />
              </span>
              <div>
                <span className="text-xs font-bold text-brand-foreground uppercase tracking-wider">Step {currentStep.num} Protocol</span>
                <h3 className="text-2xl font-bold text-ink">{currentStep.title}</h3>
              </div>
            </div>
            <p className="text-sm text-ink/80 leading-relaxed max-w-xl">
              {currentStep.desc}
            </p>
            <div className="text-xs font-medium text-ink/60 bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
              <span>{currentStep.detail}</span>
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
              className="px-6 py-3 rounded-full bg-brand text-brand-foreground text-xs font-extrabold shadow-md hover:scale-105 transition-transform flex items-center gap-2"
            >
              <span>Next Stage ({STEPS[(activeStep + 1) % STEPS.length].num})</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
