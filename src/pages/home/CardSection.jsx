import { HeartIcon } from "@heroicons/react/20/solid";
import BasicTopImgCard from "../../components/basic/card/TopImgCard";

export default function HomeCardSection() {
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
      title: "라이너블1",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "차곡차곡1",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
    {
      title: "단백집1",
      desc: "안녕하세요. 여기는 서비스의 설명란입니다. 원하시는 내영이 표기 되는 공간입니다.",
      img: "",
    },
  ];
  return (
    <div className="w-full mb-10">
      <div className="w-full mb-6 text-lg font-bold text-[#526688]">
        새로운 모임
      </div>
      <div className="grid grid-cols-4 gap-4">
        {listitems.map((e) => {
          return (
            <BasicTopImgCard key={e.title}>
              <div className="text-sm p-3">
                <div className="text-[#c9c9c9] mb-2">소셜네트워크</div>
                <div className="mb-4">[서울] 10대 커뮤니티 앱</div>
                {/* <div>
                  <div>F</div>
                </div> */}
                <div className="flex justify-between mb-6 text-[#888888]">
                  <div className="flex gap-2 ">
                    <HeartIcon className="w-4 text-[#c9c9c9]" />
                    <div>0</div>
                  </div>
                  <div>76(1)</div>
                </div>
                <hr className="w-full" />
                <div className="text-xs pt-2">
                  모집완료 <span className="text-[#ef7d7a]">0/2</span>
                </div>
              </div>
            </BasicTopImgCard>
          );
        })}
      </div>
    </div>
  );
}
