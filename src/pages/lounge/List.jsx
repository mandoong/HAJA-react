import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import LoungeCard from "../../components/page/lounge/card";

export default function LoungeList() {
  const [currentTap, setCurrentTap] = useState("all");

  const tapItems = [
    { name: "전체", item: "all" },
    { name: "포스트", item: "post" },
    { name: "프로젝트", item: "project" },
    { name: "하자인", item: "user" },
  ];

  return (
    <div className="flex-1 border-r">
      <div className="pt-10 flex border-b-[1px] h-20">
        {tapItems.map((e) => {
          return (
            <button
              type="button"
              onClick={() => setCurrentTap(e.item)}
              className={`w-24 h-10 flex justify-center items-center ${currentTap === e.item ? "text-orange-400 border-b-2 border-orange-400" : ""}`}
              key={e.item}
            >
              {e.name}
            </button>
          );
        })}
      </div>
      <div className="p-5">
        {Array(10)
          .fill({})
          .map((e) => {
            return (
              <div key={e}>
                <LoungeCard title="제목" content="내용" />
              </div>
            );
          })}
      </div>
    </div>
  );
}