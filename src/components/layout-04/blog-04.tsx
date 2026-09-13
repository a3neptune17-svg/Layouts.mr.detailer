"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Cpu, Terminal, Shield, Zap } from "lucide-react"

const FEATURED_ARTICLE = {
  title: "PAINT PROTECTION FILM (PPF) VS CERAMIC MATRIX",
  category: "CORE COMPARISON",
  date: "2026 EDITION",
  image: "/images/IMG_20260809_180823.jpg.jpeg",
  summary: "An in-depth empirical comparison between self-healing polyurethane PPF barriers and SiO2/TiO2 nano-ceramic hydrophobic chemical bonds.",
}

const TECH_ARTICLES = [
  {
    id: 1,
    title: "9H COATING HYDROPHOBIC ANGLE TEST",
    category: "LAB TEST",
    readTime: "2 MIN",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
  },
  {
    id: 2,
    title: "MULTI-STAGE PAINT CLEARCOAT RESTORATION",
    category: "METHODOLOGY",
    readTime: "4 MIN",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
  },
]

export function Blog04() {
  return (
    <section id="blog" className="relative w-full bg-[#080A0C] py-20 lg:py-28 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center gap-1.5 rounded-full bg-brand/20 border border-brand/40 px-3.5 py-1 text-xs font-mono font-bold text-brand uppercase tracking-widest">
                <Terminal className="size-3.5 text-brand" /> TECH LOGS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              CYBER BLOG
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-extrabold text-black hover:bg-white transition-all shrink-0 uppercase tracking-widest"
          >
            <span>VIEW ALL LOGS</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Bento Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Hero Card (8 Cols) */}
          <div className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#10141A] p-8 hover:border-brand/50 transition-all duration-300 shadow-2xl">
            <div>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                  src={FEATURED_ARTICLE.image}
                  alt={FEATURED_ARTICLE.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141A] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-brand px-3.5 py-1 text-[11px] font-black text-black uppercase tracking-widest">
                    {FEATURED_ARTICLE.category}
                  </span>
                  <span className="rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-[11px] font-mono font-bold text-white/80 border border-white/10 uppercase">
                    {FEATURED_ARTICLE.date}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight group-hover:text-brand transition-colors leading-snug">
                {FEATURED_ARTICLE.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                {FEATURED_ARTICLE.summary}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-brand">
              <span>READ FEATURED LOG</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Secondary Stacked Logs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {TECH_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#10141A] p-6 hover:border-brand/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-extrabold uppercase text-brand tracking-widest">
                      {article.category} • {article.readTime}
                    </span>
                    <h4 className="text-base font-extrabold text-white uppercase group-hover:text-brand transition-colors leading-snug mt-1">
                      {article.title}
                    </h4>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-widest text-white/70">
                  <span>ACCESS LOG</span>
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
