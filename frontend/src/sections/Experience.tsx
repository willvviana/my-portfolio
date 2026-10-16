import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <div className="section-content">
        <p className="section-eyebrow">CAREER &amp; DEVELOPMENT</p>

        <h2 className="section-title">Experience</h2>

        <p className="experience-intro">
          Combining hands-on technical support experience with practical
          software engineering projects and continuous development.
        </p>

        <div className="experience-list">
          <details className="experience-item">
            <summary className="experience-summary">
              <span className="experience-heading">
                <span className="experience-role">IT Support Consultant</span>
                <span className="experience-company">SupportYourApp</span>
              </span>
              <span className="experience-arrow" aria-hidden="true" />
            </summary>
            <div className="experience-content">
              <p className="experience-date">Oct 2024 - Present</p>
              <p className="experience-description">
                Provide technical support and investigate product issues,
                applying structured troubleshooting and clear technical
                communication to help resolve customer problems.
              </p>
              <p className="experience-skills">
                Technical Support · Troubleshooting · Incident Investigation
                · Customer Communication
              </p>
            </div>
          </details>

          <details className="experience-item">
            <summary className="experience-summary">
              <span className="experience-heading">
                <span className="experience-role">Full-Stack Engineer Intern</span>
                <span className="experience-company">Elevvo · Internship Program</span>
              </span>
              <span className="experience-arrow" aria-hidden="true" />
            </summary>
            <div className="experience-content">
              <p className="experience-date">Jul 2025 - Aug 2026</p>
              <p className="experience-description">
                Developed full-stack projects spanning frontend development,
                backend APIs, and application logic, applying sound practices
                for code organization, debugging, and version control.
              </p>
              <p className="experience-description">
                Built machine learning projects with Python and data analysis
                libraries, and explored data analytics workflows alongside
                full-stack development.
              </p>
              <p className="experience-skills">
                Frontend Development · Backend APIs · Version Control ·
                Python · Machine Learning · Data Analysis
              </p>
            </div>
          </details>

          <details className="experience-item">
            <summary className="experience-summary">
              <span className="experience-heading">
                <span className="experience-role">IT Support Consultant</span>
                <span className="experience-company">Happeo</span>
              </span>
              <span className="experience-arrow" aria-hidden="true" />
            </summary>
            <div className="experience-content">
              <p className="experience-date">2022 - 2024</p>
              <p className="experience-description">
                Investigated complex SaaS issues, reproduced technical
                problems, documented bugs, and collaborated with engineering
                and QA teams to support incident resolution.
              </p>
              <p className="experience-skills">
                SaaS Support · Bug Reporting · Troubleshooting · Jira ·
                Zendesk · Cross-functional Collaboration
              </p>
            </div>
          </details>

          <details className="experience-item">
            <summary className="experience-summary">
              <span className="experience-heading">
                <span className="experience-role">ESL Teacher / English Language Instructor</span>
                <span className="experience-company">Self-Employed</span>
              </span>
              <span className="experience-arrow" aria-hidden="true" />
            </summary>
            <div className="experience-content">
              <p className="experience-date">2021 - 2022</p>
              <p className="experience-description">
                Designed and delivered tailored English lessons for students
                and professionals, including workplace communication and
                language development for technical contexts.
              </p>
              <p className="experience-skills">
                Communication · Teaching · Mentoring · Remote Learning
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Experience;
