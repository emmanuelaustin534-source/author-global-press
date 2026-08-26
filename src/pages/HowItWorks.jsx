import { Link } from "react-router-dom";
import "../styles/HowItWorks.css";

const options = [
  {
    tag: "Option 1",
    title: "Live Interview",
    description:
      "A short recorded conversation where we discuss your book, your author journey, and the story behind your work. The conversation is then transformed into an audio feature you can share on your social media, website, or other channels.",
  },
  {
    tag: "Option 2",
    title: "Written Interview",
    description:
      "We provide a few simple questions for you to answer at your convenience. Based on your responses, we craft your feature article and send it to you for review and approval before it goes live.",
  },
];

const benefits = [
  "Reach a wider audience of potential readers",
  "Strengthen your credibility and authority as an author",
  "Increase visibility for your book and personal brand",
  "Keep your work discoverable long after publication",
  "Create more opportunities to attract new readers and potential book buyers",
];

function HowItWorks() {
  return (
    <div className="how-page">
      <div className="container">
        <p className="how-label">The Process</p>
        <h1 className="how-heading">How It Works</h1>
        <p className="how-subheading">
          Choose the format that fits you best, then let us handle the rest.
        </p>

        <div className="options-grid">
          {options.map((option) => (
            <div className="option-card" key={option.title}>
              <p className="option-tag">{option.tag}</p>
              <h2>{option.title}</h2>
              <p>{option.description}</p>
            </div>
          ))}
        </div>

        <div className="publication-block">
          <h2>Publication</h2>
          <p>
            Once finalized, your feature can be published on respected platforms
            such as USA Wire and Digital Journal, giving your story a lasting
            and searchable online presence.
          </p>
        </div>

        <div className="benefits-block">
          <h2>This Feature Can Help You</h2>
          <ul className="benefits-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="how-cta">
          <Link to="/contact" className="btn btn-primary">
            Get Featured →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
