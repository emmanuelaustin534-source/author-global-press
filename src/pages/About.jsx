import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <p className="about-label">About Us</p>
        <h1 className="about-heading">Every Story Deserves to Be Told Well.</h1>
        <p className="about-intro">
          Author Global Press was founded on a simple belief: authors work hard
          to write their books, but too few ever get the chance to tell the
          story behind the story. We exist to close that gap.
        </p>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We help authors gain visibility, authority, and credibility by
            turning their personal journeys into professionally written
            editorial features, published through recognized media platforms. We
            don't just interview authors, we help the world understand why their
            story matters.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Editorial Standards</h2>
          <p>
            Every feature is written by a professional editorial team, reviewed
            for accuracy, and sent back to the author for approval before it
            ever goes live. Nothing is published without your sign-off.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Authors Trust Us</h2>
          <p>
            We treat every author's story with the same care and professionalism
            as any respected publication would. Our goal isn't just a
            nice-looking article, it's a lasting, credible media asset you can
            point to for years to come.
          </p>
        </div>

        <div className="about-cta">
          <Link to="/contact" className="btn btn-primary">
            Get Featured →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
