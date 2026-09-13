"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Shield, Droplets, Gauge, Check, ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react"

const SERVICES_DATA = [
  {
    id: "ceramic",
    title: "9H CERAMIC COATING",
    badge: "HYDROPHOBIC SEAL",
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    icon: Sparkles,
    price: "$599",
    duration: "1-2 DAYS",
    tag: "COATING",
    features: [
      "9H GLASS MATRIX",
      "HYDROPHOBIC LAYER",
      "HIGH-GLOSS DEPTH",
      "5-YR WARRANTY",
      "GLOSS POLISH",
      "CERTIFIED"
    ],
  },
  {
    id: "ppf",
    title: "PAINT PROTECTION FILM",
    badge: "BODY ARMOR",
    image: "/images/IMG_20260809_180419.jpg.jpeg",
    icon: Shield,
    price: "$899",
    duration: "2-3 DAYS",
    tag: "PROTECTION",
    features: [
      "CHIP & SCRATCH ARMOR",
      "SELF-HEALING TPU",
      "INVISIBLE GLOSS",
      "10-YR GUARANTEE",
      "CUSTOM CUT EDGES",
      "XPEL ULTIMATE"
    ],
  },
  {
    id: "correction",
    title: "PAINT CORRECTION",
    badge: "SHOWROOM POLISH",
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    icon: Gauge,
    price: "$399",
    duration: "1 DAY",
    tag: "RESTORATION",
    features: [
      "DEPTH PANEL MAPPING",
      "SWIRL REMOVAL",
      "MULTI-STAGE POLISH",
      "SURFACE PREP",
      "ROTARY COMPOUND",
      "ZERO BUFF MARKS"
    ],
  },
  {
    id: "interior",
    title: "INTERIOR SPA",
    badge: "STEAM EXTRACTION",
    image: "/images/IMG_20260809_180739.jpg.jpeg",
    icon: Droplets,
    price: "$249",
    duration: "4 HOURS",
    tag: "CABIN CARE",
    features: [
      "HOT-WATER EXTRACTION",
      "LEATHER NOURISH",
      "OZONE PURIFY",
      "UV TRIM SEAL",
      "STEAM STERILIZE",
      "ALCANTARA GUARD"
    ],
  },
]

export function Services01() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0])

  const activeService = SERVICES_DATA[activeIndex]
  const Icon = activeService.icon

  const paginate = (newDirection: number) => {
    const nextIdx = (activeIndex + newDirection + SERVICES_DATA.length) % SERVICES_DATA.length
    setActiveIndex([nextIdx, newDirection])
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  return (
    <section id="services" className="relative bg-[#0B0D0A] py-14 lg:py-20 text-white border-t border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-widest text-brand-foreground">
              <Sparkles className="size-3 text-brand-foreground" /> CATALOG
            </span>
            <h2 className="mt-3 text-5xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none">
              SERVICES
            </h2>
          </div>
          
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-6 py-3 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black transition-all shrink-0"
          >
            <span>PACKAGES</span> <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Quick Category Indicator Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mt-4">
          {SERVICES_DATA.map((service, idx) => {
            const TabIcon = service.icon
            const isActive = activeIndex === idx
            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex([idx, idx > activeIndex ? 1 : -1])}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shrink-0 ${
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

        {/* Outer Container with Far Left & Far Right Navigation Arrows */}
        <div className="relative mt-8">
          {/* Far Left Arrow Button */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Slide Left to Previous Service"
            title="Previous Service"
            className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-30 flex size-12 sm:size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xl hover:scale-110 transition-transform border-2 border-black"
          >
            <ChevronLeft className="size-7 stroke-[3]" />
          </button>

          {/* Far Right Arrow Button */}
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Slide Right to Next Service"
            title="Next Service"
            className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-30 flex size-12 sm:size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xl hover:scale-110 transition-transform border-2 border-black"
          >
            <ChevronRight className="size-7 stroke-[3]" />
          </button>

          {/* Horizontal Sliding Animated Viewport */}
          <div className="min-h-[480px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#121511] p-6 lg:p-10 shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 28 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Image Showcase */}
                  <div className="lg:col-span-6 relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 group">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-md px-4 py-1 text-xs font-black uppercase tracking-widest text-brand border border-brand/30">
                      {activeService.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white/90 bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                        <Clock className="size-3.5 text-brand" /> {activeService.duration}
                      </span>
                      <span className="rounded-full bg-brand px-4 py-1.5 text-xs font-black text-brand-foreground shadow-md">
                        {activeService.price}
                      </span>
                    </div>
                  </div>

                  {/* Right Specification Panel */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/20 text-brand border border-brand/30">
                          <Icon className="size-6" />
                        </span>
                        <div>
                          <h3 className="text-3xl font-black uppercase text-white tracking-tight">{activeService.title}</h3>
                          <p className="text-xs font-black uppercase tracking-widest text-brand">{activeService.badge}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">STUDIO SPECS</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeService.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs font-black tracking-widest text-white bg-white/5 p-3 rounded-xl border border-white/10">
                            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                              <Check className="size-2.5 stroke-[3]" />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="text-xs text-white/60 font-black uppercase tracking-widest">STARTING <span className="text-xl font-black text-brand">{activeService.price}</span></div>
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-xs font-black uppercase tracking-widest text-brand-foreground shadow-md transition-transform hover:scale-105"
                      >
                        <span>BOOK NOW</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
