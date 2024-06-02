import SaveModal from "../user/SaveModal";

function SignupButton({ site }) {
  let buttonColorClass = "";
  let buttonIcon = "";
  let siteLink = "";

  const openLoginPopup = (url) => {
    const width = 500;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
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
      siteLink = "https://api.project-haja.com/auth/kakao";
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

  return (
    <button
      type="button"
      className={`w-full text-white font-bold py-2 px-4 rounded ${buttonColorClass}`}
      onClick={handleButtonClick}
    >
      <i className={`${buttonIcon}`} /> {site}로 회원가입
    </button>
  );
}

export default SignupButton;
