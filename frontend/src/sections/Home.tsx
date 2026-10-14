
import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm Willian.</p>

        <h1>Full-Stack Engineer</h1>

        <p className="hero-description">
          Software Engineering student and Full-Stack Engineer Intern
          at Elevvo, building practical applications with React,
          TypeScript, Node.js, and PostgreSQL.
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
