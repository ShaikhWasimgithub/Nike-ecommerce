"use client";
import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <section
      className="relative overflow-hidden bg-white flex justify-center items-center"
      style={{
        width: "1440px",
        height: "622px",
      }}
    >
      {/* Inner Wrapper — centers the design visually */}
      <div className="relative" style={{ width: "1344px", height: "100%" }}>
        {/* Product Image */}
        <div
          className="absolute"
          style={{
            width: "822px",
            height: "822px",
            left: "648px", // shifted 2px right to visually balance with info
            top: "-100px",
            zIndex: 2,
          }}
        >
          <Image
            src="/feature.png"
            alt="Nike React Presto"
            fill
            className="object-contain"
          />
        </div>

        {/* Info Section */}
        <div
          className="absolute flex flex-col gap-[28px] items-start"
          style={{
            width: "668px",
            height: "376px",
            left: "64px", //  was 48px → adjusted for visual center alignment
            top: "calc(50% - 376px/2)",
            zIndex: 3,
          }}
        >
          {/* Head Section */}
          <div className="flex flex-col gap-[24px] w-[668px] h-[208px]">
            {/* Gradient Title */}
            <h4
              className="font-medium text-[20px] leading-[28px]"
              style={{
                background: "linear-gradient(180deg, #E2418D 0%, #FB7C76 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Bold & Sporty
            </h4>

            {/* Main Heading */}
            <h2
              className="font-bold uppercase text-[#111111]"
              style={{
                fontSize: "72px",
                lineHeight: "78px",
                letterSpacing: "-0.01em",
              }}
            >
              Nike React Presto by you
            </h2>
          </div>

          {/* Sub Text */}
          <p
            className="font-normal text-[#757575]"
            style={{
              width: "668px",
              height: "60px",
              fontSize: "24px",
              lineHeight: "30px",
            }}
          >
            Take advantage of brand new, proprietary cushioning technology with
            a fresh pair of Nike React shoes.
          </p>

          {/* Button */}
          <button
            className="bg-[#111111] text-white rounded-full font-medium"
            style={{
              padding: "14px 24px",
              width: "125px",
              height: "52px",
              fontSize: "16px",
              lineHeight: "24px",
              zIndex: 4,
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
