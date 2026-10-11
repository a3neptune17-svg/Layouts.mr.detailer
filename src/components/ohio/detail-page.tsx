"use client";
import Image from "next/image";
import { useState } from "react";
import { RebuildNavigation } from "./rebuild-interactions";
import { ThemeControl } from "./theme-control";
import { ClientFooter } from "./client-footer";
import { clientConfig, ohioPage } from "./client-config";
import { whatsapp } from "./rebuild-data";
import { Booking } from "../ohio-3-1/booking";
import type { DetailContent } from "./detail-content";

export function DetailPage({ content }: { content: DetailContent }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  return <div className="ohio-rebuild or-preview-one" data-theme={theme} id="home"><ThemeControl theme={theme} setTheme={setTheme}/><RebuildNavigation/><main className="or-main" id="main"><article className="client-detail"><a href="/ohio-preview">← Back to the studio</a><p className="or-eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p>{content.intro}</p>
    {content.kind === "shop" && <Image className="client-detail-image" src={clientConfig.shopImage} width={1000} height={667} alt="Pro Detail Kit with care products and accessories"/>}
    {content.kind === "gallery" && <div className="client-gallery">{["IMG_20260809_182226.jpg.jpeg","IMG_20260809_180906.jpg.jpeg","IMG_20260809_180638.jpg.jpeg","IMG_20260809_180252.jpg.jpeg"].map(name => <Image key={name} src={`/images/${name}`} width={700} height={500} alt="Detailing and protection work at the Mr. Detailer studio"/>)}</div>}
    {content.kind === "booking" && <Booking/>}
    <div className="client-detail-grid">{content.sections.map(section => section.slug ? <a className="client-detail-card" href={ohioPage(section.slug)} key={section.title}><h2>{section.title} ↗</h2><p>{section.text}</p></a> : <section className="client-detail-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}</div>
    <div className="client-detail-contact"><a className="or-pill" href={whatsapp} target="_blank" rel="noopener noreferrer">Drop us a line ↗</a><p><a href={clientConfig.telephone}>{clientConfig.phone}</a> · <a href={`mailto:${clientConfig.email}`}>{clientConfig.email}</a></p>{clientConfig.location && <p>{clientConfig.location}</p>}</div>
  </article><ClientFooter/></main></div>;
}
