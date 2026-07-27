import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar-container {
            background-color: #ff4d4d;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .navbar-links {
            display: flex;
            gap: 20px;
            align-items: center;
          }
          /* 📱 मोबाइल स्क्रीन के लिए (जब स्क्रीन 600px से छोटी होगी) */
          @media (max-width: 600px) {
            .navbar-container {
              flex-direction: column;
              gap: 15px;
              text-align: center;
            }
            .navbar-links {
              width: 100%;
              justify-content: center;
              flex-wrap: wrap;
              gap: 10px;
            }
          }
        `}
      </style>

      <nav className="navbar-container">
        <h2 style={{ margin: 0, fontSize: "24px" }}>🍔 Foodie</h2>

        <div className="navbar-links">
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
    </>
  );
}

export default Navbar;