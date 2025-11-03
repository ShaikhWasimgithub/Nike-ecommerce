"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import RelatedProducts from "@/components/RelatedProducts";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false); // <-- Added favorite state

  const productId = Array.isArray(id) ? id[0] : id;

  const sidebarImages = [
    "/shoes/side-1.png",
    "/shoes/side-2.png",
    "/shoes/side-3.png",
    "/shoes/side-4.png",
    "/shoes/side-5.png",
    "/shoes/side-6.png",
    "/shoes/side-7.png",
    "/shoes/side-8.png",
  ];

  useEffect(() => {
    const storedImage = localStorage.getItem("selectedProductImage");
    if (storedImage) setMainImage(storedImage);
  }, [id]);

  const [selectedImage, setSelectedImage] = useState(sidebarImages[0]);

  const handleNext = () => {
    const currentIndex = sidebarImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % sidebarImages.length;
    setSelectedImage(sidebarImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = sidebarImages.indexOf(selectedImage);
    const prevIndex =
      (currentIndex - 1 + sidebarImages.length) % sidebarImages.length;
    setSelectedImage(sidebarImages[prevIndex]);
  };

  const displayImage = mainImage || selectedImage;

  const colorImages = [
    "/colors/color1.png",
    "/colors/color2.png",
    "/colors/color3.png",
    "/colors/color4.png",
    "/colors/color5.png",
    "/colors/color6.png",
  ];

  // --- handle favorite toggle
  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-[1344px] mx-auto flex gap-12 pt-10 pl-[48px] pr-[30px] bg-white">
        <div className="flex gap-6 w-[656px] h-[665px]">
          <div className="flex flex-col gap-3 w-[60px] h-[665px]">
            {sidebarImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative w-[60px] h-[60px] rounded-md border ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                } bg-[#F5F5F5]`}
              >
                <Image
                  src={img}
                  alt={`thumb-${i}`}
                  fill
                  className="object-contain rounded-md"
                />
              </button>
            ))}
          </div>

          <div className="relative flex-1 bg-[#F5F5F5] rounded-lg h-[665px] flex items-center justify-center">
            {displayImage ? (
              <Image
                src={displayImage}
                alt="Main Shoe"
                width={566}
                height={665}
                className="object-contain transition-all duration-300"
                priority
              />
            ) : (
              <p className="text-gray-400">No image found</p>
            )}

            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
              <Star className="w-4 h-4 text-black fill-black" />
              <span className="text-sm font-medium text-black">
                Highly Rated
              </span>
            </div>

            <button
              onClick={handlePrev}
              className="absolute bottom-8 right-[80px] text-black text-2xl font-semibold hover:scale-110 transition"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute bottom-8 right-6 text-black text-2xl font-semibold hover:scale-110 transition"
            >
              ›
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-[30px] w-[455px]">
          <div className="flex flex-col gap-[14px]">
            <div className="flex flex-col gap-[9px]">
              <h1 className="text-[24px] leading-[30px] font-medium text-[#111111]">
                Nike Air Max 90 SE
              </h1>
              <p className="text-[16px] leading-[24px] text-[#757575] font-normal">
                Women's Shoes
              </p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[24px] leading-[30px] font-medium text-[#111111]">
                $140
              </span>
              <span className="text-[16px] leading-[24px] font-medium text-[#007D48]">
                Extra 20% off w/ code SPORT
              </span>
            </div>
          </div>

          {/* Color selector */}
          <div className="flex flex-row gap-[6px]">
            {colorImages.map((img, i) => (
              <div
                key={i}
                className={`relative w-[70px] h-[70px] rounded-[5px] border overflow-hidden cursor-pointer ${
                  i === 5 ? "border-[#111111]" : "border-[#E5E5E5]"
                } bg-[#F5F5F5]`}
              >
                <Image
                  src={img}
                  alt={`color-${i}`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Size + Buttons */}
          <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
              <span className="text-[16px] font-medium text-[#111111]">
                Select Size
              </span>
              <div className="flex items-center gap-[4px] cursor-pointer">
                <Image
                  src="/icons/ruler.svg"
                  alt="Size Guide"
                  width={24}
                  height={24}
                />
                <span className="text-[14px] font-medium text-[#111111]">
                  Size Guide
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[7px]">
              {[["5", "5.5", "6", "6.5", "7", "7.5"]].map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-[7px]">
                  {row.map((size, i) => (
                    <div
                      key={i}
                      className={`w-[70px] h-[48px] border border-[#CCCCCC] rounded-[4px] flex items-center justify-center ${
                        size === "5"
                          ? "bg-[#F5F5F5] text-[#CCCCCC] line-through"
                          : "text-[#111111]"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-[16px]">
            <button
              onClick={() => {
                addToCart({
                  id: productId!,
                  name: "Nike Air Max 90 SE",
                  price: 140,
                  image: displayImage || "/shoes/side-1.png",
                  category: "Women's Shoes",
                  size: "7",
                  quantity: 1,
                });
              }}
              className="w-[455px] h-[60px] bg-[#111111] text-white rounded-[30px] px-[20px] py-[18px] flex justify-center items-center gap-[10px] font-medium text-[16px]"
            >
              Add to Bag
            </button>

            {/*  Favorite Button Clickable */}
            <button
              onClick={handleFavorite}
              className={`w-[455px] h-[60px] border rounded-[30px] px-[20px] py-[18px] flex justify-center items-center gap-[10px] font-medium text-[16px] transition ${
                isFavorite
                  ? "border-[#111111] text-[#111111] bg-[#F5F5F5]"
                  : "border-[#CCCCCC] text-[#111111]"
              }`}
            >
              <Image
                src={
                  isFavorite ? "/icons/heart-filled.svg" : "/icons/heart.svg"
                }
                alt="Favorite"
                width={20}
                height={20}
              />
              {isFavorite ? "Added to Favorites" : "Favorite"}
            </button>
          </div>

          {/* Details + Toggles */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[24px] py-[30px] border-b border-[#F5F5F5]">
              <div className="flex justify-between items-center">
                <h4 className="text-[20px] font-medium text-[#111111]">
                  Product Details
                </h4>
                <Image
                  src="/icons/up.svg"
                  alt="Toggle"
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-[16px] text-[#111111] leading-[24px]">
                The Air Max 90 stays true to its running roots with the iconic
                Waffle sole. Plus, stitched overlays and textured accents create
                the '90s look you love.
              </p>
              <ul className="list-disc pl-5 text-[16px] text-[#111111] leading-[24px]">
                <li>Padded collar</li>
                <li>Foam midsole</li>
                <li>Shown: Dark Team Red/Platinum Tint/Pure Platinum/White</li>
                <li>Style: HM9451-600</li>
              </ul>
            </div>

            <div className="flex justify-between items-center py-[30px] border-b border-[#F5F5F5]">
              <h4 className="text-[20px] font-medium text-[#111111]">
                Shipping & Returns
              </h4>
              <Image
                src="/icons/down.svg"
                alt="Toggle"
                width={24}
                height={24}
              />
            </div>

            <div className="flex justify-between items-center py-[30px] border-b border-[#F5F5F5]">
              <h4 className="text-[20px] font-medium text-[#111111]">
                Reviews
              </h4>
              <div className="flex items-center gap-[3px]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Image
                      key={i}
                      src="/icons/star.svg"
                      alt="star"
                      width={16}
                      height={16}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts />
    </>
  );
}
