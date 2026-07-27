import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ff4d4d",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "24px" }}>🍔 Foodie</h2>

      <div 
        style={{ 
          display: "flex", 
          gap: "15px", 
          alignItems: "center",
          flexWrap: "wrap" 
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
          Login
        </Link>
        <Link 
          to="/register" 
          style={{ 
            backgroundColor: "white", 
            color: "#ff4d4d", 
            padding: "6px 12px", 
            borderRadius: "5px", 
            textDecoration: "none", 
            fontWeight: "bold" 
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;