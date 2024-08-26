import axios from 'axios';
import { getCurrentUserId } from './JWT_TokenDecoder';

const API_BASE_URL = 'http://localhost:3001'
const user_id = getCurrentUserId();

export const fetchCart = async ()=>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/cart`,
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export  const fetchProductSizes = async (product_size_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/product_sizes/${product_size_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product size:", error);
    throw error;
  }
};

export const fetchProduct = async (product_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${product_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};


export  const fetchSize = async (size_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/sizes/${size_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching size:", error);
    throw error;
  }
};

export const addOneToCartProductQuantity = async(cartProductId) =>{
  return await axios.patch(
      `${API_BASE_URL}/users/${user_id}/cart/carts_products/${cartProductId}/add_one_to_quantity`
    );
}

export const subtractOneFromCartProductQuantity = async(cartProductId) =>{
  return await axios.patch(
    `${API_BASE_URL}/users/${user_id}/cart/carts_products/${cartProductId}/subtract_one_from_qantity`
  );
}

export const removeProductFromCart = async(cartProductId) =>{
  return await axios.delete(
    `${API_BASE_URL}/users/${user_id}/cart/carts_products/${cartProductId}`
  );
}

export const clearCart = async () => {
  try {
    await axios.delete(
      `${API_BASE_URL}/users/${user_id}/cart`
    );
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const addProductToCart = async (product_size_id) =>{
  console.log("I'm here clicked")
  return await axios.post(
    `${API_BASE_URL}/users/${user_id}/cart/carts_products/`, {product_size_id}
  );
}