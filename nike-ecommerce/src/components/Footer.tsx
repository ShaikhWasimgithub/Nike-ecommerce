"use client";

import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Featured",
    links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
  },
  {
    title: "Shoes",
    links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
  },
  {
    title: "Clothing",
    links: [
      "All Clothing",
      "Modest Wear",
      "Hoodies & Pullovers",
      "Shirts & Tops",
    ],
  },
  {
    title: "Kids'",
    links: [
      "Infant & Toddler Shoes",
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-[#757575] w-full h-[308px] overflow-hidden">
      {/* Logo */}
      <div className="absolute left-[58px] top-[64px]">
        <Image
          src="/logo.svg"
          alt="Nike Logo"
          width={80}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Columns Center Aligned */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[64px] w-[770px] flex flex-row items-start justify-between gap-[30px]">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-[24px] w-[170px]">
            <h4 className="text-[16px] font-medium text-white leading-[24px]">
              {col.title}
            </h4>
            <ul className="flex flex-col gap-[14px]">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[16px] text-[#757575] hover:text-white transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Icons Right Aligned */}
      <div className="absolute right-[58px] top-[64px] flex gap-[20px]">
        {[
          { src: "/x.svg", alt: "X" },
          { src: "/facebook.svg", alt: "Facebook" },
          { src: "/instagram.svg", alt: "Instagram" },
        ].map((s) => (
          <Link
            key={s.alt}
            href="#"
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white hover:bg-gray-300 transition"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={18}
              height={18}
              className="object-contain"
            />
          </Link>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-[20px] left-[58px] flex items-center gap-3 text-[14px] text-[#757575]">
        <Image src="/globe.svg" alt="" width={16} height={16} />
        <span>India</span>
        <span>© 2025 Nike, Inc. All Rights Reserved</span>
      </div>

      {/* Bottom Right Links */}
      <div className="absolute bottom-[20px] right-[58px] flex items-center gap-6 text-[14px] text-[#757575]">
        {["Guides", "Terms of Sale", "Terms of Use", "Nike Privacy Policy"].map(
          (item) => (
            <Link key={item} href="#" className="hover:text-white transition">
              {item}
            </Link>
          )
        )}
      </div>
    </footer>
  );
}
