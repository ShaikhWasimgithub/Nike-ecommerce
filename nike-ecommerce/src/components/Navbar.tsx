"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Men", href: "/products?gender=men" },
  { label: "Women", href: "/products?gender=women" },
  { label: "Kids", href: "/products?gender=kids" },
  { label: "Collections", href: "/collections" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="w-full bg-white">
      <nav
        className="relative mx-auto flex h-[80px] w-full max-w-[1440px] items-center justify-between px-6 lg:px-16"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Frame.png"
            alt="Nike Logo"
            width={35}
            height={35}
            priority
          />
        </Link>

        {/* Center Links */}
        <ul className="hidden md:flex items-center justify-center gap-[24px] absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[16px] font-medium text-[#111] hover:text-gray-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-[24px]">
          <Link href="/cart" className="relative">
            <span className="text-[16px] font-medium text-[#111] hover:text-gray-600">
              My Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-4 bg-black text-white text-xs font-semibold rounded-full px-2 py-[2px]">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/signup"
            className="ml-4 rounded-full border border-[#111] px-4 py-2 text-[15px] font-medium text-[#111] hover:bg-[#111] hover:text-white transition-colors"
          >
            Login / Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
