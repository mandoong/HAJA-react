import React from "react";

export default function SignUpButton({ site }) {
  let btnClass;
  let btnStyle;

  switch (site) {
    case "네이버":
      btnClass = "text-white";
      btnStyle = { backgroundColor: "#03C75A" };
      break;
    case "카카오":
      btnClass = "";
      btnStyle = { backgroundColor: "#FEE500", color: "#191919" };
      break;
    case "구글":
      btnClass = "bg-white text-gray-700 border border-black";
      btnStyle = {};
      break;
    default:
      break;
  }

  return (
    <button
      type="button"
      className={`flex items-center h-12 w-72 rounded-md font-bold mb-5 px-3 ${btnClass} text-center`}
      style={btnStyle}
    >
      <img
        className="w-auto h-3/5 mr-3"
        src={`../../../assets/images/logos/${site}.png`}
        alt={`${site} Logo`}
      />
      <p className="text-center">{site}로 회원가입</p>
    </button>
  );
}
