import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BasicCardImgCard from "../../basic/card/ImgCard";
import { Default } from "../../../utils/repository";

export default function ProjectListSection() {
  const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(4); // 한 줄에 표시할 개수

  const fetch = async () => {
    try {
      const result = await Default.Project(1, 10);
      setData(result.data.nodes);
      console.log(result.data);
    } catch (error) {
      console.log("Fail", error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

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
        {data.length > 0 ? (
          data.map((e) => (
            <div key={e.id}>
              <BasicCardImgCard
                key={e.id}
                img={e.thumbnailUrl}
                title={e.title}
                desc={e.platform}
                like
              >
                <div className="flex justify-between items-center">
                  <div className="text-xs text-[#afafaf] ml-auto">
                    by {e.userId}
                  </div>
                </div>
                <hr className="my-4" />
                <Link
                  className="w-full py-2 rounded-full flex justify-center items-center text-sm text-[#8dd4c5] bg-[#edfcfa]"
                  to="/project/detail"
                >
                  프로젝트 자세히 보기
                </Link>
              </BasicCardImgCard>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
