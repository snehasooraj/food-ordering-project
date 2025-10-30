// src/pages/Home.jsx

import React, { useState } from "react";
import Categories from "../Categories";
import FoodItems from "./FoodItems";

function Home({ searchText }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* --- Category Section --- */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        {Categories.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCategory(item.name)}
            className={`flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-105 ${
              selectedCategory === item.name ? "text-blue-600" : "text-gray-700"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-transparent hover:border-blue-500 shadow-md"
            />
            <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>

      {/* --- Food Items Section --- */}
      {/* Pass category + search to FoodItems */}
      <FoodItems category={selectedCategory} searchText={searchText} />
    </div>
  );
}

export default Home;
