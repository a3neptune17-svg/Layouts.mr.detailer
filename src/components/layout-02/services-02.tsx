"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, ShieldCheck, Droplets, Gauge, ArrowUpRight, CheckCircle2 } from "lucide-react"

const SERVICES_EXPANDABLE = [
  {
    id: "ceramic",
    title: "9H Nano Ceramic Coating",
    subtitle: "5-Year Self-Cleaning Hydrophobic Guard",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    price: "$599+",
    desc: "Permanent nano-glass barrier shielding against UV, acid rain, bird droppings, and swirl damage while adding mirror depth.",
    specs: ["9H Nano-Glass Matrix", "UV & Oxidation Barrier", "Extreme High-Gloss Depth", "5-Year Certified Warranty"],
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    subtitle: "Self-Healing Clear Body Shield",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    price: "$899+",
    desc: "Military-grade 10-mil clear polyurethane film absorbing rock chips, road gravel, and parking scrapes with heat self-healing.",
    specs: ["10-Mil Polyurethane Film", "Heat-Activated Healing", "Rock Chip & Debris Deflector", "10-Year Anti-Yellow Guarantee"],
  },
  {
    id: "correction",
    title: "Precision Paint Correction",
    subtitle: "95%+ Swirl & Scratch Elimination",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    icon: Gauge,
    price: "$399+",
    desc: "Multi-pass rotary compounding and jeweling polish eliminating up to 95% of swirl marks, buffer trails, and oxidation.",
    specs: ["Sub-Micron Thickness Test", "Multi-Pass Compound", "Hologram-Free Finish", "2,000-Lumen Light Inspection"],
  },
  {
    id: "interior",
    title: "Executive Interior Spa",
    subtitle: "Steam Extraction & Leather Conditioning",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Droplets,
    price: "$249+",
    desc: "Hot-water extraction, alcantara restoration, leather steam rejuvenation, and anti-bacterial ozone sterilization.",
    specs: ["Deep Steam Extraction", "Nappa Leather Conditioning", "Ozone Odor Purifier", "Matte UV Shield Coating"],
  },
]

export function Services02() {
  const [activeCard, setActiveCard] = useState("ceramic")

  return (
    <section id="services" className="relative w-full bg-[#0b0d0a] py-12 lg:py-16 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Studio Service Accordion
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Luxury Protection Menu
            </h2>
            <p className="mt-1 text-sm text-white/60 max-w-lg">
              Hover over or click any service card to expand full specifications and package details.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-5 py-2.5 text-xs font-bold text-brand hover:bg-brand hover:text-brand-foreground transition-all shrink-0"
          >
            Custom Quote Calculator <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* 4-COLUMN EXPANDABLE ACCORDION CARDS CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-4 h-[550px] lg:h-[500px]">
          {SERVICES_EXPANDABLE.map((item) => {
            const Icon = item.icon
            const isExpanded = activeCard === item.id

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                onClick={() => setActiveCard(item.id)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-700 cursor-pointer flex flex-col justify-between p-6 ${
                  isExpanded
                    ? "lg:flex-[3.5] bg-neutral-900 border-brand/60 shadow-[0_0_50px_rgba(229,252,160,0.15)]"
                    : "lg:flex-1 bg-neutral-950/80 border-white/10 hover:border-white/30"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isExpanded ? "opacity-35 scale-105" : "opacity-20 hover:opacity-30"
                  }`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0" />

                {/* Top Badge & Icon Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md text-brand">
                      <Icon className="size-5" />
                    </span>
                    {isExpanded && (
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <span className="rounded-full bg-brand px-3.5 py-1 text-xs font-extrabold text-brand-foreground shadow-md">
                    {item.price}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-white transition-colors">
                    {item.title}
                  </h3>

                  {isExpanded ? (
                    <div className="mt-4 space-y-4 animate-fadeIn">
                      <p className="text-xs text-white/80 leading-relaxed max-w-lg">
                        {item.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {item.specs.map((spec) => (
                          <div key={spec} className="flex items-center gap-1.5 text-xs text-white/90 bg-black/60 px-3 py-1.5 rounded-xl border border-white/10">
                            <CheckCircle2 className="size-3.5 text-brand shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-white/50">Studio Warranty Included</span>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                        >
                          <span>Request Booking</span>
                          <ArrowUpRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-white/40 mt-1 line-clamp-1">
                      {item.subtitle}
                    </p>
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
