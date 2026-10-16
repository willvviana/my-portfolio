import "./Footer.css";

function Footer() {
  // Automatically update the copyright year.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand and navigation */}
        <div className="footer-top">
          <div className="footer-brand">
            <a className="footer-name" href="#home">
              Will Viana
            </a>

            <span className="footer-role">
              Software Engineer
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* External professional profiles */}
          <div className="footer-social">
            <a
              href="https://github.com/willvviana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright and back-to-top link */}
        <div className="footer-bottom">
          <span>
            © {currentYear} Will Viana. All rights reserved.
          </span>

          <a href="#home">Home ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
