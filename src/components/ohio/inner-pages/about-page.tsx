"use client";

import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { imagePath, whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

const pillars = [
  {
    step: "01",
    title: "PREPARE",
    subtitle: "Precision Surface Assessment & Decontamination",
    desc: "Every vehicle arrives with differing clear coat depths, factory paint hardness, and environmental history. We utilize digital ultrasonic paint thickness gauges to measure panel depth and map defects under high-CRI multi-spectrum LED inspection lighting. The surface undergoes a multi-stage chemical decontamination to ensure it is 100% sterile before polishing begins."
  },
  {
    step: "02",
    title: "PERFECT",
    subtitle: "Concours Multi-Stage Paint Correction",
    desc: "Machine polishing is both a science and a dedicated craft. Using precision rotary and dual-action micro-polishers paired with tailored foam, wool, and micro-abrasive compounds, our IDA-certified technicians gently extract swirls, holograms, scratches, and oxidation while preserving maximal factory clear-coat thickness."
  },
  {
    step: "03",
    title: "PROTECT",
    subtitle: "Certified NameX Film & Molecular Coatings",
    desc: "Once optical perfection is achieved, the finish is sealed. We install optically clear, self-healing NameX aliphatic TPU films with seamless edge tucks, or apply molecular Ceramic SiC 9H, Borophene, and Graphene covalent matrix coatings inside our temperature- and humidity-controlled clean bays."
  },
  {
    step: "04",
    title: "PRESERVE",
    subtitle: "Dedicated Aftercare & Lifetime Support",
    desc: "True craftsmanship continues long after handover. We educate clients on the two-bucket grit-guard washing ritual, supply compatible pH-neutral care products, and provide annual studio inspections to monitor coating hydrophobicity and film edge integrity."
  }
];

export function AboutExperience() {
  return (
    <div className="ip-container">
      {/* Studio Ethos & Introduction */}
      <div className="ip-card">
        <span className="ip-badge">STUDIO PHILOSOPHY · MR. DETAILER</span>
        <h2 className="ip-heading">The Boss of Detailers</h2>
        <p className="ip-subline" style={{ fontSize: "16px", marginBottom: "28px" }}>
          We listen. We assess. We care for the details. At MR. DETAILER, automotive detailing is elevated from a transactional wash into an uncompromising discipline of surface science, master craftsmanship, and long-term vehicle preservation.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", margin: "24px 0" }}>
          <div style={{ position: "relative", minHeight: "340px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--client-line)" }}>
            <Image
              src="/images/studio-paint-correction.jpg"
              alt="MR. DETAILER technician in official uniform performing precision machine polishing"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 14px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", fontSize: "11.5px", color: "#ffffff" }}>
              Concours Paint Correction · Multi-stage dual action polishing
            </div>
          </div>
          <div style={{ position: "relative", minHeight: "340px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--client-line)" }}>
            <Image
              src="/images/studio-ppf-installation.jpg"
              alt="Detailer wrapping luxury vehicle with Paint Protection Film"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 14px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", fontSize: "11.5px", color: "#ffffff" }}>
              Paint Protection Film Installation · Wrapped edges in cleanroom bays
            </div>
          </div>
        </div>
      </div>

      {/* The 4-Pillar Studio Framework */}
      <div className="ip-card">
        <span className="ip-badge">THE STUDIO FRAMEWORK</span>
        <h2 className="ip-heading">Prepare · Perfect · Protect · Preserve</h2>
        <p className="ip-subline">
          The four foundational pillars that guide every vehicle treatment in our studio clean bays.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "28px" }}>
          {pillars.map(p => (
            <div key={p.step} style={{ background: "var(--client-surface-elevated)", border: "1px solid var(--client-line)", padding: "26px", borderRadius: "4px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "12px", color: "var(--client-lime)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "8px" }}>
                PILLAR {p.step}
              </span>
              <h3 style={{ fontSize: "20px", color: "var(--client-ink)", margin: "0 0 6px" }}>{p.title}</h3>
              <p style={{ color: "var(--client-lime)", fontSize: "12.5px", fontWeight: 600, margin: "0 0 14px" }}>{p.subtitle}</p>
              <p style={{ color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.65", margin: 0, flexGrow: 1 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Standards & Inspection Quality */}
      <div className="ip-card">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px", alignItems: "center" }}>
          <div>
            <span className="ip-badge">FACILITY SPECIFICATIONS</span>
            <h2 className="ip-heading">Controlled Clean-Room Standards</h2>
            <p className="ip-subline" style={{ marginBottom: "20px" }}>
              Dust contamination and poor lighting are the enemies of flawless paint correction and film installation. Our studio is built with sealed epoxy flooring, positive-pressure air filtration, and 5000K daylight-balanced LED lighting.
            </p>
            <ul style={{ paddingLeft: "20px", color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.8", margin: "0 0 24px" }}>
              <li>Ultrasonic digital clear coat thickness gauges on every vehicle</li>
              <li>High-temperature de-ionized water and dry-steam cleaning stations</li>
              <li>Clean-room certified PPF plotter cutting for computer-tailored patterns</li>
              <li>Certified NameX surface coating application technicians</li>
            </ul>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a className="or-pill" href={ohioPage("booking")}>
                Book a Studio Inspection <ArrowRight className="or-arrow-inline" />
              </a>
              <a className="or-pill" href={ohioPage("own-a-studio")}>
                Studio Partnership <ArrowUpRight className="or-arrow-inline" />
              </a>
            </div>
          </div>

          <div style={{ position: "relative", minHeight: "300px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--client-line)" }}>
            <Image
              src={imagePath("IMG_20260809_180638.jpg.jpeg")}
              alt="MR. DETAILER studio environment and technicians"
              fill
              sizes="(max-width:768px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
