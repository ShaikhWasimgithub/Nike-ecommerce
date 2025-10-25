"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const trendingProducts = [
  {
    id: 1,
    name: "Summer Must-Haves: Air Max Dia",
    image: "/trending/product1.png",
  },
  {
    id: 2,
    name: "Air Jorden 11 Retro Low LE",
    image: "/trending/product2.png",
  },
];

const TrendingNow = () => {
  const router = useRouter();

  // Jab user "Shop Now" button par click kare to products page par le jao
  const handleShopNow = () => {
    router.push("/products");
  };

  return (
    <section className="w-full py-20 bg-transparent">
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Section Title */}
        <h2 className="text-[28px] font-semibold text-gray-900 mb-10">
          Trending Now
        </h2>

        {/* Hero Product */}
        <div className="relative w-full h-[480px] overflow-hidden mb-10">
          <Image
            src="/trending/hero-product.png"
            alt="Air Max 270"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

          {/* Text Overlay */}
          <div className="absolute top-[80px] left-[60px] text-white max-w-[480px]">
            <h3 className="text-[56px] leading-[60px] font-bold uppercase mb-4">
              React Presto
            </h3>
            <p className="text-[20px] leading-[28px] mb-6">
              With React foam for the most comfortable Presto ever.
            </p>
            <button
              onClick={handleShopNow}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Product Cards */}
        <div className="flex flex-wrap justify-between gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="relative w-[48%] h-[380px] rounded-2xl overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-black to-transparent" />
              <h4 className="absolute bottom-8 left-6 text-white text-[24px] font-medium">
                {product.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
