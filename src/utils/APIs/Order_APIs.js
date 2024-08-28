import axios from "axios";
import { getCurrentUserId } from "../JWT_TokenDecoder";

const API_BASE_URL = "http://localhost:3001";
const user_id = getCurrentUserId();

export const postOrderData = async (
  billing_address,
  shipping_address,
  voucher_code
) => {
  console.log("I  am clicked");
  return await axios.post(`${API_BASE_URL}/users/${user_id}/orders`, {
    billing_address: billing_address,
    shipping_address: shipping_address,
    voucher_code: voucher_code,
  });
};

export const makePayment = async (order_id) => {
  const response = await axios.post(
    `${API_BASE_URL}/orders/${order_id}/payment`
  );
  return response.data;
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