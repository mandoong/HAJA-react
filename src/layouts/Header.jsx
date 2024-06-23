/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "../pages/signup";
import { useUserStore } from "../store/store";
import Login from "../pages/login";
import SaveModal from "../components/page/user/SaveModal";

export default function LayoutHeader() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { token, setToken, removeToken } = useUserStore();

  const getToken = () => {
    const storgeToken = window.localStorage.getItem("accessToken");
    if (storgeToken) setToken(storgeToken);
  };

  useEffect(() => {
    // const checkLogin = async () => {
    //   if (HAJAPI.defaults.headers.common.Authorization) {
    //     setIsLogin(true);
    //   } else {
    //     setIsLogin(false);
    //   }
    // };

    // checkLogin();

    window.addEventListener("token", getToken);

    return () => {
      window.removeEventListener("token", getToken);
    };
  }, []);

  const handleMypage = () => {
    navigate("/user/me");
  };

  const handleLogincheck = () => {
    if (token) {
      navigate("/project/apply");
    } else {
      setShowModal(true);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("oauthId"); // 토큰 삭제
    window.localStorage.removeItem("loginType"); // 토큰 삭제
    window.localStorage.removeItem("accessToken"); // 토큰 삭제

    removeToken();
    navigate("/"); // 로그아웃 시 메인 페이지
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-[white] shadow-md z-10 sticky top-0">
      <div className="flex justify-between mx-auto max-w-[1300px] items-center">
        <div className="flex h-16 px-10 items-center justify-between">
          <div className="w-full flex items-center gap-10">
            <Link to="/" className="w-20">
              <img src="/img/hajaLogo.png" alt="HAJA Logo" />
            </Link>
          </div>
        </div>
        <div className="w-full text-mx md:flex justify-start h-10 items-center hidden">
          <Link
            className="hover:text-blue-400 ml-12 font-bold text-gray-600"
            to="/project"
          >
            프로젝트
          </Link>
          {/* <Link className="hover:text-orange-400" to="/project">
            프로덕트
          </Link> */}
          <Link
            className="hover:text-blue-400 ml-40 font-bold text-gray-600"
            to="/user"
          >
            하자인
          </Link>
          {/* <Link className="hover:text-orange-400" to="/">
          퀘스트
        </Link> */}
          <Link
            className="hover:text-blue-400 ml-40 font-bold text-gray-600"
            to="/lounge"
          >
            라운지
          </Link>
        </div>
        <div className="flex gap-6">
          <div>
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <button type="button" onClick={handleLogincheck}>
            <PencilIcon className="w-6" />
          </button>
          {token ? (
            <div className="flex gap-6">
              <button type="button" onClick={handleMypage}>
                <UserCircleIcon className="w-6" />
              </button>
              <button type="button" onClick={handleLogout}>
                <ArrowRightStartOnRectangleIcon className="w-6" />
              </button>
            </div>
          ) : (
            <div className="flex">
              <Signup />
              <Login />
            </div>
          )}
        </div>
      </div>
      <SaveModal
        isOpen={showModal}
        onClose={closeModal}
        message="로그인 후 글 작성이 가능합니다."
      />
    </div>
  );
}
