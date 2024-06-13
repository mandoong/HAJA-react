import HAJAPI from "./api";

export const Project = {
  Project: async (data) => {
    return HAJAPI.post("/project", data)
      .then((res) => res)
      .catch((err) => err);
  },
  ProjectList: async (page = 1, perPage = 10) => {
    return HAJAPI.get(`/project?page=${page}&perPage=${perPage}`)
      .then((res) => res)
      .catch((err) => err);
  },
  ProjectDetail: async (id) => {
    return HAJAPI.get(`/project/${id}`)
      .then((res) => res)
      .catch((err) => err);
  },
};

export const Auth = {
  Login: async (data) => {
    return HAJAPI.post("/auth/login", data)
      .then((res) => res)
      .catch((err) => err);
  },
  Refresh: async (data) => {
    return HAJAPI.post("/auth/refresh", data)
      .then((res) => res)
      .catch((err) => err);
  },
  Naver: async () => {
    return HAJAPI.get("/auth/naver")
      .then((res) => res)
      .catch((err) => err);
  },
  NaverCallback: async () => {
    return HAJAPI.get("/auth/naver/callback")
      .then((res) => res)
      .catch((err) => err);
  },
  Kakao: async () => {
    return HAJAPI.get("/auth/kakao")
      .then((res) => res)
      .catch((err) => err);
  },
  KakaoCallback: async () => {
    return HAJAPI.get("/auth/kakao/callback")
      .then((res) => res)
      .catch((err) => err);
  },
};

export const User = {
  GetMe: async () => {
    return HAJAPI.get("/user/me")
      .then((res) => res)
      .catch((err) => err);
  },
  EditMe: async (data) => {
    return HAJAPI.patch("/user/me", data)
      .then((res) => res)
      .catch((err) => err);
  },
  SignIn: async (data) => {
    return HAJAPI.post("/user", data)
      .then((res) => res)
      .catch((err) => err);
  },
  CheckNickname: async (data) => {
    return HAJAPI.post("/user/check-nickname", data)
      .then((res) => res)
      .catch((err) => err);
  },
  CheckEmail: async (data) => {
    return HAJAPI.post("/user/check-email", data)
      .then((res) => res)
      .catch((err) => err);
  },
  CheckOauth: async (data) => {
    return HAJAPI.post("/user/check-oauth", data)
      .then((res) => res)
      .catch((err) => err);
  },
};

export const Post = {
  fetchPosts: async ({ page, perPage, query }) => {
    return HAJAPI.get(`/post?page=${page}&perPage=${perPage}&query=${query}`)
      .then((res) => res)
      .catch((err) => err);
  },
  addPost: async (data) => {
    return HAJAPI.post("/post", data)
      .then((res) => res)
      .catch((err) => err);
  },
  GetPosts: async (perPage, page, query) => {
    return HAJAPI.get(
      `/post?perPage=${perPage}&page=${page}${query ? `&query=${query}` : ""}`
    )
      .then((res) => res)
      .catch((err) => err);
  },
};
