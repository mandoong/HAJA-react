import { HeartIcon } from "@heroicons/react/20/solid";

export default function BasicCardImgCard({
  children,
  img,
  title,
  desc,
  like = false,
}) {
  return (
    <div className="border rounded-lg p-4 hover:border-[#ea6560] transition-colors">
      {like && (
        <div className="w-full">
          <HeartIcon className="w-6 ml-auto text-[#e7e7e7]" />
        </div>
      )}
      <div className="flex items-center gap-3 h-16">
        <div className="h-full aspect-square rounded-md bg-slate-400">
          <img src={img} alt="" />
        </div>
        <div className="flex-1">
          <div className="text-sm mb-2">{title}</div>
          <div className="text-xs text-[#999] line-clamp-2">{desc}</div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
