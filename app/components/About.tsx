import { socialLinks } from "@/app/constants/portfolioData";

export function About() {
  return (
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
          {socialLinks.map(([label, href]) => (
            <a target="_blank" key={label} href={href} className="about-link" rel="noopener noreferrer">{label} ↗</a>
          ))}
        </div>
      </div>
    </section>
  );
}
