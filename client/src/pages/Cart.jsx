import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Arey bhai, pehle login toh kar lo! 😉");
      navigate('/login');
      return;
    }

    if (cart.length === 0) {
      alert("Cart khali hai, pehle kuch delicious mangao!");
      return;
    }

    try {
      // 1. JWT Token ko decode karke user ID nikalna bina kisi library ke
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      
      const decoded = JSON.parse(jsonPayload);
      const userId = decoded.user?.id; // Backend payload structure ke hisab se

      if (!userId) {
        alert("Session expire ho gaya hai, fir se login karein.");
        navigate('/login');
        return;
      }

      const totalAmount = cart.reduce((total, item) => total + item.price, 0);
      
      // 2. Ab backend ko exact wahi data bhejenge jo use chahiye (user, items, totalAmount)
      const orderData = {
        user: userId, // 👈 Ye zaroori tha backend ke liye
        items: cart.map(item => ({
          foodItemId: item.id || item._id,
          quantity: 1
        })),
        totalAmount: totalAmount
      };

      await axios.post('http://localhost:5001/api/orders/place', orderData);

      alert('🎉 Order Placed Successfully!');
      navigate("/success");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Order lagane me koi dikkat aayi!');
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items added yet</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button 
              onClick={() => removeFromCart(item.id)}
              style={{ padding: "5px 10px", background: "#ff4d4d", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h2>
        Total: ₹{cart.reduce((total, item) => total + item.price, 0)}
      </h2>

      <h3>Order Summary</h3>
      <button
        onClick={handlePlaceOrder}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontWeight: "bold"
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;