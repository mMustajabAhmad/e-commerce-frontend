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

export const fetchProductSizes = async (product_id) =>{
  try{
    const response = await axios.get(`${API_BASE_URL}/products/${product_id}/product_sizes`);
    return response.data;
  }catch(error) {
    console.log("Error", error);
  }
}

export const fetchProduct = async (product_id) =>{
  try{
    const response = await axios.get(`${API_BASE_URL}/products/${product_id}`)
    return response.data;
  }catch(error){
    console.log("Error", error);
  }
}

export const fetchProductSizeId = async (product_id ,size_id) =>{
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${product_id}/product_sizes/${size_id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
}