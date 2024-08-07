import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (email, password) => {
  const response = await apiClient.post('/auth/login', { user: { email, password } });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return response.data;
};

export const signup = async ({ name, email, phone_number, password, password_confirmation }) => {
  const response = await apiClient.post('/signup', {
    user: { name, email, phone_number, password, password_confirmation }
  });
  return response.data;
};

export default apiClient;
