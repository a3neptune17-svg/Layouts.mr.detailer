"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const GALLERY_ITEMS = [
  {
    id: "gt3rs",
    title: "PORSCHE 911 GT3 RS",
    sub: "Full Body XPEL PPF & 10H Graphene Coating",
    image: "/images/IMG_20260809_180739.jpg.jpeg",
    studio: "LUDHIANA STUDIO",
    imagePos: "object-center",
  },
  {
    id: "project2",
    title: "LUXURY SEDAN DETAIL",
    sub: "Paint Correction & Ceramic Coating",
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    studio: "JAMMU STUDIO",
    imagePos: "object-center",
  },
  {
    id: "project3",
    title: "INTERIOR RESTORATION",
    sub: "Full Cabin Spa & Leather Care",
    image: "/images/IMG_20260809_180419.jpg.jpeg",
    studio: "LUDHIANA STUDIO",
    imagePos: "object-top",
  },
]

export function OhioGallery() {
  return (
    <section id="our-work" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Large editorial images stacked — premium portfolio feel
          =================================================== */}
      <div className="lg:hidden">
        {/* Section Header */}
        <div className="px-6 pt-14 pb-8 space-y-3">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block">
            OUR WORK
          </span>
          <h2 className="text-[clamp(2.2rem,9vw,3.5rem)] font-black uppercase tracking-tight text-white leading-[0.92]">
            OUR MOST RECENT PROJECTS.
          </h2>
        </div>

        {/* Large featured image */}
        <div className="px-4 space-y-4">
          {/* First — tall hero card */}
          <Link
            href="#contact"
            className="relative block w-full rounded-2xl overflow-hidden group active:scale-[0.98] transition-transform"
            style={{ minHeight: "320px" }}
          >
            <Image
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              fill
              className="object-cover object-center group-active:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 95vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Top badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[9px] font-mono font-bold text-black bg-[#E5FCA0] px-3 py-1 rounded-full">
                {GALLERY_ITEMS[0].studio}
              </span>
              <div className="size-9 rounded-full border border-white/25 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-active:bg-[#E5FCA0] group-active:text-black transition-all">
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-2xl font-black uppercase text-white leading-tight">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-[11px] font-mono text-white/60 mt-1">
                {GALLERY_ITEMS[0].sub}
              </p>
            </div>
          </Link>

          {/* Horizontal scroll rail for remaining items */}
          <div
            className="flex gap-3 pb-2 overflow-x-auto"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {GALLERY_ITEMS.slice(1).map((item) => (
              <Link
                key={item.id}
                href="#contact"
                className="flex-none w-[70vw] max-w-[300px] relative rounded-xl overflow-hidden group active:scale-[0.97] transition-transform"
                style={{ scrollSnapAlign: "start", minHeight: "200px" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.imagePos} group-active:scale-105 transition-transform duration-500`}
                  sizes="70vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute top-3 right-3">
                  <div className="size-7 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white group-active:bg-[#E5FCA0] group-active:text-black transition-all">
                    <ArrowUpRight className="size-3 stroke-[2.5]" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-sm font-black uppercase text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-mono text-white/50 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </Link>
            ))}
            <div className="flex-none w-4" />
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 pt-6 pb-12">
          <Link
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-4 text-xs font-black uppercase tracking-wider text-white active:bg-white/10 transition-colors"
          >
            <span>EXPLORE ALL PROJECTS</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Featured project car panel clickable
          - Left panel spans under transparent rail
          =================================================== */}
      <div className="hidden lg:block">
        {/* CONTROLLED EDITORIAL COMPOSITION */}
        <div className="grid grid-cols-12 divide-x divide-white/10">

          {/* Left Panel (5 cols): Statement Block (spans under transparent rail) */}
          <div className="col-span-5 bg-[#131512] p-12 lg:pl-72 xl:lg:pl-80 flex flex-col justify-between min-h-[420px]">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
                PROJECT ARCHIVE
              </span>
              <h2 className="text-4xl xl:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                OUR MOST RECENT PROJECTS.
              </h2>
            </div>

            <div className="pt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#E5FCA0] hover:text-black transition-all border border-white/15"
              >
                <span>EXPLORE ALL PROJECTS</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Panel (7 cols): Featured Project Car — Fully Clickable */}
          <Link
            href="#contact"
            className="col-span-7 relative min-h-[420px] bg-black overflow-hidden group p-8 flex flex-col justify-between border-t-2 border-transparent hover:border-[#E5FCA0] transition-all duration-300 cursor-pointer block"
            aria-label="View Porsche 911 GT3 RS Project"
          >
            <Image
              src="/images/IMG_20260809_180739.jpg.jpeg"
              alt="Porsche 911 GT3 RS"
              fill
              className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
              sizes="60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-black bg-[#E5FCA0] px-3 py-1 rounded-full">
                LUDHIANA STUDIO
              </span>
              <div className="size-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black transition-all">
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-3xl font-black uppercase text-white">
                PORSCHE 911 GT3 RS
              </h3>
              <p className="text-xs text-white/70 font-mono mt-0.5">
                Full Body XPEL PPF &amp; 10H Graphene Coating
              </p>
            </div>
          </Link>

        </div>
      </div>

    </section>
  )
}
