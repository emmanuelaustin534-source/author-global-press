import { Link } from "react-router-dom";
import "../styles/Stories.css";

const stories = [
  {
    number: "01",
    category: "Memoir",
    title: "From the Hills of Kentucky to the Written Word",
    subtitle: "The Life and Voice of Shafter Bailey",
    excerpt:
      "A U.S. Marine veteran and career educator turned to fiction and memoir to explore truth, resilience, and legacy, writing on despite losing his voice to illness.",
    link: "https://usawire.com/hills-of-kentucky-life-and-voice-of-shafter-bailey/",
    source: "USA Wire",
  },
  {
    number: "02",
    category: "Spirituality",
    title: "Louise Dupont's Hidden Treasures",
    subtitle: "A Spiritual Voyage",
    excerpt:
      "A Winnipeg mother transforms grief into a deeply personal book about loss, memory, and the quiet moments of meaning that remain after tragedy.",
    link: "https://usawire.com/louise-dupont-hidden-treasures-spiritual-voyage/",
    source: "USA Wire",
  },
  {
    number: "03",
    category: "Wellness",
    title: "Curiosity as a Tool for Transformation",
    subtitle: "Dr. Sabine O'Laughlin",
    excerpt:
      "A pathologist turned wellness coach draws on two decades studying death to help high-achieving professionals rediscover fulfillment, curiosity, and balance.",
    link: "https://usawire.com/sabine-olaughlin-curiosity-tool-for-transformation/",
    source: "USA Wire",
  },
  {
    number: "04",
    category: "Fiction",
    title: "Sailing Into Cozy Mystery Excellence",
    subtitle: "RM Howe's Azalea and I Series",
    excerpt:
      "A third-generation novelist relaunches her comedic mystery series with a sun-soaked Caribbean adventure built on wit, friendship, and lighthearted crime.",
    link: "https://usawire.com/cozy-mystery-excellence-navigating-humor-mayhem-murder-in-the-caribbean/",
    source: "USA Wire",
  },
  {
    number: "05",
    category: "Leadership",
    title: "A Tactical Blueprint for Resilience",
    subtitle: "Loxley John on Overcoming Helplessness",
    excerpt:
      "A veteran police instructor blends tactical training with biblical wisdom to offer a disciplined, ten-part framework for facing life's hardest obstacles.",
    link: "https://usawire.com/veteran-police-instructor-loxley-john-partners-with-worldwide-fm-to-combat/",
    source: "USA Wire",
  },
  {
    number: "06",
    category: "Business",
    title: "From Boardrooms to Breakthroughs",
    subtitle: "Julianna Newland Explores Workplace Realities",
    excerpt:
      "An Indianapolis author's debut book brings a humorous, honest lens to the everyday absurdities and pressures of the modern workplace.",
    link: "https://trans4mind.com/counterpoint/index-creativity-career/from-boardrooms-to-breakthroughs-julianna-newlandrsquos-humorous-blueprint-for-navigating-the-modern-workplace.html",
    source: "Trans4mind",
  },
  {
    number: "07",
    category: "Poetry",
    title: "The Poet Searching for the Sacred",
    subtitle: "Alan Altany on Faith, Struggle, and Beauty",
    excerpt:
      "A scholar and poet turns decades of addiction, anxiety, recovery, and spiritual searching into a Christian poetry series exploring suffering, grace, and the presence of the sacred.",
    link: "https://usawire.com/alan-altany-the-poet-searching-for-the-sacred-through-faith-struggle-beauty-of-life/",
    source: "USA Wire",
  },
];

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
              <p className="story-number">{story.number}</p>
              <p className="story-category">{story.category}</p>
              <h2 className="story-title">{story.title}</h2>
              <h3 className="story-subtitle">{story.subtitle}</h3>
              <p className="story-excerpt">
                {story.excerpt} Distributed via {story.source}.
              </p>
              <a
                href={story.link}
                target="_blank"
                rel="noopener noreferrer"
                className="story-link"
              >
                Read on {story.source} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stories;
