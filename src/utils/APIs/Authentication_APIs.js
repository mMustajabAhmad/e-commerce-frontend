import axios from 'axios';


const API_BASE_URL = 'http://localhost:3001'
const token = localStorage.getItem('token');


export const deleteSession = async ()=>{
  console.log("I'm here")
    try{
        const response = await axios.get(
            `${API_BASE_URL}/logout`,
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
        return response.data;
    }catch(error){
        console.log("error", error)
    }
} 