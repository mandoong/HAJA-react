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
  ];
  return (
    <div className="w-full pt-20 px-10">
      <div>새로운&apos; 프로덕트 부스</div>
      <div className="grid grid-cols-3 gap-4">
        {listitems.map((e) => {
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
  );
}
