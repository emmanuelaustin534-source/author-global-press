import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          Author Global Press
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/stories" onClick={() => setMenuOpen(false)}>
            Stories
          </Link>
          <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            to="/contact"
            className="navbar-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get Featured
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
