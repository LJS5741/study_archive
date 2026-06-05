import AxiosInstance from "./AxiosInstance";
import axios from "axios";
import Common from "../utils/Common";

// 인증이 필요 없는 공개 API
const publicApi = axios.create({baseURL: Common.HM_DOMAIN});

const AxiosApi = {
  // 인증 (Auth)
  login: (email, password) => publicApi.post('auth/login', {email, password}),
  signup: (memberData) => publicApi.post('/auth/signup', memberData),

  // 게시글
  getPosts: (page = 0, size = 10) => AxiosInstance.get()
};
