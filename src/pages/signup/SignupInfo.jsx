import { useCallback, useEffect, useState } from "react";
import { CameraIcon, UserIcon } from "@heroicons/react/20/solid";
import SaveModal from "../../components/page/user/SaveModal";
import Dropdown from "../../components/basic/menu/DropDown";
import { User } from "../../utils/repository";

const roleOptions = ["기획", "개발", "디자인"];
const abilityOptions = ["UI/UX기획", "웹개발", "그래픽디자인"];
const levelOptions = ["초급", "중급", "고급"];
const statusOptions = ["미지정", "1~3년차", "3~5년차"];

export default function SignupInfo() {
  const [formData, setFormData] = useState({});

  const [nicknameMessage, setNicknameMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [role, setRole] = useState("");
  const [ability, setAbility] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const oauthId = localStorage.getItem("oauthId");
    const loginType = localStorage.getItem("loginType");
    if (oauthId && loginType) {
      setFormData((prevData) => ({
        ...prevData,
        oauthId,
        loginType,
      }));
    }
  }, []);

  const debounce = (callback, delay = 200) => {
    let timer;
    return (event) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(callback, delay, event);
    };
  };

  const handleNicknameCheck = async () => {
    const isAvailable = await User.CheckNickname({
      nickname: formData.nickname,
    });
    if (isAvailable.data === true) {
      setNicknameMessage("사용 가능한 닉네임입니다.");
    } else {
      setNicknameMessage("이미 사용 중인 닉네임입니다.");
    }
    console.log(isAvailable.data);
  };
  const nicknameDebounce = useCallback(debounce(handleNicknameCheck, 200), [
    formData.nickname,
  ]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailCheck = async () => {
    if (!isValidEmail(formData.email)) {
      setModalMessage("유효한 이메일 주소를 입력하세요.");
      setShowModal(true);
      return;
    }

    const isAvailable = await User.CheckEmail({
      email: formData.email,
    });
    if (isAvailable.data === true) {
      setModalMessage("사용 가능한 이메일입니다.");
      setShowModal(true);
    } else {
      setModalMessage("이미 사용 중인 이메일입니다.");
      setShowModal(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "nickname") {
      nicknameDebounce();
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
      <div className="relative w-32 h-32 mb-4 mt-10">
        <UserIcon className="w-full h-full text-gray-500 p-2 border-2 border-gray-300 rounded-full" />
        <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-300">
          <CameraIcon className="h-6 w-6 text-gray-500" />
        </div>
      </div>

      <div className="w-full flex border-2 px-10 border-[f6f6f6] rounded-[10px] justify-center">
        <div className="w-full flex flex-col items-start py-10 gap-3">
          <div className="text-black text-xl font-semibold">기본정보</div>
          <div className="text-black text-ms">이메일</div>
          <div className="w-full flex items-center">
            <input
              type="text"
              name="email"
              value={formData?.email || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-gray-50"
            />
            <button
              onClick={handleEmailCheck}
              type="button"
              className="w-20 h-full ml-2 p-2 bg-blue-500 text-white text-xs rounded-md"
            >
              중복확인
            </button>
          </div>
          <div className="text-black text-ms">비밀번호</div>
          <input
            type="password"
            name="password"
            value={formData?.password || ""}
            onChange={(e) => {
              handleChange(e, "password");
            }}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">닉네임</div>
          <input
            type="text"
            name="nickname"
            value={formData?.nickname || ""}
            onChange={(e) => {
              handleChange(e, "nickname");
            }}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <span className="text-red-500 text-sm">{nicknameMessage}</span>
          <div className="text-black text-ms">휴대폰번호</div>
          <input
            type="text"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">성별</div>
          <select
            name="gender"
            value={formData?.gender || ""}
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
            value={formData?.age || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">Instagram</div>
          <input
            type="text"
            name="intsta"
            value={formData?.intsta || ""}
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
              options={roleOptions}
              value={formData?.role || ""}
              onChange={(e) => setRole(e.target.value)}
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
            value={formData?.activityArea || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">자기소개</div>
          <input
            type="text"
            name="description"
            value={formData?.description || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <div className="text-black text-ms">선호 플랫폼</div>
          <input
            type="text"
            name="preferredCommunicationPlatform"
            value={formData.preferredCommunicationPlatform}
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
          <div className="text-black text-ms">프로필 공개 여부</div>
          <input
            type="checkbox"
            name="profileVisibility"
            checked={formData.profileVisibility || "false"}
            onChange={(e) =>
              setFormData({
                ...formData,
                profileVisibility: e.target.checked,
              })
            }
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
