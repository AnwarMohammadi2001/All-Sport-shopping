import React, { useState } from "react";

const HomeProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  // All standard sizes we want to display
  const allSizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div
      className="relative w-[350px] h-[440px] group cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Images */}
      <img
        src={hovered ? product.image2 : product.image1}
        alt={product.name}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Sizes Overlay */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white text-black flex justify-center gap-4 py-3 transition-all duration-500 ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {allSizes.map((size) => {
          const isAvailable = product.sizes.includes(size);

          return (
            <span
              key={size}
              className={`relative px-3 py-1 border border-black rounded-md text-sm transition ${
                isAvailable
                  ? "hover:bg-black hover:text-white cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              {size}
              {!isAvailable && (
                <span className="absolute left-0 top-1/2 w-full h-[1px] bg-black rotate-[-45deg]"></span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProductCard;
