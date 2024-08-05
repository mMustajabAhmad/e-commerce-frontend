import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
    const response = await apiClient.post('/auth/login', { user: { email, password } }); // Use the 'user' key
    return response.data;
};


export const signup = async ({name, email, phone_number, password, password_confirmation}) => {
      const response = await apiClient.post('/signup', {
        user: { name, email, phone_number, password, password_confirmation }
      });
      return response.data;
};

