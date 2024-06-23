import { useParams } from "react-router-dom";
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

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full py-4">
      <div className="text-xl font-bold mb-4">모집 현황</div>
      <div className="w-[400px] space-y-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex-1">{detail.data.requiredValue}</div>
          <div className="flex-1 text-center text-red-400">
            {detail.data.countOfRecruited}/{detail.data.countOfRecruitment}
          </div>
          <button
            type="button"
            className="flex-1 border px-2 py-1 rounded bg-[#594bba] text-white"
          >
            지원하기
          </button>
        </div>
      </div>
      <div className="mt-4 border-b" />
      <div className="mt-8 p-4 bg-gray-100 rounded flex flex-col items-center">
        <div className="font-bold mb-2">
          * 지원 시, 아래는 필수 입력값입니다 (총 8개)
        </div>
        <div className="text-xs">
          이메일, 지원직군, 지원사유, 직장인/취준생 여부, 주요 활동지역,
          경험/경력설명, 자기소개, 투자가능시간 (1주당)
        </div>
      </div>
      <div className="mt-10 border-b" />
      <div className="text-xl font-bold mb-4 mt-10">소개</div>
      <div className="text-ms">{detail.data.introduction}</div>
      <div className="text-ms">{detail.data.description}</div>
      <div className="mt-10 border-b" />
      <div className="w-full flex">
        <div className="w-full space-y-4 py-10">
          <div className="flex justify-between items-center py-2">
            <div className="flex-1">출시 플랫폼</div>
            <div className="flex-1 text-center text-red-400">
              {detail.data.platform}
            </div>
          </div>
        </div>
        <div className="w-full space-y-4 py-10">
          <div className="flex justify-between items-center py-2">
            <div className="flex-1">미팅 시 선호하는 채널</div>
            <div className="flex-1 text-center text-red-400">
              {detail.data.meetingMethod}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
