import SimpleSlider from "../../basic/card/Slider";

export default function HotProject() {
  return (
    <div className="w-full py-4 px-10 flex flex-col">
      <div className="w-full mb-6 flex flex-col items-center">
        <div className="w-full font-roboto text-left text-[3vw] whitespace-nowrap mt-20">
          Hot Project
        </div>
        <div className="w-full font-roboto text-left text-[2vw] whitespace-nowrap mt-10">
          스타트업 마케팅 스튜디오 / 뉴스/정보
        </div>
        <div className="w-full font-roboto text-left text-[1vw] whitespace-nowrap">
          투자심사역, 창업보육전문매니저, 전,현직 CEO, CMO 등 C-Level이 합심해서
          런칭한 초기 스타트업 전문 마케팅 스튜디오!
        </div>
        <SimpleSlider />
      </div>
    </div>
  );
}
