import HomeBanner from "./Banner";
import HomeMainSection from "./MainSection";
import HomeNewsSection from "./NewsSection";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#ffffff]">
      <HomeMainSection />
      <HomeNewsSection />
      <HomeBanner />
    </div>
  );
}
