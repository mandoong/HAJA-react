import HAJAPI from "./api";

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
  CheckNickname: async () => {
    return HAJAPI.get("/user/check-nickname")
      .then((res) => res)
      .catch((err) => err);
  },
  CheckEmail: async () => {
    return HAJAPI.get("/user/check-email")
      .then((res) => res)
      .catch((err) => err);
  },
  CheckOauth: async () => {
    return HAJAPI.get("/user/check-oauth")
      .then((res) => res)
      .catch((err) => err);
  },
};

export const Post = {
  fetchPosts: async () => {
    return HAJAPI.get("/post")
      .then((res) => res.data.nodes)
      .catch((err) => err);
  },
};
