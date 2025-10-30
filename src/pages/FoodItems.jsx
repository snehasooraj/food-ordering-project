// src/pages/FoodItems.jsx

import React from "react";
import Button from "react-bootstrap/Button";
import FoodData from "./FoodData";
import { useCart } from "../context/CartContext";

function FoodItems({ category, searchText }) {
  const { addToCart } = useCart();

  // ✅ Convert search text to lowercase for case-insensitive matching
  const search = searchText?.toLowerCase() || "";

  // ✅ Apply S2 rule: If search exists → ignore category
  let filteredItems;

  if (search.trim() !== "") {
    filteredItems = FoodData.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
  } else {
    filteredItems =
      !category || category === "All"
        ? FoodData
        : FoodData.filter((item) => item.category === category);
  }

  return (
    <div className="p-6">
      {/* Heading */}
      <h2 className="text-center text-2xl font-semibold text-blue-800 mb-6">
        {search
          ? `Search results for "${searchText}"`
          : category
          ? `${category} Dishes`
          : "All Dishes"}
      </h2>

      {/* ❗ If no items match search */}
      {filteredItems.length === 0 && (
        <p className="text-center text-gray-600 text-lg mt-10">
          ❌ No items found for: <span className="font-semibold">"{searchText}"</span>
        </p>
      )}

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">₹{item.price}</p>
            <Button
              variant="success"
              className="mt-auto"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
