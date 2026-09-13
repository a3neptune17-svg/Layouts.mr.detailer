"use client"

import { useState } from "react"
import { 
  Sparkles, 
  Car, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Calculator, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  Sliders,
  Calendar
} from "lucide-react"

export function BentoGrid() {
  const [vehicle, setVehicle] = useState<"sedan" | "suv" | "exotic">("sedan")
  const [service, setService] = useState<"ceramic" | "ppf" | "correction" | "interior">("ceramic")
  const [booked, setBooked] = useState(false)
  const [showBefore, setShowBefore] = useState(false)

  // Rate calculator logic
  const prices = {
    ceramic: { sedan: 899, suv: 1099, exotic: 1399 },
    ppf: { sedan: 2499, suv: 2999, exotic: 3699 },
    correction: { sedan: 599, suv: 699, exotic: 899 },
    interior: { sedan: 299, suv: 349, exotic: 399 },
  }

  const currentPrice = prices[service][vehicle]

  return (
    <div className="bg-slate-950 text-slate-100 font-sans p-4 md:p-8 min-h-[calc(100vh-50px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* Header Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <span className="size-10 rounded-2xl bg-cyan-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-lg shadow-cyan-500/20">
              04
            </span>
            <div>
              <h1 className="font-bold text-lg text-white">MR. DETAILER BENTO GRID</h1>
              <p className="text-xs text-slate-400">Apple-Style Modular Card Workspace · Zero Scroll Bloat</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
            <Sparkles className="size-3.5" /> Certified XPEL & Gtechniq Studio
          </div>
        </div>

        {/* BENTO GRID (12 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* TILE 1: MAIN HERO (Span 8) */}
          <div className="md:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Precision Auto Studio
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mt-4 mb-3">
                Unrivaled Paint Finish <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200">
                  & 9H Ceramic Armor.
                </span>
              </h2>
              <p className="text-slate-400 text-xs md:text-sm max-w-lg leading-relaxed mb-6">
                Engineered for luxury car enthusiasts. Flawless 2,000-lumen light defect removal, self-healing polyurethane PPF wraps, and hydrophobic glass coatings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Star className="size-4 fill-cyan-400 text-cyan-400" />
                <span className="text-xs font-bold text-white">5.0 Star Rated (500+ Cars)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-cyan-400" />
                <span className="text-xs font-bold text-white">10-Year Film Guarantee</span>
              </div>
            </div>
          </div>

          {/* TILE 2: LIVE ESTIMATOR WIDGET (Span 4) */}
          <div className="md:col-span-4 bg-slate-900/90 border-2 border-cyan-500/50 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-cyan-500/10">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Calculator className="size-3.5" /> Instant Rate Estimator
                </span>
                <span className="text-[10px] bg-cyan-500 text-slate-950 font-black px-2 py-0.5 rounded-md uppercase">Live</span>
              </div>

              {/* Vehicle Type Picker */}
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">1. Select Vehicle Class</label>
              <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 mb-4">
                {(["sedan", "suv", "exotic"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setVehicle(v)}
                    className={`py-1 rounded-lg text-[11px] font-bold capitalize transition ${
                      vehicle === v ? "bg-cyan-500 text-slate-950" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {/* Service Selection */}
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">2. Select Treatment</label>
              <div className="space-y-1.5 mb-4">
                {[
                  { id: "ceramic", label: "9H Nano Ceramic Coating" },
                  { id: "ppf", label: "Full Body PPF Armor" },
                  { id: "correction", label: "Multi-Stage Paint Correction" },
                  { id: "interior", label: "Executive Interior Spa" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id as any)}
                    className={`w-full px-3 py-1.5 rounded-xl text-left text-xs font-semibold border transition flex items-center justify-between ${
                      service === s.id
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-400 font-bold"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{s.label}</span>
                    {service === s.id && <CheckCircle2 className="size-3.5 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Total Display & Book Button */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Estimated Total</span>
                <div className="text-2xl font-black text-white">${currentPrice}</div>
              </div>
              <a
                href="#bento-booking"
                className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center gap-1"
              >
                <span>Reserve Rate</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* TILE 3: CERAMIC SPECS (Span 4) */}
          <div className="md:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition">
            <div className="size-10 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-3">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">9H Nano Ceramic Glass</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              9H hardness rating glass matrix protecting against UV degradation, acid rain, bird droppings, and chemical staining.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-cyan-400" /> 5-Year Certified Warranty</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-cyan-400" /> Extreme Hydrophobic Beading</li>
            </ul>
          </div>

          {/* TILE 4: PPF ARMOR (Span 4) */}
          <div className="md:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition">
            <div className="size-10 rounded-2xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-3">
              <Car className="size-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Self-Healing PPF Film</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              8-mil thick clear aliphatic polyurethane armor. Scratches and swirl marks heal automatically under heat or sunlight.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-cyan-400" /> 10-Year Non-Yellowing Film</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-3.5 text-cyan-400" /> Custom Computer Cut Edges</li>
            </ul>
          </div>

          {/* TILE 5: BEFORE / AFTER INTERACTIVE SLIDER BOX (Span 4) */}
          <div className="md:col-span-4 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">Transformation Preview</h3>
                <button
                  onClick={() => setShowBefore(!showBefore)}
                  className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20"
                >
                  {showBefore ? "Showing Before" : "Showing After"} (Click to Toggle)
                </button>
              </div>
              <div className="relative h-36 rounded-2xl overflow-hidden mt-2">
                <img
                  src={
                    showBefore
                      ? "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
                  }
                  alt="Transformation"
                  className="w-full h-full object-cover transition duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {showBefore ? "Swirled & Dull OEM Paint" : "9H Ceramic Mirror Reflection"}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Click toggle to switch between pre-detailing swirls and post-ceramic glass finish.</p>
          </div>

          {/* TILE 6: EXPRESS BOOKING CARD (Span 12) */}
          <div id="bento-booking" className="md:col-span-12 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  Instant Studio Slot
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">Reserve Your Vehicle Treatment</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Lock in your estimated rate of <span className="text-cyan-400 font-bold">${currentPrice}</span> for {vehicle.toUpperCase()} ({service.toUpperCase()}).
                </p>
              </div>

              <div className="md:col-span-7">
                {booked ? (
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl text-center">
                    <CheckCircle2 className="size-6 text-cyan-400 mx-auto mb-1" />
                    <div className="font-bold text-xs text-white">Reservation Submitted!</div>
                    <p className="text-[11px] text-slate-400 mt-0.5">We will text your confirmation details.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setBooked(true)
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      required
                      type="text"
                      placeholder="Name"
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone"
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition shrink-0"
                    >
                      Book Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
