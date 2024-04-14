import React, { useState } from "react";

export default function SignupDetail() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [level, setLevel] = useState("");
  const [isEmailAuthenticated, setIsEmailAuthenticated] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const handleEmailAuthClick = () => {};

  const handleNicknameCheck = () => {};

  const handleSubmit = async (e) => {};

  const options = [
    {
      label: "기획",
      options: [
        "UI/UX기획",
        "게임 기획",
        "프로젝트 매니저",
        "컨텐츠 계획",
        "기타",
      ],
    },
    {
      label: "디자인",
      options: [
        "그래픽 디자인",
        "웹 디자인",
        "UI/UX 디자인",
        "일러스트레이션",
        "기타",
      ],
    },
    {
      label: "프론트엔드 개발자",
      options: ["React", "Angular", "Vue", "웹 디자인", "기타"],
    },
    {
      label: "백엔드 개발자",
      options: ["Node.js", "Python", "Java", "Ruby on Rails", "기타"],
    },
    { label: "기타", options: ["기타"] },
  ];

  const generateOptions = (options) => {
    return options.map((option) => (
      <optgroup label={option.label} key={option.label}>
        {option.options.map((subOption) => (
          <option key={subOption} value={subOption}>
            {subOption}
          </option>
        ))}
      </optgroup>
    ));
  };

  return (
    <div>
      <h1>마지막 단계를 마치면, 회원가입이 완료됩니다!</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
        <div className="flex items-center mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isEmailAuthenticated}
            className="w-full px-4 py-2 mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleEmailAuthClick}
            disabled={isEmailAuthenticated}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            인증
          </button>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-4 py-2 mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleNicknameCheck}
            disabled={isNicknameAvailable}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            중복확인
          </button>
        </div>
        <div className="flex mb-4">
          <select
            value={분야}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubCategory("");
            }}
            className="w-1/3 px-4 py-2 mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Category</option>
            {generateOptions(options)}
          </select>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-1/3 px-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Level</option>
            {levelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">회원</button>
      </form>
    </div>
  );
}
