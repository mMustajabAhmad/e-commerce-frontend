import axios from "axios";

const API_BASE_URL = "http://localhost:3001";
const token = localStorage.getItem('token');
  

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchProductSizes = async (product_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${product_id}/product_sizes`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchProduct = async (product_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${product_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchProductSizeId = async (product_id, size_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${product_id}/product_sizes/${size_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchSearchedProducts = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products?query=${query}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      });
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const fetchProductSize = async (product_size_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/product_sizes/${product_size_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};
