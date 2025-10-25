"use client";

import Image from "next/image";
import Link from "next/link";

export default function MiniFooter() {
  return (
    <footer className="relative bg-[#111111] text-[#757575] w-full h-[80px] flex items-center justify-between px-[58px]">
      {/* Left Section */}
      <div className="flex items-center gap-3 text-[14px]">
        <Image src="/globe.svg" alt="" width={16} height={16} />
        <span>India</span>
        <span>© 2025 Nike, Inc. All Rights Reserved</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-[14px]">
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
