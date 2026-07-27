import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ff4d4d",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🍔 Foodie</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
          Login
        </Link>
        <Link to="/register" style={{ backgroundColor: "white", color: "#ff4d4d", padding: "8px 15px", borderRadius: "5px", textDecoration: "none", fontWeight: "bold" }}>
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;