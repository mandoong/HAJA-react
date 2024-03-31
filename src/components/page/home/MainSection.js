import { useRef, useState } from "react";
import BasicUserProfile from "../../basic/user/UserProfile";
import SearchBar from "../../../pages/home/SearchBar";
import "./MainSection.css";

export default function HomeMainSection() {
  const imgSlider = useRef();
  const [curImage, setCurImage] = useState();
  const imgs = [
    {
      url: "https://assets.awwwards.com/awards/sites_of_the_day/2024/03/outpost-cover.jpg",
      desc: "By",
      title: "Outpost",
    },
    {
      url: "https://assets.awwwards.com/awards/sites_of_the_day/2024/03/g1-13.jpg",
      desc: "Site Name",
      title: "TWICE",
    },
  ];

  imgSlider.current = setInterval(() => {
    setCurImage();
  }, 3000);

  return (
    <div className="bg-[#e9e9e9] w-full py-4 px-10">
      <SearchBar />
      <div className="w-full mb-6">
        <div className="w-full font-roboto text-center text-[18vw] whitespace-nowrap">
          SITE OF THE DAY
        </div>
        <div className="w-full overflow-hidden box-border">
          <div className="flex text-[20px] w-full items-center move ease-linear">
            <div className="text-nowrap min-w-full">
              <strong>Outpost</strong>— Site of the Day - <strong>7.32</strong>{" "}
              — Mar 26, 2024 —
            </div>
            <div className="text-nowrap min-w-full">
              <strong>Outpost</strong>— Site of the Day - <strong>7.32</strong>{" "}
              — Mar 26, 2024 —
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 bg-slate-100 rounded-xl overflow-hidden relative">
        <img
          src={imgs[0].url}
          className="w-full h-full object-cover"
          alt="main"
        />

        <div className="absolute bottom-4 left-4 font-over_b text-white">
          <div className="text-[30px] h-[45px] font-over overflow-hidden ">
            <div className="h-full slider">
              {imgs.map((e) => {
                return (
                  <div className="h-full " key={e.desc}>
                    {e.desc}
                  </div>
                );
              })}
              <div className="h-full">{imgs[0].desc}</div>
            </div>
          </div>

          <div className="text-[60px] h-[80px] font-over_b overflow-hidden">
            <div className="h-full slider">
              {imgs.map((e) => {
                return (
                  <div className="h-full" key={e.title}>
                    {e.title}
                  </div>
                );
              })}
              <div className="h-full">{imgs[0].title}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32 flex justify-center items-center gap-12">
        <BasicUserProfile name="Outpost" tag="pro" />
        <BasicUserProfile name=" Jasper Landberg" />
      </div>
    </div>
  );
}
