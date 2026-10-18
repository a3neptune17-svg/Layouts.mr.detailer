"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { imagePath, whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface Article {
  id: string;
  category: "Detailing Tips" | "Product Guide" | "Latest Updates";
  title: string;
  readTime: string;
  snippet: string;
  fullBody: string[];
}

const articles: Article[] = [
  {
    id: "ppf-vs-ceramic",
    category: "Detailing Tips",
    title: "PPF vs. Ceramic Coating: Which Protection Fits Your Driving Environment?",
    readTime: "6 min read",
    snippet: "Should you choose self-healing aliphatic TPU film or covalent molecular quartz armor? Understand the technical divergence between impact defense and chemical gloss.",
    fullBody: [
      "A common dilemma for owners of luxury, sports, and daily vehicles is whether to invest in Paint Protection Film (PPF), a Ceramic Coating, or a hybrid combination of both.",
      "1. What PPF Does That Coatings Cannot:",
      "Paint Protection Film (such as NameX X Phantom or X Shadow) is a physical, 8.0 to 8.5 mil thick elastomeric polyurethane sheet. Its primary mission is kinetic energy absorption. When gravel, road grit, or flying debris strikes your front bumper at 100 km/h, the urethane dissipates the impact energy, completely preventing paint rock chips. Furthermore, genuine aliphatic TPU features an elastomeric topcoat that self-heals fine swirl marks when exposed to engine warmth or sunlight.",
      "2. What Ceramic Coatings Do That PPF Does Not:",
      "Ceramic coatings (such as NameX SiC 9H) are molecular liquid glass formulations that bond covalently to the pores of factory clear coat. Rather than absorbing physical stone impacts, coatings create an ultra-hard (9H), chemical-resistant shell with an extreme water contact angle (>112°). Water, road grime, bird lime, and industrial fallout cannot easily adhere, resulting in intense self-cleaning properties and deep reflections.",
      "3. The Gold Standard Hybrid Strategy:",
      "For ultimate automotive preservation, our studio recommends applying PPF across high-impact frontal zones (front bumper, full hood, front fenders, mirrors, and rocker panels), followed by a molecular ceramic coating over the entire vehicle—including on top of the film. This yields bulletproof stone-chip defense with relentless ceramic hydrophobicity."
    ]
  },
  {
    id: "two-bucket-wash",
    category: "Detailing Tips",
    title: "The Two-Bucket Wash: How to Eliminate 95% of Wash Swirls",
    readTime: "4 min read",
    snippet: "Circular swirl marks aren't caused by driving; they are created during improper washing. Master the studio technique that safeguards clear coat.",
    fullBody: [
      "Over 90% of spiderweb scratches and holograms visible under sunlight are introduced during routine maintenance washing. The culprit is dragging abrasive grit across the paint surface using dirty sponges.",
      "The Two-Bucket Methodology:",
      "Bucket 1 contains warm water and pH-neutral snow foam shampoo. Bucket 2 contains clean, pure rinse water. Both buckets must be fitted with grit-guard baffle inserts at the bottom.",
      "Wash Process Step-by-Step:",
      "1. Pre-wash foam cannon soak: Loosen and rinse away loose road dust without physically touching the panels.",
      "2. Submerge your ultra-plush microfiber mitt into the shampoo bucket and wash one body panel using straight, linear motions (never circular swirls).",
      "3. Before reloading shampoo, dunk the soiled wash mitt into Bucket 2 (Rinse), scrubbing it against the bottom grit guard so trapped sand particles sink and stay trapped underneath.",
      "4. Wring out the clean mitt, reload fresh shampoo from Bucket 1, and proceed to the next panel. Always dry with a 600 GSM twist-loop towel without rubbing."
    ]
  },
  {
    id: "coating-aftercare-seasons",
    category: "Detailing Tips",
    title: "Aftercare 101: Preserving Coatings in Extreme Summers and Monsoons",
    readTime: "5 min read",
    snippet: "Navigating intense heat, mineral-heavy rain, and alkaline bug splatter across varied regional climates.",
    fullBody: [
      "Modern ceramic coatings and Graphene matrices are engineered to withstand ambient temperatures up to 800°C. However, extreme regional conditions present unique environmental hazards.",
      "1. Summer Sun & Water Spot Prevention:",
      "Never wash your vehicle in direct sunlight or when panels are hot to the touch. Rapid evaporation of hard tap water leaves concentrated calcium and magnesium rings that can etch even durable coatings.",
      "2. Monsoon Acid Rain & Sludge:",
      "Monsoon rain in urban environments carries acidic pollutants and road oil. If left to dry repeatedly, it creates a stubborn traffic film that temporarily clogs coating pores, reducing water beading. A periodic wash with an iron fall-out remover or silica detailer spray immediately de-clogs the coating and restores factory hydrophobicity."
    ]
  },
  {
    id: "pro-detail-kit-guide",
    category: "Product Guide",
    title: "Studio Product Guide: Selecting the Right Chemicals for Your Finish",
    readTime: "4 min read",
    snippet: "Why pH-neutral chemistry matters for vehicles with ceramic coatings and self-healing polyurethane films.",
    fullBody: [
      "Not all car care soaps are created equal. High-alkaline road-house detergents (often with pH > 11) strip protective waxes, degrade sealant polymers, and gradually dull PPF topcoats.",
      "Understanding Chemical pH:",
      "Our studio Pro Detail Kit features strictly pH-neutral (pH 7.0) shampoo formulations that provide superior lubricity without degrading covalent ceramic bonds. For stubborn brake dust on alloy wheels, non-acidic color-changing iron dissolvers are safe for painted and diamond-cut alloys."
    ]
  },
  {
    id: "studio-updates",
    category: "Latest Updates",
    title: "Inside the Studio: High-CRI Optical Illumination & Ultrasonic Measurement",
    readTime: "3 min read",
    snippet: "A look inside our certified clean bays and how digital thickness gauges protect your factory clear coat.",
    fullBody: [
      "Every vehicle entering MR. DETAILER clean bays undergoes a comprehensive ultrasonic paint depth mapping before any polishing wheel touches the panel.",
      "Why Measurement Matters:",
      "Factory clear coats on modern vehicles typically measure between 30 and 50 microns thick. Aggressive, unmeasured compounding can dangerously thin or burn through clear coat on sharp body swage lines. Our digital thickness profiling identifies low-depth areas in advance, allowing our master polishers to tailor compound aggressiveness and preserve clear coat longevity."
    ]
  }
];

export function JournalExperience() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [search, setSearch] = useState<string>("");

  const categories = ["All", "Detailing Tips", "Product Guide", "Latest Updates"];

  const filteredArticles = articles.filter(a => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                          a.snippet.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ip-container">
      {/* Featured Deep Dive Article */}
      <div className="ip-journal-featured">
        <div>
          <span className="ip-badge">FEATURED STUDIO GUIDE · {articles[0].readTime}</span>
          <h2 style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 700, color: "var(--client-ink)", margin: "10px 0 16px", lineHeight: "1.2" }}>
            {articles[0].title}
          </h2>
          <p style={{ color: "var(--client-muted)", fontSize: "14px", lineHeight: "1.65", margin: "0 0 24px" }}>
            {articles[0].snippet}
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              className="or-pill"
              onClick={() => setSelectedArticle(articles[0])}
            >
              Read Complete Guide <ArrowRight className="or-arrow-inline" />
            </button>
            <a className="or-pill" href={ohioPage("ppf")}>
              Explore NameX PPF <ArrowUpRight className="or-arrow-inline" />
            </a>
          </div>
        </div>

        <div style={{ position: "relative", minHeight: "300px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--client-line)" }}>
          <Image
            src={imagePath("IMG_20260809_181154.jpg.jpeg")}
            alt="PPF installation and surface coating comparison"
            fill
            sizes="(max-width:768px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* Category Tabs and Search */}
      <div className="ip-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "28px" }}>
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
            placeholder="Search journal guides..."
            style={{ width: "240px", padding: "8px 14px", fontSize: "13px" }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Article Cards Grid */}
        <div className="ip-journal-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="ip-journal-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span className="ip-badge">{article.category}</span>
                <span style={{ fontSize: "12px", color: "var(--client-muted)" }}>{article.readTime}</span>
              </div>
              <h3 className="ip-journal-title">{article.title}</h3>
              <p className="ip-journal-snippet">{article.snippet}</p>
              <button
                className="or-pill"
                onClick={() => setSelectedArticle(article)}
                style={{ width: "fit-content", cursor: "pointer" }}
              >
                Read Article <ArrowRight className="or-arrow-inline" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Reader View for Full Educational Article */}
      {selectedArticle && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(6px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              background: "#141512",
              border: "1px solid var(--client-line)",
              borderRadius: "6px",
              padding: "clamp(24px, 4vw, 44px)",
              maxWidth: "760px",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "var(--client-ink)",
                fontSize: "24px",
                cursor: "pointer",
                padding: "4px 8px"
              }}
              aria-label="Close reader"
            >
              ×
            </button>

            <span className="ip-badge">{selectedArticle.category} · {selectedArticle.readTime}</span>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "var(--client-ink)", margin: "12px 0 24px", lineHeight: "1.25" }}>
              {selectedArticle.title}
            </h2>

            <div style={{ color: "var(--client-muted)", fontSize: "14.5px", lineHeight: "1.75" }}>
              {selectedArticle.fullBody.map((paragraph, idx) => (
                <p key={idx} style={{ marginBottom: "16px", color: paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.") ? "var(--client-ink)" : undefined, fontWeight: paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.") ? 600 : 400 }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid var(--client-line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <span style={{ fontSize: "13px", color: "var(--client-muted)" }}>Have questions regarding your vehicle?</span>
              <a
                className="or-pill"
                href={`https://wa.me/919779397773?text=${encodeURIComponent(`Hello MR. DETAILER, I was reading your journal guide on "${selectedArticle.title}" and would like to ask a question.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppMark /> Ask on WhatsApp <ArrowUpRight className="or-arrow-inline" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
