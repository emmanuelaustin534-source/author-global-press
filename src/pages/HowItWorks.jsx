import { Link } from "react-router-dom";
import "../styles/HowItWorks.css";

const steps = [
  {
    number: "1",
    title: "Complimentary Draft Creation",
    description:
      "Our editorial team selects your book title and writes a custom, publication-ready feature article completely free of charge. It takes zero effort, interviews, or homework from you.",
  },
  {
    number: "2",
    title: "Editorial Review & Package Selection",
    description:
      "We send you the full draft preview to read and approve. Once you love the article, you choose the syndication package ($70, $160, or $320) that best fits your goals.",
  },
  {
    number: "3",
    title: "Multi-Network Syndication & Live Links",
    description:
      "We submit your approved feature across our media press networks, ensure permanent Google indexing, and deliver your live published links directly to your inbox.",
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
          Three simple steps, and you see your article before you decide
          anything.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
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
          <Link to="/contact" className="how-btn how-btn-primary">
            Request Free Draft
          </Link>
          <Link to="/services" className="how-btn how-btn-outline">
            View Packages
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
