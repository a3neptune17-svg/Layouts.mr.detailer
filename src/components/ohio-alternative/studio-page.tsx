import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "../ohio/client-config";
import { ClientFooter } from "../ohio/client-footer";
import { StudioQuestions } from "./questions";
import { LocalVideo, WhatsAppMark } from "../ohio/rebuild-interactions";
import { namexVideo } from "../ohio/rebuild-data";
import { Booking } from "../ohio-3-1/booking";
import { contact, photo, questions, quoteUrl } from "./content";
import { Gallery } from "../ohio-3-1/gallery";
import { Navigation } from "./navigation";
import { Services } from "./services";
import { Shell } from "../ohio-3-1/shell";

export function StudioPage() {
  return (
    <Shell>
      <Navigation />
      <main className="o31-main" id="o31-main">
        <section className="o31-hero" aria-labelledby="o31-title">
          <Image
            className="o31-hero-image"
            src={photo("IMG_20260809_182226.jpg.jpeg")}
            alt="Mr. Detailer technician refining a black SUV in the studio"
            fill
            sizes="(max-width: 1023px) 100vw, calc(100vw - 224px)"
            preload
          />
          <div className="o31-hero-content">
            <div className="o31-hero-top">
              <p className="o31-eyebrow">MR. DETAILER / AUTOMOTIVE STUDIO</p>
              <a href="#o31-contact">
                Let’s talk <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="o31-hero-title">
              <p className="o31-eyebrow">
                <span className="o31-dot" /> THE BOSS OF DETAILERS
              </p>
              <h1 id="o31-title">
                Welcome back
                <br />
                to <em>perfection.</em>
              </h1>
              <div className="o31-hero-bottom">
                <p>
                  For the love of the drive.
                  <br />
                  For the detail in everything.
                </p>
                <a
                  className="o31-round-link"
                  href="#o31-gallery"
                  aria-label="Explore our work"
                >
                  ↘
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="o31-directions">
          {[
            ["01 / Paint Protection", "Invisible protection,", "maximum confidence.", "#o31-ppf"],
            [
              "02 / Coatings",
              "Ceramic / Borophene",
              "Graphene",
              "#o31-coatings",
            ],
            ["03 / Auto Mods", "DESIGN. BUILD.", "PERFECTED.", "#o31-mods"],
          ].map(([label, line1, line2, href]) => (
            <a key={href} href={href}>
              <p className="o31-eyebrow">{label}</p>
              <h2>
                {line1}
                <br />
                {line2}
              </h2>
              <span aria-hidden="true">↗</span>
              <small>{href === "#o31-coatings" ? "DEEP GLOSS, LONG-TERM PROTECTION" : href === "#o31-mods" ? "FROM LIGHTING UPGRADES TO PERFORMANCE TUNING" : "PAINT PROTECTION FILM"}</small>
            </a>
          ))}
        </div>
        <section
          className="o31-section o31-work"
          id="o31-gallery"
          aria-labelledby="o31-work-title"
        >
          <div className="o31-section-heading">
            <p className="o31-eyebrow">01 / Inside the studio</p>
            <h2 id="o31-work-title">
              Good work.
              <br />
              <span className="o31-muted">In every detail.</span>
            </h2>
            <div>
              <p>
                A closer look at the craft.
                <br />
                Real moments from our studio.
              </p>
              <a href="#o31-services" className="o31-text-link">
                Explore our services ↗
              </a>
            </div>
          </div>
          <Gallery />
        </section>
        <Services />
        <section className="oa-product-film"><div><p className="o31-eyebrow">STUDIO ESSENTIALS</p><h2>Care, considered.<br/><em>Every day.</em></h2><p>A closer look at the products behind the finish.</p></div><div className="oa-film"><LocalVideo src="/videos/productvideo.mp4" poster={photo("IMG_20260809_181254.jpg.jpeg")} label="MR. DETAILER product film"/></div></section>
        <section
          className="o31-section o31-approach"
          id="o31-story"
          aria-labelledby="o31-story-title"
        >
          <div className="o31-section-heading">
            <p className="o31-eyebrow">03 / Protection Science · Meet Our Team</p>
            <h2 id="o31-story-title">
              WE LISTEN. WE ASSESS.
              <br />
              <span className="o31-muted">WE CARE FOR THE DETAILS.</span>
            </h2>
            <p>
              Welcome back to perfection.
              <br />
              That’s the idea behind every detail.
            </p>
          </div>
          <div className="o31-approach-grid">
            <div className="o31-story-image">
              <Image
                src={photo("IMG_20260809_180252.jpg.jpeg")}
                alt="A Mr. Detailer team member fitting protection film in the studio"
                fill
                sizes="(max-width: 640px) 90vw, 35vw"
              />
              <span>BEHIND THE BRAND / MR. DETAILER</span>
            </div>
            <div className="o31-process">
              <p className="o31-story-copy">
                We bring protection, detailing and customisation into one
                conversation: what does your vehicle need, and how do you want
                it to feel?
              </p>
              {[
                [
                  "01",
                  "Understand",
                  "Your car, your routine, your expectations. Start with an assessment and a clear scope of work.",
                ],
                [
                  "02",
                  "Prepare & refine",
                  "Discuss surface preparation and correction before selecting the protection or finish.",
                ],
                [
                  "03",
                  "Protect & care",
                  "Agree the treatment, then leave with the applicable aftercare and maintenance instructions.",
                ],
              ].map(([num, title, text]) => (
                <div className="o31-process-row" key={num}>
                  <span className="o31-mini">{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="o31-values">
            <div>
              <p className="o31-eyebrow">Our vision</p>
              <p>
                Care that respects the car.
                <br />
                Detail that reflects its owner.
              </p>
            </div>
            <div>
              <p className="o31-eyebrow">Our mission</p>
              <p>
                Make protection and refinement
                <br />a considered part of every journey.
              </p>
            </div>
          </div>
        </section>
        <section
          className="o31-namex"
          id="o31-namex"
          aria-labelledby="o31-namex-title"
        >
          <div className="o31-namex-copy">
            <div className="client-namex-logo-wrap">
              <Image className="client-namex-logo client-namex-logo-dark" src={clientConfig.namexLogoDark} alt="NameX" width={220} height={83} />
              <Image className="client-namex-logo client-namex-logo-light" src={clientConfig.namexLogoLight} alt="NameX" width={220} height={83} />
            </div>
            <h2 id="o31-namex-title">
              ABOUT NAMEX
            </h2>
            <p>
              Know what protects your car. A beautiful finish deserves thoughtful protection. Explore NameX at Mr. Detailer.
            </p>
            {clientConfig.namexUrl && <a className="o31-text-link" href={clientConfig.namexUrl} target="_blank" rel="noopener noreferrer">Explore NameX ↗</a>}
          </div>
          <div className="o31-namex-image oa-film"><LocalVideo src={namexVideo} poster={photo("Picsart_26-09-02_15-33-19-009.jpg.jpeg")} label="NameX paint protection film video"/></div>
          <div className="o31-shop" id="o31-shop">
            <div className="o31-shop-header">
              <p className="o31-eyebrow">CURATED FOR EVERY CAR</p>
              <h2 className="o31-shop-heading">SHOP</h2>
              <p className="o31-shop-tagline">BRING STUDIO QUALITY HOME</p>
            </div>
            <div className="o31-shop-image-wrap">
              <Image src={clientConfig.shopImage} width={1000} height={667} alt="Pro Detail Kit with care products and accessories" className="o31-shop-img" />
            </div>
            <Link href="/ohio-preview/explore/shop" className="o31-shop-link">
              Explore Products &amp; Accessories ↗
            </Link>
          </div>
        </section>
        <section
          className="o31-section o31-paper"
          id="o31-warranty"
          aria-labelledby="o31-warranty-title"
        >
          <div className="o31-section-heading">
            <p className="o31-eyebrow">05 / Warranty hub</p>
            <h2 id="o31-warranty-title">
              Care continues.
              <br />
              Long after handover.
            </h2>
            <p>
              Product-specific terms apply.
              <br />
              Your studio can help with the details.
            </p>
          </div>
          <div className="o31-warranty-grid">
            {[
              [
                "01",
                "Check your warranty",
                "Keep your invoice and product details handy. Contact your installing studio to confirm coverage and terms.",
              ],
              [
                "02",
                "Maintenance schedule",
                "Ask for the care schedule that applies to your installed film or coating and your driving routine.",
              ],
              [
                "03",
                "Annual inspection",
                "Check whether your product requires an annual inspection and arrange a suitable visit with the studio.",
              ],
            ].map(([num, title, text]) => (
              <article key={num}>
                <span className="o31-mini">{num} / SUPPORT</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  className="o31-text-link"
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hello Mr. Detailer, I need help with: ${title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Speak to the studio ↗
                </a>
              </article>
            ))}
          </div>
          <p className="o31-small o31-warranty-note">
            Contact the studio with your invoice and product details to confirm applicable terms.
          </p>
        </section>
        <section
          className="o31-studio"
          id="o31-studio"
          aria-labelledby="o31-studio-title"
        >
          <p className="o31-eyebrow">06 / Own a Studio</p>
          <h2 id="o31-studio-title">
            Share our eye
            <br />
            for detail?
          </h2>
          <div>
            <p>
              Let’s talk about building the next
              <br />
              chapter of MR. DETAILER.
            </p>
            <a
              className="o31-button"
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Hello Mr. Detailer, I would like to enquire about owning a studio.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Own a Studio ↗
            </a>
          </div>
          <span className="o31-studio-arrow" aria-hidden="true">
            ↗
          </span>
        </section>
        <section
          className="o31-section o31-paper"
          id="o31-journal"
          aria-labelledby="o31-journal-title"
        >
          <div className="o31-section-heading">
            <p className="o31-eyebrow">07 / Blogs</p>
            <h2 id="o31-journal-title">
              A little knowledge.
              <br />A lot of care.
            </h2>
            <p>
              Detailing tips. Product guides.
              <br />
              Notes for your next studio visit.
            </p>
          </div>
          <StudioQuestions/><div className="o31-journal-grid">
            <article>
              <p className="o31-eyebrow">Detailing tips / Studio notes</p>
              <h3>A better aftercare conversation.</h3>
              <p>
                Before your first wash, ask about curing time, suitable products
                and the right cleaning method for your treatment. Keep your
                handover instructions within reach.
              </p>
              <a className="o31-text-link" href="#o31-faq">
                Read the care FAQs ↗
              </a>
            </article>
            <article>
              <p className="o31-eyebrow">Product guide / Studio notes</p>
              <h3>Choose the treatment around the car.</h3>
              <p>
                Bring photos, describe your usual parking and driving, and
                explain the finish you want. Ask the studio to compare film
                coverage, coating options and maintenance needs.
              </p>
              <a className="o31-text-link" href="#o31-services">
                Explore protection options ↗
              </a>
            </article>
            <article className="o31-journal-update">
              <p className="o31-eyebrow">Latest updates</p>
              <h3>
                From the
                <br />
                studio floor.
              </h3>
              <p>New studio stories are coming soon.</p>
              <a className="o31-text-link" href="#o31-gallery">
                View our work ↗
              </a>
            </article>
          </div>
        </section>
        <section
          className="o31-section o31-faq"
          id="o31-faq"
          aria-labelledby="o31-faq-title"
        >
          <div>
            <p className="o31-eyebrow">A few things to know</p>
            <h2 id="o31-faq-title">
              Good questions.
              <br />
              Clear answers.
            </h2>
          </div>
          <div>
            {questions.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section
          className="o31-section o31-contact"
          id="o31-contact"
          aria-labelledby="o31-contact-title"
        >
          <div>
            <p className="o31-eyebrow">08 / Connect</p>
            <h2 id="o31-contact-title">
              Your next
              <br />
              chapter.
              <br />
              <em>Let’s talk.</em>
            </h2>
            <a
              className="o31-text-link"
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppMark/> <span>DROP US A LINE</span> ↗
            </a>
            <dl className="o31-contact-details">
              <div>
                <dt>Call</dt>
                <dd>
                  <a href={clientConfig.telephone}>{clientConfig.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Visit us</dt>
                <dd>
                  {clientConfig.location || "Contact us for the studio location."}
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${clientConfig.email}`}>{clientConfig.email}</a></dd>
              </div>
            </dl>
          </div>
          <div className="o31-booking-panel">
            <p className="o31-eyebrow">BOOK A STUDIO INSPECTION</p>
            <h3>We would love to hear from you.</h3>
            <Booking />
          </div>
        </section>
        <ClientFooter/>
      </main>
    </Shell>
  );
}
