import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav-logo">
          Willian Viana
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
