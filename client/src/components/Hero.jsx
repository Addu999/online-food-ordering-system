function Hero() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
      
    >
      <h1 style={{ fontSize: "55px" }}>🍕 Delicious Food Delivered Fast</h1>

      <p style={{ fontSize: "22px", color: "gray" }}>
        Order your favorite food online in minutes.
      </p>

      

      <button
        style={{
          padding: "12px 25px",
          background: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Order Now
      </button>
      
    </div>
  );
}

export default Hero;