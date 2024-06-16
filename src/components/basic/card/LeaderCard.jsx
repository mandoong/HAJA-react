import { Link } from "react-router-dom";

export default function LeaderCard({
  children,
  img,
  name,
  desc,
  period,
  field,
  follow = false,
}) {
  return (
    <div className="w-[200px] flex justify-center items-center flex-col border rounded-lg border-[#e5e5e5]">
      <div className="gap-3">
        <div className="mt-3">리더정보</div>
        <div className="flex justify-between gap-2">
          <div className="h-[50px] aspect-square rounded-md flex items-center bg-slate-400">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm mb-2">{name}</div>
            <div className="text-xs text-[#bebebe] line-clamp-2">{desc}</div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-lg mb-2">프로젝트 기간</div>
        <div className="text-sm">{period}</div>
        <hr className="my-4" />
        <div className="text-lg mb-2">프로젝트 분야</div>
        <div className="text-sm">{field}</div>
        {follow && (
          <div>
            <hr className="my-4" />
            <Link
              className="w-full mb-5 px-6 py-2 rounded-md flex justify-center items-center text-sm text-[white] bg-[#594bba]"
              to="/"
            >
              구독하기
            </Link>
          </div>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
}
