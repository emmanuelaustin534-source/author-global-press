import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Home.css";

gsap.registerPlugin(ScrollTrigger);

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

const stats = [
  { value: 120, suffix: "+", label: "Authors Featured" },
  { value: 140, suffix: "+", label: "Articles Published" },
  { value: 18, suffix: "", label: "Countries Reached" },
  { value: 6, suffix: "", label: "Media Platforms" },
];

const testimonials = [
  {
    quote:
      "Working with Author Global Press gave my book a level of credibility I couldn't have built on my own. The article read like something from a real publication, not a paid promotion.",
    name: "Elena Marsh",
    role: "Debut Novelist",
  },
  {
    quote:
      "The interview felt like a real conversation, not an interrogation. What came back was genuinely well written, and it's still bringing new readers to my site months later.",
    name: "Marcus Webb",
    role: "Memoir Author",
  },
  {
    quote:
      "I was nervous about being featured publicly, but the team made the whole process easy and respectful. I got to review everything before it went live.",
    name: "Priya Anand",
    role: "Nonfiction Author",
  },
];

const faqs = [
  {
    q: "What is Author Global Press?",
    a: "We are an editorial feature service for authors. We interview you about your book and your journey, write a professional article about your story, and publish it through recognized media platforms.",
  },
  {
    q: "How does the interview work?",
    a: "You choose one of two formats. A Live Interview is a short recorded conversation about your book and your story. A Written Interview is a set of simple questions you answer at your own pace.",
  },
  {
    q: "Will I get to approve the article before it is published?",
    a: "Yes. Your feature is sent to you for review and approval first, and nothing goes live until you are happy with it.",
  },
  {
    q: "Where will my feature be published?",
    a: "Finished features can be published on respected platforms such as USA Wire and Digital Journal, giving your story a lasting and searchable online presence.",
  },
  {
    q: "Can I share my published feature?",
    a: "Absolutely. Once it is live, you are welcome to share the link on your website, social media, author bio, newsletter, or anywhere else you promote your work.",
  },
  {
    q: "Who can apply to be featured?",
    a: "Any author with a story to tell, whether you are independent, self-published, or traditionally published, and whether you write fiction, nonfiction, memoir, poetry, or business books.",
  },
  {
    q: "How do I get started?",
    a: "Head to the Contact page and fill out the short application form. Our editorial team will reach out to you to talk through the next steps.",
  },
];

function Home() {
  const statRefs = useRef([]);
  const cardRefs = useRef([]);
  const testimonialRefs = useRef([]);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    // Count-up animation for stats
    statRefs.current.forEach((el, i) => {
      if (!el) return;
      const target = stats[i].value;
      const counter = { val: 0 };

      gsap.to(counter, {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.floor(counter.val) + stats[i].suffix;
        },
      });
    });

    // Fade/slide-in animation for "Why Us" cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-us-grid",
          start: "top 80%",
          once: true,
        },
      },
    );

    // Fade/slide-in animation for testimonial cards
    gsap.fromTo(
      testimonialRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 80%",
          once: true,
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
            {reasons.map((reason, i) => (
              <div
                className="why-us-card"
                key={reason.title}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={stat.label}>
              <p
                className="stat-number"
                ref={(el) => (statRefs.current[i] = el)}
              >
                0{stat.suffix}
              </p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="logos">
        <div className="container">
          <p className="logos-label">As Featured Through</p>
          <div className="logos-row">
            <span>USA Wire</span>
            <span>Ap News</span>
            <span>Global Press Wire</span>
            <span>Digital Journal</span>
            <span>Market Watch Wire</span>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <p className="testimonials-label">What Authors Say</p>
          <h2 className="testimonials-heading">
            Real Stories, Real Confidence
          </h2>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                className="testimonial-card"
                key={t.name}
                ref={(el) => (testimonialRefs.current[i] = el)}
              >
                <p className="testimonial-quote">"{t.quote}"</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container faq-inner">
          <p className="faq-label">FAQ</p>
          <h2 className="faq-heading">Questions Authors Often Ask</h2>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                key={faq.q}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? "−" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
