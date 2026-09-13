"use client"

import Link from "next/link"
import { Mail, Phone, Timer } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const CONTACT_DETAILS = [
  { icon: Phone, label: "+1 (214) 555-0199", href: "tel:+12145550199" },
  { icon: Mail, label: "hello@mrdetailer.studio", href: "mailto:hello@mrdetailer.studio" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-16 md:py-24 text-white border-t border-white/10">
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-2xl">
          <Timer className="size-6" />
        </span>
        
        <span className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-brand">
          FINISHED
        </span>

        <h2 className="mt-2 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
          BOOKING
        </h2>

        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-brand px-10 py-6 text-xs font-black uppercase tracking-widest text-brand-foreground hover:bg-brand/85 shadow-2xl transition-transform hover:scale-105"
        >
          <Link href="mailto:hello@mrdetailer.studio">BOOK NOW</Link>
        </Button>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
          {CONTACT_DETAILS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/70 transition-colors duration-200 hover:text-brand"
            >
              <Icon className="size-4 text-brand" />
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
