"use client"

import { useState, useEffect } from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Car, 
  DollarSign, 
  Calendar, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  PhoneCall
} from "lucide-react"

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [booked, setBooked] = useState(false)

  const totalSlides = 5

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="relative h-[calc(100vh-50px)] bg-zinc-950 text-white font-sans overflow-hidden select-none">
      
      {/* Top Deck Control Header */}
      <div className="absolute top-4 left-6 right-6 z-30 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="size-8 rounded-lg bg-sky-500 text-zinc-950 font-black flex items-center justify-center text-xs shadow-lg shadow-sky-500/20">
            03
          </span>
          <div>
            <h1 className="font-bold text-xs text-white">MR. DETAILER DECK</h1>
            <p className="text-[10px] text-zinc-400">Horizontal Slide Presentation · Use ← → Keys</p>
          </div>
        </div>

        {/* Slide Step Dots */}
        <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-800">
          <span className="text-xs font-mono font-bold text-sky-400">0{currentSlide + 1} / 0{totalSlides}</span>
          <div className="w-px h-3 bg-zinc-800 mx-1" />
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === idx ? "w-6 bg-sky-400" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide(4)}
          className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-bold transition shadow-md shadow-sky-500/20"
        >
          <span>Book Bay</span>
          <ArrowRight className="size-3" />
        </button>
      </div>

      {/* Floating Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 size-12 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-white hover:bg-sky-500 hover:text-zinc-950 hover:border-sky-500 flex items-center justify-center transition shadow-2xl backdrop-blur-md"
      >
        <ChevronLeft className="size-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 size-12 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-white hover:bg-sky-500 hover:text-zinc-950 hover:border-sky-500 flex items-center justify-center transition shadow-2xl backdrop-blur-md"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* SLIDE DECK CONTAINER (Horizontal Flex Track) */}
      <div
        className="h-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* SLIDE 1: HERO OVERVIEW */}
        <div className="w-full h-full shrink-0 relative flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Detailing"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
          </div>

          <div className="relative z-10 max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
              <Sparkles className="size-3.5" /> Stage 01 · Studio Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Museum-Grade Detailing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                Zero Compromise.
              </span>
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Precision 9H ceramic coatings, self-healing PPF armor, and multi-stage paint restoration. Swipe or click to navigate the presentation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setCurrentSlide(1)}
                className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-bold flex items-center gap-2 transition shadow-xl shadow-sky-500/20"
              >
                <span>Explore Services</span>
                <ChevronRight className="size-4" />
              </button>
              <button
                onClick={() => setCurrentSlide(3)}
                className="px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold border border-zinc-800 transition"
              >
                View Packages
              </button>
            </div>
          </div>
        </div>

        {/* SLIDE 2: SERVICES MATRIX */}
        <div className="w-full h-full shrink-0 relative flex items-center justify-center p-6 md:p-12 bg-zinc-950">
          <div className="max-w-5xl w-full space-y-6">
            <div className="text-center">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Stage 02</span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Core Detailing Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "9H Nano-Ceramic Shield", price: "$899+", tag: "5-Year Guarantee", desc: "Permanent gloss layer protection against UV & acid rain." },
                { title: "Self-Healing PPF Film", price: "$2,499+", tag: "10-Year Armor", desc: "Clear polyurethane film preventing rock chips and road rash." },
                { title: "Multi-Stage Paint Correction", price: "$599+", tag: "90%+ Swirl Removal", desc: "Precision dual-action machine polishing for mirror depth." },
                { title: "Executive Interior Spa", price: "$299+", tag: "Deep Steam Clean", desc: "Hot water extraction, leather conditioning & ozone treatment." },
              ].map((s, idx) => (
                <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 hover:border-sky-500/40 transition">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-sky-400 uppercase bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                      {s.tag}
                    </span>
                    <span className="text-lg font-black text-white">{s.price}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">{s.desc}</p>
                  <button
                    onClick={() => setCurrentSlide(4)}
                    className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <span>Reserve Treatment</span>
                    <ChevronRight className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SLIDE 3: BEFORE & AFTER SHOWCASE */}
        <div className="w-full h-full shrink-0 relative flex items-center justify-center p-6 md:p-12 bg-zinc-950">
          <div className="max-w-4xl w-full space-y-6">
            <div className="text-center">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Stage 03</span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Studio Results Showcase</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop"
                  alt="BMW M4"
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white">BMW M4 Competition</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">2-Stage Paint Correction + 9H Ceramic</p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
                  alt="Porsche 911"
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white">Porsche 911 GT3</h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Full Body Clear Self-Healing PPF Wrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 4: PACKAGES */}
        <div className="w-full h-full shrink-0 relative flex items-center justify-center p-6 md:p-12 bg-zinc-950">
          <div className="max-w-5xl w-full space-y-6">
            <div className="text-center">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Stage 04</span>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">All-Inclusive Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-zinc-400">SILVER</div>
                  <div className="text-2xl font-black text-white mt-1">$499</div>
                  <p className="text-xs text-zinc-400 mt-2 mb-4">1-Year Sealant Protection</p>
                </div>
                <button onClick={() => setCurrentSlide(4)} className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold">
                  Select Silver
                </button>
              </div>

              <div className="bg-zinc-900 border-2 border-sky-500 rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-sky-500/10">
                <div>
                  <div className="text-xs font-bold text-sky-400">GOLD CERAMIC</div>
                  <div className="text-2xl font-black text-sky-400 mt-1">$899</div>
                  <p className="text-xs text-zinc-400 mt-2 mb-4">5-Year 9H Nano Glass Shield</p>
                </div>
                <button onClick={() => setCurrentSlide(4)} className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-zinc-950 rounded-xl text-xs font-bold">
                  Select Gold Ceramic
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-zinc-400">PLATINUM PPF</div>
                  <div className="text-2xl font-black text-white mt-1">$2,499</div>
                  <p className="text-xs text-zinc-400 mt-2 mb-4">Full Front PPF + Ceramic</p>
                </div>
                <button onClick={() => setCurrentSlide(4)} className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold">
                  Select Platinum
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 5: EXPRESS BOOKING */}
        <div className="w-full h-full shrink-0 relative flex items-center justify-center p-6 md:p-12 bg-zinc-950">
          <div className="max-w-xl w-full bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Stage 05</span>
              <h2 className="text-2xl font-bold text-white mt-1">Reserve Studio Bay</h2>
            </div>

            {booked ? (
              <div className="text-center py-6">
                <CheckCircle2 className="size-10 text-sky-400 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-white">Booking Confirmed!</h3>
                <p className="text-xs text-zinc-400 mt-1">We look forward to servicing your vehicle.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setBooked(true)
                }}
                className="space-y-4"
              >
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition"
                >
                  Submit Reservation Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
