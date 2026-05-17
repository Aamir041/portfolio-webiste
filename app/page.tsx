"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    id: "01",
    title: "Spotify Clone",
    category: "Full-Stack",
    year: "2023",
    description: "A pixel-perfect clone of the Spotify web player. Features include user authentication, dynamic music streaming, interactive playlists, and a fully responsive user interface.",
    tags: ["React", "Javascript", "MongoDB", "Express", "JWT"],
    accentColor: "#C8FF00",
  },
  {
    id: "02",
    title: "Medical Waste Classification System",
    category: "Machine Learning",
    year: "2024",
    description: "An automated, full-stack computer vision application designed to identify and sort hazardous medical waste to ensure safe disposal and regulatory compliance.",
    tags: ["React", "Javascript","Node.js", "Express","YOLOv8", "Python", "SQL"],
    accentColor: "#FF6B6B",
  }
];

const skills = [
  { category: "Languages", items: ["Java", "SQL","Java Script","Python"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "REST", "WebSockets"] },
  { category: "Data & DB", items: ["PostgreSQL", "Redis", "Kafka", "MongoDB"] }
];

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const onMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="page-root">

      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="logo-mark">AS</span>
            <span className="logo-slash">/</span>
            <span className="logo-name">Aamir Saudagar</span>
          </div>

          <div className="nav-links">
            {navLinks.slice(0, 3).map(({ href, label }) => (
              <a key={label} href={href}>{label}</a>
            ))}
            <a href="#contact" className="nav-cta">Let&apos;s talk →</a>
          </div>

          <button
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            onClick={() => setMenuOpen(() => {
              console.log("Toyuch")
              return !menuOpen
            })}
            aria-label="Toggle menu"
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
          {navLinks.map(({ href, label }, i) => (
            <a
              key={label}
              href={href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              <span className="mobile-link-num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-bg-glow" />
        <h1 className="hero-title">
          <span>Backend</span>
          <span className="hero-title--outlined">Engineer</span>
          <span>&amp; Architect</span>
        </h1>
        <div className="hero-sub">
          <p>
            I design and build the systems that power products scalable APIs, resilient databases, and backend infrastructure that handles real-world load. Full-stack capable, backend obsessed.
          </p>
          {/* <div className="hero-stats">
            {[["6+", "Years exp."], ["40+", "Projects"], ["18", "Clients"]].map(([num, label]) => (
              <div key={label} className="stat">
                <span className="stat-num">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div> */}
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* WORK */}
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
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
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

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.category} className="skill-card">
              <h4 className="skill-category">{s.category}</h4>
              <ul className="skill-list">
                {s.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="about-text">
          <div className="section-header">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Story</h2>
          </div>
          <p>Based in Pune, I&apos;m an Associate Software Engineer who feels most at home when taking a massive problem, breaking it apart, and solving it piece by piece. My technical sweet spot lies in enhancing system performance to make applications run leaner and faster.</p>
          <p>My background in massive enterprise companies has taught me how to navigate complex architecture and build with the big picture in mind. For me, a project isn't truly successful unless it beautifully balances the final deliverable with clean code, user empathy, and long-term scalability.</p>
          <p>In my downtime, I recharge away from the screen by lifting weights. I also love diving into video games, reading manga, and catching the occasional anime.</p>
        </div>
        <div className="about-aside">
          <div className="about-card">
            <div className="about-avatar">AS</div>
            <div>
              <span className="about-name">Aamir Saudagar</span>
              <span className="about-role">Backend Engineer</span>
            </div>
          </div>
          <div className="about-links">
            {[["GitHub", "https://github.com/Aamir041"], ["LinkedIn", "https://www.linkedin.com/in/saudagaraamir/"], ["Resume", "https://drive.google.com/file/d/1o-aSH7Rz_--hgLRIuIO4xw_ezPHhtZyA/view?usp=sharing"]].map(([label, href]) => (
              <a target="_blank" key={label} href={href} className="about-link">{label} ↗</a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="contact-bg-glow" />
        <div className="contact-inner">
          <span className="section-tag">Get In Touch</span>
          <h2 className="contact-headline">
            Got a project?<br />
            <span className="contact-headline--outlined">Let&apos;s build it.</span>
          </h2>
          <a href="mailto:aamirsaudagar34@gmail.com" className="contact-btn">
            aamirsaudagar34@gmail.com
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2025 Aamir Saudagar</span>
      </footer>
    </div>
  );
}