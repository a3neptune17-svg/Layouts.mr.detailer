"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Layers, ChevronLeft, ChevronRight } from "lucide-react"

const LAYOUTS = [
  { id: "master", label: "★ Master Layout", href: "/master", tag: "Final Selected Layout" },
  { id: "original", label: "Original", href: "/", tag: "Baseline" },
  { id: "01", label: "Layout 01", href: "/layout-01", tag: "Light & Service-First" },
  { id: "02", label: "Layout 02", href: "/layout-02", tag: "Dark Luxury Studio" },
  { id: "03", label: "Layout 03", href: "/layout-03", tag: "Seamless Dark & Light" },
  { id: "04", label: "Layout 04", href: "/layout-04", tag: "Interactive Video Reel" },
  { id: "05", label: "Layout 05", href: "/layout-05", tag: "Executive Service Grid" },
]

export function LayoutSwitcher() {
  const pathname = usePathname()
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -220 : 220,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="sticky top-0 z-[100] border-b border-white/10 bg-black/95 backdrop-blur-xl text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 sm:px-6 gap-2">
        {/* Brand Icon */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-brand-foreground font-bold">
            <Layers className="size-4" />
          </span>
          <span className="hidden text-xs font-black uppercase tracking-wider text-white/90 sm:inline-block">
            Layout Concepts
          </span>
        </div>

        {/* Scrollable Layout Options with Left & Right Arrows */}
        <div className="relative flex items-center min-w-0 flex-1 max-w-3xl mx-2">
          {/* Scroll Left Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand hover:text-black transition-all border border-white/20 mr-1 shadow-md"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Options Container */}
          <div
            ref={scrollRef}
            className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none scroll-smooth w-full"
          >
            {LAYOUTS.map((item) => {
              const isActive = pathname === item.href || (item.id === "original" && pathname === "/")
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`group flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    isActive
                      ? "bg-brand text-brand-foreground font-black shadow-md shadow-brand/20"
                      : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`hidden text-[0.65rem] opacity-70 sm:inline ${
                      isActive ? "text-brand-foreground/80" : "text-white/40"
                    }`}
                  >
                    · {item.tag}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Scroll Right Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right to view Layout 4 & 5"
            className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground hover:scale-110 transition-all ml-1 shadow-md shadow-brand/20"
            title="Click to view Layout 04 & 05"
          >
            <ChevronRight className="size-4 stroke-[3]" />
          </button>
        </div>
      </div>
    </div>
  )
}
