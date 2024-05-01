import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import BasicButton from "../../components/basic/button";
import BasicCardImgCard from "../../components/basic/card/ImgCard";

export default function HomeNewsSection() {
  const listitems = [
    {
      title: "라이너블",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "차곡차곡",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "단백집",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "라이너블",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "차곡차곡",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "단백집",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
  ];
  return (
    <div className="w-full pt-10 px-10 max-w-[1400px]">
      <div className="w-full mb-10">
        <div className="w-full mb-6 text-lg font-bold text-[#526688]">
          새로운&apos; 프로덕트 부스
        </div>
        <div className="grid grid-cols-3 gap-4">
          {listitems.map((e) => {
            return (
              <BasicCardImgCard
                key={e.title}
                title={e.title}
                desc={e.desc}
                img={e.img}
              >
                <div className="w-full flex justify-between py-6 items-center">
                  <div className="flex gap-2 text-xs">
                    <div className="flex gap-1 items-start h-full">
                      <HeartIcon className="w-4 text-[#c9c9c9]" />
                      <div>0</div>
                    </div>
                    <div className="flex gap-1 items-start h-full">
                      <StarIcon className="w-4 text-[#c9c9c9]" />
                      <div>0.0</div>
                    </div>
                  </div>
                  <BasicButton>부스 바로가기</BasicButton>
                </div>
                <div className="flex justify-between items-center text-xs text-[#c9c9c9]">
                  <div>최근 업데이트 24.03.18</div>
                  <div className="flex gap-1">
                    <div className="rounded-full flex justify-center items-center  w-6 aspect-square bg-[#f6f6f6]">
                      1
                    </div>
                    <div className="rounded-full flex justify-center items-center w-6 aspect-square bg-[#f6f6f6]">
                      1
                    </div>
                    <div className="rounded-full flex justify-center items-center w-6 aspect-square bg-[#f6f6f6]">
                      1
                    </div>
                  </div>
                </div>
              </BasicCardImgCard>
            );
          })}
        </div>
      </div>

      <div className="w-full mb-10">
        <div className="w-full mb-6 text-lg font-bold text-[#526688]">
          완성 노하우&apos; A-Z
        </div>
        <div className="grid grid-cols-3 gap-4">
          {listitems.slice(0, 3).map((e) => {
            return (
              <BasicCardImgCard
                key={e.title}
                title={e.title}
                desc={e.desc}
                img={e.img}
              >
                <hr className="my-4" />
                <div className="w-full py-2 rounded-fll flex justify-center items-center text-sm text-[#8dd4c5] bg-[#edfcfa]">
                  회고 보러가기
                </div>
              </BasicCardImgCard>
            );
          })}
        </div>
      </div>

      <div className="w-full mb-10">
        <div className="w-full mb-6 text-lg font-bold text-[#526688]">
          금주의 레벨업
        </div>
        <div className="grid grid-cols-3 gap-4">
          {listitems.map((e) => {
            return (
              <div key={e?.title}>
                <div className="w-full aspect-[1.4/1] bg-slate-300 rounded-lg flex justify-center items-center mb-4">
                  Image
                </div>
                <div className="text-sm line-clamp-2">{e.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
