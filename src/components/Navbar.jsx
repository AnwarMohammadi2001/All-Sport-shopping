import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import NavLinks from "./NavLinks";
import { FaHeart, FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 px-12 z-50 ">
      <div className="grid grid-cols-3  relative">
        {/* Left: Logo */}
        <div className="flex items-center z-50">
          <img src={Logo} alt="logo" className="md:cursor-pointer w-28" />
          {/* Mobile menu button */}
          <div
            className="text-3xl md:hidden ml-4"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        {/* Center: NavLinks */}
        <div className="  md:flex justify-center hidden">
          <ul className="flex gap-1 uppercase items-center">
            <NavLinks />
          </ul>
        </div>

        {/* Right: Search & Icons */}
        <div className="md:flex hidden justify-end items-center space-x-6">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-56"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Wishlist Icon */}
          <button className="text-gray-600 hover:text-blue-500 transition-colors text-xl">
            <FaHeart />
          </button>

          {/* Account Icon */}
          <button className="text-gray-600 hover:text-blue-500 transition-colors text-xl">
            <FaUser />
          </button>

          {/* Shopping Bag Icon */}
          <button className="text-gray-600 hover:text-blue-500 transition-colors text-xl relative">
            <FaShoppingBag />
            {/* Optional: badge for items count */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
