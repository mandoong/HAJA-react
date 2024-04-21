import React, { useState } from "react";

export default function DetailMenu() {
  const tabItems = [
    { label: "정보", content: "탭 1 내용" },
    { label: "질문", content: "질문" },
    { label: "할일", content: "할일" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b ">
        {tabItems.map((tab, index) => (
          <button
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`py-2 px-4 w-full text-left border-b-2 hover:border-[#594bba] transition-colors ${
              activeTab === index
                ? "border-[#594bba] font-semibold"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabItems[activeTab].content}</div>
    </div>
  );
}
