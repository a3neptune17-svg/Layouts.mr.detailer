"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Menu, X, ChevronRight } from "lucide-react"

const NAV_ITEMS = [
  { href: "#top", label: "Studio Home" },
  { href: "#services", label: "Luxury Menu" },
  { href: "#process", label: "Cleanroom Protocol" },
  { href: "#pricing", label: "Package Rates" },
  { href: "#gallery", label: "Client Gallery" },
  { href: "#contact", label: "Book Bay" },
]

export function Navbar02() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-[41px] z-40 w-full py-3 px-4">
        {/* Floating Island Glass Container */}
        <div className="mx-auto max-w-5xl rounded-full border border-white/20 bg-black/80 p-2 sm:px-6 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-2xl text-white flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#top" className="flex items-center gap-2 pl-2">
            <Image
              src="/logo.png"
              alt="Mr. Detailer Studio"
              width={150}
              height={45}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Floating Center Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-white/80 hover:text-brand transition-all hover:drop-shadow-[0_0_10px_rgba(229,252,160,0.5)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Glowing Action Button */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-brand px-5 py-2 text-xs font-extrabold text-brand-foreground shadow-[0_0_25px_rgba(229,252,160,0.5)] transition-transform hover:scale-105"
            >
              VIP Reserve
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Mobile Navigation"
              className="flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4 text-brand" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          <div className="relative z-10 bg-neutral-950 border-b border-white/15 px-6 py-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <Image src="/logo.png" alt="Mr. Detailer Studio" width={140} height={40} className="h-8 w-auto object-contain" />
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
                  className="flex items-center justify-between text-sm font-bold text-white/90 hover:text-brand py-2 border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="size-4 text-brand" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+12145550199"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 text-xs font-bold text-white border border-white/15"
              >
                <PhoneCall className="size-3.5 text-brand" /> Call (214) 555-0199
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full justify-center rounded-full bg-brand py-3 text-xs font-extrabold text-brand-foreground shadow-lg"
              >
                Reserve Studio Bay
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
