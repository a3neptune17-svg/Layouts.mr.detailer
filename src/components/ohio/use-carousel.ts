"use client";

import { useEffect, useRef, useState } from "react";

export function useCarousel(count: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [progress, setProgress] = useState(0);
  const elapsed = useRef(0);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let previous = 0;
    let frame = 0;
    const tick = (now: number) => {
      if (!paused && !held && !motion.matches && !document.hidden) {
        if (previous) elapsed.current += Math.min(now - previous, 100);
        if (elapsed.current >= 3000) {
          elapsed.current = 0;
          setIndex(current => (current + 1) % count);
        }
        setProgress(elapsed.current / 3000);
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [count, paused, held]);
  const change = (direction: number) => {
    elapsed.current = 0;
    setProgress(0);
    setIndex(current => (current + direction + count) % count);
  };
  return { index, paused, setPaused, setHeld, progress, change };
}
