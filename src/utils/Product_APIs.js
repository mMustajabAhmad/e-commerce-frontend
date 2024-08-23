import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
