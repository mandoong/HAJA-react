import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function HomeFooter() {
  return (
    <div className="w-full p-10">
      <div className="font-over_b text-[32px] mb-6">w.</div>
      <div className="grid grid-cols-2 font-over_b gap-y-2 mb-12">
        <div>Websites</div>
        <div>Academy</div>
        <div>Collections</div>
        <div>Jobs</div>
        <div>Directory</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="bg-[#e9e9e9] p-8 rounded-lg flex gap-2 items-center">
        <div>Next Conference</div>
        <CalendarDaysIcon className="w-6" />
        <div className="font-over_b border-b-2 border-gray-400">Amsterdam</div>
      </div>
      <div className="w-full h-2 my-10 border-b-2 border-dotted border-gray-300" />
      <div className="flex gap-4">
        <div>Cookies Policy</div>
        <div>Legal Terms</div>
        <div>Privacy Policy</div>
      </div>
      <div className="flex gap-4">
        <div>Connect:</div>
        <div>Instagram</div>
        <div>LinkedIn</div>
        <div>Twitte</div>
        <div>Facebook</div>
        <div>YouTube</div>
        <div>Tiktok</div>
        <div>Sponsord by</div>
      </div>
    </div>
  );
}
