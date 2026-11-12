import { Link } from "react-router-dom";
import "../styles/Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-text">LitWire Media</span>
    </Link>
  );
}

export default Logo;
