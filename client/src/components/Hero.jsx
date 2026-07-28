function Hero() {
  return (
    <>
      <style>
        {`
          .hero-container {
            text-align: center;
            padding: 80px 20px;
            box-sizing: border-box;
            width: 100%;
          }
          .hero-title {
            font-size: 55px;
            line-height: 1.2;
          }
          .hero-desc {
            font-size: 22px;
            color: gray;
          }

          /* 📱 मोबाइल स्क्रीन के लिए (जब स्क्रीन 600px से छोटी होगी) */
          @media (max-width: 600px) {
            .hero-container {
              padding: 40px 15px;
            }
            .hero-title {
              font-size: 32px;
            }
            .hero-desc {
              font-size: 16px;
            }
          }
        `}
      </style>

      <div className="hero-container">
        <h1 className="hero-title">🍕 Delicious Food Delivered Fast</h1>

        <p className="hero-desc">
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
    </>
  );
}

export default Hero;