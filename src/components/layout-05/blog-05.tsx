"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Award, Shield, CheckCircle2 } from "lucide-react"

const SPOTLIGHT_ARTICLE = {
  title: "THE ART OF CERAMIC COATING & PPF INTEGRATION",
  category: "EXECUTIVE REPORT",
  author: "MASTER DETAILER LAB",
  date: "2026 EDITION",
  image: "/images/IMG_20260809_180823.jpg.jpeg",
  excerpt: "An executive analysis of multi-layer surface protection, combining physical impact barriers with hydrophobic nano-matrices for ultimate automotive longevity.",
}

const SIDE_ARTICLES = [
  {
    id: 1,
    title: "PAINT DEPTH MEASUREMENT & CLEARCOAT SAFETY PROTOCOLS",
    category: "LAB TEST",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
  },
  {
    id: 2,
    title: "CONCOURS-LEVEL LEATHER & INTERIOR PRESERVATION",
    category: "INTERIOR",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
  },
]

export function Blog05() {
  return (
    <section id="blog" className="relative w-full bg-[#07080A] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-brand/15 border border-brand/30 px-3.5 py-1 text-xs font-bold text-brand uppercase tracking-widest">
                <Award className="size-3.5 text-brand" /> EXECUTIVE JOURNAL
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              EXECUTIVE BLOG
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-brand hover:text-black transition-all shrink-0 uppercase tracking-widest"
          >
            <span>VIEW ALL REPORTS</span>
            <ArrowUpRight className="size-4 text-brand" />
          </Link>
        </div>

        {/* Split Screen Executive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Executive Story (7 Cols) */}
          <div className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#12161E] p-8 hover:border-brand/40 transition-all duration-300 shadow-2xl">
            <div>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                  src={SPOTLIGHT_ARTICLE.image}
                  alt={SPOTLIGHT_ARTICLE.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161E] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-brand px-3.5 py-1 text-[11px] font-black text-black uppercase tracking-widest">
                    {SPOTLIGHT_ARTICLE.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-3">
                <span>{SPOTLIGHT_ARTICLE.author}</span>
                <span>•</span>
                <span>{SPOTLIGHT_ARTICLE.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight group-hover:text-brand transition-colors leading-snug">
                {SPOTLIGHT_ARTICLE.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                {SPOTLIGHT_ARTICLE.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand">
              <span>READ FULL REPORT</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Secondary Executive Reports (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {SIDE_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#12161E] p-6 hover:border-brand/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-brand tracking-widest">
                      {article.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-white uppercase group-hover:text-brand transition-colors leading-snug mt-1">
                      {article.title}
                    </h4>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-white/70">
                  <span>EXECUTIVE BRIEF</span>
                  <ArrowUpRight className="size-3.5 text-brand group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
