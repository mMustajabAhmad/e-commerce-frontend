import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'

export const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
};

export const fetchCategory = async (category_id) =>{
  try{
    const response = await axios.get(`${API_BASE_URL}/categories/${category_id}`);
    return response.data;
  }catch(error){
    console.log("Error", error);
  }
}
export const fetchParent = async (parent_category_id) =>{
  try{
    if(parent_category_id){
      const response = await axios.get(`${API_BASE_URL}/categories/${parent_category_id}`)
      return response.data;
    }
    return null;
  }catch(error){
    console.log("Error", error);
  }
}

export const fetchSubCategories = async (category_id) =>{
  try{
    const response = await axios.get(`${API_BASE_URL}/categories/${category_id}/sub_categories`)
    return response.data;
  }catch(error){
    console.log("Error", error);
  }
}