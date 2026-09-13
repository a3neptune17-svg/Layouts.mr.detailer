"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Menu, X, ChevronRight, Film } from "lucide-react"

const NAV_REEL = [
  { href: "#top", label: "Video Hero" },
  { href: "#services", label: "Bento Matrix" },
  { href: "#process", label: "Video Reel" },
  { href: "#pricing", label: "Packages" },
  { href: "#gallery", label: "Showroom" },
  { href: "#contact", label: "Book Studio" },
]

export function Navbar04() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-[41px] z-40 w-full border-b border-white/15 bg-black/95 backdrop-blur-xl text-white shadow-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Cyber Status Pill */}
          <div className="flex items-center gap-4">
            <Link href="#top" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Mr. Detailer Studio"
                width={160}
                height={50}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand/20 border border-brand/40 px-3 py-1 text-[11px] font-bold text-brand shadow-[0_0_15px_rgba(229,252,160,0.2)]">
              <Film className="size-3 text-brand" /> 4K Studio Reel Active
            </span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_REEL.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-black uppercase tracking-widest text-white/80 hover:text-brand transition-colors hover:drop-shadow-[0_0_8px_rgba(229,252,160,0.6)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-brand px-5 py-2.5 text-xs font-extrabold text-brand-foreground shadow-[0_0_25px_rgba(229,252,160,0.4)] hover:scale-105 transition-transform"
            >
              Instant Quote
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Navigation Drawer"
              className="flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4 text-brand" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Over Right Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden flex justify-end">
          {/* Dark Glass Backdrop Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Slide-Over Drawer Container */}
          <div className="relative z-10 w-full max-w-xs h-full bg-neutral-950 border-l border-white/15 p-6 flex flex-col justify-between text-white shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <Image src="/logo.png" alt="Mr. Detailer Studio" width={140} height={40} className="h-8 w-auto object-contain" />
                <button
                  onClick={() => setOpen(false)}
                  className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white"
                >
                  <X className="size-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_REEL.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-sm font-bold text-white/90 hover:text-brand border-b border-white/5 pb-2"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="size-4 text-brand" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href="tel:+12145550199"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 text-xs font-bold text-white border border-white/15"
              >
                <PhoneCall className="size-3.5 text-brand" /> Call (214) 555-0199
              </a>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full justify-center rounded-full bg-brand py-3 text-xs font-extrabold text-brand-foreground shadow-lg"
              >
                Book Studio Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
