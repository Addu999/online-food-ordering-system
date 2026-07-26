import { useNavigate } from "react-router-dom";
function OrderSuccess({ setCart }) {
    const navigate = useNavigate();
    setCart([]);
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for your order.</p>
      <button
  onClick={() => navigate("/")}
  style={{
    padding: "10px 20px",
    marginTop: "20px",
    cursor: "pointer",
  }}
>
  Back To Home
</button>
    </div>
  );
}

export default OrderSuccess;