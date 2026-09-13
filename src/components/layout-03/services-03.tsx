"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Shield, Droplets, Gauge, ArrowRight, Check, ChevronDown } from "lucide-react"

const SERVICES_LAYOUT3 = [
  {
    id: "ceramic",
    title: "Ceramic Paint Coating",
    tag: "Most Popular",
    price: "From $599",
    image: "/images/IMG_20260809_181336.jpg.jpeg",
    icon: Sparkles,
    desc: "Long-lasting hydrophobic glass coating protecting paintwork against weathering, bird droppings, and UV fading while enhancing depth.",
    points: ["5-Year Hydrophobic Coating", "Extreme Water Repellency", "Deep Wet-Look Gloss"],
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    tag: "Maximum Defense",
    price: "From $899",
    image: "/images/IMG_20260809_181431.jpg.jpeg",
    icon: Shield,
    desc: "High-impact polyurethane film engineered to shield bumper, hood, and side panels from rock chips, gravel, and parking scrapes.",
    points: ["Self-Healing Top Coat", "Optically Clear Finish", "10-Year Anti-Yellowing"],
  },
  {
    id: "correction",
    title: "Paint Correction & Polish",
    tag: "Mirror Restoration",
    price: "From $399",
    image: "/images/IMG_20260809_181856.jpg.jpeg",
    icon: Gauge,
    desc: "Multi-step machine compounding to remove oxidation, wash swirls, and minor scratches before applying protective sealants.",
    points: ["Sub-Surface Leveling", "Swirl Removal Up To 95%", "High-Gloss Finish"],
  },
  {
    id: "interior",
    title: "Deep Interior Extraction",
    tag: "Cabin Sanitization",
    price: "From $249",
    image: "/images/IMG_20260809_182009.jpg.jpeg",
    icon: Droplets,
    desc: "Steam extraction, carpet shampooing, leather conditioning, and anti-bacterial ozone treatment for immaculate cabin comfort.",
    points: ["Hot Water Extraction", "Leather Steam Conditioning", "Odor & Bacteria Purify"],
  },
]

export function Services03() {
  const [selectedRow, setSelectedRow] = useState("ceramic")

  return (
    <section id="services" className="relative w-full bg-[#0A0C0E] py-12 lg:py-16 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-xs font-extrabold uppercase text-brand border border-brand/30">
              <Sparkles className="size-3 text-brand" /> Row-Based Catalog
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Streamlined Service Menu
            </h2>
            <p className="mt-1 text-sm text-white/70 max-w-xl">
              Select any row below to reveal specs and feature checklists.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold text-brand-foreground shadow-md hover:scale-105 transition-all shrink-0"
          >
            Request Instant Quote <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* HORIZONTAL SERVICE ROWS */}
        <div className="space-y-4">
          {SERVICES_LAYOUT3.map((s) => {
            const Icon = s.icon
            const isSelected = selectedRow === s.id

            return (
              <div
                key={s.id}
                onClick={() => setSelectedRow(isSelected ? "" : s.id)}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isSelected
                    ? "bg-[#161a20] border-brand shadow-lg"
                    : "bg-[#111418] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Row Bar */}
                <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/20 text-brand font-bold shrink-0 border border-brand/30">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{s.title}</h3>
                        <span className="text-[10px] font-extrabold uppercase bg-brand/20 text-brand px-2.5 py-0.5 rounded-full border border-brand/30">
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">{s.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 self-end sm:self-center">
                    <span className="text-lg font-black text-white">{s.price}</span>
                    <div className={`size-8 rounded-full bg-white/10 flex items-center justify-center transition-transform ${isSelected ? "rotate-180 bg-brand text-brand-foreground" : "text-white"}`}>
                      <ChevronDown className="size-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Row Detail */}
                {isSelected && (
                  <div className="p-6 pt-0 border-t border-white/10 bg-[#161a20] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-fadeIn">
                    <div className="lg:col-span-4 relative h-48 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {s.points.map((pt) => (
                          <div key={pt} className="flex items-center gap-2 text-xs font-medium text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                            <Check className="size-3.5 text-emerald-400 stroke-[3] shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-white/50">Full Warranty & Inspection Included</span>
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-xs font-bold text-brand-foreground hover:scale-105 transition-transform"
                        >
                          <span>Reserve Package</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
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

