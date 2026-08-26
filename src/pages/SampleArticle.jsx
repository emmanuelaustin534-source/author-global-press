import { Link } from "react-router-dom";
import "../styles/SampleArticle.css";

function SampleArticle() {
  return (
    <div className="article-page">
      <div className="article-banner">
        <div className="container">
          <p className="article-tag">Sample Feature · Fiction</p>
          <h1>Finding the Words: How Elena Marsh Turned Grief Into a Novel</h1>
          <p className="article-meta">Example feature · 4 min read</p>
        </div>
      </div>

      <div className="container article-body">
        <p className="article-lede">
          Every author's journey starts somewhere unexpected. For Elena Marsh,
          it started in a hospital waiting room, with a notebook she never meant
          to fill.
        </p>

        <p>
          Marsh had spent nearly a decade working in nonprofit communications
          before she ever considered writing fiction. It wasn't until she
          experienced a personal loss that she began writing simply to make
          sense of what she was feeling. What started as private notes slowly
          became the foundation for her debut novel.
        </p>

        <blockquote>
          "I wasn't trying to write a book. I was trying to survive a Tuesday."
        </blockquote>

        <p>
          That honesty carried through into her writing process. Rather than
          outlining a plot in advance, Marsh let the story emerge from real
          emotional moments, later shaping them into a narrative readers could
          follow. The result is a novel that feels less constructed and more
          discovered.
        </p>

        <h2>Why She Chose to Share Her Story Publicly</h2>
        <p>
          Many first-time authors hesitate before stepping into the public eye.
          For Marsh, the decision came down to purpose: she wanted readers going
          through similar experiences to feel less alone. A professionally
          written feature gave her a way to introduce both herself and her book
          with the credibility of real media placement, rather than a
          self-promotional post.
        </p>

        <h2>What Comes Next</h2>
        <p>
          With her debut now published and distributed through recognized media
          platforms, Marsh is already working on her second book. Her feature
          remains online indefinitely, continuing to introduce new readers to
          her work long after its initial publication.
        </p>

        <div className="article-cta">
          <h3>Want a feature like this for your own book?</h3>
          <Link to="/contact" className="btn btn-primary">
            Get Featured →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SampleArticle;
