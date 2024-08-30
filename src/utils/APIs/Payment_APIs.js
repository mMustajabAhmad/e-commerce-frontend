import axios from "axios";
import { getCurrentUserId } from "../JWT_TokenDecoder";

const API_BASE_URL = "http://localhost:3001";
const user_id = getCurrentUserId();

export const makePayment = async (order_id) => {
  const response = await axios.post(
    `${API_BASE_URL}/orders/${order_id}/payment`
  );
  return response.data;
};

export const getPaymentInfo = async (order_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/orders/${order_id}/payment`
    );
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};
