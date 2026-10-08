import type { Metadata } from "next"
import "./ohio-3.css"
import { Ohio3Client } from "@/components/ohio-3/ohio-3-client"

export const metadata: Metadata = {
  title: "Mr. Detailer — Premium Studio | Ohio 3",
  description:
    "Mr. Detailer premium studio: Paint Protection Film (PPF), Surface Coatings, Detailing Packages, Auto Mods, and Warranty Hub.",
}

export default function Ohio3Page() {
  return <Ohio3Client />
}
