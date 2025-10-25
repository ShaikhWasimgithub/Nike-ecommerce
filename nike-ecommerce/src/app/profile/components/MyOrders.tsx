"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

const orders = [
  {
    id: 1,
    name: "Nike Air Force 1 Mid '07",
    date: "Estimated arrival 24 Sep 2025",
    price: 98.3,
    size: "10",
    quantity: 2,
    image: "/air1.png",
  },
  {
    id: 2,
    name: "Nike Air Max 1 ’86 Original",
    date: "Delivered on 04 August",
    price: 104.26,
    size: "9",
    quantity: 1,
    image: "/air2.png",
  },
  {
    id: 3,
    name: "Nike Air Force 1 Low Retro",
    date: "Delivered on 04 August",
    price: 116.57,
    size: "9",
    quantity: 1,
    image: "/air3.png",
  },
];

export default function MyOrders() {
  return (
    <div className="w-full flex flex-col gap-[40px] mt-[40px] mb-[120px] pb-[60px]">
      {/*  Page Title */}
      <h2 className="text-[28px] font-semibold text-[#111111] mb-2">
        My Orders
      </h2>

      {/* Order List */}
      {orders.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row md:items-center gap-[12px] border-b border-[#E5E5E5] pb-[24px]"
        >
          {/* Product Image */}
          <div className="w-[170px] h-[170px] bg-[#F5F5F5] rounded-[8px] overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              width={170}
              height={170}
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-[10px] w-full">
            {/* Delivery Status */}
            <p
              className={`text-[16px] font-medium leading-[24px] ${
                item.date.includes("Estimated")
                  ? "text-[#D37918]"
                  : "text-[#007D48]"
              }`}
            >
              {item.date}
            </p>

            {/* Product Title + Price */}
            <div className="flex justify-between items-center w-full flex-wrap">
              <h2 className="text-[20px] font-medium leading-[28px] text-[#111111]">
                {item.name}
              </h2>
              <p className="text-[20px] font-medium leading-[28px] text-[#111111]">
                ${item.price}
              </p>
            </div>

            {/* Category */}
            <p className="text-[16px] font-normal leading-[24px] text-[#757575]">
              Men’s Shoes
            </p>

            {/* Size, Quantity, and Cancel */}
            <div className="flex justify-between items-center w-full flex-wrap gap-[12px]">
              <div className="flex items-center gap-[20px] flex-wrap">
                <div className="flex items-center gap-[10px]">
                  <span className="text-[16px] text-[#757575] leading-[24px]">
                    Size
                  </span>
                  <span className="text-[16px] font-medium text-[#111111] leading-[24px]">
                    {item.size}
                  </span>
                </div>

                <div className="flex items-center gap-[10px]">
                  <span className="text-[16px] text-[#757575] leading-[24px]">
                    Quantity
                  </span>
                  <span className="text-[16px] font-medium text-[#111111] leading-[24px]">
                    {item.quantity}
                  </span>
                </div>
              </div>

              {/*  Cancel Button */}
              <button className="flex items-center gap-[6px] text-[#D33918] hover:text-red-700 transition">
                <Trash2 size={20} strokeWidth={1.8} />
                <span className="text-[16px] font-medium leading-[24px]">
                  Cancel Order
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
