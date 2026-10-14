
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="section-content">
        <p className="section-eyebrow">THE PERSON BEHIND THE CODE</p>

        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I'm a Software Engineering student and Full-Stack Engineer Intern
          at Elevvo, focused on building practical software applications.
          My current work and projects help me develop my skills across
          frontend development, backend APIs, databases, and machine learning.
        </p>

        <p className="section-text">
          Before moving into software engineering, I built experience in
          technical support for SaaS products. Working with APIs,
          integrations, troubleshooting, incident investigation, and
          engineering teams taught me to approach problems systematically
          and consider how software behaves in real-world environments.
        </p>

        <p className="section-text">
          I'm continuing to strengthen my foundations in software design,
          implementation, testing, and deployment through hands-on projects.
          My goal is to grow into a software engineer who can build reliable,
          maintainable applications and contribute effectively to an
          engineering team.
        </p>

        <div className="about-focus">
          <span>Frontend Development</span>
          <span>Backend APIs</span>
          <span>Databases</span>
          <span>Machine Learning</span>
        </div>
      </div>
    </section>
  );
}

export default About;
