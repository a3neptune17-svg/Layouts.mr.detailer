"use client";

import { useState } from "react";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface PlannerChoice {
  id: string;
  category: string;
  name: string;
  solves: string;
  recommendedTreatment: string;
}

const plannerOptions: PlannerChoice[] = [
  {
    id: "stone-chips",
    category: "Paint Protection Film",
    name: "Stone Chips & Highway Debris Protection",
    solves: "Prevents rock impacts, gravel blasting, bumper road rash, and physical clear coat penetration.",
    recommendedTreatment: "NameX Self-Healing TPU Paint Protection Film (Full Front / Full Body)"
  },
  {
    id: "water-spots",
    category: "Surface Coatings",
    name: "Water Spots, UV & Chemical Etching",
    solves: "Eliminates mineral bonding, bird droppings, acid rain damage, and dull oxidation on paintwork.",
    recommendedTreatment: "NameX Ceramic SiC 9H or Graphene Heat-Dissipating Matrix Coating"
  },
  {
    id: "swirl-marks",
    category: "Paint Enhancement",
    name: "Swirl Marks, Holograms & Dull Haze",
    solves: "Removes circular wash spiderwebs, towel scratches, and cloudy reflections from clear coat.",
    recommendedTreatment: "Paint Enhancement (1-Step Polish) or Concours Paint Correction (2-Step Compound)"
  },
  {
    id: "interior-stains",
    category: "Interior Care",
    name: "Leather Wear, Stains & Cabin Odor",
    solves: "Deep cleans embedded oils, restores matte leather suppleness, extracts carpet grime, and purges A/C ducts.",
    recommendedTreatment: "Full Cabin Steam Sterilisation & Leather Enrichment Treatment"
  },
  {
    id: "exterior-detailing",
    category: "Exterior Detailing",
    name: "Iron Fall-Out & Industrial Decontamination",
    solves: "Removes rough embedded railway dust, brake particles, road tar, and tree sap before they rust the finish.",
    recommendedTreatment: "Multi-Stage Chemical Decontamination & Ultrasonic Surface Polish"
  },
  {
    id: "focused-treatments",
    category: "Focused Treatments",
    name: "Foggy Headlights & Corrosive Brake Dust",
    solves: "Restores oxidized yellow headlights for night clarity and seals wheels against 800°C metallic brake dust.",
    recommendedTreatment: "Headlight UV Restorative Polish + Alloy Wheel High-Temp Ceramic Barrier"
  }
];

export function PlannerExperience() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["stone-chips", "swirl-marks"]);
  const [vehicleModel, setVehicleModel] = useState<string>("");

  const toggleOption = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedChoices = plannerOptions.filter(o => selectedIds.includes(o.id));

  const whatsappMessage = encodeURIComponent(
    `Hello MR. DETAILER,\n\nI used the Car Care Planner for my vehicle: ${vehicleModel || "Vehicle not specified"}.\n\nMy selected priorities:\n${selectedChoices.map(c => `• ${c.name} (${c.category})`).join("\n")}\n\nPlease share your studio assessment availability.`
  );

  return (
    <div className="ip-container">
      <div className="ip-card">
        <div className="ip-card-header">
          <span className="ip-badge">GUIDED SELECTION · CAR CARE PLANNER</span>
          <h2 className="ip-heading">Which Problems Does Your Car Need Solved?</h2>
          <p className="ip-subline">
            Select the issues or preservation goals you would like to address. Our interactive planner maps each priority to the appropriate studio treatment.
          </p>
        </div>

        {/* Interactive Option Grid */}
        <div className="ip-option-grid">
          {plannerOptions.map(option => {
            const isSelected = selectedIds.includes(option.id);
            return (
              <div
                key={option.id}
                className={`ip-option-card ${isSelected ? "selected" : ""}`}
                onClick={() => toggleOption(option.id)}
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                onKeyDown={e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleOption(option.id); } }}
              >
                <div className="ip-option-card-header">
                  <span className="ip-badge">{option.category}</span>
                  <div className="ip-option-check">
                    {isSelected ? "✓" : ""}
                  </div>
                </div>
                <h3 className="ip-option-title">{option.name}</h3>
                <p className="ip-option-desc">{option.solves}</p>
                <div style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid var(--client-line)", fontSize: "12px", color: "var(--client-lime)" }}>
                  <strong>Treatment: </strong>{option.recommendedTreatment}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Build Sheet / Recommendations Summary */}
        <div className="ip-summary-bar">
          <div className="ip-summary-header">
            <h3 className="ip-summary-title">Your Studio Plan Summary ({selectedChoices.length} selected)</h3>
            <span style={{ fontSize: "12.5px", color: "var(--client-muted)" }}>
              Interactive Recommendation
            </span>
          </div>

          <div className="ip-selected-tags">
            {selectedChoices.length > 0 ? (
              selectedChoices.map(c => (
                <span key={c.id} className="ip-tag">
                  {c.category} · {c.name.split(" ")[0]}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleOption(c.id); }}
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: "0 0 0 4px", fontSize: "12px" }}
                    aria-label={`Remove ${c.name}`}
                  >
                    ×
                  </button>
                </span>
              ))
            ) : (
              <p style={{ color: "var(--client-muted)", fontSize: "13px", margin: 0 }}>
                Please select at least one problem area above to generate recommendations.
              </p>
            )}
          </div>

          {/* Studio Assessment Disclaimer */}
          <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: "14px 18px", borderRadius: "4px", border: "1px solid var(--client-line)", marginBottom: "20px" }}>
            <p style={{ margin: 0, fontSize: "12.5px", color: "var(--client-ink)", lineHeight: "1.6" }}>
              <strong>Studio Note: </strong>The final treatment recommendation and precision package depend on an in-person studio assessment, paint thickness measurement (using ultrasonic digital gauges), and inspection under high-CRI studio illumination.
            </p>
          </div>

          <div className="ip-field" style={{ marginBottom: "20px" }}>
            <label>Vehicle Make &amp; Model (Optional)</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Audi RS6 Avant or Land Rover Defender"
              value={vehicleModel}
              onChange={e => setVehicleModel(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              className="or-pill"
              href={`https://wa.me/919779397773?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppMark /> Discuss Plan on WhatsApp <ArrowUpRight className="or-arrow-inline" />
            </a>
            <a className="or-pill" href={ohioPage("booking")}>
              Book In-Person Assessment <ArrowRight className="or-arrow-inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
