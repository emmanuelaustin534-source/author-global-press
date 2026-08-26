import { Link } from "react-router-dom";
import "../styles/Home.css";

const reasons = [
  {
    title: "Professional Interviews",
    description:
      "A real conversation with an editorial team, not a form to fill out alone.",
  },
  {
    title: "Editorial Storytelling",
    description:
      "Your journey written in a genuine magazine voice, not a sales pitch.",
  },
  {
    title: "Searchable Online Articles",
    description:
      "A permanent, indexable feature that keeps working for you long after publication.",
  },
  {
    title: "Author Branding",
    description:
      "A polished feature that positions you as a credible, established author.",
  },
  {
    title: "Media Credibility",
    description:
      "Publication through recognized media platforms, not a self-published blog post.",
  },
  {
    title: "Press Publication",
    description:
      "Real placement on wire services and media outlets, with your approval before it goes live.",
  },
];

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-tag">An Editorial Feature Service for Authors</p>
          <h1 className="hero-title">
            Every Author Has a Story <span>Worth Publishing.</span>
          </h1>
          <p className="hero-subtitle">
            We transform your author journey into a professionally written
            editorial feature, published through recognized media platforms.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Featured →
            </Link>
            <Link to="/stories" className="btn btn-outline">
              View Author Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <p className="why-us-label">Why Authors Choose Us</p>
          <h2 className="why-us-heading">
            Built for Credibility, Not Just Content
          </h2>

          <div className="why-us-grid">
            {reasons.map((reason) => (
              <div className="why-us-card" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <p className="stat-number">120+</p>
            <p className="stat-label">Authors Featured</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">140+</p>
            <p className="stat-label">Articles Published</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">18</p>
            <p className="stat-label">Countries Reached</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">6</p>
            <p className="stat-label">Media Platforms</p>
          </div>
        </div>
      </section>

      <section className="logos">
        <div className="container">
          <p className="logos-label">As Featured Through</p>
          <div className="logos-row">
            <span>USA Wire</span>
            <span>UK Wire</span>
            <span>Global Press Wire</span>
            <span>Digital Journal</span>
            <span>Market Watch Wire</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
