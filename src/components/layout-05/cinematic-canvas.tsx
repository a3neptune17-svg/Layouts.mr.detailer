"use client"

import { useState } from "react"
import { 
  Car, 
  DollarSign, 
  Image as ImageIcon, 
  Calendar, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck
} from "lucide-react"

export function CinematicCanvas() {
  const [activeDrawer, setActiveDrawer] = useState<"services" | "packages" | "gallery" | "booking" | null>(null)
  const [booked, setBooked] = useState(false)

  return (
    <div className="relative h-[calc(100vh-50px)] bg-black text-white font-sans overflow-hidden select-none">
      
      {/* Full-bleed Ambient Background Image with Dark Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1800&auto=format&fit=crop"
          alt="Luxury Detailing Backdrop"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      {/* Top Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-5 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="size-9 rounded-xl bg-violet-500 text-black font-black flex items-center justify-center text-xs shadow-lg shadow-violet-500/20">
            05
          </span>
          <div>
            <h1 className="font-bold text-sm text-white tracking-tight">MR. DETAILER · CINEMATIC STUDIO</h1>
            <p className="text-[10px] text-zinc-400">Minimalist Canvas & Slide-Over Drawers</p>
          </div>
        </div>

        <a
          href="tel:2145550199"
          className="flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-violet-400 hover:border-violet-500 transition"
        >
          <PhoneCall className="size-3.5" />
          <span>(214) 555-0199</span>
        </a>
      </header>

      {/* Main Canvas Hero Text */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold mx-auto backdrop-blur-md">
          <Sparkles className="size-4 text-violet-400" /> Ultra-Luxury Automotive Perfection
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
          Precision Ceramic & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-200">
            Paint Protection Armor.
          </span>
        </h1>

        <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed drop-shadow">
          Climate-controlled cleanroom studio in Dallas. Click any menu action below to open interactive specifications without scrolling away.
        </p>

        {/* Quick Action Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-zinc-300">
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <Star className="size-3.5 fill-violet-400 text-violet-400" /> 5.0 Star Rated
          </div>
          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <ShieldCheck className="size-3.5 text-violet-400" /> XPEL Certified
          </div>
        </div>
      </div>

      {/* FLOATING GLASS NAVIGATION DOCK (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        <div className="bg-black/80 backdrop-blur-2xl border border-white/15 p-2 rounded-2xl shadow-2xl shadow-violet-950/50 flex items-center gap-2">
          {[
            { id: "services", label: "Services", icon: Car },
            { id: "packages", label: "Packages", icon: DollarSign },
            { id: "gallery", label: "Showroom", icon: ImageIcon },
            { id: "booking", label: "Book Bay", icon: Calendar, highlight: true },
          ].map((item) => {
            const Icon = item.icon
            const isActive = activeDrawer === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveDrawer(isActive ? null : (item.id as any))}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  item.highlight
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30"
                    : isActive
                    ? "bg-white/20 text-white border border-white/20"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* SLIDE-OVER DRAWER (Right Side Panel) */}
      {activeDrawer && (
        <div className="fixed inset-0 z-50 flex justify-end pointer-events-auto">
          {/* Backdrop Click to Close */}
          <div
            onClick={() => setActiveDrawer(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Content Window */}
          <div className="relative w-full max-w-md h-full bg-zinc-950/95 border-l border-white/10 p-6 md:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                    {activeDrawer}
                  </span>
                </div>
                <button
                  onClick={() => setActiveDrawer(null)}
                  className="size-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* DRAWER CONTENT 1: SERVICES */}
              {activeDrawer === "services" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Detailing Treatments</h3>
                  <div className="space-y-3">
                    {[
                      { title: "9H Nano Ceramic Coating", price: "$899+", desc: "5-Year glass layer hydrophobic protection." },
                      { title: "Full Body PPF Armor", price: "$2,499+", desc: "10-Year self-healing film against stone chips." },
                      { title: "Paint Correction", price: "$599+", desc: "Eliminates 90%+ swirl marks under studio lights." },
                      { title: "Executive Interior Spa", price: "$299+", desc: "Deep hot water extraction & leather nourishing." },
                    ].map((s, idx) => (
                      <div key={idx} className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-xs text-white">{s.title}</h4>
                          <span className="text-xs font-black text-violet-400">{s.price}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DRAWER CONTENT 2: PACKAGES */}
              {activeDrawer === "packages" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Studio Package Rates</h3>
                  <div className="space-y-3">
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                      <div className="font-bold text-white text-sm">Silver Package · $499</div>
                      <p className="text-[11px] text-zinc-400 mt-1">1-Year Sealant + 1-Stage Polish.</p>
                    </div>
                    <div className="bg-gradient-to-r from-violet-950 to-zinc-900 border-2 border-violet-500 p-4 rounded-2xl">
                      <div className="font-bold text-violet-400 text-sm">Gold Ceramic Package · $899</div>
                      <p className="text-[11px] text-zinc-300 mt-1">5-Year 9H Ceramic + 2-Stage Paint Correction.</p>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl">
                      <div className="font-bold text-white text-sm">Platinum PPF Armor · $2,499</div>
                      <p className="text-[11px] text-zinc-400 mt-1">Full Front PPF + 9H Ceramic Body Shield.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* DRAWER CONTENT 3: GALLERY */}
              {activeDrawer === "gallery" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Showroom Finishes</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop" alt="Porsche" className="h-40 w-full object-cover" />
                      <div className="p-3 font-bold text-xs text-white">Porsche 911 GT3 · Full PPF</div>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                      <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop" alt="BMW" className="h-40 w-full object-cover" />
                      <div className="p-3 font-bold text-xs text-white">BMW M4 · 9H Ceramic</div>
                    </div>
                  </div>
                </div>
              )}

              {/* DRAWER CONTENT 4: BOOKING */}
              {activeDrawer === "booking" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Reserve Studio Bay</h3>
                  {booked ? (
                    <div className="text-center py-6">
                      <CheckCircle2 className="size-8 text-violet-400 mx-auto mb-2" />
                      <div className="font-bold text-white text-sm">Reservation Received!</div>
                      <p className="text-xs text-zinc-400 mt-1">Our manager will reach out shortly.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        setBooked(true)
                      }}
                      className="space-y-3"
                    >
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition"
                      >
                        Submit Reservation
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-500 text-center">
              Mr. Detailer Cinematic Studio · Dallas, TX
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
