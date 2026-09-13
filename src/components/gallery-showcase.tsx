"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2, ShieldCheck } from "lucide-react"

const GALLERY_IMAGES = [
  {
    id: 1,
    title: "FERRARI 488",
    category: "CERAMIC",
    tag: "COATING",
    src: "/images/IMG_20260809_180252.jpg.jpeg",
  },
  {
    id: 2,
    title: "PORSCHE GT3",
    category: "PPF",
    tag: "ARMOR",
    src: "/images/IMG_20260809_180419.jpg.jpeg",
  },
  {
    id: 3,
    title: "LAMBORGHINI",
    category: "POLISH",
    tag: "CORRECTION",
    src: "/images/IMG_20260809_180638.jpg.jpeg",
  },
  {
    id: 4,
    title: "BMW M5",
    category: "SPA",
    tag: "INTERIOR",
    src: "/images/IMG_20260809_180739.jpg.jpeg",
  },
  {
    id: 5,
    title: "AUDI R8",
    category: "CERAMIC",
    tag: "GLASS",
    src: "/images/IMG_20260809_180823.jpg.jpeg",
  },
  {
    id: 6,
    title: "AMG GT",
    category: "PPF",
    tag: "SHIELD",
    src: "/images/IMG_20260809_180906.jpg.jpeg",
  },
]

export function GalleryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const categories = ["ALL", "CERAMIC", "PPF", "POLISH", "SPA"]

  const filteredImages = selectedCategory === "ALL"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="relative w-full bg-[#090B0D] py-16 lg:py-24 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand">
              SHOWROOM
            </span>
            <h2 className="mt-2 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
              GALLERY
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-black tracking-wider transition-all uppercase ${
                  selectedCategory === cat
                    ? "bg-brand text-brand-foreground shadow-md shadow-brand/20"
                    : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.src)}
              className="group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-black cursor-pointer shadow-xl transition-all duration-500 hover:border-brand/60"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg">
                  <Maximize2 className="size-4" />
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-brand transition-colors leading-none mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          >
            <div className="relative max-w-4xl w-full h-[80vh] overflow-hidden rounded-3xl border border-white/20">
              <Image
                src={activeImage}
                alt="Enlarged View"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 rounded-full bg-black/80 text-white px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-brand hover:text-black transition"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
