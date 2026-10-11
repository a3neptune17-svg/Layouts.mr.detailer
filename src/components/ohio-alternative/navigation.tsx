"use client";

import Image from "next/image";
import { navigation as clientNavigation, FourLinesMenuIcon, WhatsAppMark } from "../ohio/rebuild-interactions";
import { useRef, useState } from "react";
import { quoteUrl } from "./content";

export function Navigation() {
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  function close() {
    menu.current?.close();
  }
  const links = clientNavigation.map((item, index) => (
    <div className="oa-nav-group" key={item.label} onMouseEnter={() => setExpanded(item.label)} onMouseLeave={() => setExpanded(null)} onFocus={() => setExpanded(item.label)}>
      <div className="oa-nav-main">
        <a href={item.href} onClick={close}>
          <span>0{index + 1}</span>{item.label}
        </a>
        {item.children.length > 0 && (
          <button
            type="button"
            className="oa-nav-expand-btn"
            aria-label={`Expand ${item.label}`}
            aria-expanded={expanded === item.label}
            onClick={() => setExpanded(current => current === item.label ? null : item.label)}
          >
            +
          </button>
        )}
      </div>
      {expanded === item.label && <div className="oa-nav-submenu">{item.children.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}</div>}
    </div>
  ));
  return (
    <>
      <a className="o31-skip" href="#o31-main">
        Skip to content
      </a>
      <header className="o31-rail">
        <a href="#o31-home" className="o31-logo oa-brand-logo-link" aria-label="MR. DETAILER home">
          <Image
            src="/images/mrdetailer-logo-dark.png"
            alt="MR. DETAILER"
            width={100}
            height={78}
            className="oa-brand-logo oa-brand-logo-dark"
            priority
          />
          <Image
            src="/images/mrdetailer-logo-light.png"
            alt="MR. DETAILER"
            width={100}
            height={78}
            className="oa-brand-logo oa-brand-logo-light"
            priority
          />
        </a>
        
        <nav aria-label="Main navigation" className="o31-desktop-nav">
          {links}
        </nav>
        <div className="o31-rail-bottom">
          <a
            className="o31-quote-link" aria-label="Contact MR. DETAILER on WhatsApp"
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppMark/> <span aria-hidden="true">↗</span>
            <small>LET’S TALK ON WHATSAPP</small>
          </a>
          <p>
            Automotive care.
            <br />
            Considered in every detail.
          </p>
          <a href="#o31-gallery" className="o31-mini">
            Explore our work ↓
          </a>
        </div>
        <button
          ref={trigger}
          type="button"
          className="o31-menu-button"
          aria-haspopup="dialog"
          aria-controls="o31-menu"
          aria-expanded={open}
          onClick={() => {
            menu.current?.showModal();
            setOpen(true);
          }}
        >
          <FourLinesMenuIcon/>
        </button>
      </header>
      <dialog
        ref={menu}
        id="o31-menu"
        className="o31-menu-dialog"
        aria-labelledby="o31-menu-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="o31-menu-inner">
          <div className="o31-dialog-top">
            <p id="o31-menu-title">MR. DETAILER / DIRECTORY</p>
            <button type="button" onClick={close} aria-label="Close menu">
              Close ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">{links}</nav>
          <a
            className="o31-button"
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppMark/> <span>WhatsApp ↗</span>
          </a>
          <p className="o31-mini">Welcome back to perfection.</p>
        </div>
      </dialog>
    </>
  );
}
