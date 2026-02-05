import "./About.css";

import SkillCard from "../../lib/SkillCard/SkillCard";
const About = () => {
  return (
    <div className="about">
      <div className="about--intro">
        <div className="about--info">
          <h1 className="about-question">Who Am I ?</h1>
          <p>
            I’m a backend-focused software engineer with hands-on experience
            building scalable, reliable systems in Java and Spring Boot.
            Currently working at CDK Global, I enjoy designing clean APIs,
            improving system performance, and contributing to well-structured
            microservices used in real-world, production environments.
          </p>
          <p>
            During my journey from backend intern to associate software
            engineer, I’ve worked extensively on IAM and SSO systems,
            collaborated across teams, and handled production-critical issues.
            I’ve led releases, optimized SQL queries, improved test coverage,
            and built automation tools that reduced manual effort and data
            inconsistencies.
          </p>
          <p>
            Beyond work, I enjoy building full-stack projects that blend backend
            logic with intuitive user experiences. My projects range from a
            medical waste classification system using deep learning to a
            Spotify-like music platform, reflecting my interest in combining
            system design, data handling, and practical problem-solving.
          </p>
          <p>
            I’m driven by curiosity, continuous learning, and writing code that
            is both efficient and maintainable. With a strong foundation in data
            structures, algorithms, and system design, I aim to grow as a
            backend engineer while contributing to impactful products that solve
            meaningful problems.
          </p>
        </div>
      </div>

      <div className="about--myskills">
        <h1>My Skills</h1>
        <SkillCard />
      </div>
    </div>
  );
};

export default About;
