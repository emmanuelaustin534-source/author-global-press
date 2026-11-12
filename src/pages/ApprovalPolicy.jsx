import { Link } from "react-router-dom";
import { disclosure } from "../data/business";
import "../styles/Legal.css";

function ApprovalPolicy() {
  return (
    <div className="legal-page">
      <div className="container legal-body">
        <p className="legal-label">Trust</p>
        <h1>Author Agreement and Approval Policy</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        <h2>1. Your draft is free</h2>
        <p>
          We write your feature at no cost. Requesting a draft does not commit
          you to anything.
        </p>

        <h2>2. You review everything first</h2>
        <p>
          You receive the complete draft by email. Take the time you need to
          read it and tell us about any corrections.
        </p>

        <h2>3. Nothing is published without your approval</h2>
        <p>
          Your feature is only published after you approve it in writing. A
          reply by email is enough.
        </p>

        <h2>4. You choose a package after approving</h2>
        <p>
          Once you have approved the draft, you choose the package that fits
          your goals. We confirm the publication fee and the distribution
          details with you before you authorize publication.
        </p>

        <h2>5. If you decide not to proceed</h2>
        <p>
          If you decide not to move forward after reviewing your draft, you owe
          us nothing.
        </p>

        <h2>6. Distribution</h2>
        <p>
          Features are distributed through third-party outlets. Publication
          dates, search indexing, and search rankings are outside our control.{" "}
          {disclosure}
        </p>

        <h2>7. Questions</h2>
        <p>
          If anything is unclear, reach out through our{" "}
          <Link to="/contact">Contact page</Link> before you decide.
        </p>
      </div>
    </div>
  );
}

export default ApprovalPolicy;
