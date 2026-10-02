"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

const SOCIAL_CHANNELS = [
  { label: "INSTAGRAM", href: "#" },
  { label: "WHATSAPP", href: "https://wa.me/919876543210" },
  { label: "FACEBOOK", href: "#" },
  { label: "YOUTUBE", href: "#" },
]

const FOOTER_NAV = [
  { label: "HOME", href: "#top" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "SHOP", href: "#shop" },
  { label: "WARRANTY HUB", href: "#warranty" },
  { label: "FRANCHISE", href: "#franchise" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
]

export function OhioFooter() {
  return (
    <footer className="relative bg-[#0A0B09] text-white overflow-hidden font-sans selection:bg-[#E5FCA0] selection:text-black">

      {/* ===================================================
          MOBILE FOOTER (< 1024px)
          Clean, minimal, well-spaced
          =================================================== */}
      <div className="lg:hidden">
        {/* Top brand + CTA */}
        <div className="px-6 py-8 border-b border-white/8 flex items-center justify-between">
          <div className="rounded-xl bg-white p-2 inline-block">
            <Image src="/logo.png" alt="Mr. Detailer Studio" width={100} height={28} className="h-6 w-auto object-contain" />
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-[#E5FCA0] px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-black active:scale-95 transition-transform"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Two-column nav + channels */}
        <div className="px-6 py-8 grid grid-cols-2 gap-8 border-b border-white/8">
          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0] block">
              NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((nav) => (
                <li key={nav.label}>
                  <Link href={nav.href} className="text-xs font-mono text-white/55 hover:text-white transition-colors">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels + Contact */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0] block">
                CHANNELS
              </span>
              <ul className="space-y-2.5">
                {SOCIAL_CHANNELS.map((ch) => (
                  <li key={ch.label}>
                    <a
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-white/55 hover:text-[#E5FCA0] transition-colors"
                    >
                      {ch.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0] block">
                INQUIRIES
              </span>
              <ul className="space-y-1.5 text-[11px] font-mono text-white/50">
                <li><a href="mailto:hello@mrdetailer.in" className="hover:text-white">hello@mrdetailer.in</a></li>
                <li><a href="tel:+919876543210" className="text-white font-bold">+91 98765 43210</a></li>
                <li className="pt-1 text-[10px] text-white/40">XPEL Certified Lab</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright row */}
        <div className="px-6 py-5 flex items-center justify-between">
          <span className="text-[10px] font-mono text-white/30">
            © {new Date().getFullYear()} MR. DETAILER STUDIO
          </span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
            className="flex size-8 items-center justify-center rounded-full border border-white/15 text-white/40 hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-colors cursor-pointer active:scale-95"
          >
            <ArrowUp className="size-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* ===================================================
          DESKTOP FOOTER (1024px+)
          Spans under transparent rail — clean luxury directory
          =================================================== */}
      <div className="hidden lg:block relative z-10 lg:pl-60 xl:lg:pl-64">
        {/* Top Banner */}
        <div className="px-12 py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white p-2">
              <Image src="/logo.png" alt="Mr. Detailer Studio" width={130} height={36} className="h-7 w-auto object-contain" />
            </div>
            <span className="text-[10px] font-mono text-white/50">
              OHIO DIGITAL STUDIO
            </span>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5FCA0] px-8 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
          >
            <span>BOOK AN APPOINTMENT</span>
          </Link>
        </div>

        {/* Main Footer Links Columns */}
        <div className="px-12 py-12">
          <div className="grid grid-cols-4 gap-12">

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
                DIRECT INQUIRIES
              </span>
              <ul className="space-y-2 text-xs text-white/70 font-mono">
                <li><a href="mailto:hello@mrdetailer.in" className="hover:text-white">hello@mrdetailer.in</a></li>
                <li><a href="tel:+919876543210" className="hover:text-white font-bold text-white">+91 98765 43210</a></li>
                <li className="pt-2 text-[11px] text-white/40">Mon — Sat: 9:30 AM — 7:30 PM</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
                STANDARDS
              </span>
              <ul className="space-y-2 text-xs text-white/70 font-mono">
                <li>XPEL CERTIFIED FACILITY</li>
                <li>10H GRAPHENE OXIDE LAB</li>
                <li>DUST-CONTROLLED BAY</li>
                <li className="pt-1 text-[11px] text-white/40">OPTICAL REFLECTION STANDARDS</li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
                CHANNELS
              </span>
              <ul className="space-y-2 text-xs text-white/70 font-mono">
                {SOCIAL_CHANNELS.map((ch) => (
                  <li key={ch.label}>
                    <a href={ch.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5FCA0] transition-colors">
                      {ch.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
                NAVIGATION
              </span>
              <ul className="space-y-2 text-xs text-white/70 font-mono">
                {FOOTER_NAV.map((nav) => (
                  <li key={nav.label}>
                    <Link href={nav.href} className="hover:text-white transition-colors">
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="px-12 py-4 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <span>© {new Date().getFullYear()} MR. DETAILER STUDIO. ALL RIGHTS RESERVED.</span>

          <div className="flex items-center gap-6">
            <Link href="#top" className="hover:text-[#E5FCA0]">PRIVACY</Link>
            <Link href="#top" className="hover:text-[#E5FCA0]">TERMS</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to Top"
              className="flex size-7 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-colors cursor-pointer"
            >
              <ArrowUp className="size-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  )
}
