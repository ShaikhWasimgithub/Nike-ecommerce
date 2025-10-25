"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

const favorites = [
  {
    id: 1,
    title: "Nike Dunk Low Retro SE",
    price: "$98.30",
    subtitle: "Men’s Shoes",
    colors: "6 Colour",
    tag: "Extra 20% off",
    tagColor: "#007D48",
    image: "/fav1.png",
  },
  {
    id: 2,
    title: "Nike Air Max 90 SE",
    price: "$98.30",
    subtitle: "Men’s Shoes",
    colors: "1 Colour",
    tag: "Best Seller",
    tagColor: "#D33918",
    image: "/fav2.png",
  },
  {
    id: 3,
    title: "Nike Legend Essential 3 Next Nature",
    price: "$98.30",
    subtitle: "Men’s Training Shoes",
    colors: "4 Colour",
    tag: "Extra 10% off",
    tagColor: "#007D48",
    image: "/fav3.png",
  },
];

export default function Favorites() {
  return (
    <div className="w-full flex flex-col mt-[40px] pb-[80px]">
      {/* Heading */}
      <h2 className="text-[28px] font-semibold text-[#111111] mb-[24px]">
        Favorites
      </h2>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-[24px]">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col gap-[12px] w-[348px] h-[436px] cursor-pointer transition-transform hover:scale-[1.02]"
          >
            {/* Image Container */}
            <div className="relative w-[348px] h-[348px] bg-[#F5F5F5] rounded-[4px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={348}
                height={348}
                className="object-contain transition-transform duration-300 hover:scale-105"
              />

              {/* Tag */}
              <div className="absolute left-[16px] top-[16px] bg-white rounded-[20px] h-[32px] flex items-center justify-center px-[14px]">
                <p
                  className="text-[16px] font-medium leading-[24px]"
                  style={{ color: item.tagColor }}
                >
                  {item.tag}
                </p>
              </div>

              {/* Heart Icon */}
              <div className="absolute top-[20px] right-[20px]">
                <Heart
                  className="w-[24px] h-[24px] text-[#111111] stroke-[1.5]"
                  fill="#111111"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-[2px] px-[4px] w-[348px] h-[76px]">
              {/* Title + Price */}
              <div className="flex justify-between items-center w-full">
                <h3 className="text-[16px] font-medium leading-[24px] text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-[16px] font-medium leading-[24px] text-[#111111]">
                  {item.price}
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-[16px] font-normal leading-[24px] text-[#757575]">
                {item.subtitle}
              </p>

              {/* Colors */}
              <p className="text-[16px] font-normal leading-[24px] text-[#757575]">
                {item.colors}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
