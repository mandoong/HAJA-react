import HomeMainSection from "../../components/page/home/MainSection";
import HomeNewsSection from "../../components/page/home/NewsSection";
import HomeVoteSection from "../../components/page/home/VoteSection";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <HomeMainSection />
      <HomeNewsSection />
      <HomeVoteSection />
    </div>
  );
}
