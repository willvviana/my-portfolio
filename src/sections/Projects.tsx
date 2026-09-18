function Projects() {
  return (
    <section id="projects">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          <article className="project-card">
            <h3>Personal Portfolio</h3>

            <p>
              A personal portfolio built to demonstrate my transition from
              Technical Support into Software Engineering.
            </p>

            <p className="project-tech">
              React · TypeScript · Vite
            </p>

            <a
              href="https://github.com/willvviana/my-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </article>

          <article className="project-card">
            <h3>Machine Learning Projects</h3>

            <p>
              A collection of machine learning projects covering regression,
              clustering, data analysis, and model evaluation.
            </p>

            <p className="project-tech">
              Python · Pandas · Scikit-learn · Matplotlib
            </p>

            <a
              href="https://github.com/willvviana/elevvo-machine-learning"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;