import ProjectMainSection from "../../components/page/projectList/ProjectMainSection";
import ProjectListSection from "../../components/page/projectList/ProjectListSection";
import PageListSection from "../../components/page/projectList/PageListSection";
import HomeFooter from "../../components/page/home/Footer";

export default function ProjectList() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <ProjectMainSection />
      <ProjectListSection />
      <PageListSection />
      <HomeFooter />
    </div>
  );
}
