import axios from "axios";
import { getCurrentUserId } from "../JWT_TokenDecoder";

const API_BASE_URL = "http://localhost:3001/api/v1";
const user_id = getCurrentUserId();
const token = localStorage.getItem('token');

export const fetchAddresses = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/users/${user_id}/addresses`,
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

export const updateAddress = async (address_id) =>{
  try{
    return await axios.put(`${API_BASE_URL}/users/${user_id}/addresses/${address_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      })
  }catch(error){
    console.log("ERROR", error);
  }
}

export const deleteAddressEntry = async (address_id) =>{
  try{
    return await axios.delete(`${API_BASE_URL}/users/${user_id}/addresses/${address_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      })
  }catch(error){
    console.log("ERROR", error);
  }
}

export const addAddress = async(payload) =>{
  try{
    return await axios.post(`${API_BASE_URL}/users/${user_id}/addresses`, payload,
      {
        headers: {
          Authorization: `${token}`,
        },
      });
  }catch(error){
    console.log("ERROR", error);
  }
}