import HomeMainSection from "../../components/page/home/MainSection";
import HomeNewsSection from "./NewsSection";
import HomeVoteSection from "./VoteSection";
import HomeMarketSection from "./MarketSection";
import HomeFooter from "../../components/page/home/Footer";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <HomeMainSection />
      <HomeNewsSection />
      <HomeVoteSection />
      <HomeMarketSection />
      <HomeFooter />
    </div>
  );
}
