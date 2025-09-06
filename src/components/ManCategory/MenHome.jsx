import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import HomeProductCard from "../Card/HomeProductCard";

const MenHome = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Performance Gym Pants",
      image1: "men/image1.webp",
      image2: "men/image2.webp",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Training Shorts",
      image1: "men/image1.webp",
      image2: "men/image2.webp",
      sizes: ["M", "L", "XL"],
    },
    {
      id: 3,
      name: "Muscle Fit T-shirt",
      image1: "men/image1.webp",
      image2: "men/image2.webp",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 4,
      name: "Hooded Sweatshirt",
      image1: "men/image1.webp",
      image2: "men/image2.webp",
      sizes: ["M", "L", "XL"],
    },
  ];

  return (
    <div className="h-[90vh] w-full ">
      <div className="px-5 md:px-10 lg:px-12 pt-10">
        <h2 className="text-xl font-bold text-gray-700">Mens</h2>
        <div className="flex items-center justify-between gap-x-5">
          <div className="flex items-center gap-x-5">
            <p className="py-3 text-2xl font-bold text-black">
              Now live: The perfect lifter’s pants
            </p>
            <button className="underline text-xl font-semibold cursor-pointer hover:text-gray-700">
              View All
            </button>
          </div>
          <div className="flex items-center gap-x-5">
            <button
              ref={prevRef}
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer transition-colors duration-300"
            >
              <IoIosArrowBack />
            </button>
            <button
              ref={nextRef}
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer transition-colors duration-300"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mt-3"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <HomeProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MenHome;
