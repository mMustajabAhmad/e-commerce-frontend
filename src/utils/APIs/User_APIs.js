import axios from "axios";
import { getCurrentUserId } from "../JWT_TokenDecoder";

const API_BASE_URL = "http://localhost:3001";
const user_id = getCurrentUserId();
const token = localStorage.getItem('token');


export const updateUserInfo = async (payload) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}/users/${user_id}`,payload,
      {
        headers: {
          Authorization: `${token}`,
        },
      });
    return response;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const fetchUser = async () =>{
  try{
    const response = await axios.get(`${API_BASE_URL}/users/${user_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      });
    return response.data;
  }catch(error){
    console.log("ERROR", error);
  }
}
