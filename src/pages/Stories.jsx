import { Link } from "react-router-dom";
import "../styles/Stories.css";
import { stories } from "../data/stories";

function Stories() {
  return (
    <div className="stories-page">
      <div className="container">
        <p className="stories-label">Recent Placements</p>
        <h1 className="stories-heading">Recently Published Features</h1>
        <Link to="/sample-article" className="stories-sample-link">
          See a sample feature →
        </Link>

        <div className="stories-list">
          {stories.map((story) => (
            <article className="story-card" key={story.number}>
              {story.photo && (
                <img
                  className="story-photo"
                  src={story.photo}
                  alt={story.subtitle}
                  loading="lazy"
                />
              )}
              <div className="story-body">
                <p className="story-number">{story.number}</p>
                <p className="story-category">{story.category}</p>
                <span className="story-badge">
                  Published via {story.source}
                  {story.altSource ? " and " + story.altSource : ""}
                </span>
                <h2 className="story-title">{story.title}</h2>
                <h3 className="story-subtitle">{story.subtitle}</h3>
                <p className="story-excerpt">{story.excerpt}</p>
                <div className="story-links">
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="story-link"
                  >
                    Read on {story.source} →
                  </a>
                  {story.altLink && (
                    <a
                      href={story.altLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="story-link story-link-alt"
                    >
                      Also on {story.altSource} →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;
