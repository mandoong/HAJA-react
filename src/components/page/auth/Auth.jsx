/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Auth, User } from "../../../utils/repository";
import { useUserStore } from "../../../store/store";

export default function AuthPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const oauthId = searchParams.get("oauthId");
  const loginType = searchParams.get("loginType");

  const { setToken, token } = useUserStore();

  // 테스트용 async 함수
  const fetch = async () => {
    const result = await Auth.Login({
      email: "example@google.com",
      password: "password",
    });

    const oauthCheck = await User.CheckOauth();
    const { requireInfo } = oauthCheck.data;

    if (requireInfo) {
      window.opener.location.href = "/user";
    } else {
      window.opener.localStorage.setItem("oauthId", result.data.accessToken);
      window.opener.dispatchEvent(new Event("token"));
      // window.close();
    }
  };
  useEffect(() => {
    if (oauthId && loginType) {
      fetch();
      // window.opener.localStorage.setItem("oauthId", oauthId);
      // window.opener.localStorage.setItem("loginType", loginType);
      // window.close();
    }
  }, [oauthId, loginType]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {token}
      <p className="text-lg">현재 로그인 진행 중입니다.</p>
    </div>
  );
}
