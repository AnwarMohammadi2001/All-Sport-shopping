import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { PiHeartStraight } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { Link, Links } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 py-2 md:py-0 z-50 shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-5 md:px-12">
        <div className="grid grid-cols-3 items-center relative">
          {/* Center: NavLinks */}
          <div className="md:hidden flex items-center gap-x-5 py-2">
            <span>
              <HiOutlineMenuAlt2 size={24} className="cursor-pointer" />
            </span>
            <span>
              <FiSearch size={22} className="cursor-pointer" />
            </span>
          </div>
          <div className="hidden md:flex items-center gap-x-2 py-2 relative w-full">
            {/* Add relative here for submenu absolute positioning */}
            <NavLinks />
          </div>

          {/* Left: Logo */}
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer cursor-pointer w-34"
            />
            <div
              className="text-3xl md:hidden ml-4"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>

          {/* Right: Search & Icons */}
          <div className="flex justify-end items-center space-x-6">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <button className="text-gray-600 hidden md:block hover:text-blue-500 hover:-translate-y-1 transform transition-all duration-300">
              <PiHeartStraight size={26} />
            </button>
            <Link
              to="signin"
              className="text-gray-600 hover:text-blue-500 hover:-translate-y-1 transform transition-all duration-300"
            >
              <LuUser size={26} />
            </Link>
            <button className="text-gray-600 hover:text-blue-500 hover:-translate-y-1 transform transition-all duration-300">
              <AiOutlineShopping size={26} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
