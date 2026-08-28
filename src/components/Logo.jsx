import { Link } from "react-router-dom";
import "../styles/Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        src="/images/logo-icon.png"
        alt="Author Global Press"
        className="logo-mark"
      />
      <span className="logo-text">Author Global Press</span>
    </Link>
  );
}

export default Logo;
