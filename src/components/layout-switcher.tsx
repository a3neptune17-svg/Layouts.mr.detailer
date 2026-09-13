"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Layers, ArrowRight } from "lucide-react"

const LAYOUTS = [
  { id: "original", label: "Original", href: "/", tag: "Baseline" },
  { id: "01", label: "Layout 01", href: "/layout-01", tag: "Light & Service-First" },
  { id: "02", label: "Layout 02", href: "/layout-02", tag: "Dark Luxury Studio" },
  { id: "03", label: "Layout 03", href: "/layout-03", tag: "Seamless Dark & Light" },
  { id: "04", label: "Layout 04", href: "/layout-04", tag: "Interactive Video Reel" },
  { id: "05", label: "Layout 05", href: "/layout-05", tag: "Executive Service Grid" },
]

export function LayoutSwitcher() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-[100] border-b border-white/10 bg-black/90 backdrop-blur-xl text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-brand text-brand-foreground font-bold">
            <Layers className="size-4" />
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-white/80 sm:inline-block">
            Layout Concepts
          </span>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
          {LAYOUTS.map((item) => {
            const isActive = pathname === item.href || (item.id === "original" && pathname === "/")
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`group flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-brand text-brand-foreground font-semibold shadow-md shadow-brand/20"
                    : "bg-white/5 text-white/70 hover:bg-white/15 hover:text-white"
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

        <Link
          href="#contact"
          className="hidden items-center gap-1 text-xs font-medium text-brand hover:underline md:flex"
        >
          <span>Compare</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  )
}
