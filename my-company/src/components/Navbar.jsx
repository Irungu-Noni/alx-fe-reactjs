import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#333", display: "flex", justifyContent: "center", gap: "20px" }}>
      {/* The Links are like clickable doors to each page */}
      <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
      <Link to="/services" style={{ margin: "0 10px" }}>Services</Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;