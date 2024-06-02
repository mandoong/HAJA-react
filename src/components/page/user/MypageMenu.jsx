import React, { useState } from "react";
import BasicTapMenu from "../../basic/menu/BasicTapMenu";
import Mypage from "../../../pages/user/Mypage";

export default function MypageMenu() {
  const tabItems = [
    { id: "info", label: "정보", content: <Mypage /> },
    { id: "party", label: "모임", content: "모임" },
    { id: "alert", label: "알림", content: "알림" },
    { id: "checklist", label: "할일", content: "할일" },
    { id: "product", label: "프로덕트", content: "프로덕트" },
    { id: "marketing", label: "홍보", content: "홍보" },
    { id: "point", label: "포인트", content: "포인트" },
  ];

  const [activeTab, setActiveTab] = useState("info");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeContent = tabItems.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="w-full mx-auto">
      <BasicTapMenu
        tabItems={tabItems}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div className="p-4">{activeContent}</div>
    </div>
  );
}
