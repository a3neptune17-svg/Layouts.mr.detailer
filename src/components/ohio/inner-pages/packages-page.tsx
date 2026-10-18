"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "../client-config";
import { whatsapp } from "../rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "../icons";
import "./inner-pages.css";

interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  purpose: string;
  inclusions: string[];
  useCase: string;
  timeEstimate: string;
  image: string;
  imageAlt: string;
}

const services: ServiceDetail[] = [
  {
    id: "interior-exterior",
    name: "Interior + Exterior",
    tagline: "Total vehicle restoration & deep sanitisation",
    purpose: "Simultaneous rejuvenation of cabin surfaces and paintwork for comprehensive cleanliness and gloss.",
    inclusions: [
      "Multi-stage pH-neutral contact hand wash with grit guards",
      "Wheel faces, barrels, arches, and exhaust tip cleansing",
      "Deep cabin steam extraction and upholstery conditioning",
      "Dashboard, console, door panels UV satin dress",
      "Exterior synthetic spray sealant application"
    ],
    useCase: "Ideal as a bi-monthly studio deep-clean or preparing for an important automotive occasion.",
    timeEstimate: "Approx. 4 – 6 studio hours",
    image: "/images/IMG_20260809_180419.jpg.jpeg",
    imageAlt: "Mr. Detailer complete interior and exterior vehicle care"
  },
  {
    id: "steam-wash",
    name: "Steam Wash",
    tagline: "Eco-friendly thermal sanitisation & grime dissolution",
    purpose: "Utilises pressurized high-temperature dry steam to penetrate tight seams, engine bays, and sensitive electronics without water flooding.",
    inclusions: [
      "High-pressure thermal dry vapor paint decontamination",
      "Door jambs, trunk seals, and fuel flap steam purge",
      "A/C duct thermal ozone sterilisation eliminating odors",
      "Streak-free crystal glass clarity treatment",
      "Quick hydrophobic booster wipe-down"
    ],
    useCase: "Perfect for delicate classics, hybrid/EV battery compartments, and post-monsoon sterilization.",
    timeEstimate: "Approx. 2 – 3 studio hours",
    image: "/images/IMG_20260809_180739.jpg.jpeg",
    imageAlt: "Dry vapor steam decontamination of body panels and wheels"
  },
  {
    id: "paint-enhancement",
    name: "Paint Enhancement (1-Step)",
    tagline: "Single-stage gloss magnification & haze elimination",
    purpose: "Enhances paint brilliance and removes light wash marring without aggressive clear coat reduction.",
    inclusions: [
      "Full chemical decontamination (iron fall-out and clay bar)",
      "Single-stage micro-finishing polish with dual-action machine",
      "Removal of 50-60% of surface wash hazing and spiderwebbing",
      "High-CRI optical clarity inspection across every panel",
      "Synthetic polymer paint sealant application"
    ],
    useCase: "Recommended for newer vehicles with minor wash marks or cars receiving annual gloss refreshes.",
    timeEstimate: "Approx. 1 studio day",
    image: "/images/studio-polishing-hood.jpg",
    imageAlt: "Mr. Detailer specialist performing single-stage paint enhancement on bonnet"
  },
  {
    id: "paint-correction",
    name: "Paint Correction (2-Step)",
    tagline: "Heavy defect extraction & mirror reflection perfection",
    purpose: "Multi-stage compound leveling designed to eliminate deeper scratches, oxidation, and bird-dropping etchings.",
    inclusions: [
      "Ultrasonic digital paint gauge depth profiling across all panels",
      "Stage 1: Heavy cutting compound removing 85-90% of defects",
      "Stage 2: Micro-refinement jewelling polish eliminating holograms",
      "Solvent wipe down (IPA panel wipe) for 100% naked paint inspection",
      "Essential foundation prior to Ceramic Coating or PPF application"
    ],
    useCase: "Crucial for neglected finishes, used vehicle purchases, or as the preparatory foundation for permanent protection.",
    timeEstimate: "Approx. 1.5 – 2 studio days",
    image: "/images/studio-paint-correction.jpg",
    imageAlt: "Mr. Detailer technician in official uniform using dual-action machine polisher for multi-stage correction"
  },
  {
    id: "interior-care",
    name: "Interior Care",
    tagline: "Cabin luxury preservation & hypoallergenic clean",
    purpose: "Preserves natural leather suppleness, cleans carpet fibers, and restores interior surfaces to a factory matte look.",
    inclusions: [
      "Gentle pH-balanced leather cleansing with horsehair brushes",
      "Nourishing beeswax/lanolin conditioning preventing leather cracks",
      "Hot-water extraction of floor mats and trunk carpeting",
      "Piano black interior trim polish and smudge-resistant wipe",
      "HEPA-filter vacuuming of tight seat crevices and vents"
    ],
    useCase: "Essential for luxury cabins with perforated leather, daily family drivers, or pet-friendly vehicles.",
    timeEstimate: "Approx. 3 – 4 studio hours",
    image: "/images/IMG_20260809_182044.jpg.jpeg",
    imageAlt: "Leather conditioning and cabin deep extraction"
  }
];

const faqs = [
  {
    q: "What is the key difference between Paint Enhancement and Paint Correction?",
    a: "Paint Enhancement is a single-stage machine polish that refines clear coat to boost gloss and eliminate light haze (50-60% defect reduction). Paint Correction is an intensive multi-stage compounding process that targets deeper scratches, heavy swirls, and sanding marks (85-90%+ defect reduction) before jewelling the paint to mirror perfection."
  },
  {
    q: "How does a paint sealant differ from a ceramic coating?",
    a: "A paint sealant is a synthetic polymer protective layer that sits on top of the clear coat, providing slick gloss and water beading typically for 3 to 6 months. A ceramic coating (such as NameX SiC 9H) creates a molecular covalent chemical bond with the clear coat, crystallizing into a semi-permanent sacrificial glass layer that lasts for years, resisting chemicals and heavy UV."
  },
  {
    q: "Why does the studio not list fixed prices online?",
    a: "Every vehicle arrives with differing paint hardness, panel surface areas, and existing wear levels. We inspect your vehicle's paint depth and clear coat condition in person to recommend the exact treatment required, ensuring you only pay for what your car genuinely needs."
  }
];

export function PackagesExperience() {
  const [selectedService, setSelectedService] = useState<string>("paint-correction");
  const [vehicleMake, setVehicleMake] = useState<string>("");
  const [vehicleModel, setVehicleModel] = useState<string>("");
  const [paintCondition, setPaintCondition] = useState<string>("Moderate Swirls");
  const [showReview, setShowReview] = useState<boolean>(false);

  const activeService = services.find(s => s.id === selectedService) || services[0];

  const whatsappMessage = encodeURIComponent(
    `Hello MR. DETAILER,\n\nI would like to enquire about the *${activeService.name}* package.\n- Vehicle: ${vehicleMake || "Not specified"} ${vehicleModel || ""}\n- Paint Condition: ${paintCondition}\n\nPlease confirm availability for an in-person studio assessment.`
  );

  return (
    <div className="ip-container">
      {/* Service Tabs */}
      <div className="ip-card">
        <div className="ip-card-header">
          <span className="ip-badge">PACKAGES JOURNEY · PRECISION POLISHING</span>
          <h2 className="ip-heading">Choose Your Detailing Scope</h2>
          <p className="ip-subline">
            From routine sterilization to multi-stage concours paint correction. Inspect the inclusions and purpose of each treatment below.
          </p>
        </div>

        <div className="ip-tabs" role="tablist">
          {services.map(s => (
            <button
              key={s.id}
              className={`ip-tab ${selectedService === s.id ? "active" : ""}`}
              onClick={() => { setSelectedService(s.id); setShowReview(false); }}
              role="tab"
              aria-selected={selectedService === s.id}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Selected Service Card Details */}
        <div style={{ background: "var(--client-surface-elevated)", padding: "clamp(20px, 3vw, 32px)", borderRadius: "4px", border: "1px solid var(--client-line)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
            <div>
              <span className="ip-badge">{activeService.timeEstimate}</span>
              <h3 style={{ fontSize: "24px", margin: "6px 0 2px", color: "var(--client-ink)" }}>{activeService.name}</h3>
              <p style={{ color: "var(--client-lime)", fontSize: "14px", margin: 0, fontWeight: 500 }}>{activeService.tagline}</p>
            </div>
            <a className="or-pill" href="#enquiry-form">
              Enquire for this Package <ArrowRight className="or-arrow-inline" />
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px", alignItems: "start" }}>
            <div>
              <p style={{ color: "var(--client-muted)", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                <strong style={{ color: "var(--client-ink)" }}>Purpose: </strong>{activeService.purpose}
              </p>

              <h4 style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--client-ink)", marginBottom: "12px" }}>
                Studio Inclusions:
              </h4>
              <ul style={{ paddingLeft: "20px", color: "var(--client-muted)", fontSize: "13.5px", lineHeight: "1.8", margin: "0 0 20px" }}>
                {activeService.inclusions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div style={{ background: "rgba(184, 223, 107, 0.08)", padding: "14px 18px", borderRadius: "4px", borderLeft: "3px solid var(--client-lime)" }}>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--client-ink)" }}>
                  <strong>Best Suited For: </strong>{activeService.useCase}
                </p>
              </div>
            </div>

            <div style={{ position: "relative", minHeight: "260px", height: "100%", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--client-line)" }}>
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 14px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", fontSize: "11.5px", color: "#ffffff", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {activeService.imageAlt}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Comparison Matrix: Enhancement vs Correction vs Sealant vs Ceramic */}
      <div className="ip-card">
        <span className="ip-badge">OBJECTIVE COMPARISON</span>
        <h2 className="ip-heading">Enhancement vs. Correction · Sealant vs. Ceramic</h2>
        <p className="ip-subline">
          Transparent technical clarity without unsupported claims. Understand the realistic capabilities of each step.
        </p>

        <div className="ip-table-wrap">
          <table className="ip-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Paint Enhancement</th>
                <th>Paint Correction</th>
                <th>Synthetic Sealant</th>
                <th>Ceramic SiC Coating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Polishing Action</strong></td>
                <td>Single-stage dual-action polish</td>
                <td>Multi-stage rotary compound + jewel</td>
                <td>No polishing (surface protectant)</td>
                <td>Requires full prior correction</td>
              </tr>
              <tr>
                <td><strong>Defect Removal</strong></td>
                <td>50% – 60% light wash marring</td>
                <td>85% – 90%+ swirls &amp; etchings</td>
                <td>Fills microscopic voids temporarily</td>
                <td>Locks in corrected finish permanently</td>
              </tr>
              <tr>
                <td><strong>Clear Coat Removal</strong></td>
                <td>Extremely minimal (1-2 microns)</td>
                <td>Controlled &amp; measured (3-5 microns)</td>
                <td>Zero (additive layer)</td>
                <td>Zero (covalent bonding layer)</td>
              </tr>
              <tr>
                <td><strong>Durability / Lifespan</strong></td>
                <td>Surface finish lasts with proper wash</td>
                <td>Permanent until future scratches</td>
                <td>3 – 6 months typical</td>
                <td>Multi-year (verified per formula)</td>
              </tr>
              <tr>
                <td><strong>Chemical Defense</strong></td>
                <td>Standard factory clear coat level</td>
                <td>Pure clear coat exposed (needs sealant/coating)</td>
                <td>Mild detergents &amp; road grime</td>
                <td>pH 2 to pH 13 chemical resistance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Studio Facility & Craftsmanship Standards */}
      <div className="ip-card">
        <span className="ip-badge">STUDIO CLEANROOM ENVIRONMENT</span>
        <h2 className="ip-heading">Uncompromising Hand Craftsmanship</h2>
        <p className="ip-subline">
          Every vehicle is serviced inside our specialized cleanroom bays under 5500K multi-angle high-CRI inspection arrays.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "24px" }}>
          <div style={{ border: "1px solid var(--client-line)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ position: "relative", height: "240px" }}>
              <Image
                src="/images/studio-ppf-installation.jpg"
                alt="Detailer in official Mr. Detailer uniform applying Paint Protection Film"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "18px", background: "var(--client-surface-elevated)" }}>
              <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--client-lime)" }}>FLAGSHIP SERVICE</span>
              <h4 style={{ margin: "6px 0 4px", fontSize: "16px", color: "var(--client-ink)" }}>Paint Protection Film Installation</h4>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--client-muted)", lineHeight: 1.5 }}>
                Tension-relieved stretch, custom digital plotter cuts, and wrapped roll edges for invisible perimeter defense.
              </p>
            </div>
          </div>

          <div style={{ border: "1px solid var(--client-line)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ position: "relative", height: "240px" }}>
              <Image
                src="/images/studio-ppf-squeegee.jpg"
                alt="Precision slip solution squeegeeing under studio hex lighting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "18px", background: "var(--client-surface-elevated)" }}>
              <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--client-lime)" }}>PRECISION APPLICATION</span>
              <h4 style={{ margin: "6px 0 4px", fontSize: "16px", color: "var(--client-ink)" }}>Surface Extraction &amp; Bonding</h4>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--client-muted)", lineHeight: 1.5 }}>
                Filtered deionized slip extraction ensuring zero bubble retention, distortion-free optical clarity, and factory lines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Enquiry Path & Review */}
      <div className="ip-card" id="enquiry-form">
        <span className="ip-badge">ENQUIRY PREPARATION</span>
        <h2 className="ip-heading">Prepare Your Package Enquiry</h2>
        <p className="ip-subline">
          Review your chosen package and vehicle details before continuing directly to WhatsApp or studio scheduling.
        </p>

        <div className="ip-form-grid">
          <div className="ip-field">
            <label>Vehicle Make</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. Porsche, BMW, Mercedes"
              value={vehicleMake}
              onChange={e => setVehicleMake(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Vehicle Model / Year</label>
            <input
              type="text"
              className="ip-input"
              placeholder="e.g. 911 GT3 (2024)"
              value={vehicleModel}
              onChange={e => setVehicleModel(e.target.value)}
            />
          </div>
          <div className="ip-field">
            <label>Current Paint Condition</label>
            <select
              className="ip-select"
              value={paintCondition}
              onChange={e => setPaintCondition(e.target.value)}
            >
              <option value="Showroom / Brand New">Showroom / Brand New (Minimal defects)</option>
              <option value="Light Swirls">Light Swirls (Daily driven, minor haze)</option>
              <option value="Moderate Swirls">Moderate Swirls (Visible circular wash marks)</option>
              <option value="Heavy Defects">Heavy Defects (Scratches, oxidation, previous poor polish)</option>
            </select>
          </div>
        </div>

        {/* Live Review Box before sending */}
        <div className="ip-review-box">
          <div className="ip-review-item">
            <span className="ip-review-label">Selected Package:</span>
            <span className="ip-review-val">{activeService.name}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Vehicle:</span>
            <span className="ip-review-val">{vehicleMake || "Not specified"} {vehicleModel || ""}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Reported Paint Condition:</span>
            <span className="ip-review-val">{paintCondition}</span>
          </div>
          <div className="ip-review-item">
            <span className="ip-review-label">Estimated Studio Time:</span>
            <span className="ip-review-val">{activeService.timeEstimate}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "20px" }}>
          <a
            className="or-pill"
            href={`https://wa.me/919779397773?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppMark /> Review on WhatsApp <ArrowUpRight className="or-arrow-inline" />
          </a>
          <a className="or-pill" href={ohioPage("booking")}>
            Book Studio Assessment <ArrowRight className="or-arrow-inline" />
          </a>
        </div>
      </div>

      {/* Package FAQs */}
      <div className="ip-card">
        <span className="ip-badge">STUDIO QUESTIONS</span>
        <h2 className="ip-heading">Frequently Asked Questions</h2>
        <div className="ip-faq-list">
          {faqs.map((faq, idx) => (
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
