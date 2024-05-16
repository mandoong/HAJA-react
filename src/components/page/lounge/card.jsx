import { HeartIcon } from "@heroicons/react/20/solid";

export default function LoungeCard({ title, content }) {
  return (
    <div className="w-full border rounded-md p-5 mb-6">
      <div className="h-20 w-full flex gap-4 items-center mb-2">
        {Array(2)
          .fill({})
          .map((e) => {
            return (
              <div
                className="px-4 py-1 border rounded-md text-slate-400"
                key={e}
              >
                # tags
              </div>
            );
          })}
      </div>
      <div className="flex justify-between ">
        <div className="text-xl">{title}</div>
        <div className="text-md text-neutral-400">1시간 전</div>
      </div>
      <div className="text-md py-8">{content}</div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <HeartIcon className="w-4 text-[#e7e7e7]" />
          <div>0</div>
        </div>
        <div>
          <div className="text-neutral-400">댓글을 달아주세요.</div>
        </div>
      </div>
    </div>
  );
}
