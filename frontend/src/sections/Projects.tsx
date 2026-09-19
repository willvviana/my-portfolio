import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <article className="project-card">
            <h3>Personal Portfolio</h3>

            <p>
              <strong>Problem:</strong> I needed a professional way to present
              my transition from Technical Support into Software Engineering.
            </p>

            <p>
              <strong>Solution:</strong> A responsive personal portfolio
              focused on presenting my experience, projects, and software
              engineering journey.
            </p>

            <p>
              <strong>Technologies:</strong> React · TypeScript · Vite
            </p>

            <p>
              <strong>Learning:</strong> Component-based development, project
              organization, responsive CSS, and frontend development.
            </p>

            <a
              href="https://github.com/willvviana/my-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              View Repository →
            </a>
          </article>

          <article className="project-card">
            <h3>Machine Learning Projects</h3>

            <p>
              <strong>Problem:</strong> Apply machine learning concepts to
              practical problems using real datasets.
            </p>

            <p>
              <strong>Solution:</strong> A collection of projects covering
              regression, clustering, data analysis, and model evaluation.
            </p>

            <p>
              <strong>Technologies:</strong> Python · Pandas · Scikit-learn ·
              Matplotlib
            </p>

            <p>
              <strong>Learning:</strong> Data preprocessing, exploratory data
              analysis, model training, clustering, and model evaluation.
            </p>

            <a
              href="https://github.com/willvviana/elevvo-machine-learning"
              target="_blank"
              rel="noreferrer"
            >
              View Repository →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;