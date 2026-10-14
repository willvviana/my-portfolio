
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-name">
              Willian Viana
            </a>

            <span className="footer-role">
              Software Engineering
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social">
            <a
              href="https://github.com/willvviana"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/willian-viana-wvv/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Willian Viana</span>
          <span>React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
