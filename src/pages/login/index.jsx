import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Login() {
  // 모달 상태
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // 모달 토글 함수
  const handleToggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="w-12 text-xs"
        onClick={handleToggleSignup}
      >
        / 로그인
      </button>

      {/* 회원가입 모달 */}
      <LoginModal isOpen={isSignupOpen} onClose={handleToggleSignup} />
    </div>
  );
}
