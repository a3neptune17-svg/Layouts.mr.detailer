"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

// PRIMARY NAV — EXACTLY FIVE TOPICS (CLIENT REQUIREMENT)
const PRIMARY_NAV = [
  { href: "#top", label: "HOME", num: "01", sub: "Armored Brilliance Reel & Intro" },
  { href: "#services", label: "SERVICES", num: "02", sub: "PPF, Coatings, Paint Correction & Styling" },
  { href: "#namex", label: "NAMEX STUDIO", num: "03", sub: "High-Precision Technical Surfacing Division" },
  { href: "#warranty", label: "WARRANTY", num: "04", sub: "Verified VIN Digital Protection Portal" },
  { href: "#contact", label: "CONTACT US", num: "05", sub: "Studio Appointments & Consultations" },
]

// FULL DIRECTORY WITH SUB-OPTIONS (ALL RECOVERED EXISTING PROJECT DESTINATIONS)
const FULL_DIRECTORY = [
  {
    category: "SURFACE PROTECTION",
    items: [
      {
        href: "#protection",
        title: "PAINT PROTECTION FILM",
        tag: "ARMOR",
        desc: "XPEL certified optical self-healing polyurethane shield.",
      },
      {
        href: "#protection",
        title: "10H GRAPHENE COATING",
        tag: "OXIDE ARMOR",
        desc: "Aerospace-grade reduced graphene oxide matrix.",
      },
      {
        href: "#protection",
        title: "9H NANO CERAMIC",
        tag: "NANO MATRIX",
        desc: "Molecular bonding permanent gloss & hydrophobic clearcoat.",
      },
    ],
  },
  {
    category: "REFINEMENT & LAB",
    items: [
      {
        href: "#namex",
        title: "NAMEX STUDIO LAB",
        tag: "SPECIALTY",
        desc: "Custom templates, pad leveling & surface science.",
      },
      {
        href: "#protection",
        title: "PAINT CORRECTION",
        tag: "ZERO DEFECTS",
        desc: "Multi-stage rotary compounding & swirl removal.",
      },
      {
        href: "#protection",
        title: "LUXURY CABIN SPA",
        tag: "INTERIOR",
        desc: "Deep steam sanitization & leather preservation.",
      },
      {
        href: "#packages",
        title: "CURATED PACKAGES",
        tag: "OPTIONS",
        desc: "Signature Machine Polishing & Platinum PPF Body Armor.",
      },
    ],
  },
  {
    category: "STUDIO & JOURNAL",
    items: [
      {
        href: "#our-work",
        title: "OUR WORK / ARCHIVE",
        tag: "PROJECTS",
        desc: "Porsche 911 GT3 RS & editorial motorcar showcase.",
      },
      {
        href: "#shop",
        title: "SHOP SHOWCASE",
        tag: "CARE PRODUCTS",
        desc: "Hydrophobic ceramic sealants & wheel rim shield.",
      },
      {
        href: "#about",
        title: "ABOUT MR. DETAILER",
        tag: "PHILOSOPHY",
        desc: "Restorative surfacing lab & hand-finished craftsmanship.",
      },
      {
        href: "#warranty",
        title: "WARRANTY HUB",
        tag: "VIN PORTAL",
        desc: "Digital vehicle records linked to manufacturer warranty.",
      },
      {
        href: "#franchise",
        title: "FRANCHISE",
        tag: "EXPANSION",
        desc: "Turnkey studio architecture & certified technician training.",
      },
      {
        href: "#blog",
        title: "BLOG & INSIGHTS",
        tag: "ARTICLES",
        desc: "10H Graphene vs Ceramic & XPEL absorption technology.",
      },
    ],
  },
]

export function OhioLeftRail() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  // Track scroll for subtle backdrop contrast when scrolled past hero
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when navigation drawer is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* ========================================================
          DESKTOP COLLAPSED LEFT RAIL (1024px+)
          - TRULY TRANSPARENT: sits directly over hero video / content
          - Shows EXACTLY the 5 primary topics:
              1. Home
              2. Services
              3. NameX Studio
              4. Warranty
              5. Contact Us
          - "MENU" control button (NOT "EXPAND MENU")
          - Content/video behind it is 100% visible
          ======================================================== */}
      <aside
        aria-label="Desktop Collapsed Navigation"
        className={`hidden lg:flex fixed top-0 left-0 bottom-0 z-40 w-60 xl:w-64 flex-col justify-between p-8 font-sans pointer-events-auto transition-colors duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-black/50 via-black/20 to-transparent"
            : "bg-transparent"
        }`}
      >
        {/* Top Header & Brand Logo */}
        <div className="space-y-10">
          <Link href="#top" className="block focus:outline-none focus:ring-2 focus:ring-[#E5FCA0] rounded-xl w-fit">
            <div className="rounded-xl bg-white/95 backdrop-blur-md p-2.5 inline-block border border-white/20 shadow-lg hover:bg-white transition-colors">
              <Image
                src="/logo.png"
                alt="Mr. Detailer Studio"
                width={120}
                height={32}
                className="h-6 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* EXACTLY FIVE PRIMARY TOPICS */}
          <nav aria-label="Primary Navigation" className="flex flex-col gap-2">
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] drop-shadow-md block mb-1">
              PRIMARY
            </span>
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/85 hover:text-[#E5FCA0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all"
              >
                <span className="text-[10px] font-mono text-white/40 group-hover:text-[#E5FCA0] transition-colors">
                  {item.num}
                </span>
                <span className="group-hover:translate-x-1 transition-transform">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Controls: "MENU" Button & Book CTA */}
        <div className="space-y-3 pt-6 border-t border-white/15">
          {/* Clean "MENU" Button (CLIENT REQUIREMENT: exactly "MENU") */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="w-full flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-black/50 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-[#E5FCA0]/60 text-white transition-all cursor-pointer group shadow-lg"
            aria-label="Open Full Navigation Menu"
          >
            <div className="flex items-center gap-2.5">
              <Menu className="size-4 text-[#E5FCA0] group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/90 group-hover:text-white">
                MENU
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-wider">
              ALL &rarr;
            </span>
          </button>

          {/* Direct Booking CTA */}
          <Link
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E5FCA0] py-3.5 px-6 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-xl active:scale-95"
          >
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </aside>

      {/* ========================================================
          LARGE EXPANDED FULL NAVIGATION OVERLAY
          - Appears when user clicks "MENU" (Desktop & Mobile)
          - Charcoal Black background (#131512)
          - Substantially larger popup covering a significant portion of screen
          - Large, confident typography with generous spacing
          - Exposes FULL navigation structure + sub-options
          - Clear CLOSE control
          ======================================================== */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 font-sans selection:bg-[#E5FCA0] selection:text-black">
          {/* Backdrop Scrim */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Large Navigation Modal / Drawer */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Full Directory Navigation"
            className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#131512] text-white border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
          >
            {/* Modal Header */}
            <div className="px-6 lg:px-10 py-6 border-b border-white/10 flex items-center justify-between bg-[#161815]">
              <div className="flex items-center gap-4">
                <Link href="#top" onClick={() => setMenuOpen(false)}>
                  <div className="rounded-xl bg-white p-2.5 inline-block">
                    <Image
                      src="/logo.png"
                      alt="Mr. Detailer Studio"
                      width={120}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </Link>
                <div className="hidden sm:block">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0] block">
                    DIRECTORY NAVIGATION
                  </span>
                  <span className="text-[10px] font-mono text-white/40">
                    COMPLETE STUDIO ARCHIVE &amp; SERVICES
                  </span>
                </div>
              </div>

              {/* Prominent CLOSE Control */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] text-white transition-all text-xs font-mono font-bold uppercase tracking-widest cursor-pointer shadow-md"
                aria-label="Close navigation"
              >
                <span>CLOSE</span>
                <X className="size-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Modal Body: Multi-Column Detailed Directory with Sub-Options */}
            <div className="p-6 lg:p-10 overflow-y-auto space-y-10">

              {/* 1. Core Primary Destinations (Large Confident Typography) */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block mb-4">
                  01 // PRIMARY DESTINATIONS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {PRIMARY_NAV.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E5FCA0]/50 transition-all flex flex-col justify-between min-h-[110px]"
                    >
                      <div className="flex items-center justify-between text-white/40 group-hover:text-[#E5FCA0] transition-colors">
                        <span className="text-[10px] font-mono font-bold">{item.num}</span>
                        <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase text-white group-hover:text-[#E5FCA0] transition-colors leading-tight">
                          {item.label}
                        </h3>
                        <p className="text-[10px] font-mono text-white/50 mt-1 line-clamp-1">
                          {item.sub}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 2. Full Categorized Directory with Deeper Sub-Options */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0] block mb-4">
                  02 // ALL DISCIPLINES &amp; SUB-FEATURES
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {FULL_DIRECTORY.map((col) => (
                    <div key={col.category} className="space-y-4 bg-[#181A16] p-6 rounded-2xl border border-white/8">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-white/40 pb-2 border-b border-white/10 block">
                        {col.category}
                      </span>
                      <div className="space-y-4">
                        {col.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="group block space-y-1 hover:translate-x-1 transition-transform"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-black uppercase text-white group-hover:text-[#E5FCA0] transition-colors">
                                {sub.title}
                              </h4>
                              <span className="text-[9px] font-mono text-white/40 group-hover:text-[#E5FCA0]">
                                {sub.tag}
                              </span>
                            </div>
                            <p className="text-xs text-white/60 leading-relaxed font-normal">
                              {sub.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Bar: Direct Booking & Contact */}
            <div className="px-6 lg:px-10 py-5 bg-[#161815] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-white/60">
                <span className="text-[#E5FCA0] font-bold">MR. DETAILER STUDIO</span> &bull; High-precision automotive surface engineering
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="tel:+919876543210"
                  className="text-xs font-mono font-bold text-white hover:text-[#E5FCA0] transition-colors"
                >
                  +91 98765 43210
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md active:scale-95"
                >
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================
          MOBILE STICKY TOP BAR (<1024px)
          Transparent by default over video, subtle backdrop on scroll
          ======================================================== */}
      <header
        className={`sticky top-0 z-40 w-full lg:hidden flex items-center justify-between px-5 py-4 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0E0E0E]/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <div className={`rounded-lg p-1.5 transition-colors ${scrolled || menuOpen ? "bg-white" : "bg-white/95 backdrop-blur-md"}`}>
            <Image src="/logo.png" alt="Mr. Detailer Studio" width={100} height={28} className="h-5 w-auto object-contain" />
          </div>
        </Link>

        {/* Right Controls: BOOK button + "MENU" Button */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-[#E5FCA0] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black active:scale-95 transition-transform shadow-md"
          >
            BOOK
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white active:bg-white/20 transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Menu className="size-3.5 text-[#E5FCA0]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider">MENU</span>
          </button>
        </div>
      </header>
    </>
  )
}
