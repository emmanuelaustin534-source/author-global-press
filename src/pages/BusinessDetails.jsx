import { Link } from "react-router-dom";
import { business, disclosure } from "../data/business";
import "../styles/Legal.css";

function BusinessDetails() {
  const rows = [
    { label: "Legal / business name", value: business.legalName },

    {
      label: "Email",
      value: business.email,
      href: business.email ? "mailto:" + business.email : "",
    },
    { label: "Website", value: business.website, href: business.website },
  ].filter((row) => row.value);

  return (
    <div className="legal-page">
      <div className="container legal-body">
        <p className="legal-label">Trust</p>
        <h1>Business Details</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        <div className="details-list">
          {rows.map((row) => (
            <div className="details-row" key={row.label}>
              <p className="details-label">{row.label}</p>
              <p className="details-value">
                {row.href ? <a href={row.href}>{row.value}</a> : row.value}
              </p>
            </div>
          ))}
        </div>

        <h2>What we do</h2>
        <p>
          {business.brandName} writes editorial features for published authors
          and arranges their distribution through third-party media and press
          outlets.
        </p>

        <h2>How we work</h2>
        <p>
          We write your draft at no cost. You review it, and nothing is
          published unless you approve it. You choose a package only after you
          have approved the finished draft. Read our{" "}
          <Link to="/approval-policy">Approval Policy</Link> for the full
          process.
        </p>

        <h2>Disclosure</h2>
        <p>{disclosure}</p>

        <h2>Questions</h2>
        <p>
          You can reach us anytime through our{" "}
          <Link to="/contact">Contact page</Link>.
        </p>
      </div>
    </div>
  );
}

export default BusinessDetails;
