"use client";

import { type ReactNode, useEffect, useRef } from "react";

// Server-rendered children stay on the server; only local anchor behavior is interactive.
export function Shell({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function openHashTarget() {
      const target = document.getElementById(window.location.hash.slice(1));
      if (
        target instanceof HTMLDetailsElement &&
        root.current?.contains(target)
      )
        target.open = true;
    }
    openHashTarget();
    window.addEventListener("hashchange", openHashTarget);
    return () => window.removeEventListener("hashchange", openHashTarget);
  }, []);

  return (
    <div
      ref={root}
      className="o31"
      id="o31-home"
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey
        )
          return;
        const link =
          event.target instanceof Element
            ? event.target.closest<HTMLAnchorElement>('a[href^="#o31-"]')
            : null;
        if (!link) return;
        const target = document.getElementById(link.hash.slice(1));
        if (!target || !root.current?.contains(target)) return;
        event.preventDefault();
        if (target instanceof HTMLDetailsElement) target.open = true;
        if (window.location.hash !== link.hash)
          window.history.pushState(null, "", link.hash);
        // Wait for the native menu's close/focus restoration before moving to the section.
        requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
            block: "start",
          });
          const focusTarget =
            target instanceof HTMLDetailsElement
              ? target.querySelector("summary")
              : target;
          if (focusTarget instanceof HTMLElement) {
            if (focusTarget.tagName !== "SUMMARY")
              focusTarget.setAttribute("tabindex", "-1");
            focusTarget.focus({ preventScroll: true });
          }
        });
      }}
    >
      {children}
    </div>
  );
}
