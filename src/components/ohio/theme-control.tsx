"use client";

import { useRef, useState } from "react";

import "./theme.css";

export function ThemeControl({
  theme,
  setTheme,
}: {
  theme?: "light" | "dark";
  setTheme?: (theme: "light" | "dark") => void;
} = {}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("dark");

  const currentTheme = theme ?? localTheme;

  const toggle = () => {
    const next = currentTheme === "dark" ? "light" : "dark";
    if (setTheme) {
      setTheme(next);
    } else {
      setLocalTheme(next);
    }
    const root = ref.current?.closest<HTMLElement>(".ohio-rebuild, .ohio-preview-two");
    if (root) root.dataset.theme = next;
  };

  return (
    <button
      ref={ref}
      className="ohio-theme-control"
      type="button"
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={currentTheme === "light"}
      onClick={toggle}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        {currentTheme === "dark" ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></> : <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z"/>}
      </svg>
    </button>
  );
}

