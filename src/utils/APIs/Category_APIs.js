import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'

export const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
};