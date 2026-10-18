"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig } from "./client-config";
import { whatsapp } from "./rebuild-data";
import { ArrowUpRight, WhatsAppMark } from "./icons";

interface NamexProduct {
  id: string;
  name: string;
  code: string;
  tagline: string;
  image: string;
  alt: string;
  spec: string;
  finish: string;
  durability: string;
  highlights: string[];
  description: string;
}

const namexProducts: NamexProduct[] = [
  {
    id: "ceramic-kit",
    name: "NameX Ceramic Matrix 9H",
    code: "NX-C01",
    tagline: "SiC Molecular Glass Shield · 50ml Complete Kit",
    image: "/images/namex-ceramic-kit.jpg",
    alt: "NameX Ceramic Matrix 9H boxed set with bottle, applicator and microfiber cloth",
    spec: "50ml Active Formulation + Leveling Block + Microfiber",
    finish: "Deep Wet Glass Optical Gloss",
    durability: "3+ Years Lab Verified",
    highlights: [
      "Pure Silicon Carbide (SiC) cross-linking matrix",
      "Extreme chemical resistance against pH 2–13 detergents",
      "Super-hydrophobic 112° water contact angle",
      "Engineered for hand-application under cleanroom lighting"
    ],
    description:
      "A complete studio coating set featuring our 50ml NX-C01 active formulation, high-density foam application block, and lint-free leveling towel in custom presentation packaging."
  },
  {
    id: "graphene-borophene",
    name: "NameX Graphene & Borophene Editions",
    code: "NX-G02 / NX-B03",
    tagline: "Carbon Enhanced & 2D Borophene Surface Science",
    image: "/images/namex-graphene-borophene-kit.jpg",
    alt: "NameX Graphene and Borophene boxed coating kits with custom presentation ribbon",
    spec: "Twin 50ml Specialized Formula Sets with Dual Towels",
    finish: "Reflective Slickness & Anti-Static Sheen",
    durability: "4+ to 5+ Years Structural Resilience",
    highlights: [
      "Graphene oxide 10H structural thermal dissipation",
      "Borophene 2D hexagonal atomic lattice hardness",
      "Reduced water spotting via conductive heat dispersal",
      "Precision boxed sets with branded studio accessories"
    ],
    description:
      "Our most advanced molecular surface treatments presented in dedicated black-ribbon (Graphene Carbon Enhanced) and blue-ribbon (Borophene Advanced Surface) presentation kits."
  },
  {
    id: "coatings-trio",
    name: "NameX Molecular Coating Trio",
    code: "NX-TRIO (C01 · G02 · B03)",
    tagline: "The Full Spectrum of Surface Protection Formulations",
    image: "/images/namex-bottles-trio.jpg",
    alt: "Trio lineup of NameX Ceramic, Graphene, and Borophene coating bottles",
    spec: "Ceramic 9H · Carbon Graphene · 2D Borophene (50ml each)",
    finish: "Multi-Tiered Optical Clarity & Slickness",
    durability: "Tailored to Vehicle Operating Environment",
    highlights: [
      "Ceramic NX-C01: High-gloss hydrophobic sacrificial barrier",
      "Graphene NX-G02: Carbon enhanced deep optical finish & chemical resistance",
      "Borophene NX-B03: Advanced surface high clarity & extended durability",
      "Ergonomic pump dispensers for measured droplet saturation"
    ],
    description:
      "The complete formulation lineup displayed side-by-side: each engineered with distinct chemical matrices to address specific climate challenges, paint hardness, and owner preferences."
  },
  {
    id: "ppf-boxes",
    name: "NameX Paint Protection Film",
    code: "NX-PPF",
    tagline: "Optically Clear Aliphatic TPU · Self-Healing Protection",
    image: "/images/namex-ppf-boxes.jpg",
    alt: "NameX Paint Protection Film boxed rolls in studio with official branding",
    spec: "Rolls in Gloss & Stealth Matte Options",
    finish: "Mirror Clear Gloss or OEM-Match Satin Matte",
    durability: "Multi-Year Self-Healing Warranty",
    highlights: [
      "Self-healing elastomeric polymer memory under heat",
      "Non-yellowing aliphatic TPU core with optical purity",
      "High tensile puncture resistance against stone chips",
      "Presented in official NameX studio rolls for custom plotter cutting"
    ],
    description:
      "Authentic NameX Paint Protection Film packaging ready for precision digital patterning and seamless edge-wrapped studio installation."
  }
];

export function NamexShowcase() {
  const [activeProductId, setActiveProductId] = useState<string>("ceramic-kit");
  const [selectedFinish, setSelectedFinish] = useState<string>("Gloss");

  const activeProduct = namexProducts.find(p => p.id === activeProductId) || namexProducts[0];

  const enquiryMessage = encodeURIComponent(
    `Hello MR. DETAILER,\n\nI would like to enquire about NameX surface science:\n- Product: ${activeProduct.name} (${activeProduct.code})\n- Finish Study Interest: ${selectedFinish}\n\nPlease share suitability and studio application availability.`
  );

  return (
    <div className="namex-showcase">
      {/* Brand Header */}
      <div className="namex-header">
        <div className="namex-brand-lockup">
          <div className="client-namex-logo-wrap">
            <Image
              className="client-namex-logo client-namex-logo-dark"
              src={clientConfig.namexLogoDark}
              alt="NameX"
              width={220}
              height={70}
              style={{ width: "auto", height: "42px", objectFit: "contain" }}
            />
            <Image
              className="client-namex-logo client-namex-logo-light"
              src={clientConfig.namexLogoLight}
              alt="NameX"
              width={220}
              height={70}
              style={{ width: "auto", height: "42px", objectFit: "contain" }}
            />
          </div>
          <span className="namex-byline">SURFACE SCIENCE · BY MR. DETAILER</span>
        </div>

        <div className="namex-discipline-pills">
          <span className="namex-pill">PPF</span>
          <span className="namex-pill-dot">·</span>
          <span className="namex-pill">CERAMIC</span>
          <span className="namex-pill-dot">·</span>
          <span className="namex-pill">GRAPHENE</span>
          <span className="namex-pill-dot">·</span>
          <span className="namex-pill">BOROPHENE</span>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="namex-showcase-grid">
        {/* Product Visual Mat */}
        <div className="namex-visual-mat">
          <div className="namex-image-wrapper">
            <Image
              src={activeProduct.image}
              alt={activeProduct.alt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="namex-visual-caption">
            <div className="namex-code-badge">{activeProduct.code}</div>
            <span className="namex-caption-text">{activeProduct.tagline}</span>
          </div>
        </div>

        {/* Product Specs & Selection */}
        <div className="namex-info-panel">
          <div className="namex-tabs" role="tablist" aria-label="NameX Products">
            {namexProducts.map(p => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activeProductId === p.id}
                className={`namex-tab-btn ${activeProductId === p.id ? "is-active" : ""}`}
                onClick={() => setActiveProductId(p.id)}
              >
                <span className="namex-tab-code">{p.code}</span>
                <span className="namex-tab-label">{p.name.replace("NameX ", "")}</span>
              </button>
            ))}
          </div>

          <div className="namex-product-body">
            <h3 className="namex-product-title">{activeProduct.name}</h3>
            <p className="namex-product-desc">{activeProduct.description}</p>

            <div className="namex-spec-grid">
              <div className="namex-spec-item">
                <span className="namex-spec-label">SPECIFICATION</span>
                <span className="namex-spec-val">{activeProduct.spec}</span>
              </div>
              <div className="namex-spec-item">
                <span className="namex-spec-label">OPTICAL FINISH</span>
                <span className="namex-spec-val">{activeProduct.finish}</span>
              </div>
              <div className="namex-spec-item">
                <span className="namex-spec-label">DURABILITY RATING</span>
                <span className="namex-spec-val">{activeProduct.durability}</span>
              </div>
            </div>

            <div className="namex-highlights">
              <span className="namex-spec-label">KEY FORMULATION ATTRIBUTES</span>
              <ul>
                {activeProduct.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Interactive Finish Study Selector */}
            <div className="namex-finish-study">
              <div className="namex-finish-header">
                <span className="namex-spec-label">FINISH STUDY · MOVE THROUGH THE POSSIBILITIES</span>
                <span className="namex-finish-active">{selectedFinish} Finish</span>
              </div>
              <div className="namex-finish-pills">
                {["Gloss", "Matte", "Black", "Colour"].map(finish => (
                  <button
                    key={finish}
                    type="button"
                    className={`namex-finish-btn ${selectedFinish === finish ? "is-active" : ""}`}
                    onClick={() => setSelectedFinish(finish)}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="namex-actions">
              <a
                href={`https://wa.me/919877884149?text=${enquiryMessage}`}
                target="_blank"
                rel="noreferrer"
                className="namex-cta-btn"
              >
                <WhatsAppMark />
                <span>Enquire About {activeProduct.code}</span>
                <ArrowUpRight className="namex-btn-arrow" />
              </a>

              {clientConfig.namexUrl && (
                <a
                  href={clientConfig.namexUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="namex-secondary-link"
                >
                  <span>Explore NameX Global</span>
                  <ArrowUpRight className="namex-btn-arrow" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillar Journey */}
      <div className="namex-journey-bar">
        <div className="namex-journey-step">
          <span className="namex-step-num">01</span>
          <div>
            <strong>FIND YOUR FINISH</strong>
            <p>Clear gloss reflection, stealth satin, or custom color transformation.</p>
          </div>
        </div>
        <div className="namex-journey-step">
          <span className="namex-step-num">02</span>
          <div>
            <strong>KNOW YOUR PROTECTION</strong>
            <p>Select between 8-mil TPU self-healing film and covalent molecular ceramics.</p>
          </div>
        </div>
        <div className="namex-journey-step">
          <span className="namex-step-num">03</span>
          <div>
            <strong>CARE FOR THE RESULT</strong>
            <p>Studio warranty backing, pH-neutral care protocols, and annual inspection.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
