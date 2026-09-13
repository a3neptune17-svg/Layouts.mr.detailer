"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Compass, Wrench, Film, ShoppingBag, ShieldCheck, PhoneCall, Send, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"

const NAV_FLOW = [
  { href: "#top", label: "Overview", icon: Compass },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#process", label: "Workflow", icon: Film },
  { href: "#pricing", label: "Pricing", icon: ShoppingBag },
  { href: "#gallery", label: "Showroom", icon: ShieldCheck },
  { href: "#contact", label: "Contact Us", icon: PhoneCall },
]

export function Navbar03() {
  const [collapsed, setCollapsed] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      {/* FULL DESKTOP LEFT VERTICAL SIDEBAR RAIL WITH SLIDE-LEFT COLLAPSE TOGGLE */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 hidden lg:flex w-64 flex-col justify-between border-r border-white/10 bg-[#0B0D0A] p-6 shadow-2xl transition-transform duration-300 ${
          collapsed ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="space-y-6">
          {/* Logo & Collapse Slide-Left Button */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link href="#top" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Mr. Detailer"
                width={150}
                height={45}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              title="Slide Left / Collapse Menu"
              className="flex items-center justify-center size-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            >
              <ChevronLeft className="size-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {NAV_FLOW.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setCollapsed(true)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-bold text-white/80 hover:bg-white/10 hover:text-brand transition-all"
                >
                  <Icon className="size-4 text-brand" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Bottom Contact & Collapse Action */}
        <div className="space-y-4 pt-6 border-t border-white/10">
          <a
            href="tel:+12145550199"
            className="flex items-center gap-2 text-xs font-mono font-bold text-white/80 hover:text-brand"
          >
            <PhoneCall className="size-3.5 text-emerald-400" /> (214) 555-0199
          </a>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-2.5 text-xs font-bold text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ChevronLeft className="size-3.5" /> Slide Menu Left
          </button>
          <Link
            href="#contact"
            onClick={() => setCollapsed(true)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-xs font-extrabold text-brand-foreground shadow-md hover:scale-105 transition-transform"
          >
            <span>Get Studio Quote</span>
            <Send className="size-3.5" />
          </Link>
        </div>
      </aside>

      {/* Floating Left Edge Trigger when Sidebar is Collapsed on Desktop */}
      {collapsed && (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="fixed left-4 top-24 z-50 hidden lg:flex items-center gap-2 rounded-full border border-brand/40 bg-[#0B0D0A]/95 px-4 py-2 text-xs font-bold text-brand shadow-2xl backdrop-blur-xl hover:scale-105 transition-all"
        >
          <ChevronRight className="size-4" />
          <span>Open Menu</span>
        </button>
      )}

      {/* Top Dark Header for Mobile */}
      <header className="sticky top-[41px] z-40 w-full border-b border-white/10 bg-[#0B0D0A]/95 backdrop-blur-md lg:hidden text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="#top" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Mr. Detailer"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="tel:+12145550199"
              className="flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-xs font-extrabold text-brand-foreground shadow-md"
            >
              <PhoneCall className="size-3.5" /> Call
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
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
            <nav className="flex flex-col gap-2">
              {NAV_FLOW.map((item) => (
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
          </div>
        </div>
      )}
    </>
  )
}

