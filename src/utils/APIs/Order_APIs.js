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
    shipping_method: shippingMethod,
  };
  const response = await axios.post(`${API_BASE_URL}/users/${user_id}/orders`, payload, {responseType: 'blob'});
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `receipt_${Date.now()}.pdf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
  console.log("responese oderd", response.data)
  
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${user_id}/orders`);
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const fetchOrderDetails = async (order_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/orders/${order_id}/order_details`
    );
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const fetchOrder = async (order_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/orders/${order_id}`
    );
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const cancelOrder = async (order_id) => {
  return await axios.patch(
    `${API_BASE_URL}/users/${user_id}/orders/${order_id}`
  );
};