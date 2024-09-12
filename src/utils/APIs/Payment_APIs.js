import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";
const token = localStorage.getItem('token');

export const makePayment = async (order_id) => {
  const response = await axios.post(
    `${API_BASE_URL}/orders/${order_id}/payment`,{},
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return response.data;
};

export const getPaymentInfo = async (order_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/orders/${order_id}/payment`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log("payment status", response.data)
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};
