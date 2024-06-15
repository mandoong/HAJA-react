import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactSelect from "react-select";
import { Project, User } from "../../utils/repository";
import SaveModal from "../../components/page/user/SaveModal";

export default function ProjectApplyMain() {
  const [data, setData] = useState({});
  const [id, setId] = useState();
  const [img, setImg] = useState();
  const [userId, setUserId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const getProjectId = async (page = 1) => {
    const result = await Project.ProjectList(page, 1);
    setId(result.data.nodes[0].id + 1);
  };

  const getUserId = async () => {
    const result = await User.GetMe();
    setUserId(result.data.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserId();
      await getProjectId();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userId !== undefined) {
      setData((prevData) => ({
        ...prevData,
        userId,
      }));
    }
  }, [userId]);

  useEffect(() => {
    if (id !== undefined) {
      setData((prevData) => ({
        ...prevData,
        id,
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSelectChange = (selectedOptions, name) => {
    const values = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setData({ ...data, [name]: values });
  };

  const handleSingleSelectChange = (selectedOption, name) => {
    setData({ ...data, [name]: selectedOption ? selectedOption.value : "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(URL.createObjectURL(file));
    setData({ ...data, image: file });
  };

  const handleSave = async () => {
    const applyData = { ...data };
    const result = await Project.Project(applyData);
    if (result.status === 200) {
      setData(result.data);
      setModalMessage("프로젝트가 성공적으로 등록되었습니다.");
      setShowModal(true);
    } else {
      setModalMessage("프로젝트 등록에 실패하였습니다.");
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const platformOptions = [
    { value: "미정(논의 후 확정)", label: "미정(논의 후 확정)" },
    { value: "반응형 웹(PC/모바일)", label: "반응형 웹(PC/모바일)" },
    { value: "안드로이드 앱", label: "안드로이드 앱" },
    { value: "IOS 앱", label: "IOS 앱" },
    { value: "PC(윈도우/맥) 프로그램", label: "PC(윈도우/맥) 프로그램" },
    { value: "설치형/SASS 솔루션", label: "설치형/SASS 솔루션" },
  ];
  const requiredOptions = [
    { value: "성별", label: "성별(남/여)" },
    { value: "연령대", label: "연령대" },
    { value: "자기소개", label: "자기소개" },
    { value: "경력", label: "경력/경력설명" },
    { value: "직장인/취준생 여부", label: "직장인/취준생 여부" },
    { value: "주요 활동지역", label: "주요 활동지역" },
    { value: "MBTI", label: "MBTI" },
    {
      value: "다룰 수 있는 언어/프로그램",
      label: "다룰 수 있는 언어/프로그램",
    },
  ];
  const meetingOptions = [
    { value: "오프라인 미팅", label: "오프라인 미팅" },
    { value: "디스코드", label: "디스코드" },
    { value: "슬랙", label: "슬랙" },
    { value: "Google Meet", label: "Google Meet" },
    { value: "Zoom", label: "Zoom" },
    { value: "기타/협의 후 결정", label: "기타/협의 후 결정" },
  ];
  const currentStatusOptions = [
    { value: "디자인 시안 제작 단계", label: "디자인 시안 제작 단계" },
    { value: "개발 준비 중", label: "개발 준비 중" },
    { value: "개발 진행 중", label: "개발 진행 중" },
    { value: "개발 완료 후 디벨롭 단계", label: "개발 완료 후 디벨롭 단계" },
  ];

  const calculateProgress = () => {
    const totalFields = 21;
    let filledFields = 0;

    if (data.title) filledFields += 1;
    if (data.purpose) filledFields += 1;
    if (data.platform?.length) filledFields += 1;
    if (data.image) filledFields += 1;
    if (data.designUrl) filledFields += 1;
    if (data.requiredValue?.length) filledFields += 1;
    if (data.description) filledFields += 1;
    if (data.meetingMethod) filledFields += 1;
    if (data.introduction) filledFields += 1;
    if (data.currentStatus) filledFields += 1;
    if (data.referenceUrls) filledFields += 1;
    if (data.descriptionFile) filledFields += 1;
    if (data.introductionUrl) filledFields += 1;
    if (data.completedUrl) filledFields += 1;
    if (data.startDate) filledFields += 1;
    if (data.endDate) filledFields += 1;
    if (data.profileVisibility) filledFields += 1;
    if (data.countOfRecruited) filledFields += 1;

    return (filledFields / totalFields) * 100;
  };

  const progress = calculateProgress();

  return (
    <div className="w-full py-10 px-10">
      <div className="w-full h-4 bg-gray-200 rounded-full sticky top-16">
        <div
          className="h-full bg-red-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xl font-bold mb-3 mt-4">프로젝트명 *</div>
      <div className="text-xs text-[gray]">
        👍 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="title"
          value={data?.title || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  3~20글자로 적어주세요"
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">프로젝트 목적 *</div>
      <div className="text-xs text-[gray]">
        👍 프로젝트를 진행하고자 하는 목적을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="purpose"
          value={data?.purpose || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  간단 명료하게 목적을 적어주세요."
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">출시 플랫폼 *</div>
      <div className="text-xs text-[gray]">
        👍 출시 플랫폼은 중복 체크가 가능합니다.
      </div>
      <ReactSelect
        isMulti
        name="platform"
        options={platformOptions}
        onChange={(selectedOptions) =>
          handleSelectChange(selectedOptions, "platform")
        }
        className="w-full items-center mt-8"
        placeholder="출시 플랫폼을 하나 이상 선택해주세요"
      />
      <div className="text-xl font-bold mt-12 mb-3">대표 이미지 *</div>
      <div className="text-xs text-[gray]">
        👍 대표 이미지를 업로드해주세요.
      </div>
      <div className="w-full flex items-center mt-4">
        <div className="w-[30em] h-[20em] border rounded-md flex justify-center items-center bg-gray-100">
          {img ? (
            <img
              src={img}
              alt="이미지 미리보기"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-400">이미지 업로드</span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="ml-5 mt-20"
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">디자인 시안 *</div>
      <div className="text-xs text-[gray]">
        👍 작업중인 서비스의 디자인 시안 URL을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="designUrl"
          value={data?.designUrl || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  사이트 주소를 입력해주세요."
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">지원자 필수 입력값 *</div>
      <div className="text-xs text-[gray]">
        👍 이메일, 지원직군, 지원사유는 필수값입니다. 정보를 많이 요청 시,
        지원율이 떨어집니다. 필수값만 지정해주세요
      </div>
      <ReactSelect
        isMulti
        name="requiredValue"
        options={requiredOptions}
        onChange={(selectedOptions) =>
          handleSelectChange(selectedOptions, "requiredValue")
        }
        className="w-full items-center mt-8"
        placeholder="필수사항 외에 필수 입력 값을 선택하세요."
      />
      <div className="text-xl font-bold mt-12 mb-3">프로젝트 설명 *</div>
      <div className="text-xs text-[gray]">
        👍 프로젝트에 관한 설명을 가능한 풍부하게 작성해주세요!
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="description"
          value={data?.description || ""}
          onChange={handleChange}
          className="w-full h-[40em] p-2 border rounded-md bg-gray-50"
          placeholder=""
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">미팅 방법 *</div>
      <div className="text-xs text-[gray]">
        👍 온/오프라인 또는 어떤 플랫폼을 활용해서 미팅을 진행할 지 선택해주세요
      </div>
      <ReactSelect
        name="meetingMethod"
        options={meetingOptions}
        onChange={(selectedOption) =>
          handleSingleSelectChange(selectedOption, "meetingMethod")
        }
        className="w-full items-center mt-8"
        placeholder="온/오프라인 또는 어떤 플랫폼에서 미팅을 진행할지 선택해주세요."
      />
      <div className="text-xl font-bold mt-12 mb-3">작성자 소개 *</div>
      <div className="text-xs text-[gray]">
        👍 프로젝트 모집을 진행하는 본인의 경험 및 경력, 포부를 기입해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="introduction"
          value={data?.intoduction || ""}
          onChange={handleChange}
          className="w-full h-[40em] p-2 border rounded-md bg-gray-50"
          placeholder=""
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">현재 개발 단계 *</div>
      <div className="text-xs text-[gray]">
        👍 현재 개발이 어느정도 단계까지 진행되었는지 선택해주세요.
      </div>
      <ReactSelect
        name="currentStatus"
        options={currentStatusOptions}
        onChange={(selectedOption) =>
          handleSingleSelectChange(selectedOption, "currentStatus")
        }
        className="w-full items-center mt-8"
        placeholder="개발 단계를 선택해주세요."
      />
      <div className="text-xl font-bold mt-12 mb-3">레퍼런스 URL *</div>
      <div className="text-xs text-[gray]">
        👍 레퍼런스로 참고할 사이트의 URL을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="referenceUrls"
          value={data?.referenceUrls || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  사이트 주소를 입력해주세요."
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">기타 URL *</div>
      <div className="text-xs text-[gray]">
        👍 기타 참고할만한 사이트의 URL을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="descriptionFile"
          value={data?.descriptionFile || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  사이트 주소를 입력해주세요."
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">포트폴리오 *</div>
      <div className="text-xs text-[gray]">
        👍 본인의 포트폴리오 URL을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="introductionUrl"
          value={data?.introductionUrl || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  사이트 주소를 입력해주세요."
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">완료 URL *</div>
      <div className="text-xs text-[gray]">
        👍 현재 서비스 중인 프로젝트의 경우 URL을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="text"
          name="completedUrl"
          value={data?.completedUrl || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  사이트 주소를 입력해주세요."
        />
      </div>
      <div className="text-xl font-bold mt-12 mb-3">
        프로젝트 시작, 종료일 *
      </div>
      <div className="text-xs text-[gray]">
        👍 프로젝트의 시작일과 종료일을 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="date"
          name="startDate"
          value={data?.startDate || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50 mr-2"
          placeholder="시작일을 선택해주세요"
        />
        <input
          type="date"
          name="endDate"
          value={data?.endDate || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50 ml-2"
          placeholder="종료일을 선택해주세요"
        />
      </div>

      <div className="text-xl font-bold mt-12 mb-3">프로필 공개 여부 *</div>
      <div className="text-xs text-[gray]">
        🟥 동의하지 않으시는 경우 프로젝트가 정상 노출되지 않습니다.
      </div>
      <div className="w-full flex items-center mt-4">
        <input
          type="checkbox"
          name="profileVisibility"
          checked={data?.profileVisibility || false}
          onChange={(e) =>
            setData({ ...data, profileVisibility: e.target.checked })
          }
          className="w-4 h-4 mr-2"
        />
        <span>프로필 공개</span>
      </div>
      <div className="text-xl font-bold mt-12 mb-3">모집인원 선택 *</div>
      <div className="text-xs text-[gray]">
        👍 모집하고자 하는 인원의 수를 입력해주세요.
      </div>
      <div className="w-full flex items-center mt-8">
        <input
          type="number"
          name="countOfRecruited"
          value={data?.countOfRecruited || ""}
          onChange={handleChange}
          className="w-full p-2 border rounded-md bg-gray-50"
          placeholder="  숫자로 입력해주세요."
        />
      </div>
      <button
        onClick={handleSave}
        type="button"
        className="mt-4 w-30 p-2 bg-[#594bba] text-white rounded-md"
      >
        프로젝트 등록
      </button>
      <SaveModal
        isOpen={showModal}
        onClose={closeModal}
        message={modalMessage}
      />
    </div>
  );
}
