"use client";

import { useEffect, useState } from "react";
import { studioQuestions } from "../ohio/rebuild-data";

export function StudioQuestions() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % studioQuestions.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);
  const entry = studioQuestions[index];
  return <div className="oa-questions" aria-label="Rotating studio questions"><p className="o31-eyebrow">BLOGS / THE CARE CONVERSATION</p><div key={index} className="oa-question"><h3>{entry.question}</h3><p>{entry.answer}</p></div><div className="oa-question-controls"><span>{String(index + 1).padStart(2,"0")} / 05</span><button onClick={() => setIndex(current => (current + 4) % 5)} aria-label="Previous question">←</button><button onClick={() => setIndex(current => (current + 1) % 5)} aria-label="Next question">→</button><button onClick={() => setPaused(!paused)} aria-label={paused ? "Resume questions" : "Pause questions"}>{paused ? "▶" : "Ⅱ"}</button></div></div>;
}
