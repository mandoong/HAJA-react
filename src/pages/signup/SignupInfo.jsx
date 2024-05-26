import { useState } from "react";
import { CameraIcon, UserIcon } from "@heroicons/react/20/solid";
import SaveModal from "../../components/page/user/SaveModal";
import Dropdown from "../../components/basic/menu/DropDown";
import { User } from "../../utils/repository";

const jobOptions = ["기획", "개발", "디자인"];
const abilityOptions = ["UI/UX기획", "웹개발", "그래픽디자인"];
const levelOptions = ["초급", "중급", "고급"];
const statusOptions = ["미지정", "1~3년차", "3~5년차"];

export default function SignupInfo() {
  const [formData, setFormData] = useState({});

  const [nicknameMessage, setNicknameMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [job, setJob] = useState("");
  const [ability, setAbility] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const [nickname, setNickname] = useState();

  const handleChange = (e, value) => {
    setFormData({ ...formData, [value]: e.target.value });
  };

  const handleNicknameBlur = async () => {
    try {
      const isAvailable = await User.CheckNickname({ nickname });
      if (isAvailable.data === true) {
        setNicknameMessage("사용 가능한 닉네임입니다.");
      } else {
        setNicknameMessage("이미 사용 중인 닉네임입니다.");
      }
      console.log(isAvailable.data);
    } catch (error) {
      console.error("Failed to check nickname", error);
      setNicknameMessage("닉네임 확인 중 오류가 발생했습니다.");
    }
  };
  const handleSave = async () => {
    const userSignIn = { ...formData };
    const result = await User.SignIn(userSignIn);
    if (result.status === 200) {
      console.log(result);
      setFormData(result.data);
      setModalMessage("회원가입이 성공적으로 완료되었습니다.");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8] gap-6">
      <div className="relative w-32 h-32 mb-4">
        <UserIcon className="w-full h-full text-gray-500 p-2 border-2 border-gray-300 rounded-full" />
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-300">
          <CameraIcon className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      <div className="w-full flex border-2 px-10 border-[f6f6f6] rounded-[10px] justify-center">
        <div className="w-full flex flex-col items-start py-10 gap-3">
          <div className="text-black text-xl font-semibold">기본정보</div>
          <div className="text-black text-ms">이메일</div>
          <input
            type="text"
            name="email"
            value={formData?.email || ""}
            onChange={(e) => {
              handleChange(e, "email");
            }}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">비밀번호</div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">닉네임</div>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            onBlur={handleNicknameBlur}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <span className="text-red-500 text-sm">{nicknameMessage}</span>
          <div className="text-black text-ms">휴대폰번호</div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">성별</div>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          >
            <option value="MALE">남성</option>
            <option value="FEMALE">여성</option>
            <option value="OTHER">기타</option>
          </select>
          <div className="text-black text-ms">나이</div>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">Instagram</div>
          <input
            type="text"
            name="intsta"
            value={formData.intsta}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
        </div>
      </div>

      <div className="w-full flex border-2 px-10 border-[f6f6f6] rounded-[10px] justify-center">
        <div className="w-full flex flex-col items-start py-10 gap-3">
          <div className="text-black text-xl font-semibold">직무정보</div>
          <div className="text-black text-ms">직무/능력치</div>
          <div className="w-full flex justify-center">
            <Dropdown
              options={jobOptions}
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <Dropdown
              options={abilityOptions}
              value={ability}
              onChange={(e) => setAbility(e.target.value)}
            />
            <Dropdown
              options={levelOptions}
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
            <Dropdown
              options={statusOptions}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="text-black text-ms">선호 지역 설정</div>
          <input
            type="text"
            name="activityArea"
            value={formData.activityArea}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">선호 시간 설정</div>
          <input
            type="text"
            name="preferredCommunicationTime"
            value={formData.preferredCommunicationTime}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">포트폴리오 링크</div>
          <input
            type="text"
            name="portfolioLink"
            value={formData.portfolioLink}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        type="button"
        className="mt-4 w-full p-2 bg-[#594bba] text-white rounded-md"
      >
        회원가입
      </button>
      <SaveModal
        isOpen={showModal}
        onClose={closeModal}
        message={modalMessage}
      />
    </div>
  );
}
