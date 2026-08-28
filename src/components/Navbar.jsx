import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-glassy" : ""}`}>
      <div className="container navbar-inner">
        <Logo />

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
