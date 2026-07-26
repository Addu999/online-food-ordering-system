import { useNavigate } from "react-router-dom";

function RestaurantCard({ name, image }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${name}`)}
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3>{name}</h3>
    </div>
  );
}

export default RestaurantCard;