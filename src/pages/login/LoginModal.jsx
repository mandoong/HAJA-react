import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SignupButton from "../../components/page/signup/SignupButton";
import { Auth } from "../../utils/repository";

export default function LoginModal({ isOpen, onClose }) {
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const searchParams = new URLSearchParams(location.search);
  const oauthId = searchParams.get("oauthId");
  const loginType = searchParams.get("loginType");
  const [loginMessage, setLoginMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkLogin = async () => {
    const userData = { ...formData };
    const result = await Auth.Login(userData);
    if (result.status === 201) {
      window.localStorage.setItem("oauthId", result.data.accessToken);
      window.dispatchEvent(new Event("token"));
      onClose();
    } else {
      setLoginMessage("아이디 또는 비밀번호를 확인하세요.");
    }
  };

  useEffect(() => {
    if (oauthId && loginType) {
      fetch();
    }
  }, [oauthId, loginType]);

  return (
    isOpen && (
      // 배경
      <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-50">
        {/* 모달 */}
        <button
          type="button"
          className="flex justify-center items-center w-96 h-auto bg-white rounded-md px-8 py-10 relative"
          onClick={onClose}
        >
          <button type="button" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-bold text-2xl mb-6">로그인</h2>
            <button
              type="button"
              className="absolute top-1 right-1 mt-1 mr-1"
              onClick={onClose}
            >
              ❌
            </button>
            <div className="text-black text-ms">이메일</div>
            <div className="w-full flex items-center">
              <input
                type="text"
                name="email"
                value={formData?.email || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-50"
              />
            </div>
            <div className="text-black text-ms">비밀번호</div>
            <input
              type="password"
              name="password"
              value={formData?.password || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-gray-50"
            />
            <button
              type="button"
              onClick={checkLogin}
              className="w-full mt-5 bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded"
            >
              로그인
            </button>
            <span className="text-red-500 text-sm">{loginMessage}</span>
            <div className="flex flex-col justify-center items-center mt-10">
              <SignupButton site="네이버" />
              <SignupButton site="카카오" />
              <SignupButton site="구글" />
            </div>
          </button>
        </button>
      </div>
    )
  );
}
