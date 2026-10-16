import axios from 'axios';

// 모든 API 호출이 쓰는 axios 인스턴스. 생성된 API 클래스에도 이 인스턴스를 넘긴다.
// baseURL은 서버 주소(origin)만 갖고, /api prefix는 생성된 API 경로에 들어 있다.
// 인증은 HttpOnly 쿠키 기반이라 토큰 헤더를 붙이지 않는다.
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  withCredentials: true,
});
