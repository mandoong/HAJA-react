import React from "react";

function SignupButton({ site }) {
  let buttonColorClass = "";
  let buttonIcon = "";
  // eslint-disable-next-line prefer-const
  let siteLink = "";

  const openNewWindow = (url) => {
    const windowFeatures = "width=500,height=600"; // 창의 크기를 지정합니다.
    window.open(url, "_blank", windowFeatures);
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

  return (
    <a
      href={siteLink}
      className={`w-full text-white font-bold py-2 px-4 rounded ${buttonColorClass}`}
      onClick={(event) => {
        event.preventDefault(); // 기본 동작 중단
        openNewWindow(siteLink);
      }}
    >
      <i className={`${buttonIcon}`} /> {site}로 회원가입
    </a>
  );
}

export default SignupButton;
// import React from "react";

// export default function SignUpButton({ site }) {
//   // let btnClass, btnStyle;
//   // switch (site) {
//   //   case "네이버":
//   //     btnClass = "text-white";
//   //     btnStyle = { backgroundColor: "#03C75A" };
//   //     break;
//   //   case "카카오":
//   //     btnClass = "";
//   //     btnStyle = { backgroundColor: "#FEE500", color: "#191919" };
//   //     break;
//   //   case "구글":
//   //     btnClass = "bg-white text-gray-700 border border-black";
//   //     btnStyle = {};
//   //     break;
//   // }
//   // return (
//   //   <button
//   //     type="button"
//   //     className={`flex items-center h-12 w-72 rounded-md font-bold mb-5 px-3 ${btnClass} text-center`}
//   //     style={btnStyle}
//   //   >
//   //     <img
//   //       className={`w-auto h-3/5 mr-3`}
//   //       src={require(`../../../assets/images/logos/${site}.png`)}
//   //       alt={`${site} Logo`}
//   //     />
//   //     <p className="text-center">{site}로 회원가입</p>
//   //   </button>
//   // );
// }
