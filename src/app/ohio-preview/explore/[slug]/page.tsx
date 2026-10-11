import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { detailPages } from "@/components/ohio/detail-content";
import { DetailPage } from "@/components/ohio/detail-page";
import "../../ohio-preview.css";
import "../../ohio.css";
import "../../refinement.css";
import "@/components/ohio/client-refinements.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--or-font" });
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(detailPages).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${detailPages[slug]?.title ?? "Studio"} — MR. DETAILER` };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = detailPages[slug];
  if (!content) notFound();
  return <div className={`ohio-client-preview ${inter.variable}`}><DetailPage content={content}/></div>;
}
