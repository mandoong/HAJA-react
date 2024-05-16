import HomeBanner from "./Banner";
import HomeCardSection from "./CardSection";
import HomeMainSection from "./MainSection";
import HomeNewsSection from "./NewsSection";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex flex-col items-center max-w-[1200px] px-10 box-border">
        <HomeMainSection />
        <HomeNewsSection />
        <HomeBanner />
        <HomeCardSection />
      </div>
    </div>
  );
}
