import { contactEmail } from "@/app/constants/portfolioData";

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-bg-glow" />
      <div className="contact-inner">
        <span className="section-tag">Get In Touch</span>
        <h2 className="contact-headline">
          Got a project?<br />
          <span className="contact-headline--outlined">Let&apos;s build it.</span>
        </h2>
        <a href={`mailto:${contactEmail}`} className="contact-btn">
          {contactEmail}
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
