import axios from 'axios';
import { Car } from '../types';

export const api = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api',
});

api.interceptors.request.use(
  (config) => config,
  () => ({ message: '요청 실패' })
);

api.interceptors.response.use(
  (config) => config,
  (error) => error.response
);

export const carAPI = {
  getCarList: async (type: string) => {
    if (type === 'ALL') {
      const { data } = await api.get('/cars');
      return data.payload;
    }
    const { data } = await api.get(`/cars?fuelType=ev&segment=${type}`);
    return data.payload;
  },
  getCarDetail: async (id: number) => {
    const { data } = await api.get(`/cars`);
    return data?.payload.filter((item: Car) => item.id === Number(id))[0];
  },
};
