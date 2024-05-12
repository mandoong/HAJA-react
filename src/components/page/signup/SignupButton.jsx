/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SignupButton({ site }) {
  let buttonColorClass = "";
  let buttonIcon = "";
  let siteLink = "";
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const oauthId = searchParams.get("oauthId");
  const loginType = searchParams.get("loginType");
  const [popup, setPopup] = useState(null);

  const openLoginPopup = (url) => {
    const width = 500;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
    const Popup = window.open(url, "_blank", windowFeatures);
    setPopup(Popup);
  };

  switch (site) {
    case "네이버":
      buttonColorClass = "bg-green-500 hover:bg-green-600";
      buttonIcon = "fab fa-naver mr-2";
      siteLink = "https://api.project-haja.com/auth/naver";
      break;
    case "카카오":
      buttonColorClass = "bg-yellow-500 hover:bg-yellow-600";
      buttonIcon = "fab fa-kakao mr-2";
      break;
    case "구글":
      buttonColorClass = "bg-blue-500 hover:bg-blue-600";
      buttonIcon = "fab fa-google mr-2";
      break;
    default:
      buttonColorClass = "bg-gray-500 hover:bg-gray-600";
      break;
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    openLoginPopup(siteLink);
  };

  useEffect(() => {
    if (oauthId && loginType && popup) {
      localStorage.setItem("oauthId", oauthId);
      localStorage.setItem("loginType", loginType);
    }
  }, [oauthId, loginType]);

  return (
    <a
      href={siteLink}
      className={`w-full text-white font-bold py-2 px-4 rounded ${buttonColorClass}`}
      onClick={handleButtonClick}
    >
      <i className={`${buttonIcon}`} /> {site}로 회원가입
    </a>
  );
}

export default SignupButton;
