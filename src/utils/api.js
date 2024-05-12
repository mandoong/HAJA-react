import axios from "axios";

const HAJAPI = axios.create({
  baseURL: "http://localhost:3000/", // API의 기본 URL을 설정합니다.
  // baseURL: "https://api.project-haja.com", // API의 기본 URL을 설정합니다.
});
const Token = window.localStorage.getItem("oauthId") || null;
if (Token) {
  HAJAPI.defaults.headers.common.Authorization = `Bearer ${Token}`;
  console.log(HAJAPI.defaults.headers.common.Authorization);
}

HAJAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response) {
      if (error.response.status === 401) {
        window.localStorage.removeItem("oauthId");
        const url = window.location.href;
        window.localStorage.setItem("redirect", url);
        window.location.href = "/";
      }
    }
    return Promise.reject(error.response);
  }
);

export default HAJAPI;
