import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicCardImgCard from "../../basic/card/ImgCard";

export default function ProjectListSection() {
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project1",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project2",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project3",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project4",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project5",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project6",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project7",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      title: "Sample Project8",
      desc: "프로젝트 설명",
      user: { name: "React", tag: "sample" },
    },
  ];

  const [numColumns, setNumColumns] = useState(4); // 한 줄에 표시할 이미지 개수

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setNumColumns(4);
      } else if (windowWidth >= 1024) {
        setNumColumns(3);
      } else if (windowWidth >= 768) {
        setNumColumns(2);
      } else if (windowWidth >= 640) {
        setNumColumns(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full py-4 px-10">
      <div
        className="grid gap-5 justify-center "
        style={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {data.map((e, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <BasicCardImgCard
              key={e.title}
              img={e.img}
              title={e.title}
              desc={e.desc}
              like
            >
              <div className="flex justify-between items-center">
                <div className="text-xs text-[#afafaf] ml-auto">
                  by {e.user.name}
                </div>
              </div>
              <hr className="my-4" />
              <Link
                className="w-full py-2 rounded-fll flex justify-center items-center text-sm text-[#8dd4c5] bg-[#edfcfa]"
                to="/"
              >
                프로젝트 자세히 보기
              </Link>
            </BasicCardImgCard>
          </div>
        ))}
      </div>
    </div>
  );
}
