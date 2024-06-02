import { useCallback, useEffect, useState } from "react";
import { CameraIcon, UserIcon } from "@heroicons/react/20/solid";
import { User } from "../../utils/repository";
import SaveModal from "../../components/page/user/SaveModal";
import Dropdown from "../../components/basic/menu/DropDown";

const jobOptions = ["기획", "개발", "디자인"];
const abilityOptions = ["UI/UX기획", "웹개발", "그래픽디자인"];
const levelOptions = ["초급", "중급", "고급"];
const statusOptions = ["미지정", "1~3년차", "3~5년차"];

export default function Mypage() {
  const [user, setUser] = useState(null);
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [job, setJob] = useState("");
  const [ability, setAbility] = useState("");
  const [level, setLevel] = useState("");
  const [status, setStatus] = useState("");
  const [nickname, setNickname] = useState();

  const fetch = async () => {
    const result = await User.GetMe();
    setUser(result.data);
    setNickname(result.data.nickname);
    console.log(result.data.age);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleNicknameCheck = async () => {
    const isAvailable = await User.CheckNickname({ nickname });
    if (isAvailable.data === true) {
      setNicknameMessage("사용 가능한 닉네임입니다.");
    } else {
      setNicknameMessage("이미 사용 중인 닉네임입니다.");
    }
    console.log(isAvailable.data);
  };

  const debounce = (callback, delay = 200) => {
    let timer;
    return (event) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(callback, delay, event);
    };
  };

  const nicknameDebounce = useCallback(debounce(handleNicknameCheck, 200), [
    nickname,
  ]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
    nicknameDebounce();
  };

  const handleSave = async () => {
    const userUpdate = { ...user };
    const result = await User.EditMe(userUpdate);
    if (result.status === 200) {
      setUser(result.data);
      setModalMessage("프로필이 성공적으로 업데이트되었습니다.");
      setShowModal(true);
    } else {
      setModalMessage("프로필 업데이트에 실패했습니다.");
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f8f8f8] gap-6">
      <div className="relative w-32 h-32 mb-4">
        {user?.profilePicture ? (
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-2 border-gray-300"
          />
        ) : (
          <UserIcon className="w-full h-full text-gray-500 p-2 border-2 border-gray-300 rounded-full" />
        )}
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
            value={user ? user.email : ""}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-100"
          />
          <div className="text-black text-ms">닉네임</div>
          <input
            type="text"
            defaultValue={user ? user.nickname : ""}
            value={nickname}
            onChange={handleNicknameChange}
            className="w-full p-2 border rounded-md bg-gray-50"
          />
          <span className="text-red-500 text-sm">{nicknameMessage}</span>
          <div className="text-black text-ms">휴대폰번호</div>
          <input
            type="text"
            value={user ? user.phone : ""}
            readOnly
            className="w-full p-2 border rounded-md bg-gray-100"
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
          <div className="text-black text-ms">선호 시간 설정</div>
        </div>
      </div>
      <button
        onClick={handleSave}
        type="button"
        className="mt-4 w-full p-2 bg-[#594bba] text-white rounded-md"
      >
        프로필 수정
      </button>
      <SaveModal
        isOpen={showModal}
        onClose={closeModal}
        message={modalMessage}
      />
    </div>
  );
}
