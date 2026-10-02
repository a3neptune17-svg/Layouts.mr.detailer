"use client"

import Link from "next/link"
import { ArrowUpRight, ShieldCheck } from "lucide-react"

export function OhioWarranty() {
  return (
    <section id="warranty" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Dark section — strong heading + clear CTA
          =================================================== */}
      <div className="lg:hidden bg-[#131512]">
        <div className="px-6 py-12 space-y-6">
          {/* Icon + label */}
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#E5FCA0]/10 border border-[#E5FCA0]/20 flex items-center justify-center">
              <ShieldCheck className="size-5 text-[#E5FCA0]" />
            </div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#E5FCA0]">
              WARRANTY HUB
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(2rem,8vw,3rem)] font-black uppercase tracking-tight text-white leading-[0.92]">
            VERIFIED VIN DIGITAL WARRANTY PORTAL.
          </h2>

          {/* Short copy */}
          <p className="text-sm text-white/60 leading-relaxed">
            Every XPEL PPF installation and 10H Graphene coating is logged into our digital warranty hub, linked directly to your vehicle&apos;s VIN number.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["VIN REGISTERED", "XPEL CERTIFIED", "DIGITAL RECORD", "TRANSFERABLE"].map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/15 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[#E5FCA0] py-4 text-xs font-black uppercase tracking-wider text-black active:scale-95 transition-transform shadow-lg shadow-[#E5FCA0]/15 mt-2"
          >
            <span>ACCESS WARRANTY HUB</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Compact Editorial Block spanning under transparent rail
          =================================================== */}
      <div className="hidden lg:block">
        {/* Compact Editorial Block */}
        <div className="bg-[#131512] p-12 lg:pl-72 xl:lg:pl-80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
              VIN HUB
            </span>

            <h2 className="text-4xl font-black uppercase text-white leading-tight">
              VERIFIED VIN DIGITAL WARRANTY PORTAL
            </h2>

            <p className="text-xs text-white/70 leading-relaxed font-normal">
              Every XPEL PPF installation and 10H Graphene coating applied at Mr. Detailer is logged into our digital warranty hub linked directly to your vehicle&apos;s VIN number.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 pt-4 md:pt-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
            >
              <span>ACCESS WARRANTY HUB</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
