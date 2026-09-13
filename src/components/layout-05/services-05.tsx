"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Shield, Gauge, Droplets, ArrowRight, Check } from "lucide-react"

const CATEGORIES = ["All", "Ceramic Coating", "PPF Film", "Paint Correction", "Interior"]

const SERVICES_GRID = [
  {
    id: "ceramic-1",
    category: "Ceramic Coating",
    title: "9H Nano Ceramic Coating",
    price: "From $599",
    image: "/images/Picsart_26-09-02_15-32-13-361.jpg.jpeg",
    icon: Sparkles,
    desc: "5-Year permanent hydrophobic matrix bond protecting paint against weathering, UV, bird acid, and swirl damage.",
    features: ["Hydrophobic Gloss", "UV & Fallout Barrier", "5-Year Transferable Warranty"],
  },
  {
    id: "ppf-1",
    category: "PPF Film",
    title: "Full-Front Self-Healing PPF",
    price: "From $899",
    image: "/images/Picsart_26-09-02_15-33-19-009.jpg.jpeg",
    icon: Shield,
    desc: "10-Mil optically clear polyurethane wrap defending bumper, hood, and mirrors from rock chips and scratches.",
    features: ["Impact Absorbing", "Heat Self-Healing", "10-Year Warranty"],
  },
  {
    id: "correction-1",
    category: "Paint Correction",
    title: "Multi-Stage Paint Correction",
    price: "From $399",
    image: "/images/IMG_20260902_144058.jpg.jpeg",
    icon: Gauge,
    desc: "Precision machine compounding to erase up to 95% swirl marks, oxidation, and micro-marring.",
    features: ["Sub-Surface Leveling", "Swirl Removal Up To 95%", "Preps for Coating"],
  },
  {
    id: "interior-1",
    category: "Interior",
    title: "Executive Interior Restoration",
    price: "From $249",
    image: "/images/IMG_20260809_180739.jpg.jpeg",
    icon: Droplets,
    desc: "Hot-water extraction, leather conditioning, alcantara brushing, and ozone odor elimination.",
    features: ["Stain & Odor Purify", "Leather Rejuvenation", "UV Matte Finish"],
  },
]

export function Services05() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filtered = activeCategory === "All"
    ? SERVICES_GRID
    : SERVICES_GRID.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="relative w-full bg-[#090B0E] py-12 lg:py-16 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-extrabold uppercase text-brand border border-brand/30">
              <Sparkles className="size-3.5 text-brand" /> Executive Filter Catalog
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Detailing & Protection Catalog
            </h2>
            <p className="mt-1 text-sm text-white/70 max-w-xl">
              Filter by category or select your desired service to instantly calculate pricing.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold text-brand-foreground hover:scale-105 transition-all shadow-md shrink-0"
          >
            Custom Quote Calculator <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Category Tabs Bar */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-brand text-brand-foreground shadow-md scale-[1.02]"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Catalog Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl border border-white/10 bg-[#13161C] p-6 transition-all duration-300 hover:border-brand hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-900 mb-6 border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-brand border border-brand/30">
                      {item.category}
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full bg-brand px-4 py-1 text-xs font-extrabold text-brand-foreground shadow-md">
                      {item.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand/20 text-brand font-bold border border-brand/30">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>

                  <p className="text-xs text-white/75 leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/80 border border-white/10"
                      >
                        <Check className="size-3 text-emerald-400 stroke-[3]" /> {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/50">Custom Add-Ons Available</span>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-brand transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

