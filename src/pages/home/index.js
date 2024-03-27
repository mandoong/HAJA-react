import HomeMainSection from "../../components/page/home/MainSection";
import HomeNewsSection from "../../components/page/home/NewsSection";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <HomeMainSection />
      <HomeNewsSection />
    </div>
  );
}
