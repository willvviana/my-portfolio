import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="section-content contact-content">
        <p className="section-eyebrow">GET IN TOUCH</p>

        <h2 className="section-title">Let's Connect.</h2>

        <p className="contact-intro">
          Interested in software engineering opportunities or discussing
          a project? Feel free to reach out.
        </p>

        <div className="contact-links">
           <a
            href="https://www.linkedin.com/in/willian-viana-wvv/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://github.com/willvviana"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=willvviana@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;