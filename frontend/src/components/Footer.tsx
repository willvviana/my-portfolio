import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">Willian Viana</span>
            <span className="footer-role">
              Software Engineering
            </span>
          </div>

          <nav className="footer-nav">
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
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/willian-viana-wvv/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Willian Viana</span>
          <span>React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;