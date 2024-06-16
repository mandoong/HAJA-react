import ApplyWrapper from "../../components/page/projectApply/ApplyWrapper";
import ProjectApplyMain from "./ProjectApplyMain";

export default function ProjectApply() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <div className="w-full">
        <ApplyWrapper />
        <ProjectApplyMain />
      </div>
    </div>
  );
}
