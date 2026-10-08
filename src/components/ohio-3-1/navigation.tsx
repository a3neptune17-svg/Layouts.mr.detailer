"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { navigation, quoteUrl } from "./content";

export function Navigation() {
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  function close() {
    menu.current?.close();
  }
  const links = navigation.map(([label, href], index) => (
    <a key={href} href={href} onClick={close}>
      <span>0{index + 1}</span>
      {label}
      <b aria-hidden="true">↗</b>
    </a>
  ));
  return (
    <>
      <a className="o31-skip" href="#o31-main">
        Skip to content
      </a>
      <header className="o31-rail">
        <a href="#o31-home" className="o31-logo" aria-label="Mr. Detailer home">
          <Image src="/logo.png" alt="Mr. Detailer" width={160} height={68} />
        </a>
        <p className="o31-tagline">THE BOSS OF DETAILERS</p>
        <nav aria-label="Main navigation" className="o31-desktop-nav">
          {links}
        </nav>
        <div className="o31-rail-bottom">
          <a
            className="o31-quote-link"
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a quote <span aria-hidden="true">↗</span>
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
          Menu <span aria-hidden="true">☰</span>
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
            Get a quote → WhatsApp
          </a>
          <p className="o31-mini">Welcome back to perfection.</p>
        </div>
      </dialog>
    </>
  );
}
