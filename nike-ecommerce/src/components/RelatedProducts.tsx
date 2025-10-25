"use client";

import Image from "next/image";

const relatedProducts = [
  {
    id: 1,
    tag: "Best Seller",
    tagColor: "#D33918",
    name: "Nike Air Force 1 Mid '07",
    price: "$98.30",
    category: "Men's Shoes",
    colors: "6 Colours",
    image: "/related/related1.png",
  },
  {
    id: 2,
    tag: "Extra 20% Off",
    tagColor: "#007D48",
    name: "Nike Court Vision Low Next Nature",
    price: "$98.30",
    category: "Men's Shoes",
    colors: "4 Colours",
    image: "/related/related2.png",
  },
  {
    id: 3,
    tag: "Extra 10% Off",
    tagColor: "#007D48",
    name: "Nike Dunk Low Retro",
    price: "$98.30",
    category: "Men's Shoes",
    colors: "6 Colours",
    image: "/related/related3.png",
  },
];

export default function RelatedProducts() {
  return (
    <div className="w-full flex justify-center mt-[100px] pb-[80px] bg-white">
      <div className="w-[1440px] flex flex-col">
        {/* Title */}
        <h2 className="text-[24px] font-medium text-[#111111] mb-[40px] ml-[48px]">
          You Might Also Like
        </h2>

        {/* Cards */}
        <div className="flex justify-center gap-[24px] px-[48px]">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[12px] w-[432px] h-[520px] cursor-pointer"
            >
              <div className="relative w-[432px] h-[432px] rounded-[4px] overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
                <div
                  className="absolute top-[16px] left-[16px] px-[14px] py-[4px] rounded-[20px] bg-white text-[16px] font-medium"
                  style={{ color: item.tagColor }}
                >
                  {item.tag}
                </div>
              </div>

              <div className="flex flex-col gap-[2px] px-[4px]">
                <div className="flex justify-between items-center">
                  <span className="text-[16px] font-medium text-[#111111]">
                    {item.name}
                  </span>
                  <span className="text-[16px] font-medium text-[#111111]">
                    {item.price}
                  </span>
                </div>
                <p className="text-[16px] text-[#757575]">{item.category}</p>
                <p className="text-[16px] text-[#757575]">{item.colors}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
