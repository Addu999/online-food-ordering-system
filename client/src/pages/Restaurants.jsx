import { useParams } from "react-router-dom";
import restaurantData from "../Data/restaurantData";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  const { category } = useParams();

  const restaurants = restaurantData.filter(
    (item) => item.category === category
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>
        {category} Restaurants
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;