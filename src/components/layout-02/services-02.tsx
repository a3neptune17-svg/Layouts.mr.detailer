"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, ShieldCheck, Droplets, Gauge, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const SERVICES_EXPANDABLE = [
  {
    id: "ceramic",
    title: "CERAMIC",
    subtitle: "NANO GLASS",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    price: "$599",
    tag: "COATING",
    specs: ["9H HARDNESS", "HYDROPHOBIC", "UV DEFENSE", "5-YR WARRANTY"],
  },
  {
    id: "ppf",
    title: "PPF",
    subtitle: "BODY ARMOR",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    price: "$899",
    tag: "PROTECTION",
    specs: ["10-MIL FILM", "SELF-HEALING", "CHIP DEFLECT", "10-YR GUARANTEE"],
  },
  {
    id: "correction",
    title: "CORRECTION",
    subtitle: "PAINT POLISH",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    icon: Gauge,
    price: "$399",
    tag: "RESTORATION",
    specs: ["MULTI-PASS", "SWIRL-FREE", "MIRROR GLOSS", "INSPECTION"],
  },
  {
    id: "interior",
    title: "INTERIOR",
    subtitle: "CABIN SPA",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Droplets,
    price: "$249",
    tag: "DETAILING",
    specs: ["HOT STEAM", "LEATHER CARE", "OZONE PURIFY", "MATTE UV"],
  },
]

export function Services02() {
  const [activeCard, setActiveCard] = useState("ceramic")

  const activeIndex = SERVICES_EXPANDABLE.findIndex((s) => s.id === activeCard)

  const nextCard = () => {
    const nextIdx = (activeIndex + 1) % SERVICES_EXPANDABLE.length
    setActiveCard(SERVICES_EXPANDABLE[nextIdx].id)
  }

  const prevCard = () => {
    const prevIdx = (activeIndex - 1 + SERVICES_EXPANDABLE.length) % SERVICES_EXPANDABLE.length
    setActiveCard(SERVICES_EXPANDABLE[prevIdx].id)
  }

  return (
    <section id="services" className="relative w-full bg-white py-16 lg:py-24 text-slate-950 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Side Slide Arrow Controller */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              SERVICES
            </span>
            <h2 className="mt-3 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 uppercase leading-none">
              PROTECTION
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Side Slide Left & Right Arrow Controller */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevCard}
                aria-label="Previous Service"
                title="Slide to Previous Service"
                className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-950 hover:bg-slate-950 hover:text-white transition border border-slate-300 shadow-md"
              >
                <ChevronLeft className="size-5 stroke-[3]" />
              </button>
              <button
                type="button"
                onClick={nextCard}
                aria-label="Next Service"
                title="Slide to Next Service"
                className="flex size-11 items-center justify-center rounded-full bg-brand text-brand-foreground hover:scale-105 transition shadow-md border border-black/10"
              >
                <ChevronRight className="size-5 stroke-[3]" />
              </button>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all shrink-0 uppercase tracking-widest shadow-xl border border-slate-950"
            >
              QUOTE <ArrowUpRight className="size-4 text-brand" />
            </Link>
          </div>
        </div>

        {/* 4-COLUMN EXPANDABLE CARDS WITH SIDE SLIDE CONTROLLER */}
        <div className="relative flex flex-col lg:flex-row gap-5 h-[520px] lg:h-[460px]">
          {SERVICES_EXPANDABLE.map((item) => {
            const Icon = item.icon
            const isExpanded = activeCard === item.id

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-700 cursor-pointer flex flex-col justify-between p-7 ${
                  isExpanded
                    ? "lg:flex-[3.5] bg-slate-950 text-white border-slate-950 shadow-2xl shadow-slate-950/30"
                    : "lg:flex-1 bg-slate-100/90 text-slate-900 border-slate-200 hover:border-slate-400"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isExpanded ? "opacity-40 scale-105" : "opacity-15 hover:opacity-25"
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 z-0 transition-colors duration-700 ${
                  isExpanded ? "bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" : "bg-gradient-to-t from-slate-100 via-slate-100/40 to-transparent"
                }`} />

                {/* Top Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`flex size-11 items-center justify-center rounded-2xl border backdrop-blur-md transition-colors ${
                      isExpanded ? "bg-white/10 border-white/20 text-brand" : "bg-white border-slate-200 text-slate-900 shadow-sm"
                    }`}>
                      <Icon className="size-5" />
                    </span>
                    {isExpanded && (
                      <span className="text-xs font-black uppercase tracking-widest text-brand">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <span className={`rounded-full px-4 py-1.5 text-xs font-black tracking-wider ${
                    isExpanded ? "bg-brand text-brand-foreground" : "bg-slate-950 text-white"
                  }`}>
                    {item.price}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative z-10 mt-auto">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                    isExpanded ? "text-brand" : "text-slate-500"
                  }`}>
                    {item.tag}
                  </span>
                  <h3 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none mt-1 ${
                    isExpanded ? "text-white" : "text-slate-950"
                  }`}>
                    {item.title}
                  </h3>

                  {isExpanded && (
                    <div className="mt-6 space-y-4 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-2">
                        {item.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-2 text-xs font-black tracking-wider text-white bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">
                            <CheckCircle2 className="size-4 text-brand shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/50">WARRANTY</span>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand hover:underline"
                        >
                          <span>BOOK</span>
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
