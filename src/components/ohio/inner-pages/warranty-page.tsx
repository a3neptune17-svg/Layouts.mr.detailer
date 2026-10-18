"use client";

import { useState } from "react";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

const warrantyFaqs = [
  {
    q: "How do I verify my warranty coverage without an automated online lookup?",
    a: "Because each warranty passport is linked to physical installation records and authenticated batch numbers, our studio team verifies records directly against your official service invoice or digital certificate. Submit your invoice details in the form below, and our warranty coordinator will review and confirm your status within 24 business hours."
  },
  {
    q: "What maintenance washes are required to maintain warranty validity?",
    a: "Vehicles with NameX Ceramic Coatings or PPF require periodic studio maintenance washes (or home maintenance strictly following our two-bucket, pH-neutral guidelines). We require an official annual studio inspection to inspect hydrophobic behavior and film edge adhesion."
  },
  {
    q: "What is covered under the NameX PPF warranty?",
    a: "NameX manufacturer warranty covers yellowing, bubbling, cracking, and delamination resulting from defective material or certified installation under normal operating conditions. It does not cover severe physical vehicle accidents, collision impacts, or damage caused by aggressive acid wheel cleaners."
  },
  {
    q: "What should I do if I notice a bubbling edge or water spot?",
    a: "Do not attempt to pull, pick, or polish the film yourself. Contact the Warranty Hub immediately or bring the vehicle into the studio. Minor edge lifts can be easily trimmed and sealed by our technicians in the clean bay."
  }
];

export function WarrantyExperience() {
  const [customerName, setCustomerName] = useState<string>("");
  const [vehicleReg, setVehicleReg] = useState<string>("");
  const [invoiceNumber, setInvoiceNumber] = useState<string>("");
  const [installedService, setInstalledService] = useState<string>("NameX Paint Protection Film");
  const [claimType, setClaimType] = useState<string>("Annual Inspection Request");
  const [notes, setNotes] = useState<string>("");

  const whatsappClaimMessage = encodeURIComponent(
    `Hello MR. DETAILER Warranty Hub,\n\nI am submitting a Warranty / Service Enquiry:\n- Customer Name: ${customerName || "Not specified"}\n- Vehicle Reg / Model: ${vehicleReg || "Not specified"}\n- Invoice/Passport #: ${invoiceNumber || "To be provided"}\n- Installed Service: ${installedService}\n- Request Type: ${claimType}\n- Description: ${notes || "None"}\n\nPlease verify my records and advise on next steps.`
  );

  return (
    <div className="ip-container">
      {/* Warranty Guidance Banner */}
      <div className="ip-card">
        <span className="ip-badge">AFTERCARE &amp; PROTECTION GUARANTEE</span>
        <h2 className="ip-heading">Warranty Care Hub</h2>
        <p className="ip-subline">
          Care continues beyond the studio. Transparent warranty guidelines, maintenance scheduling, and personal claim assistance verified directly by our certified studio team.
        </p>

        {/* Essential Guidelines Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "28px" }}>
          <div style={{ background: "var(--client-surface-elevated)", padding: "22px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
            <span style={{ fontSize: "12px", color: "var(--client-lime)", fontWeight: 700, letterSpacing: "0.08em" }}>PROTOCOL 01</span>
            <h3 style={{ fontSize: "18px", color: "var(--client-ink)", margin: "8px 0" }}>7-Day Curing Protocol</h3>
            <p style={{ color: "var(--client-muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
              Allow coatings and PPF adhesives 7 full days to cure. Avoid high-pressure jets, aggressive shampoos, and automatic car washes during this initial window.
            </p>
          </div>

          <div style={{ background: "var(--client-surface-elevated)", padding: "22px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
            <span style={{ fontSize: "12px", color: "var(--client-lime)", fontWeight: 700, letterSpacing: "0.08em" }}>PROTOCOL 02</span>
            <h3 style={{ fontSize: "18px", color: "var(--client-ink)", margin: "8px 0" }}>Bi-Weekly 2-Bucket Wash</h3>
            <p style={{ color: "var(--client-muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
              Wash vehicles using two buckets equipped with grit guards, ultra-plush microfiber wash mitts, and pH-neutral snow foams. Never wipe dirty dry paint with dry cloth.
            </p>
          </div>

          <div style={{ background: "var(--client-surface-elevated)", padding: "22px", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
            <span style={{ fontSize: "12px", color: "var(--client-lime)", fontWeight: 700, letterSpacing: "0.08em" }}>PROTOCOL 03</span>
            <h3 style={{ fontSize: "18px", color: "var(--client-ink)", margin: "8px 0" }}>Annual Studio Inspection</h3>
            <p style={{ color: "var(--client-muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
              Schedule a complimentary annual inspection with our master technicians to assess hydrophobic water beading, film edge integrity, and receive decontamination treatment.
            </p>
          </div>
        </div>
      </div>

      {/* Claim-Support & Service Enquiry Form */}
      <div className="ip-card">
        <span className="ip-badge">VERIFICATION &amp; CLAIMS</span>
        <h2 className="ip-heading">Warranty &amp; Service Verification Request</h2>
        <p className="ip-subline">
          Please provide your vehicle details and service invoice number below. Because our warranties are tied to physical laboratory passports, our coordinator verifies every record manually.
        </p>

        <div className="ip-form-grid" style={{ marginTop: "24px" }}>
          <div className="ip-field">
            <label>Customer Full Name</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Vikram Sharma"
              value={customerName}
              onChange={e => setCustomerName(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Vehicle Registration / Model</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. DL 01 AB 1234 (Porsche Macan)"
              value={vehicleReg}
              onChange={e => setVehicleReg(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Service Invoice / Passport #</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. NMX-CS-XBQW369J"
              value={invoiceNumber}
              onChange={e => setInvoiceNumber(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Installed Treatment</label>
            <select
              className="ip-select"
              value={installedService}
              onChange={e => setInstalledService(e.target.value)}
            >
              <option value="NameX Paint Protection Film">NameX Paint Protection Film (PPF)</option>
              <option value="NameX Ceramic SiC 9H">NameX Ceramic SiC 9H Matrix</option>
              <option value="NameX Borophene 2D">NameX Borophene 2D Matrix</option>
              <option value="NameX Graphene Matrix">NameX Graphene Elastomer Matrix</option>
              <option value="Multi-Stage Detailing Package">Multi-Stage Concours Detailing Package</option>
            </select>
          </div>
          <div className="ip-field">
            <label>Request Type</label>
            <select
              className="ip-select"
              value={claimType}
              onChange={e => setClaimType(e.target.value)}
            >
              <option value="Annual Inspection Request">Annual Inspection Booking</option>
              <option value="Warranty Status Verification">Warranty Status Verification</option>
              <option value="Film Edge / Bubble Check">Film Edge / Bubble Check</option>
              <option value="Hydrophobic Refresh Request">Hydrophobic Booster &amp; Refresh</option>
              <option value="Claim Support">Claim Support Assistance</option>
            </select>
          </div>
          <div className="ip-field" style={{ gridColumn: "1 / -1" }}>
            <label>Details / Observation (Optional)</label>
            <textarea
              className="ip-textarea"
              rows={3}
              placeholder="Describe any observations, recent panel resprays, or notes for the technician..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
        </div>

        {/* Live Review Box before WhatsApp send */}
        <div className="ip-review-box">
          <div className="ip-review-item">
            <span className="ip-review-label">Customer Name:</span>
            <span className="ip-review-val">{customerName || "Not provided"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Vehicle:</span>
            <span className="ip-review-val">{vehicleReg || "Not provided"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Invoice / Passport ID:</span>
            <span className="ip-review-val">{invoiceNumber || "Pending submission"}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Enquiry Category:</span>
            <span className="ip-review-val">{claimType}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "20px" }}>
          <a
            className="or-pill"
            href={`https://wa.me/919779397773?text=${whatsappClaimMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppMark /> Submit to Warranty Hub on WhatsApp <ArrowUpRight className="or-arrow-inline" />
          </a>
          <a className="or-pill" href={`mailto:${clientConfig.email}?subject=Warranty%20Enquiry%20-%20${encodeURIComponent(invoiceNumber || vehicleReg)}`}>
            Send via Email <ArrowRight className="or-arrow-inline" />
          </a>
        </div>
      </div>

      {/* Warranty FAQs */}
      <div className="ip-card">
        <span className="ip-badge">HELP &amp; POLICIES</span>
        <h2 className="ip-heading">Warranty Frequently Asked Questions</h2>
        <div className="ip-faq-list">
          {warrantyFaqs.map((faq, idx) => (
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
