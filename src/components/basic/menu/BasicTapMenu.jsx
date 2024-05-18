import React from "react";

export default function BasicTapMenu({ tabItems, activeTab, onTabClick }) {
  return (
    <div>
      <div className="w-[1200px] flex pb-10">
        {tabItems.map((tab) => (
          <div key={tab.id} className="w-full">
            <button
              type="button"
              className={`py-2 px-4 w-full text-center ${
                activeTab === tab.id
                  ? "border-black border-b-2 font-semibold text-black"
                  : "border-black hover:border-b-2 text-[#ababab] hover:text-black hover:font-semibold"
              }`}
              onClick={() => onTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
