import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Project } from "../../../utils/repository";

export default function DetailTop() {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  const fetch = async () => {
    const detailData = await Project.ProjectDetail(id);
    setDetail(detailData);
  };

  useEffect(() => {
    fetch();
  }, [id]);

  const getStatus = () => {
    if (!detail) return "";
    return detail.data.countOfRecruited === detail.data.countOfRecruitment
      ? "모집완료"
      : "모집중";
  };

  const getStatusBgColor = () => {
    if (!detail) return "bg-[white]";
    return detail.data.countOfRecruited === detail.data.countOfRecruitment
      ? "bg-[#f2f2f2]"
      : "bg-[white]";
  };

  return (
    <div className="w-full py-4 px-10 flex justify-center">
      <div className="w-full mb-6 items-center flex flex-col gap-5">
        <Link
          className="w-24 h-10 border rounded-lg flex justify-center items-center text-sm text-[white] bg-[#594bba]"
          to="/"
        >
          프로젝트
        </Link>
        <div className="w-full font-roboto text-5xl whitespace-nowrap text-center">
          {detail ? detail.data.title : ""}
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div
            className={`w-24 h-12 border-[#f2f2f2] rounded-full flex items-center justify-center text-ms font-bold text-[black] ${getStatusBgColor()}`}
          >
            {getStatus()}
          </div>
        </div>
      </div>
    </div>
  );
}
