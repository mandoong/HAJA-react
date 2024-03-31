import React, { useState } from "react";
import SignupModal from "../../components/signup/SignupModal";

export default function Signup() {
  // 모달 상태
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // 모달 토글 함수
  const handleToggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  return (
    <>
      <button onClick={handleToggleSignup}>회원가입</button>
      {/* 회원가입 모달 */}
      <SignupModal isOpen={isSignupOpen} onClose={handleToggleSignup} />
    </>
  );
}
