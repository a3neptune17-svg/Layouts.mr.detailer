"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "cn"

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  align?: "left" | "center"
  invert?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex flex-col", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.25em] mb-2 shadow-sm border",
            invert
              ? "bg-brand/20 text-brand border-brand/30"
              : "bg-brand/20 text-ink border-brand/30"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "relative mt-1 inline-block pb-4 text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight",
          invert ? "text-white" : "text-ink"
        )}
      >
        {title}
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 h-1.5 w-16 rounded-full",
            invert ? "bg-white/15" : "bg-ink/10",
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
          )}
        />
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn(
            "absolute bottom-0 h-1.5 w-16 rounded-full",
            invert ? "bg-gradient-to-r from-brand to-white" : "bg-gradient-to-r from-brand-foreground to-brand",
            align === "center" ? "left-1/2 origin-center -translate-x-1/2" : "left-0 origin-left"
          )}
        />
      </h2>
    </div>
  )
}
