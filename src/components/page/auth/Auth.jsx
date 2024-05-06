import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Auth() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const oauthId = searchParams.get("oauthId");
  const loginType = searchParams.get("loginType");

  useEffect(() => {
    if (oauthId && loginType) {
      localStorage.setItem("oauthId", oauthId);
      localStorage.setItem("loginType", loginType);
    }
  }, [oauthId, loginType]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-lg">현재 로그인 진행 중입니다.</p>
    </div>
  );
}
