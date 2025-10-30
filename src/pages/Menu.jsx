import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "₹299",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: "₹250",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.webp",
  },
  {
    id: 3,
    name: "Beef Burger",
    price: "₹149",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
  },
  {
    id: 4,
    name: "Masala Dosa",
    price: "₹180",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe-500x500.jpg",
  },
  {
    id: 5,
    name: "Chocolate Milkshake",
    price: "₹120",
    image: "https://cookilicious.com/wp-content/uploads/2025/01/Brownie-Milkshake-Recipe-20-scaled.jpg",
  },
  {
    id: 6,
    name: "Chicken Biryani",
    price: "₹320",
    image: "https://nodashofgluten.com/wp-content/uploads/2025/02/Hyderabadi-Chicken-Biryani-Recipe-1.png.webp",
  },
  {
    id: 7,
    name: "Grilled Sandwich",
    price: "₹140",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbO0pWgOAIMcF89AEutxg822W74k6Jx8Hnw&s",
  },
  {
    id: 8,
    name: "Pasta Alfredo",
    price: "₹270",
    image: "https://www.sharmispassions.com/wp-content/uploads/2015/12/alfredopasta2.jpg",
  },
  {
    id: 9,
    name: "Spring Rolls",
    price: "₹130",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTza89XuqcvI6HAxx4cgkRt2Q__7pusfLjiCQ&s",
  },
  {
    id: 10,
    name: "Ice Cream Sundae",
    price: "₹110",
    image: "https://assets.rbl.ms/21919567/origin.jpg",
  },
  {
    id: 11,
    name: "Tandoori Chicken",
    price: "₹350",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken.jpg",
  },
  {
    id: 12,
    name: "French Fries",
    price: "₹99",
    image: "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
  },
];

function Menu() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
        Our Menu 🍽️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden w-64 hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-amber-600 font-bold mt-2">{item.price}</p>
              <button className="mt-3 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
