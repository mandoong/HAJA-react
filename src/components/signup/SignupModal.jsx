import React from "react";
import styles from "./signupModal.module.css";

export default function SignupModal({ isOpen, onClose }) {
  return (
    isOpen && (
      <div className={styles["modal-overlay"]}>
        <button
          type="button"
          className={styles["modal-container"]}
          onClick={onClose}
        >
          <button
            type="button"
            className={styles[""]}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>회원가입</h2>
            <button type="button" onClick={onClose}>
              닫기
            </button>
            <div className="flex justify-center items-center flex-col">
              {/* 💡 버튼 컴포넌트 분리하기 */}
              <button type="button" className={styles["signup-btn"]}>
                <img src="../../assets/images/logos/naver.png" alt="naver" />
                네이버 아이디로 가입
              </button>
              <button
                type="button"
                className={`${styles["signup-btn"]} mt-4 mb-4`}
              >
                <img src="../../assets/images/logos/kakao.jpg" alt="naver" />
                카카오 계정으로 가입
              </button>
              <button type="button" className={styles["signup-btn"]}>
                <img src="../../assets/images/logos/google.png" alt="google" />
                구글 계정으로 가입
              </button>
            </div>
          </button>
        </button>
      </div>
    )
  );
}
