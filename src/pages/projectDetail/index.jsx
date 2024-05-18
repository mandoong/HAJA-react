import DetailLeaderCard from "../../components/page/projectDetail/DetailLeaderCard";
import DetailMain from "../../components/page/projectDetail/DetailMainSection";
import DetailMenu from "../../components/page/projectDetail/DetailMenu";

export default function ProjectDetail() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <div className="flex flex-col items-center max-w-[1200px] px-10 box-border">
        <DetailMain />
        <div className="max-w-4xl w-full flex justify-center mt-5 mb-8 gap-8 sticky top-3">
          <DetailMenu />
          <DetailLeaderCard />
        </div>
      </div>
    </div>
  );
}
