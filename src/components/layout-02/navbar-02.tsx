"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Sparkles, Sliders, Layers, Star, PhoneCall, ChevronRight, ChevronLeft, Menu, X, CalendarCheck } from "lucide-react"

const NAV_ITEMS_02 = [
  { href: "#top", label: "Studio Home", icon: Shield },
  { href: "#services", label: "Luxury Menu", icon: Sparkles },
  { href: "#process", label: "Cleanroom Protocol", icon: Sliders },
  { href: "#blog", label: "Blog", icon: Layers },
  { href: "#gallery", label: "Client Gallery", icon: Shield },
  { href: "#ratings", label: "Ratings", icon: Star },
  { href: "#contact", label: "Book Bay", icon: CalendarCheck },
]

export function Navbar02() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isMinimal = isScrolled || collapsed

  return (
    <>
      {/* DESKTOP SIDEBAR - TYPE 02: LUXURY DARK SIDE DOCK RAIL */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 hidden lg:flex flex-col justify-between border-r border-white/10 bg-[#0A0C0E] p-4 shadow-2xl transition-all duration-300 ${
          isMinimal ? "w-20" : "w-64 p-6"
        }`}
      >
        {/* CENTER EDGE TOGGLE ARROW */}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={isMinimal ? "Expand Sidebar" : "Collapse Sidebar"}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-50 flex size-8 items-center justify-center rounded-full border border-white/20 bg-[#0A0C0E] text-brand shadow-lg hover:bg-brand hover:text-black hover:scale-110 transition-all"
        >
          {isMinimal ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
        </button>

        <div className="space-y-6">
          {/* Logo Section */}
          <div className="flex items-center justify-center pb-4 border-b border-white/10 overflow-hidden">
            <Link href="#top" className="flex items-center justify-center">
              {isMinimal ? (
                <div className="flex size-10 items-center justify-center rounded-lg border border-brand/40 bg-brand/10 text-brand font-black text-xs uppercase tracking-widest">
                  L2
                </div>
              ) : (
                <Image
                  src="/logo.png"
                  alt="Mr. Detailer Studio"
                  width={150}
                  height={45}
                  className="h-8 w-auto object-contain"
                  priority
                />
              )}
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS_02.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-3.5 rounded-xl py-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:bg-white/5 hover:text-brand transition-all ${
                    isMinimal ? "justify-center px-0" : "px-4"
                  }`}
                >
                  <Icon className="size-4 text-brand shrink-0" />
                  {!isMinimal && <span className="truncate">{item.label}</span>}

                  {/* Tooltip on Minimal Mode */}
                  {isMinimal && (
                    <span className="absolute left-full ml-3 hidden group-hover:block rounded-md bg-[#121610] px-3 py-1 text-xs font-bold text-white shadow-xl border border-white/10 whitespace-nowrap z-50">
                      {item.label}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <a
            href="tel:+12145550199"
            className={`flex items-center gap-2 text-xs font-mono font-bold text-white/70 hover:text-brand transition-colors ${
              isMinimal ? "justify-center" : ""
            }`}
          >
            <PhoneCall className="size-4 text-brand shrink-0" />
            {!isMinimal && <span>(214) 555-0199</span>}
          </a>

          <Link
            href="#contact"
            className={`flex items-center gap-2 rounded-full bg-brand py-3 text-xs font-extrabold text-brand-foreground shadow-md hover:scale-105 transition-transform ${
              isMinimal ? "justify-center px-0 size-11 mx-auto" : "justify-center w-full"
            }`}
          >
            <CalendarCheck className="size-4" />
            {!isMinimal && <span>Reserve Studio</span>}
          </Link>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <header className="sticky top-[41px] z-40 w-full border-b border-white/10 bg-[#0A0C0E]/95 backdrop-blur-md lg:hidden text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="#top" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Mr. Detailer Studio"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-brand px-3.5 py-1.5 text-xs font-extrabold text-brand-foreground shadow-md"
            >
              VIP Reserve
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4 text-brand" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative z-10 bg-[#0A0C0E] border-b border-white/10 px-6 py-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <Image src="/logo.png" alt="Mr. Detailer Studio" width={140} height={40} className="h-8 w-auto object-contain" />
              <button onClick={() => setMobileOpen(false)} className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <X className="size-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS_02.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-white/80 hover:text-brand py-2 border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="size-4 text-brand" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
