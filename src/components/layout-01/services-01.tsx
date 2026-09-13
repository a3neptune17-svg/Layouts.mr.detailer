"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Shield, Droplets, Gauge, Check, ArrowRight, Star, Clock } from "lucide-react"

const SERVICES_DATA = [
  {
    id: "ceramic",
    title: "9H Nano Ceramic Coating",
    badge: "5-Year Hydrophobic Seal",
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    icon: Sparkles,
    price: "From $599",
    duration: "1-2 Days",
    description: "Multi-layer nano-ceramic coating creating a crystal-clear shield against UV rays, acid rain, bird drops, and swirl marks with extreme hydrophobic gloss.",
    features: [
      "9H Hardness Glass Protection",
      "Self-Cleaning Hydrophobic Layer",
      "Mirror-Like Deep Paint Gloss",
      "5-Year Transferable Warranty",
      "Includes 1-Stage Gloss Polish",
      "Certified Gtechniq Installer"
    ],
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    badge: "Self-Healing Armor",
    image: "/images/IMG_20260809_180419.jpg.jpeg",
    icon: Shield,
    price: "From $899",
    duration: "2-3 Days",
    description: "Military-grade clear polyurethane film designed to absorb rock chips, road debris, and scratches with self-healing thermal technology.",
    features: [
      "Absorbs Impact & Rock Chips",
      "Heat-Activated Self Healing",
      "Invisible High-Gloss Finish",
      "10-Year Anti-Yellowing Guarantee",
      "Custom Edge Wraps",
      "XPEL Stealth & Ultimate Plus"
    ],
  },
  {
    id: "correction",
    title: "Paint Correction & Polish",
    badge: "Showroom Mirror Finish",
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    icon: Gauge,
    price: "From $399",
    duration: "1 Day",
    description: "Multi-stage machine compounding and dual-action polishing to eliminate up to 95% of swirl marks, light scratches, and oxidation.",
    features: [
      "Depth Gauge Panel Mapping",
      "Swirl & Scratch Removal",
      "Multi-Stage Polish Refinement",
      "Preps Surface for Coating",
      "Dual-Action Rotary Compound",
      "Zero Buffer Trails Guarantee"
    ],
  },
  {
    id: "interior",
    title: "Interior Deep Extraction & Care",
    badge: "Sanitized & Conditioned",
    image: "/images/IMG_20260809_180739.jpg.jpeg",
    icon: Droplets,
    price: "From $249",
    duration: "4 Hours",
    description: "Deep hot-water extraction, leather steam rejuvenation, alcantara brushing, and UV protection for a spotless, factory-fresh cabin atmosphere.",
    features: [
      "Hot-Water Stain Extraction",
      "pH-Balanced Leather Nourish",
      "Odor & Bacteria Elimination",
      "Matte UV Trim Sealant",
      "Steam Crevice Sterilization",
      "Alcantara & Fabric Guard"
    ],
  },
]

export function Services01() {
  const [activeTab, setActiveTab] = useState("ceramic")
  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0]
  const Icon = activeService.icon

  return (
    <section id="services" className="relative bg-[#0B0D0A] py-12 lg:py-16 text-white border-t border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand border border-brand/30">
              <Sparkles className="size-3 text-brand" /> Interactive Catalog
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Precision Detailing Matrix
            </h2>
            <p className="mt-1 text-sm text-white/70 max-w-lg">
              Click tabs to explore specs, pricing, and turn-around times for each package.
            </p>
          </div>
          
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-white/10 shrink-0"
          >
            Compare All Packages <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Tab Selection Buttons */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {SERVICES_DATA.map((service) => {
            const TabIcon = service.icon
            const isActive = activeTab === service.id
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all shrink-0 ${
                  isActive
                    ? "bg-brand text-brand-foreground shadow-lg shadow-brand/20 scale-[1.02]"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                <TabIcon className={`size-4 ${isActive ? "text-brand-foreground" : "text-white/50"}`} />
                <span>{service.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Service Showcase Box */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#121511] p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <span className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-brand border border-brand/30">
                {activeService.badge}
              </span>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-white/90 bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                  <Clock className="size-3.5 text-brand" /> {activeService.duration}
                </span>
                <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-extrabold text-brand-foreground shadow-md">
                  {activeService.price}
                </span>
              </div>
            </div>

            {/* Right Specification Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/20 text-brand border border-brand/30">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                  <p className="text-xs font-semibold text-brand">{activeService.badge}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/80">
                {activeService.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Included Studio Specs</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-medium text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Check className="size-2.5 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-white/60 font-medium">Starting from <span className="text-lg font-bold text-white">{activeService.price}</span></div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-bold text-brand-foreground shadow-md transition-transform hover:scale-105"
                >
                  <span>Book {activeService.title}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

