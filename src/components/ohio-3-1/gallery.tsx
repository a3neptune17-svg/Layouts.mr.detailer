"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { photo, projects } from "./content";

export function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const project = active === null ? null : projects[active];
  function step(direction: number) {
    setActive((value) =>
      value === null
        ? 0
        : (value + direction + projects.length) % projects.length,
    );
  }
  return (
    <>
      <div className="o31-project-grid">
        {projects.map((item, index) => (
          <button
            className="o31-project"
            key={item.image}
            type="button"
            onClick={(event) => {
              opener.current = event.currentTarget;
              setActive(index);
              dialog.current?.showModal();
            }}
            aria-label={`View image: ${item.title}`}
          >
            <div className="o31-project-image">
              <Image
                src={photo(item.image)}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1023px) 46vw, 38vw"
              />
              <span className="o31-image-plus" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="o31-project-caption">
              <div>
                <p className="o31-eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
              </div>
              <span className="o31-mini">0{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="o31-lightbox"
        aria-labelledby="o31-lightbox-title"
        onClose={() => {
          setActive(null);
          opener.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
        }}
      >
        <div className="o31-lightbox-inner">
          <div className="o31-dialog-top">
            <p id="o31-lightbox-title">{project?.title ?? "Studio gallery"}</p>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              autoFocus
              aria-label="Close image"
            >
              Close ×
            </button>
          </div>
          {project && (
            <div className="o31-lightbox-image">
              <Image
                src={photo(project.image)}
                alt={project.alt}
                fill
                sizes="90vw"
              />
            </div>
          )}
          <div className="o31-lightbox-controls">
            <button type="button" onClick={() => step(-1)}>
              ← Previous
            </button>
            <span aria-live="polite">
              {(active ?? 0) + 1} / {projects.length}
            </span>
            <button type="button" onClick={() => step(1)}>
              Next →
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
