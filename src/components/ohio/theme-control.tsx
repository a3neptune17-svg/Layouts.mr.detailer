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
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");

  const currentTheme = theme ?? localTheme;

  const toggle = () => {
    const next = currentTheme === "dark" ? "light" : "dark";
    if (setTheme) {
      setTheme(next);
    } else {
      setLocalTheme(next);
    }
    const root = document.querySelector<HTMLElement>(".ohio-rebuild, .ohio-preview-two");
    if (root) root.dataset.theme = next;
    document.documentElement.dataset.theme = next;
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
      <span aria-hidden="true">{currentTheme === "dark" ? "☾" : "☀"}</span>
      <span>{currentTheme === "dark" ? "DARK MODE" : "LIGHT MODE"}</span>
      <span className="ohio-theme-track" aria-hidden="true">
        <i />
      </span>
    </button>
  );
}

