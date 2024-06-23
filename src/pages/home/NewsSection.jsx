import { useEffect, useState } from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import BasicButton from "../../components/basic/button";
import BasicCardImgCard from "../../components/basic/card/ImgCard";
import { Project } from "../../utils/repository";

export default function HomeNewsSection() {
  const [posts, setPosts] = useState([]);

  const icons = [
    "img/icon_1.png",
    "img/icon_2.png",
    "img/icon_3.png",
    "img/icon_4.png",
    "img/icon_5.png",
    "img/icon_6.png",
    "img/icon_7.png",
    "img/icon_8.png",
    "img/icon_9.png",
    "img/icon_10.png",
  ];

  const images = [
    "img/img_1.jpg",
    "img/img_2.jpg",
    "img/img_3.jpg",
    "img/img_4.jpg",
    "img/img_5.png",
    "img/img_6.jpg",
  ];

  const navigator = useNavigate();

  const getPost = async () => {
    const { data } = await Project.ProjectList(1, 9);

    setPosts(data?.nodes);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="w-full pt-10 max-w-[1400px] min-w-[1000px]">
      <div className="w-full mb-10">
        <div className="w-full mb-6 text-lg font-bold text-[#526688]">
          새로운 프로젝트
        </div>

        <div className="grid grid-cols-3 gap-4">
          {posts?.map((e, i) => {
            return (
              <BasicCardImgCard
                key={e.id}
                title={e.title}
                desc={e.description}
                img={icons[i]}
                like
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
                  <BasicButton onClick={() => navigator(`/project/${e.id}`)}>
                    보러가기
                  </BasicButton>
                </div>
                <div className="flex justify-between items-center text-xs text-[#c9c9c9]">
                  <div>최근 업데이트 {e.startDate.split("T")[0]}</div>
                </div>
              </BasicCardImgCard>
            );
          })}
        </div>
      </div>

      <div className="w-full mb-10">
        <div className="w-full mb-6 text-lg font-bold text-[#526688]">
          완성 노하우 A-Z
        </div>
        <div className="grid grid-cols-4 gap-4">
          {posts?.slice(0, 4).map((e, i) => {
            return (
              <BasicCardImgCard
                key={e.title}
                title={e.title}
                desc={e.description}
                img={icons[i]}
              >
                <hr className="my-4" />
                <button
                  type="button"
                  className="w-full py-2 rounded-lg flex justify-center items-center text-sm text-[#8dd4c5] bg-[#edfcfa]"
                >
                  회고 보러가기
                </button>
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
          {posts?.slice(0, 6).map((e, i) => {
            return (
              <div key={e?.title}>
                <div className="w-full aspect-[1.4/1] bg-slate-300 rounded-lg flex justify-center items-center mb-2 overflow-hidden border">
                  <img
                    className="w-full h-full object-cover"
                    src={images[i]}
                    alt=""
                  />
                </div>
                <div className="text-sm line-clamp-2 font-semibold mb-4">
                  {e.purpose}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
