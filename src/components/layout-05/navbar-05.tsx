"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Clock, MapPin, Menu, X, ChevronRight } from "lucide-react"

const NAV_EXEC = [
  { href: "#top", label: "Executive Home" },
  { href: "#services", label: "Catalog Grid" },
  { href: "#process", label: "Timed Protocol" },
  { href: "#pricing", label: "Packages" },
  { href: "#gallery", label: "Client Showcase" },
  { href: "#contact", label: "Book Consultation" },
]

export function Navbar05() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      {/* Top Utility Bar (Corporate Details) */}
      <div className="bg-gray-900 text-gray-300 text-[11px] py-1.5 px-4 hidden sm:block border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Clock className="size-3 text-brand" /> Mon-Sat: 8:00 AM - 6:00 PM</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-3 text-brand" /> Dallas Cleanroom Studio</span>
          </div>
          <a href="tel:+12145550199" className="flex items-center gap-1.5 font-mono font-bold text-white hover:text-brand">
            <PhoneCall className="size-3 text-brand" /> (214) 555-0199
          </a>
        </div>
      </div>

      {/* Main Executive Sticky Header */}
      <header className="sticky top-[41px] z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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

          {/* Desktop Executive Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_EXEC.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Direct Consultation Action Button */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-black px-5 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-brand hover:text-brand-foreground transition-all"
            >
              Executive Booking
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Mobile Menu"
              className="flex items-center justify-center size-9 rounded-full border border-gray-200 bg-gray-100 text-ink lg:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4 text-brand-foreground" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="relative z-10 bg-white border-b border-gray-200 px-6 py-6 text-ink shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <Image src="/logo.png" alt="Mr. Detailer" width={140} height={40} className="h-8 w-auto object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {NAV_EXEC.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-sm font-bold text-ink hover:text-brand-foreground py-2 border-b border-gray-100"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="size-4 text-gray-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 space-y-2 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2"><Clock className="size-3.5 text-brand-foreground" /> Mon-Sat: 8:00 AM - 6:00 PM</div>
              <div className="flex items-center gap-2"><MapPin className="size-3.5 text-brand-foreground" /> Dallas Cleanroom Studio</div>
              <a
                href="tel:+12145550199"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-black text-xs font-extrabold text-white mt-2"
              >
                <PhoneCall className="size-3.5 text-brand" /> Call (214) 555-0199
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
