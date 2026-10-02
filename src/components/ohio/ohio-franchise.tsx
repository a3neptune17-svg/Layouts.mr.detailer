"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioFranchise() {
  return (
    <section id="franchise" className="relative w-full bg-[#0E0E0E] text-white overflow-hidden font-sans">

      {/* ===================================================
          MOBILE LAYOUT (< 1024px)
          Pearl White section — editorial franchise statement
          =================================================== */}
      <div className="lg:hidden">
        {/* Top video panel */}
        <div className="relative w-full overflow-hidden bg-black" style={{ minHeight: "220px" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            style={{ objectPosition: "center 30%" }}
          >
            <source src="/videos/video-project-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0E0E0E]" />

          {/* Overlay label */}
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase tracking-[0.3em] block mb-1">
                STUDIO EXPANSION
              </span>
              <h3 className="text-2xl font-black uppercase text-white">FRANCHISE</h3>
            </div>
          </div>
        </div>

        {/* Content on charcoal */}
        <div className="px-6 py-10 bg-[#131512] space-y-5">
          <h2 className="text-[clamp(1.8rem,7vw,2.8rem)] font-black uppercase tracking-tight text-white leading-[0.92]">
            EXPAND MR. DETAILER INTO YOUR CITY.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed">
            Turnkey studio architecture, certified technician modules, and direct vendor access. Bring the Mr. Detailer experience to your market.
          </p>

          {/* Feature list */}
          <div className="space-y-3 pt-2">
            {[
              { num: "01", title: "TURNKEY STUDIO DESIGN", sub: "Blueprint architecture" },
              { num: "02", title: "TECHNICIAN TRAINING", sub: "Certified modules" },
              { num: "03", title: "VENDOR ACCESS", sub: "Direct XPEL supply" },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-4 py-3 border-b border-white/8">
                <span className="text-[10px] font-mono font-bold text-[#E5FCA0] w-6 shrink-0">{item.num}</span>
                <div>
                  <p className="text-sm font-black uppercase text-white">{item.title}</p>
                  <p className="text-[10px] font-mono text-white/40">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 w-full rounded-full bg-[#E5FCA0] py-4 text-xs font-black uppercase tracking-wider text-black active:scale-95 transition-transform shadow-lg mt-2"
          >
            <span>FRANCHISE WITH US</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ===================================================
          DESKTOP LAYOUT (1024px+)
          - NO black separator stripe
          - Two video panels + statement bar
          =================================================== */}
      <div className="hidden lg:block">
        {/* TWO 50/50 VIDEO PANELS */}
        <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">

          <div className="relative min-h-[380px] bg-black p-8 lg:pl-72 xl:lg:pl-80 flex flex-col justify-between group overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.55]"
            >
              <source src="/videos/video-project-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">01 // BLUEPRINT ARCHITECTURE</span>
              <h3 className="text-2xl font-black uppercase text-white">TURNKEY STUDIO DESIGN</h3>
            </div>
          </div>

          <div className="relative min-h-[360px] bg-black p-8 flex flex-col justify-between group overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 filter brightness-[0.55]"
            >
              <source src="/videos/gemini_generated_video_8cab5f87.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10 mt-auto">
              <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-1">02 // TECHNICIAN MODULES</span>
              <h3 className="text-2xl font-black uppercase text-white">CERTIFIED TECHNICIAN TRAINING</h3>
            </div>
          </div>

        </div>

        {/* Statement & CTA Bar */}
        <div className="p-10 lg:pl-72 xl:lg:pl-80 bg-[#131512] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black uppercase text-white">EXPAND MR. DETAILER INTO YOUR CITY</h3>
            <p className="text-xs text-white/60 font-normal">Turnkey studio architecture, technician modules, and direct vendor access.</p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md shrink-0 self-start sm:self-auto"
          >
            <span>FRANCHISE WITH US</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

    </section>
  )
}
