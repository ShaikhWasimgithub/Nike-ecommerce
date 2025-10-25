"use client";

import Image from "next/image";
import MyOrders from "./components/MyOrders";
import ProfileTabs from "./components/ProfileTabs";
import Favorites from "./components/Favorites";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      {/* PROFILE HEADER */}
      <div className="flex items-center gap-5 mt-12 w-[1092px]">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden bg-[#F5F5F5]">
          <Image
            src="/profile.png"
            alt="Profile Image"
            width={110}
            height={110}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-[24px] font-medium text-[#111111]">
            Ronald O. Williams
          </h2>
          <p className="text-[16px] text-[#111111]">ronald@mail.com</p>
        </div>
      </div>

      {/* TABS */}
      <div className="w-[1092px] mt-10">
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* TAB CONTENT */}
      <div className="w-[1092px] mt-10 mb-24">
        {activeTab === "orders" && <MyOrders />}
        {activeTab === "favorites" && <p className="text-gray-500 text-lg"></p>}
        {activeTab === "favorites" && <Favorites />}

        {activeTab === "payments" && (
          <p className="text-gray-500 text-lg">Payment methods coming soon.</p>
        )}
        {activeTab === "address" && (
          <p className="text-gray-500 text-lg">Address book coming soon.</p>
        )}
      </div>
    </div>
  );
}
