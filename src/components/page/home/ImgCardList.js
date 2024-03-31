import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ImgCardList({ img, tag, title, seller, price }) {
  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden">
      <div className="w-full flex justify-center items-center aspect-[1.4/1] bg-gray-400">
        <img src={img} alt="img" />
      </div>
      <div className=" bg-white">
        <div className="p-6 border-b">
          <div className="mb-2 text-sm"> {tag} </div>
          <div className="text-xl font-over_b h-12 line-clamp-2">{title}</div>
        </div>
        <div className="px-6 py-8 border-b text-sm flex w-full justify-between items-center">
          <div className="font-over_b">
            <span className="mr-1 text-xs font-over">By</span>
            {seller}
          </div>
          <div className="h-6 flex gap-2 items-start text-xs">
            <div>from</div>
            <div className="font-roboto text-[32px] h-full flex items-end">
              {price}
            </div>
            <div>USD</div>
          </div>
        </div>
        <div className="px-6 py-8 flex justify-between">
          <div className="text-xs font-over_b">View Product</div>
          <ArrowRightIcon className="w-5" />
        </div>
      </div>
    </div>
  );
}
