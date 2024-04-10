import React from "react";
import SignupButton from "./SignupButton";

export default function SignupModal({ isOpen, onClose }) {
  return (
    isOpen && (
      // 배경
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        {/* 모달 */}
        <button
          type="button"
          className="flex justify-center items-center w-96 h-auto bg-white rounded-md px-8 py-10 relative"
          onClick={onClose}
        >
          <button type="button" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-bold text-2xl mb-6">회원가입</h2>
            <button
              type="button"
              className="absolute top-1 right-1 mt-1 mr-1"
              onClick={onClose}
            >
              ❌
            </button>
            <div className="flex flex-col justify-center items-center">
              <SignupButton site="네이버" />
              <SignupButton site="카카오" />
              <SignupButton site="구글" />
              <p className="text-gray-500 text-sm underline mt-10">로그인</p>
            </div>
          </button>
        </button>
      </div>
    )
  );
}
