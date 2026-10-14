
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="section-content">
        <p className="section-eyebrow">CAREER & DEVELOPMENT</p>

        <h2 className="section-title">Experience</h2>

        <p className="experience-intro">
          Combining hands-on technical support experience with practical
          software engineering projects and continuous development.
        </p>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-header">
              <div>
                <h3>IT Support Consultant</h3>
                <p className="experience-company">SupportYourApp</p>
              </div>

              <span className="experience-date">Oct 2024 - Present</span>
            </div>

            <p className="experience-description">
              Provide technical support and investigate product issues,
              applying structured troubleshooting and clear technical
              communication to help resolve customer problems.
            </p>

            <p className="experience-skills">
              Technical Support · Troubleshooting · Incident Investigation
              · Customer Communication
            </p>
          </article>

          <article className="experience-item">
            <div className="experience-header">
              <div>
                <h3>Full-Stack Engineer Intern</h3>
                <p className="experience-company">
                  Elevvo · Part-time
                </p>
              </div>

              <span className="experience-date">2026 - Present</span>
            </div>

            <p className="experience-description">
              Develop practical projects across frontend and backend
              engineering, with a growing focus on backend development,
              API design, database integration, and maintainable application
              architecture.
            </p>

            <p className="experience-description">
              Also work on machine learning projects and data analysis,
              building foundations for a longer-term progression toward
              AI engineering.
            </p>

            <p className="experience-skills">
              React · TypeScript · Node.js · Express · PostgreSQL ·
              REST APIs · Python · Machine Learning
            </p>
          </article>

          <article className="experience-item">
            <div className="experience-header">
              <div>
                <h3>IT Support Consultant</h3>
                <p className="experience-company">Happeo</p>
              </div>

              <span className="experience-date">2022 - 2024</span>
            </div>

            <p className="experience-description">
              Investigated complex SaaS issues, reproduced technical
              problems, documented bugs, and collaborated with engineering
              and QA teams to support incident resolution.
            </p>

            <p className="experience-skills">
              SaaS Support · Bug Reporting · Troubleshooting ·
              Jira · Zendesk · Cross-functional Collaboration
            </p>
          </article>

          <article className="experience-item">
            <div className="experience-header">
              <div>
                <h3>ESL Teacher / English Language Instructor</h3>
                <p className="experience-company">Self-Employed</p>
              </div>

              <span className="experience-date">2021 - 2022</span>
            </div>

            <p className="experience-description">
              Designed and delivered tailored English lessons for students
              and professionals, including workplace communication and
              language development for technical contexts.
            </p>

            <p className="experience-skills">
              Communication · Teaching · Mentoring · Remote Learning
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
