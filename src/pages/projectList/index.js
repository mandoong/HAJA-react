import ProjectMainSection from "../../components/page/projectList/ProjectMainSection";
import ProjectListSection from "../../components/page/projectList/ProjectListSection";
import PageListSection from "../../components/page/projectList/PageListSection";
import HomeFooter from "../../components/page/home/Footer";
import NewProject from "../../components/page/projectList/NewProjectSection";
import HotProject from "../../components/page/projectList/HotProjectSection";

export default function ProjectList() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <div className="flex flex-col items-center max-w-[1200px] px-10 box-border">
        <ProjectMainSection />
        <NewProject />
        <HotProject />
        <ProjectListSection />
        <HomeFooter />
      </div>
    </div>
  );
}
