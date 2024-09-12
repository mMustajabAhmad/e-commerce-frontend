import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/v1";
const token = localStorage.getItem("token");

export const postOrderData = async (
  billingAddress,
  shippingAddress,
  voucherCode,
  shippingMethod,
  redeemPoints
) => {
  const payload = {
    billing_address: billingAddress,
    shipping_address: shippingAddress,
    voucher_code: voucherCode,
    payment_method: shippingMethod,
    points: redeemPoints
  };
  const response = await axios.post(`${API_BASE_URL}/orders`, payload, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const { order, receipt_url } = response.data;
  const pdfResponse = await axios.get(
    receipt_url,
    { responseType: "blob",
      headers: {
      Authorization: `${token}`,
      }, 
    }
  );
  const pdfBlob = new Blob([pdfResponse.data], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(pdfBlob);
  link.download = `receipt_${order.id}.pdf`;
  link.click();
  return response;
};

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const fetchOrderDetails = async (order_id) => {
  
  try {
    const response = await axios.get(
      `${API_BASE_URL}/orders/${order_id}/order_details`,
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

export const fetchOrder = async (order_id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/${order_id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log("payment method", response.data)
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const cancelOrder = async (order_id) => {
  return await axios.patch(
    `${API_BASE_URL}/orders/${order_id}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
};
