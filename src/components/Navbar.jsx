import React from "react";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import { useCart } from "../context/CartContext";

function Navbar({ searchText, setSearchText }) {
  const { cart } = useCart() || { cart: [] };

  return (
    <div className="w-full flex flex-wrap justify-between items-center px-6 md:px-10 py-3 bg-blue-900 shadow-md gap-3">

      {/* --- Logo --- */}
      <Link to="/" className="flex items-center gap-2 no-underline">
        <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full">
          <GiForkKnifeSpoon className="text-2xl text-amber-600" />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
          Food Paradise
        </h1>
      </Link>

      {/* --- Search Bar (Visible on all screens) --- */}
      <form
        className="flex items-center bg-white rounded-full px-4 py-2 w-full md:w-[350px] lg:w-[400px] shadow-sm order-3 md:order-none"
        onSubmit={(e) => e.preventDefault()}
      >
        <BiSearchAlt2 className="text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search items..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="ml-3 w-full outline-none text-gray-700 text-sm"
        />
      </form>

      {/* --- Navbar Links --- */}
      <ul className="flex items-center gap-4 md:gap-8 font-medium mt-2 md:mt-0 text-white">
        <li>
          <Link to="/" className="text-white hover:text-amber-400 no-underline text-sm md:text-base">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="text-white hover:text-amber-400 no-underline text-sm md:text-base">
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/offers"
            className="text-white hover:text-amber-400 no-underline flex items-center gap-1 text-sm md:text-base"
          >
            <BiSolidOffer className="text-lg" />
            Offers
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/cart"
            className="text-white hover:text-amber-400 no-underline flex items-center gap-1 text-sm md:text-base"
          >
            <HiOutlineShoppingCart className="text-xl" />
            Cart
          </Link>
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
            {cart?.length || 0}
          </span>
        </li>
        <li>
          <Link to="/signin" className="text-white hover:text-amber-400 no-underline text-sm md:text-base">
            Sign In
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Navbar;
