import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const placeholder = "Search your idea";

  return (
    <div className="flex w-full justify-between items-center gap-4 h-8">
      <div className="w-10">HAJA</div>
      <div className="flex bg-[#d2d2d2] rounded-md px-4 box-border flex-1 h-full items-center">
        <input
          placeholder={placeholder}
          className="bg-transparent flex-1 outline-none h-full"
        />
        <div className="flex gap-4">
          <div className="text-xs">Inspiration</div>
          <ChevronDownIcon width={12} />
        </div>
      </div>
      <div className="flex text-xs">
        <div>Log in</div>
        <div>Sign Up</div>
      </div>
      <div className="flex gap-4 h-full text-xs">
        <div className="px-4 text-white rounded-md bg-[#222222] h-full text-center flex justify-center items-center">
          Be Pro
        </div>
        <div className="px-4 rounded-md border border-black  h-full text-center flex justify-center items-center">
          Submit Website
        </div>
      </div>
    </div>
  );
}
