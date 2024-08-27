import axios from 'axios';
import { getCurrentUserId } from '../JWT_TokenDecoder';

const API_BASE_URL = 'http://localhost:3001'
const user_id = getCurrentUserId();

export const fetchOrderVouchers = async ()=>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/vouchers/Order/${user_id}`,
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export const fetchProductVouchers = async ()=>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/vouchers/Product/${user_id}`,
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export const applyProductVoucher = async (cartProductId, voucher_id) =>{
  return await axios.patch(
    `${API_BASE_URL}/users/${user_id}/cart/carts_products/${cartProductId}`, {voucher_id}
  );
}

export const getVoucher = async (voucher_id) =>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/vouchers/${voucher_id}`,
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export const removeProductVoucher = async (cartProductId, voucher_id) =>{
  console.log("http://localhost:3001/users/4/cart/carts_products/90/remove_voucher/3")
  return await axios.patch(
    `${API_BASE_URL}/users/${user_id}/cart/carts_products/${cartProductId}/remove_voucher/${voucher_id}`
  );
}

export const fetchProductVoucher = async (order_detail_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/product_vouchers/${order_detail_id}`);
    return response.data;
  } catch (error) {
    console.log("error", error)
  }
}

export const fetchOrderVoucher = async (order_id) =>{
  try{
    const response = await axios.get(`${API_BASE_URL}/order_vouchers/${order_id}`);
    return response.data;
  }catch(error){
    console.log("error", error)
  }
}