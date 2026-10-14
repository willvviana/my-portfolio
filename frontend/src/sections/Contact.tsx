
import "./Contact.css";
import { useState } from "react";
import type { SubmitEventHandler } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      setStatus("Contact service is not configured. Please contact me on LinkedIn.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch(`${apiUrl}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("Message sent successfully. Thank you for reaching out.");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus(
        "Unable to send your message right now. Please contact me on LinkedIn."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-content contact-content">
        <p className="section-eyebrow">GET IN TOUCH</p>

        <h2 className="section-title">Contact</h2>

        <p className="contact-intro">
          Interested in working together or discussing a software engineering
          opportunity? Send me a message or connect with me professionally.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={100}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              maxLength={254}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="How can I help?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              maxLength={5000}
              rows={6}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send message"}
            {!isSubmitting && <span aria-hidden="true"> →</span>}
          </button>

          <p
            className="contact-status"
            role="status"
            aria-live="polite"
            data-state={
              status.startsWith("Message sent")
                ? "success"
                : status
                  ? "error"
                  : "idle"
            }
          >
            {status}
          </p>
        </form>

        <div className="contact-links">
          <a
            href="https://github.com/willvviana"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/willian-viana-wvv/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
