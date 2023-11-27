import axiosLibrary from 'axios';

export const axios = axiosLibrary.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    config.headers['X-Api-Key'] = import.meta.env.VITE_API_KEY;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error.response.data);
  }
);
