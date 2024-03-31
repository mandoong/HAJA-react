import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BasicUserProfile from "../../basic/user/UserProfile";

export default function HomeVoteSection() {
  const data = [
    { img: "", desc: "10 Things - 300th", user: { name: "Your Majesty Co." } },
    {
      img: "",
      desc: "Grape Agency",
      user: { name: "The First The Last", tag: "pro" },
    },
    {
      img: "",
      desc: "Axel Vanhessche",
      user: { name: "Guillaume Colombel", tag: "pro" },
    },
  ];
  return (
    <div className="w-full py-4 px-10">
      <div className="w-full text-center text-[80px] font-over_b">NOMINEES</div>
      <div className="w-full text-center text-xl mb-10">
        Vote for the latest websites on awwwards
      </div>
      <div className="flex justify-between w-full gap-4">
        {data.map((e) => {
          return (
            <div className="w-full" key={e}>
              <div className="bg-gray-300 aspect-[1.4/1] rounded-xl flex justify-center items-center mb-8">
                img
              </div>
              <div className="text-xl font-over_b mb-2">{e.desc}</div>
              <div className="flex gap-3 w-full items-center">
                <div className="text-xs text-[#afafaf]">by</div>
                <BasicUserProfile name={e?.user?.name} tag={e?.user?.tag} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-40 flex text-lg justify-center items-center gap-4">
        <div>Check out all submitted websites</div>
        <ArrowRightIcon className="w-5" />
        <strong className="border-b-2 border-gray-400">View Nominees</strong>
      </div>
    </div>
  );
}
