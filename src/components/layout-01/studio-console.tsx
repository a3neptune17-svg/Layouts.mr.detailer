"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Sparkles, 
  ShieldCheck, 
  Car, 
  Clock, 
  Star, 
  Calendar, 
  CheckCircle2, 
  Sliders, 
  PhoneCall, 
  ChevronRight, 
  ArrowRight,
  Zap,
  Award,
  DollarSign,
  Image as ImageIcon
} from "lucide-react"

const SERVICES = [
  {
    id: "ceramic",
    title: "9H Ceramic Coating",
    category: "Protection",
    duration: "1-2 Days",
    priceSedan: "$899",
    priceSUV: "$1,099",
    priceExotic: "$1,399",
    desc: "Hyper-hydrophobic nano-ceramic glass shield protecting against UV, acid rain, and scratch damage with up to 5 years warranty.",
    features: ["5-Year Nano Shield", "Extreme Hydrophobic Gloss", "Scratch & UV Resistance", "Includes 1-Stage Polish"],
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ppf",
    title: "Full Body PPF (Paint Protection)",
    category: "Armor",
    duration: "2-3 Days",
    priceSedan: "$2,499",
    priceSUV: "$2,999",
    priceExotic: "$3,699",
    desc: "Self-healing clear polyurethane armor preventing rock chips, road debris, and physical impacts.",
    features: ["Self-Healing Polymer", "10-Year Warranty", "Custom Edge Wraps", "Zero Yellowing Guarantee"],
    badge: "Ultimate Defense",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "correction",
    title: "Multi-Stage Paint Correction",
    category: "Restoration",
    duration: "1 Day",
    priceSedan: "$599",
    priceSUV: "$699",
    priceExotic: "$899",
    desc: "Precision machine compounding and jeweling polish to eliminate 90%+ swirl marks, oxidation, and scratches.",
    features: ["Dual-Action Machine Polish", "Paint Depth Gauge Check", "90%+ Swirl Removal", "High-Gloss Finish Wipe"],
    badge: "Showroom Finish",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "interior",
    title: "Executive Interior Spa",
    category: "Detailing",
    duration: "4 Hours",
    priceSedan: "$299",
    priceSUV: "$349",
    priceExotic: "$399",
    desc: "Deep steam extraction, leather conditioning, ozone anti-bacterial treatment, and ceramic fabric protection.",
    features: ["Hot Water Extraction", "Leather Nourishing Conditioner", "Ozone Odor Elimination", "Matte Trim Coating"],
    badge: "Deep Clean",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop"
  }
]

const GALLERY_ITEMS = [
  { title: "Porsche 911 GT3 - Full PPF & Ceramic", tag: "Exotic", before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop" },
  { title: "BMW M4 Competition - Paint Correction", tag: "Coupe", before: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop" },
  { title: "Mercedes-AMG G63 - Matte PPF Shield", tag: "SUV", before: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?q=80&w=800&auto=format&fit=crop" },
  { title: "Audi RS6 Avant - 9H Ceramic", tag: "Wagon", before: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop" },
]

export function StudioConsole() {
  const [activeTab, setActiveTab] = useState<"overview" | "services" | "gallery" | "pricing" | "booking">("overview")
  const [vehicleType, setVehicleType] = useState<"Sedan" | "SUV" | "Exotic">("Sedan")
  const [selectedService, setSelectedService] = useState<string>("ceramic")
  const [booked, setBooked] = useState(false)

  return (
    <div className="flex flex-col min-h-[calc(100vh-50px)] bg-slate-950 text-slate-100 font-sans">
      {/* Studio Header Bar */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
            MD
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-white tracking-tight">MR. DETAILER STUDIO</h1>
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                Console Edition
              </span>
            </div>
            <p className="text-xs text-slate-400">Precision Auto Detail & Ceramic Studio · Dallas, TX</p>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <nav className="flex items-center bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shadow-inner overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: Zap },
            { id: "services", label: "Services & Rates", icon: Car },
            { id: "gallery", label: "Showroom", icon: ImageIcon },
            { id: "pricing", label: "Packages", icon: DollarSign },
            { id: "booking", label: "Book Studio", icon: Calendar },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Direct Action */}
        <div className="flex items-center gap-3">
          <a
            href="tel:2145550199"
            className="hidden sm:flex items-center gap-2 text-xs text-slate-300 hover:text-amber-400 transition"
          >
            <PhoneCall className="size-3.5 text-amber-400" />
            <span className="font-mono font-medium">(214) 555-0199</span>
          </a>
          <button
            onClick={() => setActiveTab("booking")}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition"
          >
            Reserve Slot
          </button>
        </div>
      </header>

      {/* Main Studio Viewport Container (Non-scrolly App Layout) */}
      <main className="flex-1 p-4 md:p-6 max-w-7xl w-full mx-auto flex flex-col justify-center">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Hero Left Card */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
                  <Sparkles className="size-3.5" /> Premier Ceramic & PPF Studio
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                  Flawless Automotive <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    Artistry & Protection.
                  </span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-6">
                  Experience museum-grade paint correction, 9H nano ceramic shields, and self-healing PPF wraps. Delivered by certified master detailers in a climate-controlled cleanroom studio.
                </p>
              </div>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <div className="text-2xl font-black text-white">500+</div>
                  <div className="text-xs text-slate-400 font-medium">Exotics & Luxury Treated</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-1">
                    5.0 <Star className="size-4 fill-amber-400" />
                  </div>
                  <div className="text-xs text-slate-400 font-medium">Verified Google Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">10 Yrs</div>
                  <div className="text-xs text-slate-400 font-medium">PPF & Ceramic Guarantee</div>
                </div>
              </div>
            </div>

            {/* Featured Cards Right */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Highlight Service Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    Flagship Treatment
                  </span>
                  <span className="text-xs text-slate-400">Save $200 Today</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">9H Nano-Ceramic Glass Coating</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    5-Year glass layer defense with mirror finish reflection and effortless self-cleaning properties.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-xs text-slate-400">Starting from</span>
                    <div className="text-2xl font-black text-white">$899</div>
                  </div>
                  <button
                    onClick={() => { setSelectedService("ceramic"); setActiveTab("services"); }}
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Instant Studio Action Card */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-6 text-slate-950 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-lg leading-tight">Ready for Transformation?</h4>
                  <p className="text-xs font-medium text-slate-900/80 mt-1">Book your studio slot in under 60 seconds.</p>
                </div>
                <button
                  onClick={() => setActiveTab("booking")}
                  className="px-5 py-3 rounded-2xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition shadow-xl"
                >
                  Book Slot Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SERVICES & RATES */}
        {activeTab === "services" && (
          <div className="space-y-6">
            {/* Vehicle Selector bar */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Car className="size-5 text-amber-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">Select Vehicle Class</h3>
                  <p className="text-xs text-slate-400">Prices update automatically based on surface area</p>
                </div>
              </div>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                {(["Sedan", "SUV", "Exotic"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setVehicleType(type)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                      vehicleType === type
                        ? "bg-amber-500 text-slate-950 shadow"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((s) => {
                const price = vehicleType === "Sedan" ? s.priceSedan : vehicleType === "SUV" ? s.priceSUV : s.priceExotic
                return (
                  <div
                    key={s.id}
                    className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition rounded-3xl p-6 flex flex-col justify-between relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                          {s.badge}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="size-3 text-amber-400" /> {s.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">{s.desc}</p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {s.features.map((f, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                            <CheckCircle2 className="size-3.5 text-amber-400 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-slate-400">Rate ({vehicleType})</span>
                        <div className="text-2xl font-black text-white">{price}</div>
                      </div>
                      <button
                        onClick={() => { setSelectedService(s.id); setActiveTab("booking"); }}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition flex items-center gap-1"
                      >
                        <span>Select Package</span>
                        <ChevronRight className="size-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* TAB 3: SHOWROOM GALLERY */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto mb-2">
              <h2 className="text-2xl font-bold text-white">Recent Studio Transformations</h2>
              <p className="text-xs text-slate-400 mt-1">Inspected under 2,000-lumen studio floodlights</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GALLERY_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.before}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full border border-amber-500/20">
                      {item.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold mt-1">
                        <Star className="size-3 fill-amber-400" /> Flawless Mirror Gloss Rating
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PACKAGES & PRICING */}
        {activeTab === "pricing" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Silver Tier */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Essential</span>
                <h3 className="text-2xl font-bold text-white mt-1">Silver Package</h3>
                <div className="text-3xl font-black text-white mt-3">$499 <span className="text-xs text-slate-400 font-normal">/ sedan</span></div>
                <p className="text-xs text-slate-400 mt-2 mb-6">1-Year Sealant Protection & 1-Stage Polish.</p>
                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Exterior Foam Bath</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> 1-Stage Paint Enhancement</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> 12-Month Synthetic Sealant</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Wheel Barrel Deep Clean</li>
                </ul>
              </div>
              <button
                onClick={() => setActiveTab("booking")}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
              >
                Choose Silver
              </button>
            </div>

            {/* Gold Tier (Highlighted) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500 rounded-3xl p-6 flex flex-col justify-between relative shadow-xl shadow-amber-500/10">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Signature</span>
                <h3 className="text-2xl font-bold text-white mt-1">Gold Ceramic Package</h3>
                <div className="text-3xl font-black text-amber-400 mt-3">$899 <span className="text-xs text-slate-400 font-normal">/ sedan</span></div>
                <p className="text-xs text-slate-400 mt-2 mb-6">5-Year Ceramic Protection with Dual Stage Correction.</p>
                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Multi-Stage Paint Correction</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> 5-Year 9H Nano Ceramic Coating</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Ceramic Glass & Wheel Coating</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Full Interior Spa Treatment</li>
                </ul>
              </div>
              <button
                onClick={() => setActiveTab("booking")}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition"
              >
                Choose Gold Ceramic
              </button>
            </div>

            {/* Platinum Tier */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ultimate Armor</span>
                <h3 className="text-2xl font-bold text-white mt-1">Platinum PPF & Ceramic</h3>
                <div className="text-3xl font-black text-white mt-3">$2,499 <span className="text-xs text-slate-400 font-normal">/ sedan</span></div>
                <p className="text-xs text-slate-400 mt-2 mb-6">Full Front PPF Armor + 5-Year Ceramic Body Shield.</p>
                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Full Front Impact PPF Wrap</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> 10-Year Self-Healing Film</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> 9H Ceramic Over PPF Topcoat</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="size-4 text-amber-400" /> Executive Interior Spa & Leather Care</li>
                </ul>
              </div>
              <button
                onClick={() => setActiveTab("booking")}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
              >
                Choose Platinum PPF
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: BOOK STUDIO */}
        {activeTab === "booking" && (
          <div className="max-w-2xl mx-auto w-full bg-slate-900/70 border border-slate-800 rounded-3xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Reserve Studio Appointment</h2>
              <p className="text-xs text-slate-400 mt-1">Instant confirmation · Zero deposit required</p>
            </div>

            {booked ? (
              <div className="text-center py-8 space-y-4">
                <div className="size-16 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Reservation Confirmed!</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Our studio manager will reach out within 15 minutes to confirm vehicle drop-off timing.
                </p>
                <button
                  onClick={() => setBooked(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
                >
                  Book Another Vehicle
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setBooked(true)
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Alexander Wright"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="(214) 555-0199"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Vehicle Make & Model</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 2024 Porsche 911 GT3"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Desired Treatment</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="ceramic">9H Nano-Ceramic Coating ($899+)</option>
                      <option value="ppf">Full Body PPF Armor ($2,499+)</option>
                      <option value="correction">Multi-Stage Paint Correction ($599+)</option>
                      <option value="interior">Executive Interior Spa ($299+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Preferred Date & Studio Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Mention any specific paint defects or drop-off time requirements..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-amber-500/20"
                >
                  Submit Reservation Request
                </button>
              </form>
            )}
          </div>
        )}
      </main>

      {/* Studio Footer Status Bar */}
      <footer className="border-t border-slate-900 bg-slate-950 px-6 py-3 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-slate-400">
            <ShieldCheck className="size-3.5 text-amber-400" /> Authorized Gtechniq & XPEL Studio
          </span>
          <span>·</span>
          <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
        </div>
        <div>© 2026 Mr. Detailer Studio. All rights reserved.</div>
      </footer>
    </div>
  )
}
