import React from "react";
import styles from "./signupModal.module.css";

export default function SignupModal({ isOpen, onClose }) {
	return (
		<>
			{isOpen && (
				<div className={styles["modal-overlay"]}>
					<div className={styles["modal-container"]} onClick={onClose}>
						<div className={styles[""]} onClick={(e) => e.stopPropagation()}>
							<h2>회원가입</h2>
							<button onClick={onClose}>닫기</button>
							<div className="flex justify-center items-center flex-col">
								{/* 💡 버튼 컴포넌트 분리하기 */}
								<button className={styles["signup-btn"]}>
									<img
										src={require(`../../assets/images/logos/naver.png`)}
										alt="naver"
									/>
									네이버 아이디로 가입
								</button>
								<button className={`${styles["signup-btn"]} mt-4 mb-4`}>
									<img
										src={require(`../../assets/images/logos/kakao.jpg`)}
										alt="naver"
									/>
									카카오 계정으로 가입
								</button>
								<button className={styles["signup-btn"]}>
									<img
										src={require(`../../assets/images/logos/google.png`)}
										alt="google"
									/>
									구글 계정으로 가입
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
