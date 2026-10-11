import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RebuildPage } from "@/components/ohio/rebuild-page";
import "./ohio-preview.css";
import "./ohio.css";
import "./refinement.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--or-font" });

import "@/components/ohio/client-refinements.css";

export const metadata: Metadata = {
  title: "MR. DETAILER — Ohio Client Preview",
  description: "Compare the two preserved Ohio layout variations for MR. DETAILER.",
};

export default function OhioPreviewPage() {
  return <div className={`ohio-client-preview ${inter.variable}`}><RebuildPage previewOne /></div>;
}
