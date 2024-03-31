import { useEffect, useState } from "react";
import BasicUserProfile from "../../basic/user/UserProfile";

export default function ProjectListSection() {
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project1",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project2",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project3",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project4",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project5",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project6",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project7",
      user: { name: "React", tag: "sample" },
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/08/19/13/42/water-8200502_1280.jpg",
      desc: "Sample Project8",
      user: { name: "React", tag: "sample" },
    },
  ];

  const [numColumns, setNumColumns] = useState(4); // 한 줄에 표시할 이미지 개수

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setNumColumns(5);
      } else if (windowWidth >= 1024) {
        setNumColumns(4);
      } else if (windowWidth >= 768) {
        setNumColumns(3);
      } else if (windowWidth >= 640) {
        setNumColumns(2);
      } else {
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
    <div className="w-full py-4 px-70">
      <div
        className="grid gap-8 justify-center "
        style={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
        }}
      >
        {data.map((e, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div className="bg-gray-300 aspect-[1.4/1] rounded-xl flex justify-center items-center mb-8">
              <img
                src={e.img}
                alt={e.desc}
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
            <div className="text-xl font-over_b mb-2">{e.desc}</div>
            <div className="flex gap-3 w-full items-center">
              <div className="text-xs text-[#afafaf]">by</div>
              <BasicUserProfile name={e?.user?.name} tag={e?.user?.tag} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
