"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const ARTICLES = [
  {
    id: 1,
    title: "CERAMIC vs PPF",
    category: "PROTECTION",
    tag: "COMPARISON",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
  },
  {
    id: 2,
    title: "9H CARE",
    category: "MAINTENANCE",
    tag: "TECHNIQUES",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
  },
  {
    id: 3,
    title: "POLISHING",
    category: "CORRECTION",
    tag: "RESTORATION",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative w-full bg-white py-16 lg:py-24 text-slate-950 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              JOURNAL
            </span>
            <h2 className="mt-3 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 uppercase leading-none">
              BLOG
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all shrink-0 uppercase tracking-widest shadow-xl border border-slate-950"
          >
            ARTICLES <ArrowUpRight className="size-4 text-brand" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 hover:border-slate-950 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-brand text-brand-foreground px-3.5 py-1 text-[10px] font-black uppercase tracking-widest">
                  {article.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-7">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {article.tag}
                  </span>
                  <h3 className="text-2xl font-black uppercase text-slate-950 group-hover:text-black transition-colors leading-none mt-1">
                    {article.title}
                  </h3>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-950">
                  <span>READ</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-slate-950" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
