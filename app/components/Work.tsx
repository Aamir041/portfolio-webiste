import React from "react";
import { projects } from "@/app/constants/portfolioData";

interface WorkProps {
  activeProject: number | null;
  onProjectHover: (index: number | null) => void;
}

export function Work({ activeProject, onProjectHover }: WorkProps) {
  return (
    <section id="work" className="section work">
      <div className="section-header">
        <span className="section-tag">Selected Work</span>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`project-row${activeProject === i ? " project-row--active" : ""}`}
            style={{ "--accent": p.accentColor } as React.CSSProperties}
            onMouseEnter={() => onProjectHover(i)}
            onMouseLeave={() => onProjectHover(null)}
          >
            <span className="project-num">{p.id}</span>
            <div className="project-main">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
            </div>
            <div className="project-meta">
              <span className="project-category">{p.category}</span>
              <span className="project-year">{p.year}</span>
            </div>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <span className="project-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
