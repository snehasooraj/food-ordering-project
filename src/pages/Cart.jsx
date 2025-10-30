// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <p>Add some delicious items to see them here!</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-md bg-white p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.category}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
