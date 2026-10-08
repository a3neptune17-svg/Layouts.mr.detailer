"use client"

import dynamic from "next/dynamic"
import React from "react"

export const Ohio3Client = dynamic(
  () => import("./ohio-3-shell").then((mod) => mod.Ohio3Shell),
  {
    ssr: false,
    loading: () => (
      <div style={{ minHeight: "100vh", backgroundColor: "#1a1a18" }} />
    ),
  }
)
