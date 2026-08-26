import { Link } from "react-router-dom";
import "../styles/Logo.css";

function Logo() {
  return (
    <Link to="/" className="logo">
      <svg
        className="logo-mark"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#2952e3" />
        <text
          x="20"
          y="28"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="20"
          fontWeight="bold"
          fill="#ffffff"
        >
          A
        </text>
      </svg>
      <span className="logo-text">Author Global Press</span>
    </Link>
  );
}

export default Logo;
