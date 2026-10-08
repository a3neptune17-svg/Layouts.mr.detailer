import type { Metadata } from "next";
import { StudioPage } from "@/components/ohio-3-1/studio-page";
import "./ohio-3-1.css";

export const metadata: Metadata = {
  title: "MR. DETAILER — Welcome back to perfection | Ohio 3-1",
  description:
    "Explore MR. DETAILER’s paint protection films, coatings, detailing, auto mods and car care. Discover our studio work and enquire about your next appointment.",
};

export default function Ohio31Page() {
  return <StudioPage />;
}
