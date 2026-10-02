"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const TWO_PACKAGES = [
  {
    id: "signature",
    name: "SIGNATURE MACHINE POLISHING & CORRECTION",
    tag: "PAINT RESTORATION",
    subtitle: "Multi-stage clearcoat compound leveling & hydrophobic topcoat.",
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    highlight: true,
  },
  {
    id: "ppf-armor",
    name: "PLATINUM PPF BODY ARMOR",
    tag: "FULL BODY ARMOR",
    subtitle: "10-mil self-healing optical polyurethane film shield.",
    image: "/images/IMG_20260809_181856.jpg.jpeg",
    highlight: false,
  },
]

export function OhioPackages() {
  return (
    <section id="packages" className="relative w-full bg-[#F4F2EC] text-[#141513] overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Pearl White background → large stacked package cards
          =================================================== */}
      <div className="lg:hidden">
        {/* Section Header on Pearl White */}
        <div className="px-6 pt-12 pb-8 space-y-3">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1A1C0A]/50 block">
            PACKAGES
          </span>
          <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase tracking-tight text-[#1A1C0A] leading-[0.92]">
            TWO BALANCED OPTIONS.
          </h2>
        </div>

        {/* Horizontal card rail */}
        <div
          className="flex gap-4 px-4 pb-10 overflow-x-auto"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {TWO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="flex-none w-[80vw] max-w-[340px] rounded-2xl overflow-hidden relative bg-[#141610] text-white flex flex-col border border-white/10"
              style={{ scrollSnapAlign: "start", minHeight: "420px" }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover object-center"
                  sizes="80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#141610]" />
                {/* Tag overlay */}
                <div className="absolute top-4 left-4">
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                    pkg.highlight ? "bg-[#E5FCA0] text-black" : "bg-white/15 text-white border border-white/20"
                  }`}>
                    {pkg.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <h3 className="text-lg font-black uppercase text-white leading-tight">
                  {pkg.name}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {pkg.subtitle}
                </p>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <Link
                    href="#contact"
                    className="flex items-center justify-between w-full group active:opacity-80 transition-opacity"
                    aria-label={`Inquire about ${pkg.name}`}
                  >
                    <span className="text-xs font-black uppercase tracking-wider text-[#E5FCA0]">
                      INQUIRE PACKAGE
                    </span>
                    <div className="size-9 rounded-full bg-[#E5FCA0] flex items-center justify-center text-black group-active:bg-white transition-colors">
                      <ArrowUpRight className="size-4 stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer for peek effect */}
          <div className="flex-none w-4" />
        </div>

        {/* Swipe hint */}
        <div className="px-6 pb-12">
          <span className="text-[9px] font-mono text-[#1A1C0A]/30 uppercase tracking-widest">
            ← Swipe to compare →
          </span>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - Warm Pearl White background (#F4F2EC)
          - NO black separator stripe
          - Two dominant 50/50 interactive package panels
          - lg:pl-72 xl:lg:pl-80 alignment with transparent rail
          =================================================== */}
      <div className="hidden lg:block lg:pl-72 xl:lg:pl-80">
        {/* Section Header integrated inside section */}
        <div className="px-10 pt-12 pb-6 flex items-center justify-between border-b border-[#141513]/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#141513]/50 block mb-1">
              PACKAGES &bull; TWO BALANCED OPTIONS
            </span>
            <h2 className="text-2xl font-black uppercase text-[#141513] tracking-tight">
              CURATED FINISHING PACKAGES
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[#141513]/50 uppercase tracking-widest">
            CHOOSE YOUR TREATMENT LEVEL
          </span>
        </div>

        {/* TWO DOMINANT 50/50 PACKAGE PANELS */}
        <div className="grid grid-cols-2 divide-x divide-white/10">
          {TWO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="relative min-h-[500px] p-10 flex flex-col justify-between group overflow-hidden bg-[#131512] text-white border-t-2 border-transparent hover:border-[#E5FCA0] transition-all duration-300"
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/50 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  pkg.highlight ? "bg-[#E5FCA0] text-black" : "bg-white/10 text-white border border-white/15"
                }`}>
                  {pkg.tag}
                </span>

                <Link
                  href="#contact"
                  className="size-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black group-hover:border-[#E5FCA0] group-hover:scale-110 transition-all cursor-pointer shadow-lg"
                  aria-label={`Inquire ${pkg.name}`}
                >
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </Link>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-black uppercase text-white leading-tight">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-white/70 font-normal max-w-sm">
                  {pkg.subtitle}
                </p>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
                  >
                    <span>INQUIRE PACKAGE</span>
                    <ArrowUpRight className="size-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
