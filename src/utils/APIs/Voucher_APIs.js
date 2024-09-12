import axios from 'axios';
import { getCurrentUserId } from '../JWT_TokenDecoder';

const API_BASE_URL = 'http://localhost:3001/api/v1'
const user_id = getCurrentUserId();
const token = localStorage.getItem('token');


export const fetchOrderVouchers = async ()=>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/vouchers/type/Order`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export const fetchProductVouchers = async ()=>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/vouchers/type/Product`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export const applyProductVoucher = async (product_size_id, voucher_code) =>{
  return await axios.patch(
    `${API_BASE_URL}/cart/carts_products/${product_size_id}`, {"voucher_id":voucher_code},
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
}

export const getVoucher = async (voucher_code) =>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/vouchers/${voucher_code}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  }catch(error){
    console.log("Error", error)
  }
}

export const removeProductVoucher = async (cartProductId, voucher_id) =>{
  return await axios.patch(
    `${API_BASE_URL}/cart/carts_products/${cartProductId}/remove_voucher/${voucher_id}`,{},
    {
      headers: {
        Authorization: `${token}`,
      },
    }
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
    const response = await axios.get(`${API_BASE_URL}/order_vouchers/${order_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      });
    return response.data;
  }catch(error){
    console.log("error", error)
  }
}