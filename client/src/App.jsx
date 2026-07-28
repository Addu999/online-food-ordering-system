import Login from './components/Login';
import Signup from './pages/Signup';
import Footer from "./components/footer";
import OrderSuccess from "./pages/OrderSuccess";
import Cart from "./pages/Cart";
import RestaurantMenu from "./pages/RestaurantMenu";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";

const handleLogout = () => {
  localStorage.removeItem('token');
  alert('Logged out successfully!');
  window.location.href = '/login';
};

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Fix for horizontal gap/overflow on mobile screens globally
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden !important;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} />

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