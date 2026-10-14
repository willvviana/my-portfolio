import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="section-content">
        <p className="section-eyebrow">SELECTED WORK</p>

        <h2 className="section-title">Projects</h2>

        <p className="section-intro">
          Applications and technical projects built to solve practical
          problems and strengthen my software engineering skills.
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <p className="project-category">01 / Full-Stack Engineering</p>

            <h3>Triage — Support Analytics</h3>

            <p>
              A support ticket triage dashboard designed to help support
              teams prioritize work, monitor SLA deadlines, and identify
              customers generating the most integration errors.
            </p>

            <p className="project-detail">
              <strong>Key features:</strong> Ticket filtering and pagination,
              SLA status indicators, ticket details with logs and internal
              notes, and customer error analysis over a seven-day period.
            </p>

            <p className="project-detail">
              <strong>Engineering focus:</strong> REST API design, relational
              database modeling, raw SQL queries, typed API responses,
              and frontend-backend integration.
            </p>

            <p className="project-tech">
              <strong>Stack:</strong> React, TypeScript, Node.js, Express,
              PostgreSQL, Vite
            </p>

            <p className="project-scope">
              Read-only demo using seeded sample data. Authentication and
              write operations are not implemented in this version.
            </p>

            <div className="project-links">
              <a
                href="https://triage-api-5bs6.onrender.com/health"
                target="_blank"
                rel="noreferrer"
              >
                API Health -&gt;
              </a>

              <a
                href="https://triage-coral-beta.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo -&gt;
              </a>

              <a
                href="https://github.com/willvviana/triage"
                target="_blank"
                rel="noreferrer"
              >
                Source Code -&gt;
              </a>

            </div>
          </article>

                    <article className="project-card">
            <p className="project-category">02 / Frontend Development</p>

            <h3>Personal Portfolio</h3>

            <p>
              A responsive personal website built to present my professional
              background, engineering projects, and transition from Technical
              Support into Software Engineering.
            </p>

            <p className="project-detail">
              <strong>Key features:</strong> Dedicated sections for
              professional experience, projects, technical skills, and
              contact information, with responsive layouts and direct links
              to project repositories.
            </p>

            <p className="project-detail">
              <strong>Engineering focus:</strong> Component-based architecture,
              TypeScript, reusable styling, responsive design, and frontend
              deployment.
            </p>

            <p className="project-tech">
              <strong>Stack:</strong> React, TypeScript, Vite, CSS, Vercel
            </p>

            <div className="project-links">
              <a
                href="https://willviana-portfolio.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Portfolio -&gt;
              </a>

              <a
                href="https://github.com/willvviana/my-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Source Code -&gt;
              </a>
            </div>
          </article>

                    <article className="project-card">
            <p className="project-category">03 / Machine Learning</p>

            <h3>Prediction &amp; Customer Segmentation</h3>

            <p>
              A collection of machine learning projects exploring student
              score prediction and customer segmentation using structured
              datasets.
            </p>

            <p className="project-detail">
              <strong>Key work:</strong> Data preparation, exploratory data
              analysis, student score prediction using regression, and
              customer segmentation using clustering.
            </p>

            <p className="project-detail">
              <strong>Engineering focus:</strong> Data preprocessing,
              feature selection, model training, evaluation, and interpreting
              results to understand model behavior.
            </p>

            <p className="project-tech">
              <strong>Stack:</strong> Python, Pandas, Scikit-learn, Matplotlib
            </p>

            <div className="project-links">
              <a
                href="https://github.com/willvviana/elevvo-machine-learning"
                target="_blank"
                rel="noreferrer"
              >
                Source Code -&gt;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;