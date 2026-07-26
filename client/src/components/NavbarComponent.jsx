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

      <div>
       <Link to="/" style={{ color: "white", marginRight: "20px" }}>
  Home
</Link>

       <Link to="/menu" style={{ color: "white", marginRight: "20px" }}>
  Menu
</Link>

        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
  Cart
</Link>

        <Link to="/login" style={{ color: "white" }}>
  Login
</Link>
      </div>
    </nav>
  );
}

export default Navbar;