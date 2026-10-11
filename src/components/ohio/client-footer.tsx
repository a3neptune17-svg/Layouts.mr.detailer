import Image from "next/image";
import { clientConfig, ohioPage } from "./client-config";
import { whatsapp } from "./rebuild-data";
import "./client-refinements.css";

export function ClientFooter() {
  return <footer className="client-footer">
    <div className="client-footer-grid">
      <a href="/ohio-preview" className="client-logo" aria-label="Mr. Detailer home"><Image src={clientConfig.detailerLogo} alt="Mr. Detailer" width={210} height={160}/></a>
      <div><h3>Contact</h3><a href={clientConfig.telephone}>{clientConfig.phone}</a><a href={`mailto:${clientConfig.email}`}>{clientConfig.email}</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">Drop us a line ↗</a></div>
      <div><h3>Visit the studio</h3><p>{clientConfig.location || "Contact us for the studio location and visiting hours."}</p><a href={ohioPage("booking")}>Book a studio inspection ↗</a></div>
      <div><h3>Own a Studio</h3><p>Tell us about your location and your plans.</p><a href={ohioPage("own-a-studio")}>Start a conversation ↗</a></div>
    </div>
    <div className="client-footer-bottom"><span>All rights reserved</span><nav aria-label="Footer"><a href={ohioPage("own-a-studio")}>Franchise</a><a href={ohioPage("privacy")}>Privacy Policy</a><a href={ohioPage("cookies")}>Cookie Policy</a><a href={ohioPage("terms")}>Terms of Service</a></nav><a href="/ohio-preview/second">Preview 2 ↗</a></div>
  </footer>;
}
