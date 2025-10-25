"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string | number;
  image: string;
  category: string;
  tag: string;
  description?: string;
  colors?: number;
  shoeHeight?: string;
  type?: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: [] as string[],
    kids: [] as string[],
    price: [] as string[],
    shoeHeight: [] as string[],
    type: [] as string[],
  });
  const [loading, setLoading] = useState(true);

  const genderOptions = ["Men", "Women", "Unisex"];
  const kidsOptions = ["Boys", "Girls"];
  const priceOptions = ["$25 - $50", "$50 - $100", "$100 - $150", "Over $150"];
  const shoeHeightOptions = [
    "Low Top",
    "High Top",
    "Skateboarding",
    "Nike By You",
  ];
  const typeOptions = ["Sports", "Lifestyle", "Skateboarding", "Dance"];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const toggleFilter = (
    category: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const filteredProducts = products
    .filter((p) => {
      const genderMatch =
        selectedFilters.gender.length === 0 ||
        selectedFilters.gender.includes(p.category);
      const kidsMatch =
        selectedFilters.kids.length === 0 ||
        selectedFilters.kids.includes(p.category);
      const priceMatch =
        selectedFilters.price.length === 0 ||
        selectedFilters.price.some((price) => {
          const numPrice = Number(p.price);
          if (price === "$25 - $50") return numPrice >= 25 && numPrice <= 50;
          if (price === "$50 - $100") return numPrice > 50 && numPrice <= 100;
          if (price === "$100 - $150") return numPrice > 100 && numPrice <= 150;
          if (price === "Over $150") return numPrice > 150;
          return true;
        });
      const shoeHeightMatch =
        selectedFilters.shoeHeight.length === 0 ||
        selectedFilters.shoeHeight.includes(p.shoeHeight || "");
      const typeMatch =
        selectedFilters.type.length === 0 ||
        selectedFilters.type.includes(p.type || "");

      return (
        genderMatch && kidsMatch && priceMatch && shoeHeightMatch && typeMatch
      );
    })
    .slice(0, 12); // Show only first 12 products

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  const checkboxClass =
    "w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 shadow-inner checked:bg-green-500 checked:border-green-500 transition-all duration-200 cursor-pointer";

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-16 flex flex-col md:flex-row gap-10">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-[220px] pr-0 md:pr-6 flex flex-col gap-8 order-1 md:order-none">
        {/* Shoe Height */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900 text-lg md:text-base">
            Shoe Height
          </h4>
          {shoeHeightOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.shoeHeight.includes(opt)}
                onChange={() => toggleFilter("shoeHeight", opt)}
                className={checkboxClass}
              />
              <span className="text-gray-900 text-[15px]">{opt}</span>
            </label>
          ))}
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900 text-lg md:text-base">
            Gender
          </h4>
          {genderOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.gender.includes(opt)}
                onChange={() => toggleFilter("gender", opt)}
                className={checkboxClass}
              />
              <span className="text-gray-900 text-[15px]">{opt}</span>
            </label>
          ))}
        </div>

        {/* Kids */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900 text-lg md:text-base">
            Kids
          </h4>
          {kidsOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.kids.includes(opt)}
                onChange={() => toggleFilter("kids", opt)}
                className={checkboxClass}
              />
              <span className="text-gray-900 text-[15px]">{opt}</span>
            </label>
          ))}
        </div>

        {/* Shop By Price */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900 text-lg md:text-base">
            Shop By Price
          </h4>
          {priceOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.price.includes(opt)}
                onChange={() => toggleFilter("price", opt)}
                className={checkboxClass}
              />
              <span className="text-gray-900 text-[15px]">{opt}</span>
            </label>
          ))}
        </div>

        {/* Type */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-gray-900 text-lg md:text-base">
            Type
          </h4>
          {typeOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedFilters.type.includes(opt)}
                onChange={() => toggleFilter("type", opt)}
                className={checkboxClass}
              />
              <span className="text-gray-900 text-[15px]">{opt}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-8 lg:gap-[40px]
            justify-items-center
          "
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="
                flex flex-col items-start 
                w-[90%] sm:w-[320px] lg:w-[348px] 
                h-auto sm:h-[436px] 
                gap-[12px] 
                relative cursor-pointer
              "
              onClick={() => {
                localStorage.setItem("selectedProductImage", product.image);
                window.location.href = `/products/${product.id}`;
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[340px] sm:h-[348px] bg-[#F5F5F5] rounded-md overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white rounded-full px-[10px] py-[3px] shadow flex items-center justify-center">
                  <span
                    className={`text-[14px] sm:text-[16px] font-medium ${
                      product.tag?.includes("Best") ||
                      product.tag?.includes("25")
                        ? "text-[#D33918]"
                        : "text-[#007D48]"
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-[2px] px-[4px] w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-[#111111] font-medium text-[16px] sm:text-[17px] truncate">
                    {product.name}
                  </h3>
                  <p className="text-[#111111] font-medium text-[16px] sm:text-[17px]">
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>
                <p className="text-[#757575] text-[15px] sm:text-[16px]">
                  {product.category}'s Shoes
                </p>
                <p className="text-[#757575] text-[15px] sm:text-[16px]">
                  {product.colors} Colours
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
