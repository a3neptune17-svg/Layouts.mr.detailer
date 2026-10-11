import Image from "next/image";
import { clientConfig, ohioPage } from "./client-config";
import { whatsapp } from "./rebuild-data";
import "./client-refinements.css";

export function ClientFooter() {
  return (
    <footer className="client-footer">
      <div className="client-footer-grid">
        <a href="/ohio-preview" className="client-footer-logo-link" aria-label="MR. DETAILER home">
          <Image
            src={clientConfig.detailerLogoDark}
            alt="MR. DETAILER"
            width={200}
            height={156}
            className="client-footer-logo client-logo-dark"
          />
          <Image
            src={clientConfig.detailerLogoLight}
            alt="MR. DETAILER"
            width={200}
            height={156}
            className="client-footer-logo client-logo-light"
          />
        </a>
        <div>
          <h3>Contact</h3>
          <a href={clientConfig.telephone}>{clientConfig.phone}</a>
          <a href={`mailto:${clientConfig.email}`}>{clientConfig.email}</a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            DROP US A LINE ↗
          </a>
        </div>
        <div>
          <h3>Studio Inspection</h3>
          <p>{clientConfig.location || "We would love to hear from you."}</p>
          <a href={ohioPage("booking")}>BOOK A STUDIO INSPECTION ↗</a>
        </div>
        <div>
          <h3>Own a Studio</h3>
          <p>Tell us about your location and your plans.</p>
          <a href={ohioPage("own-a-studio")}>Start a conversation ↗</a>
        </div>
      </div>
      <div className="client-footer-bottom">
        <span>All rights reserved</span>
        <nav aria-label="Footer legal">
          <a href={ohioPage("own-a-studio")}>Franchise</a>
          <a href={ohioPage("privacy")}>Privacy Policy</a>
          <a href={ohioPage("cookies")}>Cookie Policy</a>
          <a href={ohioPage("terms")}>Terms of Service</a>
        </nav>
        <a href="/ohio-preview/second">Preview 2 ↗</a>
      </div>
    </footer>
  );
}
