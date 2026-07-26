import Navbar from "../components/NavbarComponent";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FoodCard from "../components/FoodCard";
import foodData from "../Data/foodData";
import axios from "axios";
import { useEffect, useState } from "react";

function Home({
  search,
  setSearch,
  category,
  setCategory,
}) {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
  axios.get("http://localhost:5000/api/food/menu")
    .then((res) => {
      setFoods(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  const filteredFood = foodData.filter((food) => {
  const searchMatch = food.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const categoryMatch =
    category === "All" || food.category === category;

  return searchMatch && categoryMatch;
});

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Categories
        category={category}
        setCategory={setCategory}
      />

    <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  {filteredFood.map((food) => (
  <FoodCard
    key={food._id}
    name={food.name}
    price={food.price}
    image={food.image}
  />
))}
</div>
    </>
  );
}

export default Home;