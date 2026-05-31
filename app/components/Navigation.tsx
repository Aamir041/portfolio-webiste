import { navLinks } from "@/app/constants/portfolioData";

interface NavigationProps {
  menuOpen: boolean;
  onMenuToggle: (open: boolean) => void;
}

export function Navigation({ menuOpen, onMenuToggle }: NavigationProps) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          <span className="logo-mark">AS</span>
          <span className="logo-slash">/</span>
          <span className="logo-name">Aamir Saudagar</span>
        </a>

        <div className="nav-links">
          {navLinks.slice(0, 5).map(({ href, label }) => (
            <a key={label} href={href}>{label}</a>
          ))}
          <a href="#contact" className="nav-cta">Let&apos;s talk →</a>
        </div>

        <button
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={() => {
            console.log("Toggle menu");
            onMenuToggle(!menuOpen);
          }}
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
            onClick={() => onMenuToggle(false)}
            style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
          >
            <span className="mobile-link-num">0{i + 1}</span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
