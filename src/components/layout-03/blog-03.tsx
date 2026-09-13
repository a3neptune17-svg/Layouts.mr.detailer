"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react"

const ARTICLES_03 = [
  {
    id: 1,
    title: "CERAMIC VS PPF: THE ULTIMATE GUIDE",
    category: "PROTECTION",
    readTime: "4 MIN READ",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    excerpt: "Comprehensive breakdown comparing self-healing paint protection film with ultra-hydrophobic ceramic coatings.",
  },
  {
    id: 2,
    title: "9H NANOTECH MAINTENANCE PROTOCOLS",
    category: "CARE GUIDE",
    readTime: "3 MIN READ",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    excerpt: "Essential double-bucket wash techniques to preserve maximum slickness and gloss depth after coating.",
  },
  {
    id: 3,
    title: "MULTI-STAGE PAINT CLEARCOAT RESTORATION",
    category: "CORRECTION",
    readTime: "5 MIN READ",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    excerpt: "Precision machine polishing methodologies designed to safely eliminate 95%+ swirl marks and scratches.",
  },
]

export function Blog03() {
  return (
    <section id="blog" className="relative w-full bg-[#0B0D0A] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-brand/20 border border-brand/40 px-3.5 py-1 text-xs font-black text-brand uppercase tracking-widest">
                <BookOpen className="size-3.5 text-brand" /> JOURNAL
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              STUDIO BLOG
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold text-white hover:bg-brand hover:text-black transition-all shrink-0 uppercase tracking-widest"
          >
            <span>EXPLORE ALL ARTICLES</span>
            <ArrowUpRight className="size-4 text-brand" />
          </Link>
        </div>

        {/* Staggered Stacking Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_03.map((article) => (
            <article
              key={article.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#121610] p-6 hover:border-brand/50 transition-all duration-300 shadow-2xl"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121610] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-black text-black uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 mb-2">
                  <Sparkles className="size-3 text-brand" />
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white uppercase group-hover:text-brand transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-3 text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand">
                <span>READ STORY</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
