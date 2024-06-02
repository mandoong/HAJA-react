import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "../../../utils/repository";

export default function DetailMain() {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  const fetch = async () => {
    const detailData = await Project.ProjectDetail(id);
    setDetail(detailData);
  };

  useEffect(() => {
    fetch();
  }, [id]);

  return (
    <div className="w-full py-4 px-10 flex justify-center">
      <div className="w-full mb-6 items-center flex flex-col">
        <Link
          className="w-24 h-10 border rounded-lg flex justify-center items-center text-sm text-[white] bg-[#594bba]"
          to="/"
        >
          프로젝트
        </Link>
        <div className="w-full font-roboto text-[2vw] whitespace-nowrap text-center">
          [서울] 리액트 스터디
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div className="w-16 h-8 border-[#f2f2f2] rounded-full flex items-center justify-center text-[0.6vw] text-[black] bg-[#f2f2f2]">
            모집중
          </div>
          <div className="w-16 h-8 border-[#f2f2f2] rounded-full flex items-center justify-center text-[0.6vw] text-[black] bg-[white]">
            진행중
          </div>
        </div>
      </div>
    </div>
  );
}
