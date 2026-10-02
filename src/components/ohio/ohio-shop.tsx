"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const SHOP_PRODUCTS = [
  { id: "sealant", name: "HYDROPHOBIC CERAMIC SEALANT", category: "SURFACE CARE", image: "/images/IMG_20260809_181336.jpg.jpeg" },
  { id: "ppf-care", name: "XPEL PPF CLEANER & CARE", category: "FILM MAINTENANCE", image: "/images/IMG_20260809_182009.jpg.jpeg" },
  { id: "wheel-rim", name: "9H WHEEL RIM SHIELD", category: "WHEEL ARMOR", image: "/images/IMG_20260809_182044.jpg.jpeg" },
  { id: "microfiber", name: "EDGELESS MICROFIBER TOWEL SET", category: "BUFFING CARE", image: "/images/IMG_20260809_182113.jpg.jpeg" },
]

export function OhioShop() {
  return (
    <section id="shop" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Section header → Horizontal product rail
          =================================================== */}
      <div className="lg:hidden">
        {/* Section Header */}
        <div className="px-6 pt-14 pb-6 space-y-3">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block">
            SHOP SHOWCASE
          </span>
          <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase tracking-tight text-white leading-[0.92]">
            PREMIUM CARE PRODUCTS.
          </h2>
          <p className="text-sm text-white/50">Display only — enquire for availability.</p>
        </div>

        {/* Horizontal product rail */}
        <div
          className="flex gap-4 px-4 pb-8 overflow-x-auto"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {SHOP_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="flex-none w-[55vw] max-w-[240px] rounded-2xl overflow-hidden bg-[#141610] border border-white/8 flex flex-col"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Product image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover object-center"
                  sizes="55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141610]/60" />
              </div>

              {/* Product info */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block">
                    {prod.category}
                  </span>
                  <h3 className="text-sm font-black uppercase text-white leading-tight">
                    {prod.name}
                  </h3>
                </div>

                <Link
                  href="#contact"
                  className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50"
                  aria-label={`Inquire about ${prod.name}`}
                >
                  <span>ENQUIRE</span>
                  <ArrowUpRight className="size-3 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-none w-4" />
        </div>

        {/* Swipe hint + CTA */}
        <div className="px-4 pb-12 flex items-center justify-between">
          <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">← Swipe →</span>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-black uppercase tracking-wider text-white active:bg-white/10 transition-colors"
          >
            <span>ALL PRODUCTS</span>
            <ArrowUpRight className="size-3.5 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Clickable product showcase cards
          - lg:pl-72 xl:lg:pl-80 alignment with transparent rail
          =================================================== */}
      <div className="hidden lg:block lg:pl-72 xl:lg:pl-80">
        {/* Section Header Title inside section */}
        <div className="px-10 pt-12 pb-6 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block mb-1">
              SHOP SHOWCASE &bull; DISPLAY ONLY
            </span>
            <h2 className="text-2xl font-black uppercase text-white tracking-tight">
              PRECISION SURFACE CARE &amp; SEALANTS
            </h2>
          </div>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            INQUIRE FOR IN-STUDIO AVAILABILITY
          </span>
        </div>

        {/* Product Grid — Fully Clickable Cards */}
        <div className="grid grid-cols-4 divide-x divide-white/10 border-b border-white/10">
          {SHOP_PRODUCTS.map((prod) => (
            <Link
              key={prod.id}
              href="#contact"
              className="relative min-h-[380px] bg-[#131512] p-6 flex flex-col justify-between group overflow-hidden border-t-2 border-transparent hover:border-[#E5FCA0] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E5FCA0]"
              aria-label={`Inquire about ${prod.name}`}
            >
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-wider">
                  {prod.category}
                </span>

                <div className="size-9 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black group-hover:border-[#E5FCA0] group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                </div>
              </div>

              <div className="relative z-10 mt-auto space-y-2">
                <h3 className="text-base font-black uppercase text-white leading-tight group-hover:text-white transition-colors">
                  {prod.name}
                </h3>
                <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-wider flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  <span>ENQUIRE ITEM</span>
                  <ArrowUpRight className="size-3 stroke-[2.5]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
