"use client"

import { useState } from "react"
import { 
  Shield, 
  Sparkles, 
  Car, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  PhoneCall, 
  Calendar,
  Clock,
  Layers,
  Award
} from "lucide-react"

const STAGE_MEDIA = {
  ceramic: {
    title: "9H Nano-Ceramic Glass Defense",
    tagline: "5-Year Mirror Gloss & Self-Cleaning Hydrophobic Shield",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
    price: "$899+",
    highlight: "Repels UV, Mud, Acid Rain & Micro-Scratches"
  },
  ppf: {
    title: "Self-Healing Clear PPF Armor",
    tagline: "10-Year Rock-Chip & Impact Polyurethane Film",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    price: "$2,499+",
    highlight: "Self-Heals Swirls with Heat & Sun exposure"
  },
  correction: {
    title: "Precision Paint Correction",
    tagline: "90%+ Swirl & Defect Removal under Studio Floodlights",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop",
    price: "$599+",
    highlight: "Dual-Action Jeweling Compound Finish"
  },
  interior: {
    title: "Executive Interior Spa",
    tagline: "Hot Water Extraction & Ozone Odor Sterilization",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop",
    price: "$299+",
    highlight: "Matte Leather Protection & Anti-Bacterial Clean"
  },
  pricing: {
    title: "Transparent Studio Packages",
    tagline: "All-Inclusive Upfront Rates with Zero Hidden Fees",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    price: "$499 - $2,499",
    highlight: "Includes Inspection & Certified Guarantee"
  },
  booking: {
    title: "Reserve Your Studio Bay",
    tagline: "Climate-Controlled Precision Cleanroom Bay",
    image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=1200&auto=format&fit=crop",
    price: "Instant Confirmation",
    highlight: "Zero Deposit Required for Booking"
  }
}

export function DualStage() {
  const [activeMediaKey, setActiveMediaKey] = useState<keyof typeof STAGE_MEDIA>("ceramic")
  const [expandedSection, setExpandedSection] = useState<string>("services")
  const [booked, setBooked] = useState(false)

  const activeMedia = STAGE_MEDIA[activeMediaKey]

  return (
    <div className="min-h-[calc(100vh-50px)] bg-neutral-950 text-neutral-100 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-50px)]">
        
        {/* LEFT COLUMN: FIXED 50% MEDIA STAGE (Desktop Sticky) */}
        <div className="lg:col-span-6 relative bg-neutral-900 border-r border-neutral-800 flex flex-col justify-between p-6 md:p-10 overflow-hidden min-h-[400px] lg:min-h-full">
          {/* Background Media Image with Smooth Transitions */}
          <div className="absolute inset-0 z-0">
            <img
              src={activeMedia.image}
              alt={activeMedia.title}
              className="w-full h-full object-cover opacity-40 transition-all duration-700 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
          </div>

          {/* Top Stage Header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-lg bg-emerald-500 text-neutral-950 font-black flex items-center justify-center text-sm shadow-lg shadow-emerald-500/20">
                MD
              </div>
              <span className="font-bold tracking-tight text-white text-sm">MR. DETAILER · DUAL STAGE</span>
            </div>
            <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] uppercase font-bold px-3 py-1 rounded-full">
              Live Stage Preview
            </span>
          </div>

          {/* Center Stage Info */}
          <div className="relative z-10 my-auto py-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <Sparkles className="size-3.5" /> {activeMedia.highlight}
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              {activeMedia.title}
            </h1>
            <p className="text-neutral-300 text-sm max-w-lg mb-6 leading-relaxed">
              {activeMedia.tagline}
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-2xl px-5 py-3">
                <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Investment Rate</span>
                <span className="text-2xl font-black text-white">{activeMedia.price}</span>
              </div>
              <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-2xl px-5 py-3">
                <span className="text-[10px] uppercase text-neutral-400 font-semibold block">Studio Rating</span>
                <span className="text-lg font-bold text-emerald-400 flex items-center gap-1">
                  5.0 <Star className="size-3.5 fill-emerald-400" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Stage Footer */}
          <div className="relative z-10 flex items-center justify-between pt-6 border-t border-neutral-800/80 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-emerald-400" /> XPEL & Gtechniq Certified Cleanroom Bay
            </div>
            <a href="tel:2145550199" className="text-emerald-400 hover:underline flex items-center gap-1 font-mono">
              <PhoneCall className="size-3" /> (214) 555-0199
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: COMPACT ACCORDION CARD STREAM */}
        <div className="lg:col-span-6 p-6 md:p-10 flex flex-col justify-center max-w-2xl mx-auto w-full">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">Interactive Studio Directory</h2>
            <p className="text-xs text-neutral-400 mt-1">Select any section to update the live stage visual on the left</p>
          </div>

          <div className="space-y-4">
            {/* ACCORDION 1: SERVICES MATRIX */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => { setExpandedSection(expandedSection === "services" ? "" : "services"); setActiveMediaKey("ceramic"); }}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-white hover:bg-neutral-800/50 transition"
              >
                <div className="flex items-center gap-3">
                  <Car className="size-4 text-emerald-400" />
                  <span>1. Precision Detailing Services</span>
                </div>
                <ChevronDown className={`size-4 text-neutral-400 transition-transform ${expandedSection === "services" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              {expandedSection === "services" && (
                <div className="p-5 border-t border-neutral-800 space-y-3 bg-neutral-950/50">
                  {[
                    { key: "ceramic", title: "9H Nano-Ceramic Coating", price: "$899+", desc: "5-Year glass layer defense & hydrophobic gloss." },
                    { key: "ppf", title: "Full Body PPF Paint Protection", price: "$2,499+", desc: "Self-healing polyurethane film against rock chips." },
                    { key: "correction", title: "Paint Correction & Swirl Removal", price: "$599+", desc: "Dual-action polish eliminating 90%+ swirl marks." },
                    { key: "interior", title: "Executive Interior Spa", price: "$299+", desc: "Hot water extraction, leather care & ozone treatment." },
                  ].map((item) => (
                    <div
                      key={item.key}
                      onClick={() => setActiveMediaKey(item.key as any)}
                      className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                        activeMediaKey === item.key
                          ? "bg-emerald-500/10 border-emerald-500/40 text-white"
                          : "bg-neutral-900 border-neutral-800 hover:border-neutral-700 text-neutral-300"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs text-white">{item.title}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
                      </div>
                      <span className="text-xs font-black text-emerald-400 shrink-0 ml-3">{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ACCORDION 2: WORKFLOW & GUARANTEE */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => { setExpandedSection(expandedSection === "process" ? "" : "process"); setActiveMediaKey("correction"); }}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-white hover:bg-neutral-800/50 transition"
              >
                <div className="flex items-center gap-3">
                  <Layers className="size-4 text-emerald-400" />
                  <span>2. Studio Quality Process & Workflow</span>
                </div>
                <ChevronDown className={`size-4 text-neutral-400 transition-transform ${expandedSection === "process" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              {expandedSection === "process" && (
                <div className="p-5 border-t border-neutral-800 bg-neutral-950/50 space-y-3 text-xs text-neutral-300">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <div className="font-bold text-emerald-400">Step 1: Chemical Decon</div>
                      <p className="text-[11px] text-neutral-400 mt-1">Iron fallout bath & clay bar decontamination.</p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <div className="font-bold text-emerald-400">Step 2: Paint Inspection</div>
                      <p className="text-[11px] text-neutral-400 mt-1">Digital paint depth gauge measurement.</p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <div className="font-bold text-emerald-400">Step 3: Machine Polish</div>
                      <p className="text-[11px] text-neutral-400 mt-1">Multi-stage compound & jeweling polish.</p>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <div className="font-bold text-emerald-400">Step 4: Ceramic Cure</div>
                      <p className="text-[11px] text-neutral-400 mt-1">Infrared heat lamp ceramic glass curing.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ACCORDION 3: TRANSPARENT PACKAGES */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => { setExpandedSection(expandedSection === "pricing" ? "" : "pricing"); setActiveMediaKey("pricing"); }}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-white hover:bg-neutral-800/50 transition"
              >
                <div className="flex items-center gap-3">
                  <Award className="size-4 text-emerald-400" />
                  <span>3. Package Pricing Comparison</span>
                </div>
                <ChevronDown className={`size-4 text-neutral-400 transition-transform ${expandedSection === "pricing" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              {expandedSection === "pricing" && (
                <div className="p-5 border-t border-neutral-800 bg-neutral-950/50 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <div className="font-bold text-white">Silver</div>
                      <div className="text-emerald-400 font-black mt-1">$499</div>
                      <div className="text-[10px] text-neutral-400 mt-1">1-Yr Sealant</div>
                    </div>
                    <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30">
                      <div className="font-bold text-emerald-400">Gold Ceramic</div>
                      <div className="text-emerald-400 font-black mt-1">$899</div>
                      <div className="text-[10px] text-neutral-400 mt-1">5-Yr 9H Shield</div>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800">
                      <div className="font-bold text-white">Platinum PPF</div>
                      <div className="text-emerald-400 font-black mt-1">$2,499</div>
                      <div className="text-[10px] text-neutral-400 mt-1">10-Yr Armor</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ACCORDION 4: DIRECT STUDIO BOOKING */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => { setExpandedSection(expandedSection === "booking" ? "" : "booking"); setActiveMediaKey("booking"); }}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm text-white hover:bg-neutral-800/50 transition"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="size-4 text-emerald-400" />
                  <span>4. Instant Studio Reservation</span>
                </div>
                <ChevronDown className={`size-4 text-neutral-400 transition-transform ${expandedSection === "booking" ? "rotate-180 text-emerald-400" : ""}`} />
              </button>

              {expandedSection === "booking" && (
                <div className="p-5 border-t border-neutral-800 bg-neutral-950/50">
                  {booked ? (
                    <div className="text-center py-4 text-xs">
                      <CheckCircle2 className="size-8 text-emerald-400 mx-auto mb-2" />
                      <div className="font-bold text-white text-sm">Studio Bay Reserved!</div>
                      <p className="text-neutral-400 mt-1">We will contact you shortly to confirm drop-off.</p>
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
                        placeholder="Your Name"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-400"
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs transition"
                      >
                        Confirm Booking Slot
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
