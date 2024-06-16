import DetailLeaderCard from "../../components/page/projectDetail/DetailLeaderCard";
import DetailMenu from "../../components/page/projectDetail/DetailMenu";
import DetailTop from "../../components/page/projectDetail/DetailTop";

export default function ProjectDetail() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <div className="flex flex-col items-center max-w-[1200px] px-10 box-border">
        <DetailTop />
        <div className="max-w-5xl w-full flex justify-between mt-5 mb-8 gap-8">
          <DetailMenu />
          <DetailLeaderCard />
        </div>
      </div>
    </div>
  );
}
