import axios from "axios";
import { getCurrentUserId } from "../JWT_TokenDecoder";

const API_BASE_URL = "http://localhost:3001";
const user_id = getCurrentUserId();

export const postOrderData = async (
  billingAddress,
  shippingAddress,
  voucherCode,
  shippingMethod
) => {
  const payload = {
    billing_address: billingAddress,
    shipping_address: shippingAddress,
    voucher_code: voucherCode,
    shipping_method: shippingMethod
  }
  return await axios.post(`${API_BASE_URL}/users/${user_id}/orders`, payload);
};


export const fetchOrders = async () => {
  try{
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/orders`
    )
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
};

export const fetchOrderDetails = async(order_id) =>{
  try{
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/orders/${order_id}/order_details`
    )
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
}

export const fetchOrder = async (order_id) => {
  try{
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/orders/${order_id}`
    )
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
};