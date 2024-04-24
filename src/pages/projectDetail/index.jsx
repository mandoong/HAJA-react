import DetailLeaderCard from "../../components/page/projectDetail/DetailLeaderCard";
import DetailMain from "../../components/page/projectDetail/DetailMainSection";
import DetailMenu from "../../components/page/projectDetail/DetailMenu";

export default function ProjectDetail() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <DetailMain />
      <div className="w-full flex">
        <DetailMenu />
        <DetailLeaderCard />
      </div>
    </div>
  );
}
