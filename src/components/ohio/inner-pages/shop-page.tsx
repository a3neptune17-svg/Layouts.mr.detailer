"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface Product {
  id: string;
  name: string;
  category: "Exterior Care" | "Interior Care" | "Accessories" | "Detailing Kits";
  description: string;
  size: string;
  recommendedUse: string;
  image: string;
}

const products: Product[] = [
  {
    id: "pro-detail-kit",
    name: "Pro Detail Studio Kit (7-Piece Set)",
    category: "Detailing Kits",
    description: "The complete studio maintenance system. Formulated to safely maintain ceramic coatings and self-healing PPF without leaving chalky residues.",
    size: "7 Essential Pieces",
    recommendedUse: "Comprehensive home car care routine following studio treatment.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "snow-foam",
    name: "pH-Neutral Hyper Snow Foam",
    category: "Exterior Care",
    description: "Dense, clinging snow foam that encapsulates and lifts road grit and surface grime before contact washing, preventing wash swirl marks.",
    size: "1000 ml",
    recommendedUse: "Pre-wash foam cannon application on all paint finishes.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "ceramic-detailer",
    name: "Ceramic Silica Hydrophobic Booster",
    category: "Exterior Care",
    description: "Instant spray detailer infused with SiO2 polymers. Revives gloss, intensifies water contact angle, and adds slick sacrificial protection.",
    size: "500 ml",
    recommendedUse: "Drying aid or post-wash wipe down every 2 to 4 weeks.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "iron-decon",
    name: "Ferrous Iron & Fall-Out Dissolver",
    category: "Exterior Care",
    description: "Color-changing reactive formula that liquefies stubborn embedded metallic brake dust and industrial rail dust without acid scrubbing.",
    size: "500 ml",
    recommendedUse: "Wheels, brake calipers, and lower body panels prior to claying.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "cockpit-cleaner",
    name: "Matte Interior Cockpit Preserver",
    category: "Interior Care",
    description: "Gentle cleaner for dashboards, navigation screens, and door cards. Leaves a non-greasy, natural factory satin finish with anti-static protection.",
    size: "500 ml",
    recommendedUse: "Bi-weekly interior wipe down across modern digital cabins.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "leather-balm",
    name: "Hydro-Nourishing Leather Balm",
    category: "Interior Care",
    description: "Enriched with natural oils and UV inhibitors. Penetrates deep into natural and synthetic automotive hides to prevent drying and premature creasing.",
    size: "250 ml",
    recommendedUse: "Quarterly treatment on steering wheels, bolsters, and seats.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "drying-towel",
    name: "600 GSM Ultra-Plush Edgeless Drying Towel",
    category: "Accessories",
    description: "Twist-loop Korean microfiber capable of absorbing up to 3 liters of water. Glides across sensitive clear coats with zero drag or marring.",
    size: "70 × 90 cm",
    recommendedUse: "Single-pass touchless vehicle drying after final rinse.",
    image: clientConfig.shopProKitImage
  },
  {
    id: "wash-mitt",
    name: "Scratch-Shield Microfiber Wash Mitt",
    category: "Accessories",
    description: "High-density micro-chenille fibers trap loosened dirt deep within the pile away from your clear coat during two-bucket contact washing.",
    size: "Universal Fit",
    recommendedUse: "Dedicated two-bucket contact washes with grit guards.",
    image: clientConfig.shopProKitImage
  }
];

export function ShopExperience() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [enquiryList, setEnquiryList] = useState<string[]>(["pro-detail-kit"]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["All", "Detailing Kits", "Exterior Care", "Interior Care", "Accessories"];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleEnquiryItem = (id: string) => {
    setEnquiryList(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const selectedProducts = products.filter(p => enquiryList.includes(p.id));

  const whatsappMessage = encodeURIComponent(
    `Hello MR. DETAILER Shop,\n\nI would like to enquire about availability and studio collection for:\n${selectedProducts.map(p => `• ${p.name} (${p.size})`).join("\n")}\n\nPlease confirm product availability.`
  );

  return (
    <div className="ip-container">
      {/* NameX Brand Presentation */}
      <div className="ip-card" style={{ background: "var(--client-surface-elevated)", border: "1px solid var(--client-line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "28px", alignItems: "center" }}>
          <div>
            <span className="ip-badge">ABOUT NAMEX · SURFACE SCIENCE</span>
            <h2 className="ip-heading">Know What Protects Your Car</h2>
            <p className="ip-subline" style={{ marginBottom: "20px" }}>
              A beautiful finish deserves thoughtful protection. NameX molecular coatings and self-healing aliphatic TPU films are precision-engineered to preserve automotive perfection under the harshest environmental conditions.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a className="or-pill" href={ohioPage("ppf")}>
                Explore NameX Films <ArrowRight className="or-arrow-inline" />
              </a>
              <a className="or-pill" href={ohioPage("coatings")}>
                Explore NameX Coatings <ArrowRight className="or-arrow-inline" />
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(0, 0, 0, 0.2)", padding: "24px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
            <div className="client-namex-logo-wrap" style={{ margin: "10px 0" }}>
              <Image className="client-namex-logo client-namex-logo-dark" src={clientConfig.namexLogoDark} alt="NameX" width={220} height={83} />
              <Image className="client-namex-logo client-namex-logo-light" src={clientConfig.namexLogoLight} alt="NameX" width={220} height={83} />
            </div>
            <p style={{ fontSize: "12px", color: "var(--client-muted)", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", margin: "10px 0 0" }}>
              Official Certified Installation Studio
            </p>
          </div>
        </div>
      </div>

      {/* Product Care Shelf */}
      <div className="ip-card">
        <div className="ip-card-header">
          <span className="ip-badge">CARE SHELF · STUDIO ESSENTIALS</span>
          <h2 className="ip-heading">Curated Studio Products &amp; Kits</h2>
          <p className="ip-subline">
            Professional-grade car care formulations tested on real vehicles in our studio clean bays. Add items to your enquiry list to verify suitability and studio availability.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
          <div className="ip-tabs" style={{ margin: 0, padding: 0, border: "none" }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`ip-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            className="ip-input"
            placeholder="Search care products..."
            style={{ width: "240px", padding: "8px 14px", fontSize: "13px" }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Product Cards Grid */}
        <div className="ip-product-grid">
          {filteredProducts.map(product => {
            const isAdded = enquiryList.includes(product.id);
            return (
              <div key={product.id} className="ip-product-card">
                <div className="ip-product-media">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={220}
                    className="ip-product-img"
                  />
                </div>
                <div className="ip-product-body">
                  <span className="ip-product-category">{product.category} · {product.size}</span>
                  <h3 className="ip-product-name">{product.name}</h3>
                  <p className="ip-product-desc">{product.description}</p>
                  <p style={{ fontSize: "12px", color: "var(--client-muted)", margin: "0 0 16px" }}>
                    <strong>Use: </strong>{product.recommendedUse}
                  </p>
                  <div className="ip-product-action">
                    <button
                      onClick={() => toggleEnquiryItem(product.id)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "999px",
                        border: `1px solid ${isAdded ? "var(--client-lime)" : "var(--client-line)"}`,
                        background: isAdded ? "var(--client-lime)" : "transparent",
                        color: isAdded ? "#141512" : "var(--client-ink)",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {isAdded ? "✓ Added to Enquiry" : "+ Add to Enquiry"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Enquiry List Review Bar */}
        <div className="ip-summary-bar">
          <div className="ip-summary-header">
            <h3 className="ip-summary-title">Your Product Enquiry List ({selectedProducts.length} items)</h3>
            <span style={{ fontSize: "12px", color: "var(--client-muted)" }}>
              No Online Payment · Direct Studio Enquiry
            </span>
          </div>

          <div className="ip-selected-tags">
            {selectedProducts.length > 0 ? (
              selectedProducts.map(p => (
                <span key={p.id} className="ip-tag">
                  {p.name}
                  <button
                    onClick={() => toggleEnquiryItem(p.id)}
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 0 0 4px", fontSize: "12px" }}
                    aria-label={`Remove ${p.name}`}
                  >
                    ×
                  </button>
                </span>
              ))
            ) : (
              <p style={{ color: "var(--client-muted)", fontSize: "13px", margin: 0 }}>
                Your enquiry list is currently empty. Tap &quot;+ Add to Enquiry&quot; on products above.
              </p>
            )}
          </div>

          <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "14px 18px", borderRadius: "4px", border: "1px solid var(--client-line)", marginBottom: "20px" }}>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)", lineHeight: "1.6" }}>
              <strong>Studio Policy: </strong>We do not process automated e-commerce payments. Products are verified for paint compatibility and confirmed for studio collection or courier delivery directly by the detailing team.
            </p>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              className="or-pill"
              href={`https://wa.me/919779397773?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppMark /> Review &amp; Enquire on WhatsApp <ArrowUpRight className="or-arrow-inline" />
            </a>
            <a className="or-pill" href={ohioPage("connect")}>
              Contact Studio Directly <ArrowRight className="or-arrow-inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
