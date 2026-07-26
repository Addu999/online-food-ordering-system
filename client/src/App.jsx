import Login from './components/Login';
import Signup from './pages/Signup'; // 👈 Corrected import
import Footer from "./components/Footer";
import OrderSuccess from "./pages/OrderSuccess";
import Cart from "./pages/Cart";
import RestaurantMenu from "./pages/RestaurantMenu";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";

const handleLogout = () => {
  localStorage.removeItem('token'); // Token delete
  alert('Logged out successfully!');
  window.location.href = '/login'; // Wapas login par bhej do
};

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Routes>
        {/* 🚀 Login and Signup Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} /> {/* Backup route */}

        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
            />
          }
        />

        <Route
          path="/restaurants/:category"
          element={<Restaurants />}
        />

        <Route
          path="/restaurant/:restaurantName"
          element={
            <RestaurantMenu
              cart={cart}
              setCart={setCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/success"
          element={<OrderSuccess setCart={setCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;