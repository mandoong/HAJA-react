import axios from "axios";

const HAJAPI = axios.create({
  // baseURL: "http://localhost:3000/dev/", // API의 기본 URL을 설정합니다.
  baseURL: "https://api.project-haja.com", // API의 기본 URL을 설정합니다.
});

// const Token = window.localStorage.getItem("accessToken") || null;

// if (Token) {
//   MMAPI.defaults.headers.Authorization = "Bearer " + Token;
// }

HAJAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response) {
      if (error.response.status === 401) {
        // Cookies.remove("accessToken");
        // const url = window.location.href;
        // window.localStorage.setItem("redirect", url);
        // location.href = "/login";
      }
    }
    return Promise.reject(error.response);
  }
);

export { HAJAPI };
