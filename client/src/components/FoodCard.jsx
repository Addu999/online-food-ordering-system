import { Link } from "react-router-dom";

function FoodCard({ name, price, image }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
     {image && (
  <img
    src={image}
    alt={name}
    style={{
      width: "200px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />
)}

      <h2 style={{ marginBottom: "30px" }}>{name}</h2>

<Link to={`/restaurant/${name}`}>
  <button
    style={{
      background: "#ff4d4d",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    View More Items
  </button>
</Link>
    </div>
  );
}

export default FoodCard;