import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjybnwqg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <div className="container contact-inner">
        <div>
          <p className="contact-label">Get In Touch</p>
          <h1 className="contact-heading">Get Featured</h1>
          <p className="contact-subheading">
            Fill out the form and our editorial team will reach out to get your
            feature started.
          </p>

          <div className="contact-socials">
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Book Title
            <input type="text" name="book_title" />
          </label>

          <label>
            Book Link
            <input type="url" name="book_link" placeholder="https://" />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="form-status success">
              Thanks! Your message has been sent. We'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
