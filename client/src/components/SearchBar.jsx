function SearchBar({ search, setSearch }) {
  return (
    <div style={{ textAlign: "center", margin: "30px 15px", boxSizing: "border-box" }}>
      <input
        type="text"
        placeholder="🔍 Search your favorite food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "12px",
          borderRadius: "8px",
          border: "2px solid #ff4d4d",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;