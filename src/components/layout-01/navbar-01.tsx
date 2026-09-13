"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Menu, X, ChevronRight } from "lucide-react"

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services Matrix" },
  { href: "#process", label: "Studio Workflow" },
  { href: "#pricing", label: "Package Pricing" },
  { href: "#gallery", label: "Showroom" },
  { href: "#contact", label: "Contact Us" },
]

export function Navbar01() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-[41px] z-40 w-full border-b border-white/10 bg-[#0B0D0A]/90 backdrop-blur-xl shadow-2xl text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Studio Identity */}
          <div className="flex items-center gap-4">
            <Link href="#top" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Mr. Detailer"
                width={160}
                height={50}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Studio Open Today
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-extrabold uppercase tracking-wider text-white/80 hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Badge & Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+12145550199"
              className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-white/80 hover:text-brand"
            >
              <PhoneCall className="size-3.5 text-emerald-400" />
              <span>(214) 555-0199</span>
            </a>
            <Link
              href="#contact"
              className="rounded-full bg-brand px-5 py-2.5 text-xs font-bold text-brand-foreground shadow-md transition-transform hover:scale-105"
            >
              Book Studio Bay
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="relative z-10 bg-[#0B0D0A] border-b border-white/10 px-6 py-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <Image src="/logo.png" alt="Mr. Detailer" width={140} height={40} className="h-8 w-auto object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-white/80 hover:text-brand py-2 border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="size-4 text-white/40" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+12145550199"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 text-xs font-bold text-white border border-white/20"
              >
                <PhoneCall className="size-3.5 text-emerald-400" /> Call (214) 555-0199
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full justify-center rounded-full bg-brand py-3 text-xs font-bold text-brand-foreground shadow-md"
              >
                Book Studio Bay Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

