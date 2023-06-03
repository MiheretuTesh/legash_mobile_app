import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../utils/token.get.set';

const axiosInstance = axios.create({
  baseURL: 'https://legashfund.onrender.com/api/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken(); // Use AsyncStorage instead of localStorage in React Native

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* Axios instance that receives an argument for content type */

export const createAxiosInstance = (contentType = 'application/json') => {
  const instance = axios.create({
    baseURL: 'https://legashfund.onrender.com/api/v1/',
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = AsyncStorage.getItem('token'); // Use AsyncStorage instead of localStorage in React Native
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return instance;
};

export default axiosInstance;
