import MySlider from "../../components/basic/slider/mySlider";
import HomeMainSection from "./MainSection";
import HomeNewsSection from "./NewsSection";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8]">
      <HomeMainSection />
      <MySlider />
      <HomeNewsSection />
    </div>
  );
}
