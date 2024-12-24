import axios from "axios";
import { refreshAccessToken } from "./authService";

// Axios instance 생성
const apiClient = axios.create({
  baseURL: "http://tip-zip.com/api",
  withCredentials: true, // HttpOnly 쿠키 사용
});

// Axios Interceptor 설정
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        const {setAccessToken} = useAuth
      } catch (refreshError) {
        console.error("Token update fail: ", refreshError);
        throw refreshError;
      }
    }
  }
);

export default apiClient;
