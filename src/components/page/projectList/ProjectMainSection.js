import BasicUserProfile from "../../basic/user/UserProfile";
import SearchBar from "../home/SearchBar";
import "../home/MainSectionCss.css";

export default function ProjectMainSection() {
  return (
    <div className="w-full py-4 px-10">
      <SearchBar />
      <div className="w-full mb-6 flex justify-between items-center">
        <div className="w-full font-roboto text-left text-[3vw] whitespace-nowrap mt-20">
          Ongoing Project
        </div>
        <div className="w-full font-over text-xm text-[1vw] mt-20">
          Ongoing Project List <br />
          Find your Ambition and make your dream come true!
        </div>
      </div>
    </div>
  );
}
