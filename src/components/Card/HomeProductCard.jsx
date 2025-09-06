import React, { useState } from "react";

const HomeProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[350px] h-[440px]  group cursor-pointer overflow-hidden"
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
        className={`absolute bottom-0 left-0 w-full bg-black/70 text-white flex justify-center gap-4 py-3 transition-all duration-500 ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {product.sizes.map((size, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-white rounded-md text-sm hover:bg-white hover:text-black transition"
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HomeProductCard;
