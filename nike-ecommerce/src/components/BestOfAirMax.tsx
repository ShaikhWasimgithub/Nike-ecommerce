"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    tag: "Best Seller",
    tagColor: "text-[#D33918]",
    tagBg: "bg-white",
    name: "Nike Air Force 1 Mid '07",
    price: "$98.30",
    category: "Men's Shoes",
    colorCount: "6 Colour",
    image: "/products/air-force-1.png",
  },
  {
    id: 2,
    tag: "Extra 20% off",
    tagColor: "text-[#007D48]",
    tagBg: "bg-white",
    name: "Nike Court Vision Low Next Nature",
    price: "$98.30",
    category: "Men's Shoes",
    colorCount: "4 Colour",
    image: "/products/court-vision.png",
  },
  {
    id: 3,
    tag: "Extra 10% off",
    tagColor: "text-[#007D48]",
    tagBg: "bg-white",
    name: "Nike Dunk Low Retro",
    price: "$98.30",
    category: "Men's Shoes",
    colorCount: "6 Colour",
    image: "/products/dunk-low.png",
  },
];

export default function BestOfAirMax() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto h-[682px] bg-white overflow-hidden px-12 mt-[60px]">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-[1344px] mx-auto h-[30px] mb-[48px]">
        <h2 className="text-[24px] font-medium leading-[30px] text-[#111111] font-['Helvetica_Neue']">
          Best of Air Max
        </h2>
      </div>

      {/* Product Carousel */}
      <div className="flex justify-between items-center gap-6 w-full max-w-[1344px] mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start w-[432px] h-[520px] gap-3 relative"
          >
            {/* Product Image */}
            <div className="relative w-[432px] h-[432px] rounded-md bg-[#F5F5F5] overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />

              {/* Tag */}
              <div
                className={`absolute left-4 top-4 px-[14px] py-[4px] rounded-[20px] flex items-center justify-center ${item.tagBg}`}
              >
                <span
                  className={`text-[16px] font-medium leading-[24px] ${item.tagColor}`}
                >
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col items-start w-[432px] h-[76px] px-1 gap-[2px]">
              {/* Title + Price */}
              <div className="flex justify-between w-full h-[24px]">
                <h3 className="text-[16px] font-medium text-[#111111] leading-[24px] font-['Helvetica_Neue']">
                  {item.name}
                </h3>
                <p className="text-[16px] font-medium text-[#111111] leading-[24px]">
                  {item.price}
                </p>
              </div>

              {/* Category */}
              <p className="text-[16px] font-normal text-[#757575] leading-[24px] font-['Helvetica_Neue']">
                {item.category}
              </p>

              {/* Colors */}
              <p className="text-[16px] font-normal text-[#757575] leading-[24px] font-['Helvetica_Neue']">
                {item.colorCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
