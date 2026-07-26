import { useParams } from "react-router-dom";
import menuData from "../Data/menuData";

function RestaurantMenu({ cart, setCart }) {
  const { restaurantName } = useParams();

  const menu = menuData.filter(
    (item) => item.restaurant === restaurantName
  );
  const addToCart = (item) => {
  setCart([...cart, item]);
  alert(`${item.name} added to cart`);
};

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        {restaurantName} Menu
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {menu.map((item) => (
          <div
            key={item.id}
            style={{
              width: "220px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3>{item.name}</h3>

            <h4>₹{item.price}</h4>

            <button onClick={() => addToCart(item)}>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;