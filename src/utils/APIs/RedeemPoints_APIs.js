import axios from "axios";

const API_BASE_URL = "http://localhost:3001";
const token = localStorage.getItem("token");

export const fetchTotalPointsAvailable = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/total_available_points`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const fetchAvailablePoints = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/available_points`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
}

export const fetchExpiredPoints = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/expired_points`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
}

export const fetchRedeemPolicy = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/redeem_policy`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
}

export const fetchRedeemedPoints = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/redeem_points`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
}