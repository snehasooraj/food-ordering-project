// src/App.jsx

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import FoodItems from "./pages/FoodItems";

import { CartProvider } from "./context/CartContext";

function App() {
  // ✅ Search text state stored globally
  const [searchText, setSearchText] = useState("");

  return (
    <CartProvider>
      <Router>
        {/* Pass search state to Navbar */}
        <Navbar searchText={searchText} setSearchText={setSearchText} />

        <Routes>
          {/* Pass searchText to Home */}
          <Route path="/" element={<Home searchText={searchText} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/food/:category" element={<FoodItems />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
