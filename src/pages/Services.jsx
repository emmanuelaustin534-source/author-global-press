import { Link } from "react-router-dom";
import "../styles/Services.css";

const services = [
  {
    title: "Live Interview Feature",
    description:
      "A short recorded conversation about your book and author journey, transformed into a shareable audio feature for your website and social platforms.",
  },
  {
    title: "Written Interview Feature",
    description:
      "Answer a set of guided questions at your own pace. We craft a polished editorial article from your responses, sent to you for review before it goes live.",
  },
  {
    title: "Editorial Writing",
    description:
      "Every feature is professionally written in a magazine-style voice, designed to read like real journalism, not a sales page.",
  },
  {
    title: "Media Publication",
    description:
      "Your finished feature is published through recognized media platforms and wire services, giving your story real editorial placement.",
  },
  {
    title: "Author Visibility",
    description:
      "A permanent, searchable article that strengthens your online presence and helps new readers discover you and your book.",
  },
  {
    title: "Personal Branding",
    description:
      "A professionally told story builds credibility and authority, positioning you as a serious, established author in your genre.",
  },
];

function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <p className="services-label">What We Offer</p>
        <h1 className="services-heading">Services</h1>
        <p className="services-subheading">
          Every feature is built around one of two simple formats, backed by
          professional writing and real media placement.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h2>Ready to be featured?</h2>
          <p>Apply now and our editorial team will reach out to get started.</p>
          <Link to="/contact" className="btn btn-primary">
            Apply Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
