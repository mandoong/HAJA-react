import React from "react";

export default function TabMenu({ tabItems, activeTab, onTabClick }) {
  return (
    <div>
      <div className="w-[800px] flex ">
        {tabItems.map((tab) => (
          <div key={tab.id} className="w-full shadow-inner 0 0 #0000">
            <button
              type="button"
              className={`py-2 px-4 w-full text-center  ${
                activeTab === tab.id
                  ? "border-[#594bba] border-2 border-b-0 font-semibold text-[#594bba]"
                  : "border-[#594bba] border-b-2 hover:border-b-0 hover:border-t-2 hover:border-l-2 hover:border-r-2 text-[#ababab]"
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
