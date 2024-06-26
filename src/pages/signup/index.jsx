import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SignupModal from "../../components/page/signup/SignupModal";

export default function Signup() {
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
        className="w-8 text-xs"
        onClick={handleToggleSignup}
      >
        가입
      </button>

      {/* 회원가입 모달 */}
      <SignupModal isOpen={isSignupOpen} onClose={handleToggleSignup} />
    </div>
  );
}
