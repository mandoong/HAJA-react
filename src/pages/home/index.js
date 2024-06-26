import HomeBanner from "./Banner";
import HomeCardSection from "./CardSection";
import HomeMainSection from "./MainSection";
import HomeNewsSection from "./NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-10 box-border  min-w-[1000px]">
      <HomeMainSection />
      <HomeNewsSection />
      <HomeBanner />
      <HomeCardSection />
    </div>
  );
}
