import React, { useState } from "react";
import TabMenu from "../../basic/menu/TapMenu";

export default function DetailMenu() {
  const tabItems = [
    { label: "정보", content: "탭 1 내용" },
    { label: "퀘스트", content: "퀘스트" },
    { label: "질문", content: "질문" },
    { label: "할일", content: "할일" },
    { label: "홍보", content: "홍보" },
    { label: "관리", content: "관리" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto">
      <TabMenu
        tabItems={tabItems}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div className="p-4">{tabItems[activeTab].content}</div>
    </div>
  );
}
