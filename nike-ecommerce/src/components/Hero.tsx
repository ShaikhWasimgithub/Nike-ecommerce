"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-screen h-[715px] bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-[-34px] left-[-3px] w-[1446px] h-[964px] opacity-500">
        <Image
          src="/image.png"
          alt="Background"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Rotated Straps */}
      <div className="absolute right-[406.77px] top-[193.87px] w-[212px] h-[653.55px] rotate-[25.55deg] bg-gradient-to-b from-[#FFBE87] to-[#FF92EA]" />
      <div className="absolute right-[136.74px] top-[-150px] w-[212px] h-[408.66px] rotate-[25.55deg] bg-[#E5E5E5]" />

      {/* Centered Content Container */}
      <div className="relative max-w-[1440px] mx-auto h-full">
        {/* Left Info Content */}
        <div className="absolute left-[48px] top-1/2 -translate-y-1/2 flex flex-col gap-6 w-[668px] h-[374px] z-10">
          <div className="flex flex-col gap-[18px]">
            <h4 className="font-helvetica text-[20px] font-medium leading-[28px] bg-gradient-to-b from-[#E2418D] to-[#FB7C76] bg-clip-text text-transparent">
              Bold & Sporty
            </h4>

            <h1 className="font-gilroyExtraBold text-[72px] leading-[78px] text-[#111111] tracking-[-0.02em]">
              Style That Moves With You.
            </h1>

            <p className="font-gilroyMedium text-[24px] leading-[36px] text-[#111111]">
              Not just style. Not just comfort. Footwear that effortlessly moves
              with your every step.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center justify-center w-[190px] h-[52px] rounded-[30px] bg-[#111111] text-white text-[16px] font-helvetica font-medium leading-[24px] hover:bg-[#333] transition"
          >
            Find Your Shoe
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="absolute left-[686px] top-[81.96px] w-[721.32px] h-[464.04px]">
          <div className="absolute left-0 top-0 w-[693.09px] h-[381.84px] -rotate-[4.57deg]">
            <Image
              src="/hero-shoe.png"
              alt="Jordan Shoe"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
