function Categories({ category, setCategory }) {
  const categories = [
  "All",
  "Burger",
  "Pizza",
  "Biryani",
  "Momos",
  "Pasta",
  "French Fries",
];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        flexWrap: "wrap",
        marginBottom: "30px",
      }}
    >
      {categories.map((item, index) => (
        <button
          key={index}
          onClick={() => setCategory(item)}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "20px",
            background: category === item ? "#ff4d4d" : "#ddd",
            color: category === item ? "white" : "black",
            cursor: "pointer",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Categories;