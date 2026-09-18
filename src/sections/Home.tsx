function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm Willian.</p>

        <h1>
        Technical Support Specialist
        <span>→ Software Engineering</span>
        </h1>

        <p className="hero-description">
          I build practical software and I'm transitioning from Technical
          Support into Software Engineering.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button primary">
            View Projects
          </a>

          <a
            href="https://github.com/willvviana"
            target="_blank"
            rel="noreferrer"
            className="hero-button secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;