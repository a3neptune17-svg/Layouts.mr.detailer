"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const ARTICLES = [
  {
    id: "graphene-vs-ceramic",
    date: "MARCH 14, 2026",
    title: "UNDERSTANDING 10H GRAPHENE OXIDE VS TRADITIONAL 9H CERAMIC COATINGS.",
    tag: "PAINT CARE",
    readTime: "5 MIN READ",
  },
  {
    id: "ppf-maintenance",
    date: "FEBRUARY 28, 2026",
    title: "HOW SELF-HEALING XPEL FILM ABSORBS ROAD DEBRIS & STONE CHIPS.",
    tag: "FILM TECH",
    readTime: "4 MIN READ",
  },
]

export function OhioBlog() {
  return (
    <section id="blog" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Pearl White heading → horizontal article cards
          =================================================== */}
      <div className="lg:hidden">
        {/* Section header — Pearl White */}
        <div className="bg-[#F2F0EB] px-6 pt-12 pb-8 space-y-3">
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1A1C0A]/50 block">
            BLOG / INSIGHTS
          </span>
          <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase tracking-tight text-[#1A1C0A] leading-[0.92]">
            RECENT NEWS AND INSIGHTS.
          </h2>
        </div>

        {/* Horizontal article cards on dark bg */}
        <div className="bg-[#0E0E0E] pt-6">
          <div
            className="flex gap-4 px-4 pb-8 overflow-x-auto"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {ARTICLES.map((art) => (
              <Link
                key={art.id}
                href="#contact"
                className="flex-none w-[78vw] max-w-[320px] rounded-2xl bg-[#141610] border border-white/8 p-5 flex flex-col justify-between group active:scale-[0.97] transition-transform"
                style={{ scrollSnapAlign: "start", minHeight: "240px" }}
              >
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest">
                    {art.tag}
                  </span>
                  <span className="text-[9px] font-mono text-white/30">
                    {art.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-black uppercase tracking-tight text-white group-active:text-[#E5FCA0] transition-colors leading-tight flex-1">
                  {art.title}
                </h3>

                {/* Footer */}
                <div className="pt-4 border-t border-white/8 flex items-center justify-between mt-4">
                  <span className="text-[10px] font-mono text-white/35">{art.date}</span>
                  <div className="size-8 rounded-full border border-white/15 flex items-center justify-center text-white group-active:bg-[#E5FCA0] group-active:text-black group-active:border-[#E5FCA0] transition-all">
                    <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </Link>
            ))}

            {/* View all card */}
            <Link
              href="#contact"
              className="flex-none w-[48vw] max-w-[200px] rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col items-center justify-center gap-3 active:scale-[0.97] transition-transform"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="size-11 rounded-full bg-[#E5FCA0] flex items-center justify-center">
                <ArrowUpRight className="size-5 text-black stroke-[2.5]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-white text-center">
                ALL ARTICLES
              </span>
            </Link>

            <div className="flex-none w-4" />
          </div>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Clickable article cards
          - Spans under transparent rail
          =================================================== */}
      <div className="hidden lg:block lg:pl-72 xl:lg:pl-80">
        {/* TOP STATEMENT BLOCK */}
        <div className="p-10 lg:py-12 bg-[#131512] border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
              BLOG / INSIGHTS &bull; EDITORIAL JOURNAL
            </span>
            <h2 className="text-3xl xl:text-4xl font-black uppercase text-white tracking-tight">
              RECENT NEWS AND INSIGHTS.
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md shrink-0 self-start md:self-auto"
          >
            <span>READ ALL ARTICLES</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* ARTICLES STRIP — FULLY CLICKABLE CARDS */}
        <div className="grid grid-cols-2 divide-x divide-white/10">
          {ARTICLES.map((art) => (
            <Link
              key={art.id}
              href="#contact"
              className="bg-[#181A17] p-10 flex flex-col justify-between group min-h-[300px] hover:bg-[#1c1e1b] transition-all cursor-pointer block border-t-2 border-transparent hover:border-[#E5FCA0]"
              aria-label={`Read article: ${art.title}`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold text-[#E5FCA0]">
                  {art.tag}
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  {art.date}
                </span>
              </div>

              <div className="my-auto">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#E5FCA0] transition-colors leading-tight">
                  {art.title}
                </h3>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/50 group-hover:text-white transition-colors">READ JOURNAL</span>
                <div className="size-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black group-hover:border-[#E5FCA0] transition-all">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}
