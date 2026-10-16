
import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm Willian.</p>

        <h1>Full-Stack Engineer</h1>

        <div className="hero-description">
          <p>
            Software Engineering student with full-stack experience at Elevvo
            and a background in SaaS technical support.
          </p>
          <p>
            I build applications with React, TypeScript, Node.js, Express, and
            PostgreSQL, including personal finance, support analytics, and
            machine learning projects.
          </p>
        </div>

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
