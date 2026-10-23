import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Contact.css";

const ENDPOINT = "https://formspree.io/f/xjybnwqg";

const genres = [
  "Fiction",
  "Nonfiction",
  "Memoir",
  "Poetry",
  "Business & Leadership",
  "Self-Help & Wellness",
  "Spirituality",
  "Children's Books",
  "Other",
];

const nextSteps = [
  {
    title: "Request your free draft",
    text: "Tell us about you and your book.",
  },
  {
    title: "We write your article",
    text: "Our editorial team prepares your draft at no cost.",
  },
  {
    title: "Review and choose a package",
    text: "Approve the draft, then pick the package that fits.",
  },
  {
    title: "Go live",
    text: "We syndicate your feature and send you the live links.",
  },
];

const initialValues = {
  name: "",
  email: "",
  book_title: "",
  book_link: "",
  genre: "",
  message: "",
  consent: false,
  _gotcha: "",
};

function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) newErrors.name = "Please enter your full name.";

    if (!values.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (
      values.book_link.trim() &&
      !/^https?:\/\/.+/i.test(values.book_link.trim())
    ) {
      newErrors.book_link = "Link should start with http:// or https://";
    }

    if (!values.message.trim() || values.message.trim().length < 10) {
      newErrors.message =
        "Please tell us a little about your book (at least 10 characters).";
    }

    if (!values.consent) {
      newErrors.consent = "Please confirm so we can contact you.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Spam trap: real people never fill this hidden field
    if (values._gotcha) {
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New free draft request - Author Global Press",
          name: values.name,
          email: values.email,
          book_title: values.book_title,
          book_link: values.book_link,
          genre: values.genre,
          message: values.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setValues(initialValues);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <div className="container contact-layout">
        <aside className="contact-aside">
          <p className="contact-label">Get In Touch</p>
          <h1 className="contact-heading">Get Featured</h1>
          <p className="contact-subheading">
            Tell us about your book. Our editorial team will write your free
            draft and send it to you to review.
          </p>

          <ol className="contact-steps">
            {nextSteps.map((step, i) => (
              <li key={step.title}>
                <span className="contact-step-number">{i + 1}</span>
                <div>
                  <p className="contact-step-title">{step.title}</p>
                  <p className="contact-step-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="contact-note">
            Your details are only used to respond to your request.
          </p>
        </aside>

        <div className="contact-card">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                className="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="success-check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 220,
                    damping: 14,
                  }}
                >
                  ✓
                </motion.div>
                <h2>Request Received</h2>
                <p>
                  Thank you! Our editorial team will start on your free draft
                  and be in touch soon.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setStatus("idle")}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="form-title">Request Your Free Draft</h2>

                <div className="form-row">
                  <div className={`field ${errors.name ? "has-error" : ""}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                    />
                    {errors.name && (
                      <span className="field-error">{errors.name}</span>
                    )}
                  </div>

                  <div className={`field ${errors.email ? "has-error" : ""}`}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <span className="field-error">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="book_title">Book Title</label>
                    <input
                      id="book_title"
                      type="text"
                      name="book_title"
                      value={values.book_title}
                      onChange={handleChange}
                      placeholder="The title of your book"
                    />
                  </div>

                  <div
                    className={`field ${errors.book_link ? "has-error" : ""}`}
                  >
                    <label htmlFor="book_link">Book Link</label>
                    <input
                      id="book_link"
                      type="text"
                      name="book_link"
                      value={values.book_link}
                      onChange={handleChange}
                      placeholder="https://"
                    />
                    {errors.book_link && (
                      <span className="field-error">{errors.book_link}</span>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="genre">Genre</label>
                  <select
                    id="genre"
                    name="genre"
                    value={values.genre}
                    onChange={handleChange}
                  >
                    <option value="">Select a genre</option>
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`field ${errors.message ? "has-error" : ""}`}>
                  <label htmlFor="message">Tell Us About Your Book *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Share a little about yourself and your book..."
                  ></textarea>
                  {errors.message && (
                    <span className="field-error">{errors.message}</span>
                  )}
                </div>

                {/* Hidden spam trap */}
                <input
                  type="text"
                  name="_gotcha"
                  value={values._gotcha}
                  onChange={handleChange}
                  className="hp-field"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div
                  className={`field consent ${errors.consent ? "has-error" : ""}`}
                >
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={values.consent}
                      onChange={handleChange}
                    />
                    <span>I agree to be contacted about my request.</span>
                  </label>
                  {errors.consent && (
                    <span className="field-error">{errors.consent}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Request Free Draft →"}
                </button>

                {status === "error" && (
                  <p className="form-status error">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Contact;
