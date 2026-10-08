import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RebuildPage } from "@/components/ohio/rebuild-page";
import "./ohio.css";
import "../ohio-preview/refinement.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--or-font" });
export const metadata: Metadata = {
  title: "MR. DETAILER — The Boss of Detailers | Ludhiana",
  description: "Welcome back to perfection. Explore MR. DETAILER paint protection films, coatings, detailing, auto mods and car care at our Ludhiana studio.",
};
export default function OhioPage() {
  return <div className={`ohio-client-preview ${inter.variable}`}><RebuildPage previewOne /></div>;
}
