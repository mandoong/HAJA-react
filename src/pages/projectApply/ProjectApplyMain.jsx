import { useEffect, useState } from "react";
import { Project, User } from "../../utils/repository";

export default function ProjectApplyMain() {
  const [data, setData] = useState({});
  const [id, setId] = useState();
  const [userId, setUserId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const getProjectId = async (page = 1) => {
    const result = await Project.ProjectList(page, 1);
    setId(result.data.nodes[0].id + 1);
  };

  const getUserId = async () => {
    const result = await User.GetMe();
    setUserId(result.data);
  };

  useEffect(() => {
    getUserId();
  }, []);

  useEffect(() => {
    getProjectId();
    setData(() => ({
      id,
    }));
  }, []);

  console.log(userId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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

  return (
    <div className="w-full py-10 px-10">
      <div className="text-xl font-bold mb-3">프로젝트명 *</div>
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
      <div className="w-full flex items-center mt-8">adsf</div>
    </div>
  );
}
