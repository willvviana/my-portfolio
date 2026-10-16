
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="section-content">
        <p className="section-eyebrow">THE PERSON BEHIND THE CODE</p>

        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I’m a Software Engineering student building full-stack applications
          with React, TypeScript, Node.js, Express, and PostgreSQL. My projects
          include responsive interfaces, REST APIs, database-backed features,
          automated tests, and CI workflows.
        </p>

        <p className="section-text">
          My SaaS technical support background strengthened my troubleshooting,
          communication, and incident investigation skills. I bring a practical,
          user-focused approach to solving problems and collaborating with
          engineering teams.
        </p>

        <div className="about-focus">
          <span>React &amp; TypeScript</span>
          <span>Node.js &amp; REST APIs</span>
          <span>PostgreSQL</span>
          <span>Testing &amp; CI</span>
        </div>
      </div>
    </section>
  );
}

export default About;
