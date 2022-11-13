import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  (config) => config,
  () => ({ message: '요청 실패' })
);

api.interceptors.response.use(
  (config) => config,
  (error) => error.response
);
