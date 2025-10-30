import React from "react";
import Button from "react-bootstrap/Button";

const offersData = [
  {
    id: 1,
    title: "🍕 Pizza Fiesta!",
    description: "Get 30% off on all pizzas this weekend.",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2019/06/homemade-pizza-2.jpg",
    discount: "30% OFF",
  },
  {
    id: 2,
    title: "🍔 Burger Bonanza",
    description: "Buy 1 Get 1 Free on all burgers!",
    image:
      "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
    discount: "BOGO OFFER",
  },
  {
    id: 3,
    title: "🍨 Dessert Delights",
    description: "Sweeten your day with 25% off desserts.",
    image:
      "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-01/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg",
    discount: "25% OFF",
  },
  {
    id: 4,
    title: "🥗 Healthy Combo",
    description: "Salad,Soup Combo starting at just $6.99!",
    image:
      "https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/681/presentation_7e349e18-661d-4904-8707-8d6acbe48576.jpeg",
    discount: "NEW COMBO",
  },
];

function Offers() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900 flex justify-center items-center gap-2">
        🛍️ <span>Special Offers</span>
      </h1>

      {/* ✅ Responsive & wraps properly without cutoff */}
      <div className="max-w-[1300px] mx-auto flex flex-wrap justify-center gap-8">
        {offersData.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-[280px] sm:w-[300px]"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[200px]">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {offer.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-green-600 font-semibold">
                  {offer.discount}
                </span>
                <Button
                  variant="success"
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1"
                >
                  Grab Deal
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
