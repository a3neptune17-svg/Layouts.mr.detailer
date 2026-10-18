"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface CoatingType {
  id: string;
  name: string;
  subtitle: string;
  confirmedPeriod: string;
  composition: string;
  keyStrengths: string[];
  careGuidance: string;
  image: string;
  alt: string;
}

const coatingCategories: CoatingType[] = [
  {
    id: "ceramic-sic",
    name: "Ceramic SiC 9H Matrix",
    subtitle: "Silicon Carbide & Silicon Dioxide Quartz Armor",
    confirmedPeriod: "2 – 3 Year Studio Package",
    composition: "Precursor oligomer solution forming permanent covalent glass cross-links with factory clear coat.",
    keyStrengths: [
      "Rigid 9H pencil scratch-resistance barrier",
      "Immense candy-gloss optical depth and reflection",
      "Extreme contact angle (>112°) for immediate water sheeting",
      "Chemical tolerance against acid rain, tree sap, and road salts"
    ],
    careGuidance: "Allow 7 days initial moisture curing. Maintain with bi-weekly two-bucket wash and pH-neutral shampoo.",
    image: clientConfig.namexCeramicMatrix,
    alt: "NameX Ceramic SiC molecular matrix coating bottle and finish"
  },
  {
    id: "borophene",
    name: "Borophene 2D Matrix",
    subtitle: "Atomic Hexagonal Boron Sheet Technology",
    confirmedPeriod: "3 – 5 Year Studio Package",
    composition: "Two-dimensional single-layer boron atom lattice engineered for extreme tensile resilience and thermal dissipation.",
    keyStrengths: [
      "Extraordinary thermal stability up to 1000°C preventing heat soak",
      "High dielectric dissipation reducing static dust attraction",
      "Super-slick tactile feel with ultra-low friction coefficient",
      "Superior resistance to alkaline bird lime and acidic bug splatter"
    ],
    careGuidance: "Wash with warm water and soft microfibers. Avoid automated rotary nylon brush stations.",
    image: clientConfig.namexCoatingsTrio,
    alt: "NameX Borophene surface coating laboratory formulation"
  },
  {
    id: "graphene",
    name: "Graphene Elastomer Matrix",
    subtitle: "Reduced Graphene Oxide Platelet Network",
    confirmedPeriod: "3 – 5 Year Studio Package",
    composition: "Honeycomb carbon allotrope platelets suspended in an elastomeric fluoropolymer carrier.",
    keyStrengths: [
      "Remarkable anti-water-spotting performance (heat conductive)",
      "High flexibility preventing micro-fractures on flexible bumpers",
      "Exceptional hydrophobic roll-off angle (<10° tilt threshold)",
      "Deepening of metallic flake and pearl pigment saturation"
    ],
    careGuidance: "Do not apply harsh abrasive compounds or aggressive degreasers without studio consultation.",
    image: clientConfig.namexCoatingsTrio,
    alt: "NameX Graphene matrix surface protective coating"
  }
];

const coatingFaqs = [
  {
    q: "How does Graphene reduce water spots compared to traditional Ceramic?",
    a: "Traditional ceramic coatings can retain solar heat on dark vehicles, causing mineral-laden water droplets to evaporate rapidly and leave chalky calcium etchings. Graphene's exceptional thermal conductivity disperses surface heat across the panel, lowering localized panel temperatures and allowing water droplets to roll off before drying."
  },
  {
    q: "What aftercare is required in the first 7 days after application?",
    a: "The covalent bonding process requires 7 days to achieve maximum hardness. During this week, avoid high-pressure water jets, harsh chemical shampoos, and automatic washes. If the vehicle is caught in rain or contaminated by bird droppings, rinse gently with clean, distilled water and blot dry with a plush microfiber."
  },
  {
    q: "Is an annual inspection required to keep the warranty active?",
    a: "Yes. Studio-backed warranty packages require an annual studio check-up. Our technicians evaluate the coating's hydrophobic contact angle, conduct a gentle chemical decontamination to remove bonded traffic film, and apply a compatible silica booster to restore factory performance."
  }
];

export function CoatingsExperience() {
  const [activeCategory, setActiveCategory] = useState<string>("ceramic-sic");
  const [vehicleDetails, setVehicleDetails] = useState<string>("");

  const current = coatingCategories.find(c => c.id === activeCategory) || coatingCategories[0];

  const whatsappMessage = encodeURIComponent(
    `Hello MR. DETAILER,\n\nI am interested in exploring the *${current.name}* (${current.confirmedPeriod}).\n- Vehicle: ${vehicleDetails || "Not specified"}\n\nPlease share availability for an in-person paint inspection.`
  );

  return (
    <div className="ip-container">
      {/* Category Tabs */}
      <div className="ip-card">
        <div className="ip-card-header">
          <span className="ip-badge">SURFACE SCIENCE · COATINGS GALLERY</span>
          <h2 className="ip-heading">Ceramic, Borophene &amp; Graphene Formulations</h2>
          <p className="ip-subline">
            Molecular covalent bonding for high gloss, intense hydrophobicity, and long-term paint defense. Review confirmed package periods and formulation strengths below.
          </p>
        </div>

        <div className="ip-tabs" role="tablist">
          {coatingCategories.map(c => (
            <button
              key={c.id}
              className={`ip-tab ${activeCategory === c.id ? "active" : ""}`}
              onClick={() => setActiveCategory(c.id)}
              role="tab"
              aria-selected={activeCategory === c.id}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Featured Showcase Card */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "32px", alignItems: "center" }}>
          <div style={{ position: "relative", minHeight: "280px", borderRadius: "6px", overflow: "hidden", border: "1px solid var(--client-line)", background: "#ffffff", padding: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={current.image}
              alt={current.alt}
              width={600}
              height={400}
              style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }}
              priority
            />
          </div>

          <div>
            <span className="ip-badge">{current.confirmedPeriod}</span>
            <h3 style={{ fontSize: "24px", color: "var(--client-ink)", margin: "6px 0" }}>{current.name}</h3>
            <p style={{ color: "var(--client-lime)", fontSize: "14px", fontWeight: 600, margin: "0 0 14px" }}>{current.subtitle}</p>
            <p style={{ color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.6", margin: "0 0 18px" }}>
              {current.composition}
            </p>

            <h4 style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--client-ink)", marginBottom: "10px" }}>
              Key Protective Strengths:
            </h4>
            <ul style={{ paddingLeft: "20px", color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.7", margin: "0 0 20px" }}>
              {current.keyStrengths.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>

            <div style={{ background: "rgba(184, 223, 107, 0.08)", padding: "12px 16px", borderRadius: "4px", borderLeft: "3px solid var(--client-lime)", marginBottom: "20px" }}>
              <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)" }}>
                <strong>Aftercare Guideline: </strong>{current.careGuidance}
              </p>
            </div>

            <a className="or-pill" href="#coating-enquiry">
              Select {current.name} <ArrowRight className="or-arrow-inline" />
            </a>
          </div>
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="ip-card">
        <span className="ip-badge">FORMULATION MATRIX</span>
        <h2 className="ip-heading">Direct Category Comparison</h2>
        <p className="ip-subline">
          Accurate, verifiable parameters based on authentic laboratory testing. No exaggerated promises.
        </p>

        <div className="ip-table-wrap">
          <table className="ip-table">
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Ceramic SiC 9H</th>
                <th>Borophene 2D</th>
                <th>Graphene Matrix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Chemical Bond</strong></td>
                <td>Covalent Silicon Carbide Glass</td>
                <td>Mono-atomic Boron Lattice</td>
                <td>Reduced Graphene Oxide Platelets</td>
              </tr>
              <tr>
                <td><strong>Hydrophobic Angle</strong></td>
                <td>110° – 115° Water Contact</td>
                <td>115° – 120° Low Surface Friction</td>
                <td>&gt;118° Intense Water Rolling</td>
              </tr>
              <tr>
                <td><strong>Heat Tolerance</strong></td>
                <td>Up to 800°C</td>
                <td>Up to 1000°C (Extreme)</td>
                <td>Up to 600°C with Heat Dissipation</td>
              </tr>
              <tr>
                <td><strong>Water Spot Resistance</strong></td>
                <td>Standard (requires prompt dry)</td>
                <td>Very High (chemical inertness)</td>
                <td>Extreme (conductive heat dispersion)</td>
              </tr>
              <tr>
                <td><strong>Confirmed Studio Coverage</strong></td>
                <td>2 – 3 Year Package</td>
                <td>3 – 5 Year Package</td>
                <td>3 – 5 Year Package</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Coating Enquiry Form & Review */}
      <div className="ip-card" id="coating-enquiry">
        <span className="ip-badge">STUDIO CONSULTATION</span>
        <h2 className="ip-heading">Enquire for Surface Coating</h2>
        <p className="ip-subline">
          Every vehicle is measured with paint depth ultrasonic gauges prior to coating application.
        </p>

        <div className="ip-form-grid">
          <div className="ip-field">
            <label>Selected Coating System</label>
            <input type="text" className="ip-input" value={current.name} readOnly />
          </div>
          <div className="ip-field">
            <label>Vehicle Make &amp; Model</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Mercedes-Benz G-Wagon (Obsidian Black)"
              value={vehicleDetails}
              onChange={e => setVehicleDetails(e.target.value)}
            />
          </div>
        </div>

        <div className="ip-review-box">
          <div className="ip-review-item">
            <span className="ip-review-label">Chosen Formula:</span>
            <span className="ip-review-val">{current.name}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Confirmed Package Period:</span>
            <span className="ip-review-val">{current.confirmedPeriod}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Vehicle:</span>
            <span className="ip-review-val">{vehicleDetails || "To be confirmed during studio visit"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Initial Curing Period:</span>
            <span className="ip-review-val">7 Days Gentle Care</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "20px" }}>
          <a
            className="or-pill"
            href={`https://wa.me/919779397773?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppMark /> Discuss on WhatsApp <ArrowUpRight className="or-arrow-inline" />
          </a>
          <a className="or-pill" href={ohioPage("booking")}>
            Schedule Paint Inspection <ArrowRight className="or-arrow-inline" />
          </a>
        </div>
      </div>

      {/* Coatings FAQs */}
      <div className="ip-card">
        <span className="ip-badge">COATINGS FAQ</span>
        <h2 className="ip-heading">Frequently Asked Questions</h2>
        <div className="ip-faq-list">
          {coatingFaqs.map((faq, idx) => (
            <details key={idx} className="ip-faq-item">
              <summary>{faq.q}</summary>
              <div className="ip-faq-content">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
