import BasicUserProfile from "../../basic/user/UserProfile";
import SearchBar from "./SearchBar";
import "./MainSectionCss.css";

export default function HomeMainSection() {
  return (
    <div className="bg-[#e9e9e9] w-full py-4 px-10">
      <SearchBar />
      <div className="w-full mb-6">
        <div className="w-full font-roboto text-center text-[18vw] whitespace-nowrap">
          SITE OF THE DAY
        </div>
        <div className="w-full overflow-hidden max-w-[1200px] box-border">
          <div className="flex text-[20px] w-full items-center move ease-linear">
            <div className="text-nowrap min-w-full">
              <strong>Outpost</strong>— Site of the Day - <strong>7.32</strong>{" "}
              — Mar 26, 2024 —
            </div>
            <div className="text-nowrap min-w-full">
              <strong>Outpost</strong>— Site of the Day - <strong>7.32</strong>{" "}
              — Mar 26, 2024 —
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 bg-slate-100 rounded-xl overflow-hidden relative">
        <img
          src="https://assets.awwwards.com/awards/sites_of_the_day/2024/03/outpost-cover.jpg"
          className="w-full h-full object-cover"
          alt="main"
        />
        <div className="absolute bottom-4 left-4 font-over_b text-white">
          <div className="text-[30px] font-over">By</div>
          <div className="text-[60px]">Outpost</div>
        </div>
      </div>
      <div className="w-full h-32 flex justify-center items-center gap-12">
        <BasicUserProfile name="Outpost" tag="pro" />
        <BasicUserProfile name=" Jasper Landberg" />
      </div>
    </div>
  );
}
