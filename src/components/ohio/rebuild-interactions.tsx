"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { imagePath, projects, studioQuestions, videoSlots, whatsapp } from "./rebuild-data";

import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, FourLinesMenuIcon, WhatsAppMark } from "./icons";
export { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, FourLinesMenuIcon, WhatsAppMark };

export interface NavItem {
  label: string;
  href: string;
  tagline: string;
  children: [string, string][];
}

export const navigation: NavItem[] = [
  {
    label: "HOME",
    href: "#home",
    tagline: "Studio Overview & Craft",
    children: [
      ["Overview", "#home"],
      ["About Us", "#process"],
      ["Our Process", "#process"],
      ["Gallery", "#work"],
    ],
  },
  {
    label: "OUR SERVICES",
    href: "#services",
    tagline: "Precision Surface Treatments",
    children: [
      ["Coating", "#coatings"],
      ["PPF", "#ppf"],
      ["Detailing Packages", "#detailing"],
      ["Auto Mods", "#auto-mods"],
      ["Car Care Packages", "#car-care"],
    ],
  },
  {
    label: "SHOP",
    href: "#shop",
    tagline: "Curated Studio Products & Kits",
    children: [
      ["Exterior Care", "#shop"],
      ["Interior Care", "#shop"],
      ["Accessories", "#shop"],
      ["Detailing Kits", "#shop"],
      ["Product Guide", "#shop"],
    ],
  },
  {
    label: "WARRANTY HUB",
    href: "#warranty",
    tagline: "Long-term Vehicle Assurance",
    children: [
      ["Check Your Warranty", "#warranty"],
      ["Maintenance Schedule", "#warranty"],
      ["Annual Inspection", "#warranty"],
    ],
  },
  {
    label: "OWN A STUDIO",
    href: "#join",
    tagline: "Partnership & Expansion",
    children: [
      ["Partner With Us", "#join"],
      ["Studio Opportunity", "#join"],
    ],
  },
  {
    label: "JOURNAL",
    href: "#blog",
    tagline: "Detailing Tips & Guides",
    children: [
      ["Detailing Tips", "#blog"],
      ["Product Guide", "#shop"],
      ["Latest Updates", "#latest-updates"],
    ],
  },
  {
    label: "CONNECT",
    href: "#connect",
    tagline: "Reach Mr. Detailer Directly",
    children: [
      ["Book an Appointment", "#connect"],
      ["Call Us", "tel:+919779397773"],
      ["WhatsApp", "https://wa.me/919779397773"],
      ["Email", "mailto:studio@mrdetailer.in"],
      ["Visiting Us", "#connect"],
      ["Working Hours", "#connect"],
    ],
  },
];

function goToSection(event: React.MouseEvent<HTMLAnchorElement>, close?: () => void) {
  if (event.defaultPrevented) {
    close?.();
    return;
  }
  const href = event.currentTarget.getAttribute("href");
  if (!href) return;
  if (!href.startsWith("#")) {
    close?.();
    return; // Allow direct navigation for external links (tel, mailto, wa)
  }
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  event.preventDefault();
  revealTarget(target);
  close?.();
  requestAnimationFrame(() => {
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  });
  history.replaceState(null, "", href);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}

function revealTarget(target: HTMLElement) {
  const panel = target.closest("dialog");
  if (panel instanceof HTMLDialogElement && !panel.open) {
    panel.showModal();
  }
  if (target instanceof HTMLDetailsElement) target.open = true;
}

function Navigation({
  close,
  active,
  isMainMenuOpen,
  closeMainMenu,
}: {
  close?: () => void;
  active?: string;
  isMainMenuOpen?: boolean;
  closeMainMenu?: () => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [closingItem, setClosingItem] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close rail hover popup if main menu is opened
  useEffect(() => {
    if (isMainMenuOpen) {
      setHovered(null);
      setClosingItem(null);
    }
  }, [isMainMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isMainMenuOpen) {
      closeMainMenu?.();
    }
    setClosingItem(null);
    setHovered(label);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setClosingItem(hovered);
      setTimeout(() => {
        setHovered(null);
        setClosingItem(null);
      }, 200);
    }, 280);
  };

  const handlePopupEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setClosingItem(null);
  };

  return (
    <nav className="or-rail-nav" aria-label={close ? "Expanded navigation" : "Primary navigation"}>
      {navigation.map((item, index) => {
        const isHovered = !isMainMenuOpen && (hovered === item.label || closingItem === item.label);
        const isClosing = closingItem === item.label;

        return (
          <div
            className={`or-nav-row${isHovered ? " is-hovered" : ""}`}
            key={item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.href}
              className="or-nav-link"
              aria-current={active === item.href ? "location" : undefined}
              aria-expanded={isHovered}
              onClick={(event) => goToSection(event, close)}
            >
              <span className="or-nav-label">{item.label}</span>
              <span className="or-nav-accent-bar" aria-hidden="true" />
            </a>

            {/* Hover popup for this navigation item on desktop — Mini replica of Ohio menu */}
            {isHovered && (
              <aside
                className={`or-nav-hover-popup${isClosing ? " is-closing" : ""}`}
                aria-label={`${item.label} sub-options`}
                onMouseEnter={handlePopupEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="or-nav-popup-header">
                  <div className="or-nav-popup-title-row">
                    <span className="or-nav-popup-num">0{index + 1}</span>
                    <span className="or-nav-popup-heading">{item.label}</span>
                  </div>
                  <p className="or-nav-popup-tagline">{item.tagline}</p>
                </div>
                <div className="or-nav-popup-items">
                  {item.children.map(([subLabel, subHref], subIdx) => (
                    <a
                      key={subLabel}
                      href={subHref}
                      className="or-nav-popup-item"
                      onClick={(e) => {
                        setHovered(null);
                        goToSection(e, close);
                      }}
                      target={subHref.startsWith("http") ? "_blank" : undefined}
                      rel={subHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <span className="or-nav-popup-item-num">0{subIdx + 1}</span>
                      <span className="or-nav-popup-item-label">{subLabel}</span>
                      <ArrowUpRight className="or-nav-popup-arrow" />
                    </a>
                  ))}
                </div>
              </aside>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export function RebuildNavigation({ previewOne = false }: { previewOne?: boolean }) {
  const popupRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [hoveredMenuRow, setHoveredMenuRow] = useState<string | null>(null);
  const [active, setActive] = useState("#home");

  // Open with smooth entrance
  const openMenu = (pinned = false) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setClosing(false);
    setMenuOpen(true);
    if (pinned) setIsPinned(true);
  };

  // Close with smooth exit transition
  const closeMenu = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setIsPinned(false);
    setClosing(true);
    hoverTimer.current = setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 220);
  };

  // Toggle button click: ALWAYS reliably opens and pins or closes
  const handleToggleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hoverTimer.current) clearTimeout(hoverTimer.current);

    if (menuOpen && isPinned) {
      closeMenu();
    } else {
      setClosing(false);
      setMenuOpen(true);
      setIsPinned(true);
    }
  };

  const handleMouseEnter = () => {
    // On desktop, hovering over menu trigger area peeks the menu open
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      setClosing(false);
      setMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    // If user clicked the button (pinned), do NOT auto-close on mouse leave!
    if (isPinned) return;
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        closeMenu();
      }, 320);
    }
  };

  const handlePopupEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const handlePopupLeave = () => {
    if (isPinned) return;
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        closeMenu();
      }, 320);
    }
  };

  // Close on Escape or click outside
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!menuOpen) return;
      const target = e.target as HTMLElement | null;
      if (!target?.closest(".or-menu-popup, .or-menu-toggle, .or-brand-row")) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  // Active section scroll tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "work", "process", "car-care-photo", "services", "blog", "resources", "connect"];
    const sectionMap: Record<string, string> = {
      home: "#home",
      work: "#work",
      process: "#process",
      "car-care-photo": "#services",
      services: "#services",
      blog: "#blog",
      resources: "#blog",
      connect: "#connect",
    };

    const observers: IntersectionObserver[] = [];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const mapped = sectionMap[entry.target.id] || `#${entry.target.id}`;
              setActive(mapped);
              entry.target.classList.add("or-section-active");
            } else {
              entry.target.classList.remove("or-section-active");
            }
          }
        },
        { rootMargin: "-20% 0px -50% 0px", threshold: 0.15 }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    }

    const revealHash = () => {
      if (location.hash) {
        setActive(location.hash);
        const target = document.getElementById(location.hash.slice(1));
        if (target) revealTarget(target);
      }
    };

    window.addEventListener("hashchange", revealHash);
    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("hashchange", revealHash);
    };
  }, []);

  return (
    <>
      <header className="or-rail">
        <div
          className="or-brand-row"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="or-round or-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="ohio-menu-panel"
            onClick={handleToggleClick}
          >
            <FourLinesMenuIcon className="or-menu-icon" isOpen={menuOpen} />
          </button>
          <a className="or-brand" href="#home" aria-label="MR. DETAILER home">
            MR.
            <br />
            DETAILER<span>THE BOSS OF DETAILERS</span>
          </a>
        </div>

        <Navigation
          active={active}
          isMainMenuOpen={menuOpen}
          closeMainMenu={closeMenu}
        />

        <a
          className="or-pill or-lime or-rail-quote"
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact MR. DETAILER on WhatsApp"
        >
          <WhatsAppMark />
          <ArrowUpRight className="or-arrow" />
        </a>
      </header>

      {/* Compact Ohio-inspired Menu Hover & Tap Popup Panel */}
      {(menuOpen || closing) && (
        <aside
          id="ohio-menu-panel"
          ref={popupRef}
          className={`or-menu-popup${menuOpen && !closing ? " is-visible" : ""}${closing ? " is-closing" : ""}`}
          aria-label="MR. DETAILER navigation menu"
          onMouseEnter={handlePopupEnter}
          onMouseLeave={handlePopupLeave}
        >
          <div className="or-menu-popup-top">
            <div className="or-menu-popup-header">
              <span className="or-menu-popup-tag">MR. DETAILER · NAVIGATION</span>
            </div>
            <button
              className="or-round or-menu-popup-close"
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              ×
            </button>
          </div>

          <nav className="or-menu-popup-nav" aria-label="Site navigation menu">
            {navigation.map((item, index) => (
              <div
                className={`or-popup-row${hoveredMenuRow === item.label ? " is-hovered" : ""}`}
                key={item.label}
                onMouseEnter={() => setHoveredMenuRow(item.label)}
                onMouseLeave={() => setHoveredMenuRow(null)}
              >
                <div className="or-popup-row-main">
                  <span className="or-popup-number">{String(index + 1).padStart(2, "0")}</span>
                  <a
                    href={item.href}
                    className="or-popup-link"
                    aria-current={active === item.href ? "location" : undefined}
                    onClick={(e) => goToSection(e, closeMenu)}
                  >
                    {item.label}
                  </a>
                  {item.children.length > 0 && (
                    <span className="or-popup-hover-badge" aria-hidden="true">
                      {item.children.length} options ▾
                    </span>
                  )}
                </div>
                {item.children.length > 0 && (
                  <div
                    className={`or-popup-sub-items${hoveredMenuRow === item.label ? " is-expanded" : ""}`}
                    aria-label={`${item.label} submenu`}
                  >
                    {item.children.map(([subLabel, subHref], subIdx) => (
                      <a
                        key={subLabel}
                        href={subHref}
                        className="or-popup-sub-link"
                        onClick={(e) => goToSection(e, closeMenu)}
                        target={subHref.startsWith("http") ? "_blank" : undefined}
                        rel={subHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <span className="or-popup-sub-num">0{subIdx + 1}</span>
                        <span className="or-popup-sub-text">{subLabel}</span>
                        <ArrowUpRight className="or-sub-arrow" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="or-menu-popup-footer">
            <div className="or-popup-contact-item">
              <strong>Studio Phone</strong>
              <a href="tel:+919779397773">+91 97793 97773</a>
            </div>
            <div className="or-popup-contact-item">
              <strong>WhatsApp Direct</strong>
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppMark /> WhatsApp <ArrowUpRight className="or-inline-arrow" />
              </a>
            </div>
            <div className="or-popup-contact-item">
              <strong>Studio Location</strong>
              <p>SCF 1, Sarabha Nagar, Ludhiana</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export function RebuildInfo({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <dialog
      id="service-details"
      ref={dialog}
      className="or-dialog or-info-dialog"
      aria-label="Services and studio information"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <div className="or-dialog-top">
        <span>MR. DETAILER · Services &amp; studio</span>
        <button className="or-round" aria-label="Close studio information" onClick={() => dialog.current?.close()}>
          ×
        </button>
      </div>
      {children}
    </dialog>
  );
}

export function RebuildGallery({ intro, previewOne = false }: { intro: ReactNode; previewOne?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const active = projects[index];
  const change = (direction: number) =>
    setIndex((current) => (current + direction + projects.length) % projects.length);

  return (
    <section id="work" className="or-projects" aria-label="Our work">
      {intro}
      {projects.map((project, position) => (
        <div key={project.title} className={`or-project or-project-${position}`}>
          {project.video ? (
            <LocalVideo src={project.video} poster={imagePath(project.image)} label={project.alt} />
          ) : (
            <Image
              src={imagePath(project.image)}
              alt={project.alt}
              fill
              sizes={
                position === 3
                  ? "(max-width:1180px) 100vw, 80vw"
                  : "(max-width:768px) 100vw, (max-width:1180px) 66vw, 55vw"
              }
            />
          )}
          <button
            className="or-project-hit"
            aria-label={`View ${project.title}`}
            onClick={() => {
              setIndex(position);
              setGalleryOpen(true);
              dialog.current?.showModal();
            }}
          >
            <span className="or-project-open" aria-hidden="true">
              <ArrowUpRight className="or-arrow" />
            </span>
          </button>
          <span className="or-project-caption">
            <strong>{project.title}</strong>
            <span>{project.category}</span>
          </span>
        </div>
      ))}
      <dialog
        ref={dialog}
        className="or-dialog or-lightbox"
        aria-label="Studio image gallery"
        onClose={() => setGalleryOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") change(1);
          if (event.key === "ArrowLeft") change(-1);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="or-dialog-top">
          <span aria-live="polite">
            {index + 1} / {projects.length} — {active.title}
          </span>
          <button className="or-round" aria-label="Close gallery" onClick={() => dialog.current?.close()}>
            ×
          </button>
        </div>
        {galleryOpen &&
          (active.video ? (
            <div className="or-lightbox-image">
              <video src={active.video} controls playsInline preload="none" aria-label={active.alt} />
            </div>
          ) : (
            <div className="or-lightbox-image">
              <Image src={imagePath(active.image)} alt={active.alt} fill sizes="90vw" />
            </div>
          ))}
        <div className="or-gallery-controls">
          <button className="or-pill" onClick={() => change(-1)} aria-label="Previous image">
            <ArrowLeft className="or-arrow-inline" /> Previous
          </button>
          <span>{active.category}</span>
          <button className="or-pill" onClick={() => change(1)} aria-label="Next image">
            Next <ArrowRight className="or-arrow-inline" />
          </button>
        </div>
      </dialog>
    </section>
  );
}

export function LocalVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
        if (!entry.isIntersecting) video.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !visible) return;
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.pause();
    else void video.play().catch(() => {});
  }, [visible, loaded, paused]);

  return (
    <>
      <video
        ref={ref}
        src={loaded ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
      />
      <span className="or-media-state" aria-hidden="true">
        {paused ? "PAUSED" : "FILM"}
      </span>
      <button
        className="or-media-toggle"
        aria-label={`${paused ? "Resume" : "Pause"} ${label.includes("NameX") ? "NameX video" : "product video"}`}
        onClick={() => setPaused((current) => !current)}
      >
        {paused ? "▶" : "Ⅱ"}
      </button>
    </>
  );
}

export function RebuildStory() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = studioQuestions[index];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % studioQuestions.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="or-story or-image-band" id="blog" aria-label="Blogs — rotating questions and answers">
      <Image
        src={imagePath("IMG_20260809_180906.jpg.jpeg")}
        alt="Precision protection film application at MR. DETAILER"
        fill
        sizes="(max-width:1180px) 100vw, 80vw"
      />
      <div className="or-story-card or-lime">
        <span className="or-tag">BLOGS</span>
        <div key={index} className="or-qa-copy">
          <p className="or-eyebrow">Detailing Tips · Product Guide · Latest Updates</p>
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
        </div>
        <div className="or-story-controls">
          <button
            className="or-round"
            aria-label="Previous question"
            onClick={() => setIndex((current) => (current + studioQuestions.length - 1) % studioQuestions.length)}
          >
            <ArrowLeft className="or-arrow" />
          </button>
          <span>
            {index + 1} / {studioQuestions.length}
          </span>
          <button
            className="or-round"
            aria-label="Next question"
            onClick={() => setIndex((current) => (current + 1) % studioQuestions.length)}
          >
            <ArrowRight className="or-arrow" />
          </button>
          <button
            className="or-round"
            aria-label={paused ? "Resume questions" : "Pause questions"}
            onClick={() => setPaused((current) => !current)}
          >
            {paused ? "▶" : "Ⅱ"}
          </button>
        </div>
      </div>
    </section>
  );
}

export function VideoPlaceholders({ previewOne = false }: { previewOne?: boolean }) {
  return (
    <section className="or-resources or-thirds or-video-slots" id="resources" aria-label="Studio journal articles">
      {videoSlots.map((slot, index) => (
        <article className="or-video-slot or-journal-card" key={slot.title} id={index === 1 ? "product-guide" : undefined}>
          <Image src={imagePath(slot.image)} alt={slot.alt} fill sizes="(max-width:768px) 100vw, 33vw" />
          <div className="or-video-slot-copy">
            <p className="or-eyebrow">MR. DETAILER · STUDIO JOURNAL</p>
            <h2>{slot.title}</h2>
            <div className="or-journal-action">
              <span>Read Journal</span>
              <ArrowUpRight className="or-arrow" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
