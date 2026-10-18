"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface TuningCategory {
  id: string;
  name: string;
  scope: string;
  choices: string[];
  compatibility: string;
  consultationFocus: string;
}

const tuningCategories: TuningCategory[] = [
  {
    id: "engine",
    name: "Engine",
    scope: "Induction airflow optimization, intercooler thermal efficiency, and charge-pipe durability.",
    choices: ["High-flow cotton panel filters", "Closed carbon cold air intake systems", "Upgraded aluminum intercooler cores", "Silicone reinforced boost pipes"],
    compatibility: "Vehicle-specific engine code verification required. Turbocharged and supercharged petrol/diesel platforms assessed individually.",
    consultationFocus: "Ensuring intake temperature reductions and structural reliability under ambient Indian climates."
  },
  {
    id: "ecu",
    name: "ECU / TCU",
    scope: "Digital engine management calibration, boost control refinement, and transmission shift point mapping.",
    choices: ["Stage 1 Calibration (Stock hardware)", "Stage 2 Calibration (Downpipe/Intake supported)", "TCU Transmission Shift Speed Optimization", "Speed limiter de-restriction for track use"],
    compatibility: "ECU unlock protocols vary by model year and manufacturer software version. Diagnostic port (OBD) scan required.",
    consultationFocus: "Smooth power delivery, reliable air-fuel ratios, and safeguarding mechanical engine components."
  },
  {
    id: "exhaust",
    name: "Exhaust",
    scope: "Acoustic character enhancement, backpressure reduction, and high-grade stainless steel fitment.",
    choices: ["Valved cat-back exhaust systems (Quiet/Loud modes)", "Quad titanium or carbon exhaust tips", "High-flow sports catalytic converters (Track only)", "Resonator deletes"],
    compatibility: "Chassis clearance, hanger locations, and local regional regulatory guidelines must be reviewed prior to order.",
    consultationFocus: "Drone-free highway cruising acoustics paired with an authoritative open-valve exhaust note."
  },
  {
    id: "chassis",
    name: "Chassis & Suspension",
    scope: "Handling dynamics, body roll minimization, ride height stance, and precision alignment.",
    choices: ["Progressive lowering spring kits", "Adjustable damping coilover suspension", "Heavy-duty anti-roll sway bars", "Front strut tower bracing"],
    compatibility: "Adaptive electronic dampers (e.g. EDC/PASM) require cancellation modules or electronic-compatible coilovers.",
    consultationFocus: "Preserving daily road comfort while eliminating float and sharpening turn-in steering response."
  }
];

interface Moodboard {
  id: string;
  name: string;
  tagline: string;
  ethos: string;
  recommendedTreatments: { name: string; route: string }[];
  elements: string[];
}

const moodboards: Moodboard[] = [
  {
    id: "understated",
    name: "Understated",
    tagline: "OEM+ Sophistication · Pure Stealth",
    ethos: "Quiet confidence. Focused on flawless paint clarity, satin stealth protection, factory-flush stance, and refined acoustic depth with zero loud gimmicks.",
    recommendedTreatments: [
      { name: "NameX X Shadow Satin PPF", route: ohioPage("ppf") },
      { name: "Paint Enhancement (1-Step)", route: ohioPage("packages") },
      { name: "Subtle Valved Exhaust System", route: "#autotuning" }
    ],
    elements: ["X Shadow Satin Finish", "Smoked Emblem Package", "Monoblock Satin Grey Alloys", "Quiet/Sport Valved Exhaust"]
  },
  {
    id: "sport-inspired",
    name: "Sport-Inspired",
    tagline: "Track-Bred Athletics · Road-Legal Precision",
    ethos: "Sharpened reflexes and aerodynamic presence. High-contrast carbon fiber accents, lowered center of gravity, and an assertive stance.",
    recommendedTreatments: [
      { name: "NameX X Phantom High-Gloss PPF", route: ohioPage("ppf") },
      { name: "Ceramic Caliper & Wheel Shield", route: ohioPage("coatings") },
      { name: "Chassis Lowering & Intake", route: "#autotuning" }
    ],
    elements: ["Gloss Carbon Front Splitter", "Lowered Progressive Springs", "High-Flow Cold Air Intake", "Acid Lime Brake Calipers"]
  },
  {
    id: "expressive",
    name: "Expressive",
    tagline: "Bespoke Artistry · Uncompromising Identity",
    ethos: "A pure statement vehicle. Custom paint hues, widebody aero integration, loud titanium exhaust note, and custom interior upholstery.",
    recommendedTreatments: [
      { name: "Custom Coloured PPF", route: ohioPage("ppf") },
      { name: "Full Custom Body Kit Fitting", route: ohioPage("auto-mods") },
      { name: "Stage 2 Performance Tuning", route: "#autotuning" }
    ],
    elements: ["Custom Coloured Wrap/PPF", "Titanium Quad Exhaust", "Aggressive Rear Diffuser", "Custom Alcantara Interior"]
  }
];

export function TuningAndCustomisationExperience() {
  const [activeTuningTab, setActiveTuningTab] = useState<string>("engine");
  const [selectedMoodboard, setSelectedMoodboard] = useState<string>("sport-inspired");
  const [vehicleTuning, setVehicleTuning] = useState<string>("");
  const [tuningWishlist, setTuningWishlist] = useState<string[]>(["Stage 1 Calibration (Stock hardware)", "Valved cat-back exhaust systems (Quiet/Loud modes)"]);

  const currentTuning = tuningCategories.find(t => t.id === activeTuningTab) || tuningCategories[0];
  const currentMood = moodboards.find(m => m.id === selectedMoodboard) || moodboards[0];

  const toggleWishlistItem = (item: string) => {
    setTuningWishlist(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello MR. DETAILER,\n\nI am planning a Customisation Build:\n- Preferred Direction: ${currentMood.name} (${currentMood.tagline})\n- Vehicle: ${vehicleTuning || "To be confirmed"}\n- Wishlist:\n${tuningWishlist.map(w => `• ${w}`).join("\n")}\n\nPlease let me know when we can arrange a studio consultation.`
  );

  return (
    <div className="ip-container">
      {/* Moodboard Section (Customisation Build) */}
      <div className="ip-card">
        <span className="ip-badge">BUILD PLANNING · MOODBOARD DIRECTIONS</span>
        <h2 className="ip-heading">Choose Your Build Direction</h2>
        <p className="ip-subline">
          Explore three curated aesthetic and performance directions. Moodboards serve as creative inspiration for studio discussion and tailored planning.
        </p>

        <div className="ip-tabs" style={{ marginTop: "20px" }}>
          {moodboards.map(m => (
            <button
              key={m.id}
              className={`ip-tab ${selectedMoodboard === m.id ? "active" : ""}`}
              onClick={() => setSelectedMoodboard(m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div style={{ background: "var(--client-surface-elevated)", padding: "clamp(20px, 3vw, 36px)", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
            <div>
              <span className="ip-badge">{currentMood.tagline}</span>
              <h3 style={{ fontSize: "24px", color: "var(--client-ink)", margin: "4px 0" }}>{currentMood.name} Direction</h3>
            </div>
            <a className="or-pill" href="#autotuning">
              Explore Tuning Options <ArrowRight className="or-arrow-inline" />
            </a>
          </div>

          <p style={{ color: "var(--client-muted)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
            {currentMood.ethos}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "24px" }}>
            <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: "18px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
              <h4 style={{ fontSize: "12px", color: "var(--client-lime)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>
                Recommended Treatments
              </h4>
              <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "13px", color: "var(--client-ink)", lineHeight: "1.8" }}>
                {currentMood.recommendedTreatments.map((t, idx) => (
                  <li key={idx}>
                    <a href={t.route} style={{ color: "inherit", textDecoration: "underline" }}>
                      {t.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: "18px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
              <h4 style={{ fontSize: "12px", color: "var(--client-lime)", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>
                Signature Elements
              </h4>
              <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "13px", color: "var(--client-muted)", lineHeight: "1.8" }}>
                {currentMood.elements.map((e, idx) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Auto Tuning Section with Anchor id="autotuning" */}
      <div className="ip-card" id="autotuning">
        <span className="ip-badge">PERFORMANCE ENGINEERING · AUTO TUNING</span>
        <h2 className="ip-heading">Engine, ECU, Exhaust &amp; Chassis Tuning</h2>
        <p className="ip-subline">
          Calibrated performance upgrades engineered for durability and track/road balance. Review scope, compatibility, and consultation requirements.
        </p>

        <div className="ip-tabs" style={{ marginTop: "20px" }}>
          {tuningCategories.map(cat => (
            <button
              key={cat.id}
              className={`ip-tab ${activeTuningTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTuningTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div style={{ background: "var(--client-surface-elevated)", padding: "clamp(20px, 3vw, 32px)", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
          <h3 style={{ fontSize: "20px", color: "var(--client-ink)", margin: "0 0 10px" }}>{currentTuning.name} Tuning Scope</h3>
          <p style={{ color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.6", margin: "0 0 18px" }}>
            {currentTuning.scope}
          </p>

          <h4 style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--client-lime)", marginBottom: "12px" }}>
            Available Choices &amp; Upgrades:
          </h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
            {currentTuning.choices.map(choice => {
              const isAdded = tuningWishlist.includes(choice);
              return (
                <button
                  key={choice}
                  onClick={() => toggleWishlistItem(choice)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    border: `1px solid ${isAdded ? "var(--client-lime)" : "var(--client-line)"}`,
                    background: isAdded ? "rgba(184, 223, 107, 0.15)" : "transparent",
                    color: isAdded ? "var(--client-lime)" : "var(--client-ink)",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <span>{isAdded ? "✓" : "+"}</span> {choice}
                </button>
              );
            })}
          </div>

          <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: "14px 18px", borderRadius: "4px", border: "1px solid var(--client-line)", marginBottom: "14px" }}>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)", lineHeight: "1.6" }}>
              <strong>Compatibility Consideration: </strong>{currentTuning.compatibility}
            </p>
          </div>

          <div style={{ background: "rgba(184, 223, 107, 0.08)", padding: "14px 18px", borderRadius: "4px", borderLeft: "3px solid var(--client-lime)" }}>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)", lineHeight: "1.6" }}>
              <strong>Consultation Focus: </strong>{currentTuning.consultationFocus}
            </p>
          </div>
        </div>

        {/* Wishlist & Vehicle Consultation Form */}
        <div className="ip-summary-bar">
          <div className="ip-summary-header">
            <h3 className="ip-summary-title">Tuning Wishlist ({tuningWishlist.length} selected)</h3>
            <span style={{ fontSize: "12px", color: "var(--client-muted)" }}>Moodboard: {currentMood.name}</span>
          </div>

          <div className="ip-selected-tags">
            {tuningWishlist.map(item => (
              <span key={item} className="ip-tag">
                {item}
                <button
                  onClick={() => toggleWishlistItem(item)}
                  style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 0 0 4px", fontSize: "12px" }}
                  aria-label={`Remove ${item}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "14px 18px", borderRadius: "4px", border: "1px solid var(--client-line)", marginBottom: "20px" }}>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)", lineHeight: "1.6" }}>
              <strong>Disclaimer: </strong>We do not make blanket promises of generic horsepower gains or preservation of factory manufacturer warranties. All tuning parameters are calibrated specifically for your vehicle identification number (VIN), fuel octane, and usage requirements during studio consultation.
            </p>
          </div>

          <div className="ip-field" style={{ marginBottom: "20px" }}>
            <label>Vehicle Make, Model &amp; Engine Code</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. BMW M340i (B58 Engine) or VW Golf R"
              value={vehicleTuning}
              onChange={e => setVehicleTuning(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              className="or-pill"
              href={`https://wa.me/919779397773?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppMark /> Review Wishlist on WhatsApp <ArrowUpRight className="or-arrow-inline" />
            </a>
            <a className="or-pill" href={ohioPage("booking")}>
              Book Dyno / Diagnostic Consult <ArrowRight className="or-arrow-inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
