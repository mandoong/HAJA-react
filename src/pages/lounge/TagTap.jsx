import { Link } from "react-router-dom";

export default function LoungeTagTap() {
  const taps = [
    { tag: "전체", item: "all" },
    { tag: "자기소개", item: "myself" },
    { tag: "팀원모집", item: "team" },
    { tag: "질문", item: "qa" },
  ];

  return (
    <div className="w-72 px-12 border-r-[1px] pt-10">
      <Link
        to="/lounge/write"
        className="h-12 w-full border rounded-md flex justify-center items-center mb-20"
      >
        글쓰기
      </Link>
      <div className="w-full px-8">
        <div className="text-orange-400 text-xl font-bold mb-10">태그</div>
        <div>
          {taps.map((e) => {
            return (
              <div
                key={e.item}
                className="mb-4 text-slate-400 hover:text-black"
              >
                # {e.tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
