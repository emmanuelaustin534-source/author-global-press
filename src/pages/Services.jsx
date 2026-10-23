import { Link } from "react-router-dom";
import "../styles/Services.css";

const packages = [
  {
    name: "Starter Spotlight Package",
    price: "$70",
    popular: false,
    audience:
      "Best for newly published authors seeking initial media presence and baseline Google authority.",
    features: [
      "Custom feature article written by our editorial team ($0 complimentary drafting fee)",
      "Publication on 1 major news outlet (e.g., USA Wire)",
      "Permanent Google & Bing search engine indexing",
      "Direct clickable link to your Amazon book listing",
      "Basic media badge for your author website and social media",
      "Standard turnaround time (3-7 business days)",
    ],
  },
  {
    name: "Professional Syndication Package",
    price: "$160",
    popular: true,
    audience:
      "Ideal for authors looking to build strong search authority, wider reach, and premium media assets.",
    features: [
      "Custom feature article written by our editorial team ($0 complimentary drafting fee)",
      "Syndicated publication across 2 major news networks (e.g., USA Wire + Big News Network)",
      "High-authority backlinking to boost Amazon and website SEO",
      "Permanent search engine indexing",
      "High-resolution media badge and press release graphic for promotion",
      "Priority editorial queue (3-7 business days)",
    ],
  },
  {
    name: "Executive Press & Legacy Package",
    price: "$320",
    popular: false,
    audience:
      "Designed for established authors seeking maximum media footprint, top-tier syndication, and full press kits.",
    features: [
      "Custom high-impact feature article written by our senior editorial team",
      "Premium syndication across 3+ high-authority media and press outlets",
      "Advanced SEO keyword optimization for maximum search rank",
      "Direct Amazon purchase links and social media highlights",
      "Full press kit asset package (badges, social graphics, press release PDF)",
      "Expedited publishing days (3-7 business days)",
    ],
  },
];

function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <p className="services-label">Packages</p>
        <h1 className="services-heading">Choose Your Syndication Package</h1>
        <p className="services-subheading">
          Your draft is completely free. Read it first, and only choose a
          package once you love the article.
        </p>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div
              className={`package-card ${pkg.popular ? "popular" : ""}`}
              key={pkg.name}
            >
              {pkg.popular && (
                <span className="package-badge">Most Popular</span>
              )}

              <h2 className="package-name">{pkg.name}</h2>
              <p className="package-price">{pkg.price}</p>
              <p className="package-audience">{pkg.audience}</p>

              <ul className="package-features">
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`package-btn ${pkg.popular ? "package-btn-primary" : "package-btn-outline"}`}
              >
                Request Free Draft
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Not sure which package fits?</h2>
          <p>
            Request your free draft first. You will see your article before you
            decide anything.
          </p>
          <Link
            to="/contact"
            className="package-btn package-btn-primary services-cta-btn"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
