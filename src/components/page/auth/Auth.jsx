/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

export default function Auth() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const oauthId = localStorage.getItem("oauthId");
      const loginType = localStorage.getItem("loginType");
      if (
        oauthId !== null &&
        oauthId !== "" &&
        loginType !== null &&
        loginType !== ""
      ) {
        setLoggedIn(true);
        clearInterval(intervalId); // 토큰을 찾으면 setInterval 중지
      }
    }, 500); // 0.5초마다 실행

    return () => clearInterval(intervalId); // 컴포넌트가 unmount될 때 clearInterval
  }, []);

  useEffect(() => {
    if (loggedIn) {
      window.open("/login/success", "_self");
      window.close();
    }
  }, [loggedIn]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">현재 로그인 진행 중입니다.</p>
    </div>
  );
}
