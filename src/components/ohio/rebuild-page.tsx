"use client";

import { useState } from "react";
import Image from "next/image";
import { clientConfig, ohioPage } from "./client-config";
import { ClientFooter } from "./client-footer";
import { ThemeControl } from "./theme-control";
import { imagePath, processSteps, serviceGroups, whatsapp } from "./rebuild-data";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "./icons";
import {
  RebuildGallery,
  RebuildInfo,
  RebuildNavigation,
  RebuildStory,
  VideoPlaceholders,
} from "./rebuild-interactions";

function SectionIntro({ label, title, href, action }: { label: string; title: React.ReactNode; href: string; action: string }) {
  return (
    <div className="or-intro">
      <p className="or-eyebrow">{label}</p>
      <div>
        <h2>{title}</h2>
        <a className="or-pill" href={href}>
          {action} <ArrowRight className="or-arrow-inline" />
        </a>
      </div>
    </div>
  );
}

export function RebuildPage({ previewOne = false }: { previewOne?: boolean }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div className={`ohio-rebuild${previewOne ? " or-preview-one" : ""}`} data-theme={theme} id="home">
      <ThemeControl theme={theme} setTheme={setTheme} />
      <a className="or-skip" href="#main">
        Skip to content
      </a>
      <RebuildNavigation />

      <main className="or-main" id="main">
        <section className="or-hero" id="hero" aria-label="MR. DETAILER studio">
          <div className="or-preview-selector">
            <span>OHIO — PREVIEW 1</span>
            <a href="/ohio-preview/second">
              View Second Ohio Preview <ArrowUpRight className="or-arrow-inline" />
            </a>
          </div>
          <Image
            className="or-hero-image"
            src={imagePath("IMG_20260809_182226.jpg.jpeg")}
            alt="MR. DETAILER technician polishing a vehicle under the studio lights"
            fill
            sizes="100vw"
            priority
          />
          <div className="or-hero-panels">
            <a className="or-hero-panel" href={ohioPage("ppf")}>
              <p>PROTECTION</p>
              <h1>Paint Protection Film</h1>
              <p className="or-product-line">{clientConfig.ppfProducts.join(" · ")}</p>
              <strong className="or-panel-subline">INVISIBLE PROTECTION, MAXIMUM CONFIDENCE.</strong>
              <span className="or-round" aria-hidden="true">
                <ArrowUpRight className="or-arrow" />
              </span>
            </a>
            <a className="or-hero-panel" href={ohioPage("coatings")}>
              <p>SURFACE CARE</p>
              <h2>Coatings</h2>
              <p className="or-product-line">Ceramic · Borophene · Graphene</p>
              <strong className="or-panel-subline">DEEP GLOSS, LONG-TERM PROTECTION</strong>
              <span className="or-round" aria-hidden="true">
                <ArrowUpRight className="or-arrow" />
              </span>
            </a>
            <a className="or-hero-panel or-lime" href={ohioPage("auto-mods")}>
              <p>AUTO MODS</p>
              <h2>
                DESIGN. BUILD.
                <br />
                PERFECTED.
              </h2>
              <strong className="or-panel-subline">FROM LIGHTING UPGRADES TO PERFORMANCE TUNING</strong>
              <span className="or-round" aria-hidden="true">
                <ArrowUpRight className="or-arrow" />
              </span>
            </a>
          </div>
        </section>

        <RebuildGallery
          previewOne={previewOne}
          intro={
            <div className="or-intro or-namex-intro">
              <h2>ABOUT NAMEX</h2>
              <div>
                <Image className="client-namex-logo" src={clientConfig.namexLogo} alt="NameX" width={240} height={130}/>
                <p className="or-intro-copy">Know what protects your car. A beautiful finish deserves thoughtful protection. Explore NameX at Mr. Detailer.</p>
                {clientConfig.namexUrl && <a className="or-pill" href={clientConfig.namexUrl} target="_blank" rel="noopener noreferrer">Explore NameX <ArrowRight className="or-arrow-inline"/></a>}
              </div>
            </div>
          }
        />

        <section className="or-approach or-thirds" id="process">
          <SectionIntro
            label="Protection Science · Meet Our Team"
            title={
              <>
                WE LISTEN. WE ASSESS.
                <br />
                WE CARE FOR THE DETAILS.
              </>
            }
            href={ohioPage("meet-the-team")}
            action="Meet Our Team"
          />
          <div className="or-accordions">
            {processSteps.map(([title, first, second], index) => (
              <details key={title} name="or-process" open={index === 0}>
                <summary>{title}</summary>
                <div className="or-process-copy">
                  <p>{first}</p>
                  <p>{second}</p>
                  <span className="or-eyebrow">
                    Step {String(index + 1).padStart(2, "0")} / 07
                  </span>
                  <div className="or-progress" aria-hidden="true">
                    <span style={{ width: `${((index + 1) / 7) * 100}%` }} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="or-image-band or-counter-band" id="car-care-photo" aria-label="Car Care Package">
          <Image
            src={imagePath("IMG_20260809_180638.jpg.jpeg")}
            alt="Careful application of protection film to a vehicle window"
            fill
            sizes="(max-width:1180px) 100vw, 80vw"
          />
          <div className="or-counters or-lime or-care-caption">
            <p className="or-eyebrow">CAR CARE PACKAGE</p>
            <h2>
              Care for every
              <br />
              surface.
            </h2>
            <a className="or-care-link" href={ohioPage("car-care")}>
              Explore Car Care <ArrowUpRight className="or-inline-arrow" />
            </a>
          </div>
        </section>

        <section className="or-services or-thirds" id="services">
          <SectionIntro
            label="WARRANTY"
            title={
              <>
                Care continues
                <br />
                beyond the studio.
              </>
            }
            href={ohioPage("warranty")}
            action="Warranty Hub"
          />
          <div className="or-service-panel">
            <p className="or-eyebrow">OWN A STUDIO</p>
            <h2>
              The next chapter.
              <br />
              Your studio.
            </h2>
            <a className="or-round" href={ohioPage("own-a-studio")} aria-label="Own a Studio">
              <ArrowUpRight className="or-arrow" />
            </a>
            <ul>
              <li>
                <a href={ohioPage("own-a-studio")}>– Share your location</a>
              </li>
              <li>
                <a href={ohioPage("own-a-studio")}>– Tell us your plans</a>
              </li>
              <li>
                <a href={ohioPage("own-a-studio")}>– Meet the team</a>
              </li>
            </ul>
          </div>
          <div className="or-service-panel or-lime">
            <p className="or-eyebrow">CUSTOMIZATION</p>
            <h2>
              YOUR CAR.
              <br />
              YOUR SIGNATURE.
            </h2>
            <p>YOUR STYLE. YOUR CHOICE.</p>
            <a className="or-round" href={ohioPage("auto-mods")} aria-label="Explore customization">
              <ArrowUpRight className="or-arrow" />
            </a>
            <ul>
              <li>
                <a href={ohioPage("auto-mods")}>– Denting &amp; Painting</a>
              </li>
              <li>
                <a href={ohioPage("auto-mods")}>– Car Tuning</a>
              </li>
              <li>
                <a href={ohioPage("auto-mods")}>– Accessories &amp; Body Kits</a>
              </li>
            </ul>
          </div>
        </section>

        <RebuildStory />

        <VideoPlaceholders />

        <RebuildInfo>
          <div className="or-details-section">
            <div className="or-detail-heading">
              <p className="or-eyebrow">Explore MR. DETAILER</p>
              <h2>
                Your vehicle.
                <br />
                Your next step.
              </h2>
            </div>
            <div className="or-detail-list">
              {serviceGroups.map((group) => (
                <details id={group.id} key={group.id}>
                  <summary>{group.title}</summary>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="or-text-link"
                    href={`${whatsapp}?text=${encodeURIComponent(`Hello MR. DETAILER, I would like to enquire about ${group.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss {group.title} on WhatsApp <ArrowUpRight className="or-inline-arrow" />
                  </a>
                </details>
              ))}
              <details id="namex">
                <summary>About NameX</summary>
                <div className="or-namex">
                  <Image
                    src={clientConfig.namexLogo}
                    alt="NameX"
                    width={440}
                    height={440}
                  />
                  <div>
                    <h3>ABOUT NAMEX</h3>
                    <p>
                      Explore NameX with the studio team. Ask about available film options, installation and
                      product-specific care.
                    </p>
                    <a href={whatsapp} target="_blank" rel="noreferrer">
                      Enquire about NameX <ArrowUpRight className="or-inline-arrow" />
                    </a>
                  </div>
                </div>
              </details>
              <details id="shop">
                <summary>Shop / Product enquiries</summary>
                <p>
                  Explore Exterior Care, Interior Care, Accessories and Detailing Kits with the studio. Confirm
                  suitability, availability and pricing before ordering.
                </p>
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  Ask about products <ArrowUpRight className="or-inline-arrow" />
                </a>
              </details>
              <details id="warranty">
                <summary>Warranty Hub</summary>
                <p>Check Your Warranty · Maintenance Schedule · Annual Inspection</p>
                <p>
                  Contact the studio with your service invoice and product details. The team can help confirm
                  applicable terms and the care schedule for your treatment.
                </p>
                <a
                  href={`${whatsapp}?text=Hello%20MR.%20DETAILER%2C%20I%20need%20help%20with%20my%20warranty.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact the Warranty Hub <ArrowUpRight className="or-inline-arrow" />
                </a>
              </details>
              <details id="join">
                <summary>Own a Studio</summary>
                <p>
                  Interested in owning a MR. DETAILER studio or partnering with us? Tell us about yourself, your location and
                  your plans.
                </p>
                <a
                  href={`${whatsapp}?text=Hello%20MR.%20DETAILER%2C%20I%20would%20like%20to%20enquire%20about%20owning%20a%20studio.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Start a conversation <ArrowUpRight className="or-inline-arrow" />
                </a>
              </details>
              <details id="latest-updates">
                <summary>Latest Updates</summary>
                <p>Contact the studio for current availability, product information and studio updates.</p>
              </details>
              <details id="faqs">
                <summary>Frequently asked questions</summary>
                <h3>How do I choose a service?</h3>
                <p>
                  Tell the studio about your vehicle, its condition and your priorities. An inspection can help define
                  the right scope.
                </p>
                <h3>What does it cost?</h3>
                <p>Request a quote for your vehicle and selected treatment. Prices are confirmed by the studio.</p>
                <h3>What warranty is included?</h3>
                <p>Terms depend on the selected product and service. Ask for written details before booking.</p>
              </details>
            </div>
          </div>
        </RebuildInfo>

        <section className="or-contact" id="connect">
          <p>
            We would love to hear from you.
          </p>
          <h2>
            BOOK A STUDIO
            <br />
            INSPECTION
          </h2>
          <a
            className="or-pill or-lime"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact MR. DETAILER on WhatsApp"
          >
            <WhatsAppMark /> DROP US A LINE <ArrowUpRight className="or-arrow" />
          </a>
        </section>

        <ClientFooter />
      </main>
    </div>
  );
}
