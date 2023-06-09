import axios from "axios";
import { tokenVerifyAxios } from "./auth/login";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return config;
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");
  const userId = sessionStorage.getItem("userId");
  if (accessToken || refreshToken) {
    config.headers["accessToken"] = accessToken;
    config.headers["refreshToken"] = refreshToken;
    config.headers["userId"] = userId;
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    const accessToken = response.data["accessToken"];
    const refreshToken = response.data["refreshToken"];
    const userId = response.data["userId"];

    if (accessToken) {
      sessionStorage.setItem("accessToken", accessToken);
    }
    if (refreshToken) {
      sessionStorage.setItem("refreshToken", refreshToken);
    }
    if (userId) {
      sessionStorage.setItem("userId", userId);
    }
    return response;
  },

  function (error) {
    const errorMessage = error.response.data.errorMessage;
    console.log(errorMessage);
    // 액세스 토큰 만료시 리프레쉬 토큰 전달
    if (errorMessage === "Access Token이 만료되었습니다.") {
      tokenVerifyAxios();
      // 리프레쉬 토큰 만료시 토큰 삭제 및 로그아웃 처리
    } else if (errorMessage === "리프레쉬 토큰이 만료되었습니다") {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("userId");
      alert("유효기간이 만료되어 로그인 페이지로 이동합니다.");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export { instance };
