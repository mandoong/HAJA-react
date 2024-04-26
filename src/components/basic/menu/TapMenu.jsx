import React from "react";

export default function TabMenu({ tabItems, activeTab, onTabClick }) {
  return (
    <div>
      <div className="w-[800px] flex border-b-[#594bba] border-b-2 hover:border-b-0">
        {tabItems.map((tab, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-full shadow-inner 0 0 #0000; hover:">
            <button
              type="button"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`py-2 px-4 w-full text-center border-2 border-b-0 hover:border-[#594bba] hover:text-[#594bba] transition-colors ${
                activeTab === index
                  ? "border-[#594bba] border-b-0 font-semibold text-[#594bba]"
                  : "border-transparent text-[#ababab]"
              }`}
              onClick={() => onTabClick(index)}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
