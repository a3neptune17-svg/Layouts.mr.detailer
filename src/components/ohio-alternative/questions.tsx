"use client";
import { studioQuestions } from "../ohio/rebuild-data";
import { useCarousel } from "../ohio/use-carousel";
import { ArrowLeft, ArrowRight } from "../ohio/icons";
export function StudioQuestions() {
  const { index, progress, paused, setPaused, setHeld, change } = useCarousel(studioQuestions.length);
  const entry = studioQuestions[index];
  return <div className="oa-questions" aria-label="Rotating studio questions" onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(false)} onFocus={() => setHeld(true)} onBlur={event => {if (!event.currentTarget.contains(event.relatedTarget)) setHeld(false);}}><div className="client-carousel-progress" aria-hidden="true"><span style={{transform: `scaleX(${progress})`}}/></div><p className="o31-eyebrow">BLOGS / THE CARE CONVERSATION</p><div key={index} className="oa-question"><h3>{entry.question}</h3><p>{entry.answer}</p></div><div className="oa-question-controls"><span>{index + 1} / {studioQuestions.length}</span><button onClick={() => change(-1)} aria-label="Previous question"><ArrowLeft/></button><button onClick={() => change(1)} aria-label="Next question"><ArrowRight/></button><button onClick={() => setPaused(!paused)} aria-label={paused ? "Start automatic rotation" : "Pause automatic rotation"}>{paused ? "Auto" : "Pause"}</button></div></div>;
}
