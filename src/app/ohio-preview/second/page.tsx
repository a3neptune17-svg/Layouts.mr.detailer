import { ThemeControl } from "@/components/ohio/theme-control";
import "./alternative.css";
import type { Metadata } from "next";
import { StudioPage } from "@/components/ohio-alternative/studio-page";
import "../../ohio-3-1/ohio-3-1.css";
import "../ohio-preview.css";

import "@/components/ohio/client-refinements.css";

export const metadata: Metadata = {
  title: "MR. DETAILER — Ohio Preview 2",
  description: "The alternative Ohio design for MR. DETAILER.",
};

export default function SecondOhioPreview() {
  return <div className="ohio-preview-two" data-theme="dark"><ThemeControl/><div className="ohio-preview-two-control"><span>OHIO — PREVIEW 2</span><a href="/ohio-preview">Return to First Ohio Preview ↗</a></div><StudioPage/></div>;
}
