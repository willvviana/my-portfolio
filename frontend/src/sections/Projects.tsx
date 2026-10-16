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

        <div className="projects-list">
          <details className="project-card">
            <summary className="project-summary">
              <span className="project-heading">
                <span className="project-name">Moneta — Personal Finance</span>
                <span className="project-arrow" aria-hidden="true" />
              </span>
              <span className="project-category">Full-Stack Engineering</span>
            </summary>

            <div className="project-content">
              <p>
                A full-stack personal finance application for managing
                transactions, monthly budgets, spending reports, and a financial
                dashboard. The React frontend and Express API are deployed
                together as a single service.
              </p>

              <p className="project-detail">
                <strong>Key features:</strong> Secure account authentication,
                transaction management, monthly budgets, and consistent
                dashboard and report totals using integer-based currency and
                date-range rules.
              </p>

              <p className="project-detail">
                <strong>Engineering focus:</strong> User-scoped data access,
                server-side sessions, validated API requests, security controls,
                and automated tests. GitHub Actions checks types, dependencies,
                tests, and production builds before deployment.
              </p>

              <p className="project-tech">
                <strong>Stack:</strong> React, TypeScript, Node.js, Express,
                PostgreSQL, Docker, GitHub Actions, Render
              </p>

              <div className="project-links">
                <a href="https://moneta-x7wx.onrender.com" target="_blank" rel="noreferrer">
                  Live Demo -&gt;
                </a>
                <a href="https://github.com/willvviana/moneta" target="_blank" rel="noreferrer">
                  Source Code -&gt;
                </a>
                <a href="https://github.com/willvviana/moneta/tree/main/backend" target="_blank" rel="noreferrer">
                  Backend -&gt;
                </a>
              </div>
            </div>
          </details>

          <details className="project-card">
            <summary className="project-summary">
              <span className="project-heading">
                <span className="project-name">Triage — Support Analytics</span>
                <span className="project-arrow" aria-hidden="true" />
              </span>
              <span className="project-category">Full-Stack Engineering</span>
            </summary>

            <div className="project-content">
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
                <a href="https://triage-api-5bs6.onrender.com/health" target="_blank" rel="noreferrer">
                  API Health -&gt;
                </a>
                <a href="https://triage-coral-beta.vercel.app" target="_blank" rel="noreferrer">
                  Live Demo -&gt;
                </a>
                <a href="https://github.com/willvviana/triage" target="_blank" rel="noreferrer">
                  Source Code -&gt;
                </a>
              </div>
            </div>
          </details>

          <details className="project-card">
            <summary className="project-summary">
              <span className="project-heading">
                <span className="project-name">Personal Portfolio</span>
                <span className="project-arrow" aria-hidden="true" />
              </span>
              <span className="project-category">Frontend Development</span>
            </summary>

            <div className="project-content">
              <p>
                A responsive personal website built to present my professional
                background, engineering projects, and transition from Technical
                Support into Software Engineering.
              </p>

              <p className="project-detail">
                <strong>Key features:</strong> Dedicated pages for professional
                experience, projects, technical skills, and contact information,
                with responsive layouts and direct links to project repositories.
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
                <a href="https://willviana-portfolio.vercel.app" target="_blank" rel="noreferrer">
                  Live Portfolio -&gt;
                </a>
                <a href="https://github.com/willvviana/my-portfolio" target="_blank" rel="noreferrer">
                  Source Code -&gt;
                </a>
              </div>
            </div>
          </details>

          <details className="project-card">
            <summary className="project-summary">
              <span className="project-heading">
                <span className="project-name">Prediction &amp; Customer Segmentation</span>
                <span className="project-arrow" aria-hidden="true" />
              </span>
              <span className="project-category">Machine Learning</span>
            </summary>

            <div className="project-content">
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
                <a href="https://github.com/willvviana/elevvo-machine-learning" target="_blank" rel="noreferrer">
                  Source Code -&gt;
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Projects;
