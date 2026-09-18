function Contact() {
  return (
    <section id="contact">
      <div className="section-content contact-content">
        <h2 className="section-title">Contact</h2>

        <p className="section-text">
          If you would like to get in touch, feel free to connect with
          me through GitHub or LinkedIn.
        </p>

        <div className="contact-links">
          <a href="mailto:willvviana@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/willvviana"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/willian-viana-wvv/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;