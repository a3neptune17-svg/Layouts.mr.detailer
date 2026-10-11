"use client";

import Image from "next/image";
import { useState } from "react";
import { RebuildNavigation } from "./rebuild-interactions";
import { ThemeControl } from "./theme-control";
import { ClientFooter } from "./client-footer";
import { clientConfig, ohioPage } from "./client-config";
import { imagePath, whatsapp } from "./rebuild-data";
import { Booking } from "../ohio-3-1/booking";
import { ArrowLeft, ArrowRight, ArrowUpRight, WhatsAppMark } from "./icons";
import type { DetailContent } from "./detail-content";

export function DetailPage({ content }: { content: DetailContent }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const isShop = content.kind === "shop";
  const isGallery = content.kind === "gallery";
  const isBooking = content.kind === "booking";

  return (
    <div className="ohio-rebuild or-preview-one" data-theme={theme} id="home">
      <ThemeControl theme={theme} setTheme={setTheme} />
      <RebuildNavigation />

      <main className="or-main" id="main">
        <article className="client-detail">
          <a href="/ohio-preview" className="client-detail-back">
            <ArrowLeft className="or-arrow-inline" /> Back to Studio Overview
          </a>

          <header className="client-detail-header">
            <p className="client-detail-eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="client-detail-intro">{content.intro}</p>
          </header>

          {/* Shop Hero Card */}
          {isShop && (
            <div className="client-shop-hero">
              <div className="client-shop-hero-copy">
                <p className="or-panel-eyebrow">PRO DETAIL KIT · CARE ESSENTIALS</p>
                <h2>STUDIO-GRADE FINISH PRESERVATION</h2>
                <p>
                  Curated care products formulated to complement our paint protection films, ceramic coatings, and surface treatments. Discuss product suitability and availability directly with the studio team.
                </p>
                <div style={{ display: "flex", gap: "14px", marginTop: "24px" }}>
                  <a className="or-pill" href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppMark /> Enquire on WhatsApp <ArrowUpRight className="or-arrow-inline" />
                  </a>
                  <a className="or-pill" href={ohioPage("booking")}>
                    Studio Visit <ArrowRight className="or-arrow-inline" />
                  </a>
                </div>
              </div>
              <div className="client-shop-hero-media">
                <Image
                  src={clientConfig.shopImage}
                  width={1000}
                  height={667}
                  alt="MR. DETAILER Pro Detail Kit with care products and accessories"
                  className="client-shop-hero-img"
                  priority
                />
              </div>
            </div>
          )}

          {/* Studio Gallery Grid */}
          {isGallery && (
            <div className="client-gallery">
              {[
                { name: "IMG_20260809_182226.jpg.jpeg", caption: "Precision Machine Polishing" },
                { name: "IMG_20260809_180906.jpg.jpeg", caption: "Film Edge Alignment & Tuck" },
                { name: "IMG_20260809_180638.jpg.jpeg", caption: "Clean Surface Preparation" },
                { name: "IMG_20260809_180252.jpg.jpeg", caption: "Post-Treatment Studio Inspection" },
              ].map(({ name, caption }) => (
                <div key={name} style={{ position: "relative" }}>
                  <Image
                    src={imagePath(name)}
                    width={800}
                    height={550}
                    alt={`MR. DETAILER studio — ${caption}`}
                    style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "2px" }}
                  />
                  <p style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--client-muted)", marginTop: "8px" }}>
                    {caption}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Interactive Booking Section */}
          {isBooking && (
            <div className="client-service-editorial">
              <div style={{ background: "var(--client-surface)", padding: "clamp(24px, 3.5vw, 44px)", border: "1px solid var(--client-line)" }}>
                <p className="or-panel-eyebrow" style={{ marginBottom: "16px" }}>BOOK A STUDIO INSPECTION</p>
                <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Schedule Your Vehicle Assessment</h2>
                <p style={{ color: "var(--client-muted)", marginBottom: "32px", fontSize: "14px", lineHeight: "1.6" }}>
                  An in-person studio inspection helps evaluate paint depth, existing swirl marks, contamination, and define the exact scope of treatment for your vehicle.
                </p>
                <Booking />
              </div>
              <aside className="client-editorial-aside">
                <div className="client-aside-box">
                  <h4>DIRECT CONTACT</h4>
                  <p>Have an immediate question or prefer to discuss via telephone?</p>
                  <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
                    <a href={clientConfig.telephone} style={{ color: "inherit", textDecoration: "none" }}>{clientConfig.phone}</a>
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--client-muted)", marginBottom: "20px" }}>
                    <a href={`mailto:${clientConfig.email}`} style={{ color: "inherit", textDecoration: "none" }}>{clientConfig.email}</a>
                  </p>
                  <a className="or-pill" href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppMark /> DROP US A LINE <ArrowUpRight className="or-arrow-inline" />
                  </a>
                </div>
              </aside>
            </div>
          )}

          {/* Asymmetric Editorial Section Content */}
          {!isBooking && content.sections.length > 0 && (
            <div className="client-service-editorial">
              <div className="client-editorial-main">
                {content.sections.map((section, idx) => (
                  <div key={section.title} className="client-spec-card">
                    <h3>
                      <span>{String(idx + 1).padStart(2, "0")} / {section.title}</span>
                      {section.slug && <span style={{ color: "var(--client-lime)" }}><ArrowUpRight className="or-arrow-inline" /></span>}
                    </h3>
                    <p>{section.text}</p>
                    {section.slug && (
                      <a
                        href={ohioPage(section.slug)}
                        style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "14px", color: "var(--client-lime)", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}
                      >
                        Explore {section.title} <ArrowRight className="or-arrow-inline" />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <aside className="client-editorial-aside">
                <div className="client-aside-box">
                  <h4>THE STUDIO STANDARD</h4>
                  <p>
                    Every treatment begins with a thorough inspection of your vehicle’s condition, paint thickness, and usage profile.
                  </p>
                  <a className="or-pill" href={ohioPage("booking")}>
                    BOOK A STUDIO INSPECTION <ArrowRight className="or-arrow-inline" />
                  </a>
                </div>

                <div className="client-aside-box">
                  <h4>WHATSAPP CONSULTATION</h4>
                  <p>
                    Drop us a message with photos or details of your car for immediate guidance from the detailing team.
                  </p>
                  <a className="or-pill" href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <WhatsAppMark /> DROP US A LINE <ArrowUpRight className="or-arrow-inline" />
                  </a>
                </div>
              </aside>
            </div>
          )}

          {/* Footer Contact Action Strip */}
          <section className="client-detail-cta">
            <div className="client-detail-cta-copy">
              <h3>WE WOULD LOVE TO HEAR FROM YOU</h3>
              <p>Discuss your car’s protection, surface coatings, or owning a studio.</p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a className="or-pill" href={whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppMark /> DROP US A LINE <ArrowUpRight className="or-arrow-inline" />
              </a>
              <a className="or-pill" href={ohioPage("booking")}>
                BOOK A STUDIO INSPECTION <ArrowRight className="or-arrow-inline" />
              </a>
            </div>
          </section>
        </article>

        <ClientFooter />
      </main>
    </div>
  );
}
