"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus } from "lucide-react";
import { Trash2 } from "lucide-react"; //  Recycle bin icon

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = 10; // example charge
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh] text-gray-500 text-lg">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="relative flex justify-between gap-[102px] w-[1344px] mx-auto mt-[106px] mb-[100px]">
      {/*  Product List */}
      <div className="flex flex-col gap-[28px] w-[849px]">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 w-full h-[170px]"
          >
            {/* Product Image */}
            <div className="w-[170px] h-[170px] bg-[#F5F5F5] flex justify-center items-center rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={170}
                height={170}
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2 w-[667px] h-[138px]">
              <p className="text-[#D37918] text-[16px] font-medium">
                Estimated Arrival: 25 Oct - 28 Oct
              </p>

              {/* Title + Price */}
              <div className="flex justify-between">
                <h2 className="text-[20px] font-medium text-[#111]">
                  {item.name}
                </h2>
                <p className="text-[20px] font-medium text-[#111]">
                  ₹{item.price}
                </p>
              </div>

              <p className="text-[16px] text-[#757575]">
                Category: {item.category}
              </p>

              {/* Foot Section (size + qty + remove) */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  {/* Size */}
                  <div className="flex items-center gap-2">
                    <p className="text-[#757575] text-[16px]">Size:</p>
                    <span className="text-[#111111] text-[16px] font-medium">
                      {item.size}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center bg-[#F5F5F5] px-4 py-1 rounded-full gap-3">
                    <p className="text-[#757575] text-[16px]">Qty</p>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="p-1"
                    >
                      <Minus size={18} />
                    </button>
                    <p className="text-[#111111] font-medium">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#D33918]"
                >
                  <Trash2 size={22} /> {/* <- Recycle bin icon */}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="flex flex-col gap-[30px] w-[400px] h-[310px]">
        <h2 className="text-[24px] font-medium text-[#111]">Summary</h2>

        {/* Details */}
        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="text-[20px] text-[#111]">Subtotal</p>
              <p className="text-[20px] font-medium text-[#111]">₹{subtotal}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-[20px] text-[#111]">Delivery Charges</p>
              <p className="text-[20px] font-medium text-[#111]">₹{delivery}</p>
            </div>
          </div>

          <div className="flex justify-between border-y border-[#E5E5E5] py-3">
            <p className="text-[20px] font-medium text-[#111]">Total</p>
            <p className="text-[20px] font-medium text-[#111]">₹{total}</p>
          </div>
        </div>

        <button className="bg-[#111111] text-white rounded-[30px] py-[18px] w-full font-medium text-[16px] hover:bg-[#333]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
