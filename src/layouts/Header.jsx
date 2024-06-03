/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  MagnifyingGlassIcon,
  PencilIcon,
  UserCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HAJAPI from "../utils/api";
import Signup from "../pages/signup";
import { useUserStore } from "../store/store";
import Login from "../pages/login";

export default function LayoutHeader() {
  const [isLogin, setIsLogin] = useState(false);
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

  const handleLogout = () => {
    window.localStorage.removeItem("oauthId"); // 토큰 삭제
    window.localStorage.removeItem("loginType"); // 토큰 삭제
    removeToken();
    navigate("/"); // 로그아웃 시 메인 페이지
  };
  return (
    <div className="shadow-md z-10">
      <div className="flex h-16 px-10 items-center justify-betweena">
        <div className="w-full flex items-center gap-10">
          <Link to="/">로고</Link>
          <div className="w-96 text-[10px] md:hidden justify-around h-10 items-center flex">
            <Link className="hover:text-orange-400" to="/project">
              모임
            </Link>
            <Link className="hover:text-orange-400" to="/project">
              프로덕트
            </Link>
            <Link className="hover:text-orange-400" to="/">
              하자인
            </Link>
            {/* <Link className="hover:text-orange-400" to="/">
              퀘스트
            </Link> */}
            <Link className="hover:text-orange-400" to="/lounge">
              라운지
            </Link>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <div>
            <PencilIcon className="w-6" />
          </div>
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
              <button type="button">
                <Signup />
              </button>
              <button type="button">
                <Login />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full text-sm md:flex justify-around h-10 items-center hidden">
        <Link className="hover:text-orange-400" to="/project">
          모임
        </Link>
        <Link className="hover:text-orange-400" to="/project">
          프로덕트
        </Link>
        <Link className="hover:text-orange-400" to="/">
          하자인
        </Link>
        {/* <Link className="hover:text-orange-400" to="/">
          퀘스트
        </Link> */}
        <Link className="hover:text-orange-400" to="/lounge">
          라운지
        </Link>
      </div>
    </div>
  );
}
