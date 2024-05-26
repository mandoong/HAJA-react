import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function PageListSection() {
  return (
    <div className="w-full py-4 px-10">
      <div className="py-40 flex text-lg justify-end items-center gap-4">
        <strong className="border-b-2 border-gray-400">Previous</strong>
        <ArrowLeftIcon className="w-5" />
        <div>1 2 3 4 5 6 </div>
        <ArrowRightIcon className="w-5" />
        <strong className="border-b-2 border-gray-400">Next</strong>
      </div>
    </div>
  );
}
