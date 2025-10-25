"use client";

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProfileTabs({
  activeTab,
  setActiveTab,
}: ProfileTabsProps) {
  const tabs = [
    { id: "orders", label: "My Orders" },
    { id: "favorites", label: "Favorites" },
    { id: "details", label: "My Details" },
    { id: "payments", label: "Payment Methods" },
    { id: "address", label: "Address Book" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
      case "favorites":
      case "details":
      case "payments":
      case "address":
        return <div className="mt-10"></div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white flex flex-col">
      {/* Tabs Header */}
      <div className="w-full bg-white shadow-[inset_0_-1px_0_#E5E5E5] flex items-center gap-10 px-8 h-[57px] mt-[40px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2 text-[18px] font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "text-[#111111]"
                : "text-[#707070] hover:text-[#111111]"
            }`}
          >
            {tab.label}
            <span
              className={`absolute left-0 bottom-0 w-full h-[3px] transition-all ${
                activeTab === tab.id ? "bg-[#111111]" : "bg-transparent"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Empty Tab Content */}
      <div className="px-8">{renderContent()}</div>
    </div>
  );
}
