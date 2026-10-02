"use client"

import Link from "next/link"
import { ArrowUpRight, Phone, Mail, Clock, MessageSquare } from "lucide-react"

export function OhioContact() {
  return (
    <section id="contact" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Lime conversion panel → clean contact details
          =================================================== */}
      <div className="lg:hidden">
        {/* Primary CTA block — Lime */}
        <div className="bg-[#E5FCA0] text-[#1A1C0A] px-6 py-12 space-y-6">
          <div className="space-y-2">
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-[#1A1C0A]/50 block">
              APPOINTMENTS &bull; CONSULTATIONS
            </span>
            <h2 className="text-[clamp(2rem,9vw,3.5rem)] font-black uppercase tracking-tight text-[#1A1C0A] leading-[0.92]">
              READY TO TRANSFORM &amp; SHIELD YOUR MOTORCAR?
            </h2>
          </div>

          <Link
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[#1A1C0A] py-4 text-sm font-black uppercase tracking-widest text-white active:scale-95 transition-transform shadow-lg"
          >
            <Phone className="size-4" />
            <span>CALL TO BOOK</span>
          </Link>

          <Link
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-full border-2 border-[#1A1C0A]/20 py-4 text-sm font-black uppercase tracking-widest text-[#1A1C0A] active:bg-[#1A1C0A]/10 transition-colors"
          >
            <span>WHATSAPP US</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Clean direct contact info — Charcoal */}
        <div className="bg-[#131512] px-6 py-10 space-y-6">
          <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.3em] block">
            DIRECT INQUIRIES
          </span>

          <div className="space-y-4">
            <a href="tel:+919876543210" className="flex items-center gap-3 text-white group">
              <Phone className="size-4 text-[#E5FCA0] shrink-0" />
              <span className="text-xl font-black text-white">+91 98765 43210</span>
            </a>

            <a href="mailto:hello@mrdetailer.in" className="flex items-center gap-3 text-white/70">
              <Mail className="size-4 text-[#E5FCA0] shrink-0" />
              <span className="text-sm font-mono">hello@mrdetailer.in</span>
            </a>

            <div className="flex items-center gap-3 text-white/50 pt-2 border-t border-white/8 text-xs font-mono">
              <Clock className="size-4 text-white/30 shrink-0" />
              <span>Monday — Saturday: 9:30 AM — 7:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Clean Conversion Block spanning under transparent rail
          - Removed unwanted end-of-page duplicate studio location block
          =================================================== */}
      <div className="hidden lg:block lg:pl-60 xl:lg:pl-64">
        {/* COMPACT CONVERSION BLOCK */}
        <div className="grid grid-cols-12 divide-x divide-white/10">

          {/* Left Panel (7 cols): Main CTA Statement */}
          <div className="col-span-7 bg-[#E5FCA0] text-black p-12 lg:p-14 flex flex-col justify-between min-h-[380px]">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-black/60 uppercase tracking-widest block">
                APPOINTMENTS &bull; CONSULTATIONS
              </span>

              <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-tight">
                READY TO TRANSFORM &amp; SHIELD YOUR MOTORCAR?
              </h2>
            </div>

            <div className="pt-8 flex items-center gap-4">
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shadow-md active:scale-95"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>

              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black/20 px-7 py-4 text-xs font-black uppercase tracking-widest text-black hover:bg-black/10 transition-all active:scale-95"
              >
                <MessageSquare className="size-3.5" />
                <span>WHATSAPP</span>
              </Link>
            </div>
          </div>

          {/* Right Panel (5 cols): Direct Inquiries & Operating Hours */}
          <div className="col-span-5 bg-[#131512] p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block">
                DIRECT INQUIRIES
              </span>

              <div className="space-y-5 text-sm font-mono">
                <div className="space-y-1">
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block">DIRECT PHONE</span>
                  <div className="flex items-center gap-2 font-bold text-white text-lg">
                    <Phone className="size-4 text-[#E5FCA0]" />
                    <a href="tel:+919876543210" className="hover:text-[#E5FCA0] transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block">ELECTRONIC MAIL</span>
                  <div className="flex items-center gap-2 text-white/80">
                    <Mail className="size-4 text-[#E5FCA0]" />
                    <a href="mailto:hello@mrdetailer.in" className="hover:text-[#E5FCA0] transition-colors">hello@mrdetailer.in</a>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block">RESPONSE TIME</span>
                  <p className="text-white/60 text-xs">Within 2 business hours for detailing inquiries &amp; estimates.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center gap-2">
              <Clock className="size-3.5 text-white/30" />
              <span>MONDAY — SATURDAY: 9:30 AM — 7:30 PM</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
