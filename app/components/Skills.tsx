import { skills } from "@/app/constants/portfolioData";

export function Skills() {
  return (
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
  );
}
