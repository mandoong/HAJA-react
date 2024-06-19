import { HeartIcon } from "@heroicons/react/20/solid";

export default function BasicCardImgCard({
  children,
  img,
  title,
  desc,
  like = false,
}) {
  return (
    <div className="border rounded-lg p-4 hover:border-[#ea6560] transition-colors relative">
      {like && (
        <div className="w-full">
          <HeartIcon className="absolute right-4 w-6 ml-auto text-[#e7e7e7]" />
        </div>
      )}
      <div className="flex items-center gap-3 h-16">
        <div className="h-full p-2 aspect-square rounded-md flex items-center shadow-lg">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1">
          <div className="text-sm mb-2 font-semibold">{title}</div>
          <div className="text-xs text-[#999] line-clamp-2">{desc}</div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
