import { experiences } from "@/app/constants/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-header">
        <span className="section-tag">Professional Journey</span>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <span className="experience-company">{exp.company}</span>
              </div>

              <span className="experience-duration">
                {exp.duration}
              </span>
            </div>

            <p className="experience-description">
              {exp.description}
            </p>

            <ul className="experience-achievements">
              {exp.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
