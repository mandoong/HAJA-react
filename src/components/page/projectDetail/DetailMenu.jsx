import React, { useState } from "react";
import TabMenu from "../../basic/menu/TapMenu";
import DetailMain from "./DetailMainSection";

export default function DetailMenu() {
  const tabItems = [
    { id: "info", label: "정보", content: <DetailMain /> },
    { id: "question", label: "질문", content: "질문" },
    { id: "todo", label: "할일", content: "할일" },
    { id: "marketin", label: "홍보", content: "홍보" },
    { id: "manage", label: "관리", content: "관리" },
  ];

  const [activeTab, setActiveTab] = useState("info");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeContent = tabItems.find((tab) => tab.id === activeTab)?.content;

  return (
    <div>
      <div className="w-full mx-auto sticky top-0 bg-[#f8f8f8]">
        <TabMenu
          tabItems={tabItems}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>
      <div className="p-4">{activeContent}</div>
    </div>
  );
}
