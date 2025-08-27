import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo */}
      <img src={logo} alt="All Sport Logo" className="w-52 mb-6" />

      {/* Heading */}
      <h2 className="text-lg font-bold text-center">ALL SPORT LOGIN</h2>
      <p className="text-gray-600 text-sm mt-2 text-center max-w-sm">
        Shop your styles, save top picks to your wishlist, track your orders &
        train with us.
      </p>

      {/* Form */}
      <form className="w-full max-w-sm mt-6 space-y-6">
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer w-full  border-2 rounded-md px-4 py-4 focus:bg-white  focus:outline-none focus:ring-1 focus:ring-black"
          />
          <label
            htmlFor="email"
            className="absolute left-4 -top-3 bg-white px-2 text-gray-500 text-sm transition-all duration-300
                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-focus:-top-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-sm peer-focus:text-black"
          >
            Email address*
          </label>
        </div>

        {/* Password */}
        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" "
            className="peer w-full border-2 rounded-md px-4 py-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
          />
          <label
            htmlFor="password"
            className="absolute left-4 -top-3 bg-white px-2 text-gray-500 text-sm transition-all duration-300
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-focus:-top-3 peer-focus:bg-white peer-focus:px-2 peer-focus:text-sm peer-focus:text-black"
          >
            Password*
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-5 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a
            href="#"
            className="text-sm text-black font-medium hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-black cursor-pointer hover:scale-103  text-white font-bold py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
        >
          LOG IN
        </button>
      </form>

      {/* Signup Link */}
      <p className="text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          to="signup"
          className="font-medium text-black hover:underline"
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
