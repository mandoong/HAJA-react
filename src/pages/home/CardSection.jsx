import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import BasicTopImgCard from "../../components/basic/card/TopImgCard";
import { Project } from "../../utils/repository";

export default function HomeCardSection() {
  const [posts, setPosts] = useState([]);

  const images = [
    "img/img_1.jpg",
    "img/img_2.jpg",
    "img/img_3.jpg",
    "img/img_4.jpg",
    "img/img_5.png",
    "img/img_6.jpg",
  ];

  const getPost = async () => {
    const { data } = await Project.ProjectList(1, 9);

    setPosts(data?.nodes);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="w-full mb-10">
      <div className="w-full mb-6 text-lg font-bold text-[#526688]">
        새로운 모임
      </div>
      <div className="grid grid-cols-4 gap-4">
        {posts.slice(0, 6).map((e, i) => {
          return (
            <BasicTopImgCard key={e.title} img={images[i]}>
              <div className="text-sm p-3">
                <div className="text-[#6d6c69] mb-2">{e.title}</div>
                <div className="mb-4">{e.purpose}</div>
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
