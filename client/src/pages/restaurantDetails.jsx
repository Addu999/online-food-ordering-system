import foodData from "../Data/foodData";

import { useParams } from "react-router-dom";

function RestaurantDetails() {
  const { name } = useParams();
 const restaurantItems = foodData.filter(
  (item) => item.name === name
);



return (
  <div style={{ padding: "30px" }}>
    <h1>{name}</h1>

    {restaurantItems.map((item) => (
      <div
        key={item.id}
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          width="200"
          style={{ borderRadius: "10px" }}
        />

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>
      </div>
    ))}
  </div>
);
  
}

export default RestaurantDetails;