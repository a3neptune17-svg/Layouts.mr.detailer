"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { imagePath, whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface AutoModCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  options: string[];
}

const modCategories: AutoModCategory[] = [
  {
    id: "denting-painting",
    name: "Denting & Painting",
    tagline: "Climate-Controlled Booth & Optical Color Match",
    description: "Computerized spectrophotometer color analysis, downdraft spray booth baking, and paintless dent repair restoring pristine factory bodylines.",
    options: ["Full Vehicle Respray", "Panel Dent Repair (PDR)", "Bumper Scuff Refinishing", "Custom Caliper Painting"]
  },
  {
    id: "tuning",
    name: "Car Tuning & Calibration",
    tagline: "ECU / TCU Mapping & Exhaust Engineering",
    description: "Precise engine management optimization, responsive throttle mapping, intake upgrades, and stainless valved exhaust systems.",
    options: ["Stage 1 / Stage 2 ECU Calibration", "Valved Sports Exhaust", "Cold Air Intake Induction", "Throttle Response Mapping"]
  },
  {
    id: "aero-body-kits",
    name: "Aero Styling & Body Kits",
    tagline: "Carbon Fiber & Millimeter-Gap Integration",
    description: "Autoclave dry carbon aerodynamic splitters, rear diffusers, side skirts, and bespoke body kit installations with OEM-tight tolerances.",
    options: ["Carbon Front Lip & Splitter", "Rear Diffuser & Exhaust Tips", "Ducktail / GT Wing Spoiler", "Widebody Fender Extensions"]
  },
  {
    id: "accessories",
    name: "Accessories & Interior Styling",
    tagline: "Forged Alloys & Cabin Customisation",
    description: "Lightweight bespoke forged wheel sets, Alcantara steering wheel re-trims, smoked optical lamp protection, and acoustic sound dampening.",
    options: ["Custom Monoblock Forged Alloys", "Custom Alcantara / Leather Retrim", "Smoked Optical Headlight Films", "Ambient Interior Lighting System"]
  }
];

export function AutoModsExperience() {
  const [selectedMods, setSelectedMods] = useState<string[]>(["Full Vehicle Respray", "Valved Sports Exhaust"]);
  const [vehicle, setVehicle] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("Within 1 Month");

  const toggleModOption = (opt: string) => {
    setSelectedMods(prev =>
      prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello MR. DETAILER Auto Mods Studio,\n\nI have configured a Customisation Build Sheet:\n- Vehicle: ${vehicle || "To be confirmed"}\n- Timeline: ${timeline}\n- Selected Modifications:\n${selectedMods.map(m => `• ${m}`).join("\n")}\n\nPlease let me know when we can arrange the Stage 1: Inspect session.`
  );

  return (
    <div className="ip-container">
      {/* Three Stages Banner: Inspect, Agree, Finish */}
      <div className="ip-card">
        <span className="ip-badge">THE WORKFLOW</span>
        <h2 className="ip-heading">The Three Stages of Studio Customisation</h2>
        <p className="ip-subline">
          Every vehicle modification is executed with meticulous engineering discipline and transparent consultation.
        </p>

        <div className="ip-stages-grid">
          <div className="ip-stage-box">
            <div className="ip-stage-num">STAGE 01</div>
            <h3 className="ip-stage-title">Inspect</h3>
            <p className="ip-stage-desc">
              Comprehensive baseline diagnostic scan, chassis alignment verification, paint condition analysis, and mechanical tolerance evaluation before any component is ordered or removed.
            </p>
          </div>

          <div className="ip-stage-box">
            <div className="ip-stage-num">STAGE 02</div>
            <h3 className="ip-stage-title">Agree</h3>
            <p className="ip-stage-desc">
              Detailed technical specification review, component sourcing confirmation, timeline scheduling, and written milestone sign-off. We align on every detail with zero hidden surprises.
            </p>
          </div>

          <div className="ip-stage-box">
            <div className="ip-stage-num">STAGE 03</div>
            <h3 className="ip-stage-title">Finish</h3>
            <p className="ip-stage-desc">
              Clean-bay precision installation, dynamometer validation, torque-spec verification, final high-CRI inspection, and hand-over with full documentation and care guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Build Sheet Configuration */}
      <div className="ip-card">
        <span className="ip-badge">BUILD SHEET · SELECT CATEGORIES</span>
        <h2 className="ip-heading">Explore Customisation Options</h2>
        <p className="ip-subline">
          Select the modifications you wish to explore for your build sheet. Options update dynamically in your enquiry summary.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "24px" }}>
          {modCategories.map(cat => (
            <div key={cat.id} style={{ background: "var(--client-surface-elevated)", padding: "24px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "14px" }}>
                <div>
                  <h3 style={{ fontSize: "20px", color: "var(--client-ink)", margin: 0 }}>{cat.name}</h3>
                  <p style={{ color: "var(--client-lime)", fontSize: "13px", margin: "4px 0 0", fontWeight: 500 }}>{cat.tagline}</p>
                </div>
              </div>
              <p style={{ color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.6", margin: "0 0 16px" }}>
                {cat.description}
              </p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {cat.options.map(opt => {
                  const isChecked = selectedMods.includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleModOption(opt)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "999px",
                        border: `1px solid ${isChecked ? "var(--client-lime)" : "var(--client-line)"}`,
                        background: isChecked ? "rgba(184, 223, 107, 0.15)" : "transparent",
                        color: isChecked ? "var(--client-lime)" : "var(--client-ink)",
                        fontSize: "12.5px",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <span>{isChecked ? "✓" : "+"}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Build Sheet Summary */}
        <div className="ip-summary-bar">
          <div className="ip-summary-header">
            <h3 className="ip-summary-title">Your Customisation Build Sheet ({selectedMods.length} selections)</h3>
            <span style={{ fontSize: "12px", color: "var(--client-lime)", fontWeight: 600 }}>
              Live Specification Summary
            </span>
          </div>

          <div className="ip-selected-tags">
            {selectedMods.length > 0 ? (
              selectedMods.map(m => (
                <span key={m} className="ip-tag">
                  {m}
                  <button
                    onClick={() => toggleModOption(m)}
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 0 0 4px", fontSize: "12px" }}
                    aria-label={`Remove ${m}`}
                  >
                    ×
                  </button>
                </span>
              ))
            ) : (
              <p style={{ color: "var(--client-muted)", fontSize: "13px", margin: 0 }}>
                No modifications selected yet. Tap options above to add them to your build sheet.
              </p>
            )}
          </div>

          <div style={{ background: "rgba(0, 0, 0, 0.25)", padding: "14px 18px", borderRadius: "4px", border: "1px solid var(--client-line)", marginBottom: "20px" }}>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)", lineHeight: "1.6" }}>
              <strong>Important Notice: </strong>This build sheet represents an illustrative configuration for consultation and technical review. It does not constitute a confirmed commercial booking or modification until Stage 01 (Inspect) and Stage 02 (Agree) are completed in person.
            </p>
          </div>

          <div className="ip-form-grid">
            <div className="ip-field">
              <label>Vehicle Make &amp; Model</label>
              <input
                type="text"
                className="ip-input"
                placeholder="e.g. BMW M4 Competition (G82)"
                value={vehicle}
                onChange={e => setVehicle(e.target.value)}
              />
            </div>
            <div className="ip-field">
              <label>Target Timeline</label>
              <select className="ip-select" value={timeline} onChange={e => setTimeline(e.target.value)}>
                <option value="Immediate (This Week)">Immediate (This Week)</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="Planning for Next Quarter">Planning for Next Quarter</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "16px" }}>
            <a
              className="or-pill"
              href={`https://wa.me/919779397773?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppMark /> Review Build on WhatsApp <ArrowUpRight className="or-arrow-inline" />
            </a>
            <a className="or-pill" href={ohioPage("booking")}>
              Book Stage 1 Inspection <ArrowRight className="or-arrow-inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
