import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">Author Global Press</p>
          <p className="footer-tagline">
            Turning author journeys into professionally written editorial
            features, published through recognized media platforms.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navigate</h3>
          <Link to="/">Home</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        <div className="footer-links">
          <h3>Follow</h3>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Author Global Press. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
