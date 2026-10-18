"use client";

import { useState } from "react";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

const pillars = [
  {
    title: "Master Technician Training",
    desc: "Rigorous clean-room installation instruction covering ultrasonic paint depth measurement, multi-stage rotary compounding, and bulk edge-tuck PPF wrapping."
  },
  {
    title: "Brand & Studio Architecture",
    desc: "Distinctive luxury studio layout standards: daylight-balanced 5000K LED illumination grid, sealed anti-static epoxy flooring, and client lounges."
  },
  {
    title: "Marketing & Lead Ecosystem",
    desc: "National brand presence, verified digital warranty passport infrastructure, and dedicated territorial marketing guidance."
  },
  {
    title: "Operational & Chemical Supply",
    desc: "Direct certified supply of NameX self-healing TPU films, laboratory-tested ceramic coatings, pro detail shelf chemicals, and ongoing QA audits."
  }
];

export function FranchiseExperience() {
  const [candidateName, setCandidateName] = useState<string>("");
  const [cityTerritory, setCityTerritory] = useState<string>("");
  const [background, setBackground] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("Within 3 Months");
  const [message, setMessage] = useState<string>("");

  const whatsappFranchiseMessage = encodeURIComponent(
    `Hello MR. DETAILER Leadership,\n\nI am interested in exploring Studio Ownership / Partnership:\n- Name: ${candidateName || "Not provided"}\n- Proposed City / Territory: ${cityTerritory || "Not provided"}\n- Current Automotive / Business Background: ${background || "Not provided"}\n- Planned Timeline: ${timeline}\n- Plans & Message: ${message || "Interested in learning more about the franchise framework."}\n\nPlease let me know when we can arrange an introductory consultation.`
  );

  return (
    <div className="ip-container">
      {/* Studio Ownership Hero Card */}
      <div className="ip-card">
        <span className="ip-badge">EXPANSION &amp; PARTNERSHIP</span>
        <h2 className="ip-heading">Own a MR. DETAILER Studio</h2>
        <p className="ip-subline" style={{ fontSize: "16px" }}>
          Join an uncompromising automotive detailing studio network built on protection science, master craftsmanship, and genuine luxury client experience.
        </p>

        {/* 4 Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "28px" }}>
          {pillars.map((p, idx) => (
            <div key={idx} style={{ background: "var(--client-surface-elevated)", border: "1px solid var(--client-line)", padding: "24px", borderRadius: "4px" }}>
              <span style={{ fontSize: "12px", color: "var(--client-lime)", fontWeight: 700, letterSpacing: "0.08em" }}>PILLAR 0{idx + 1}</span>
              <h3 style={{ fontSize: "18px", color: "var(--client-ink)", margin: "8px 0" }}>{p.title}</h3>
              <p style={{ color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="ip-card">
        <span className="ip-badge">CONFIDENTIAL ENQUIRY</span>
        <h2 className="ip-heading">Tell Us About Yourself and Your Plans</h2>
        <p className="ip-subline">
          Territory allocations and commercial discussions are evaluated following an initial review with the MR. DETAILER leadership team.
        </p>

        <div className="ip-form-grid" style={{ marginTop: "24px" }}>
          <div className="ip-field">
            <label>Full Name</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Rahul Kapoor"
              value={candidateName}
              onChange={e => setCandidateName(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Proposed City / Territory</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Chandigarh, Pune, or Bengaluru"
              value={cityTerritory}
              onChange={e => setCityTerritory(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Current Business / Automotive Background</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Automotive Dealer, Luxury Retail, Detailing Enthusiast"
              value={background}
              onChange={e => setBackground(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Planned Launch Horizon</label>
            <select className="ip-select" value={timeline} onChange={e => setTimeline(e.target.value)}>
              <option value="Immediate (1 to 2 Months)">Immediate (1 to 2 Months)</option>
              <option value="Within 3 Months">Within 3 Months</option>
              <option value="6 to 12 Months">6 to 12 Months</option>
              <option value="Exploring Initial Feasibility">Exploring Initial Feasibility</option>
            </select>
          </div>
          <div className="ip-field" style={{ gridColumn: "1 / -1" }}>
            <label>Location Details, Existing Real Estate, or General Plans</label>
            <textarea
              className="ip-textarea"
              rows={4}
              placeholder="Share any details about your prospective location, studio floor space, or questions for our expansion team..."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        {/* Live Review Box before WhatsApp */}
        <div className="ip-review-box">
          <div className="ip-review-item">
            <span className="ip-review-label">Candidate Name:</span>
            <span className="ip-review-val">{candidateName || "Not specified"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Target Territory:</span>
            <span className="ip-review-val">{cityTerritory || "Not specified"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Background:</span>
            <span className="ip-review-val">{background || "Not specified"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Target Horizon:</span>
            <span className="ip-review-val">{timeline}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "20px" }}>
          <a
            className="or-pill"
            href={`https://wa.me/919779397773?text=${whatsappFranchiseMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppMark /> Start a Conversation on WhatsApp <ArrowUpRight className="or-arrow-inline" />
          </a>
          <a className="or-pill" href={`mailto:${clientConfig.email}?subject=Franchise%20Inquiry%20-%20${encodeURIComponent(cityTerritory || "New Territory")}`}>
            Contact Leadership via Email <ArrowRight className="or-arrow-inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
