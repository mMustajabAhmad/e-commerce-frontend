import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/v1'
const token = localStorage.getItem('token');

export const fetchCart = async ()=>{
  console.log("TOKEN", token)
  try{
    const response = await axios.get(
      `${API_BASE_URL}/cart`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log("CART DATA ----", JSON.parse(response.data.cart))
    const cartData = JSON.parse(response.data.cart);
    console.log("CART DATA", cartData)
    return cartData;
  }catch(error){
    console.log("Error", error)
  }
}

export  const fetchProductSizes = async (product_size_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/product_sizes/${product_size_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product size:", error);
    throw error;
  }
};

export const fetchProduct = async (product_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products/${product_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};


export  const fetchSize = async (size_id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/sizes/${size_id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching size:", error);
    throw error;
  }
};

export const addOneToCartProductQuantity = async(product_size_id) =>{
  return await axios.patch(
      `${API_BASE_URL}/cart/carts_products/${product_size_id}/add_one_to_quantity`,{},
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
}

export const subtractOneFromCartProductQuantity = async(product_size_id) =>{
  return await axios.patch(
    `${API_BASE_URL}/cart/carts_products/${product_size_id}/subtract_one_from_qantity`, {},
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
}

export const removeProductFromCart = async(cartProductId) =>{
  return await axios.delete(
    `${API_BASE_URL}/cart/carts_products/${cartProductId}`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
}

export const clearCart = async () => {
  try {
    await axios.delete(
      `${API_BASE_URL}/cart`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const addProductToCart = async (product_size_id) =>{
  return await axios.post(
    `${API_BASE_URL}/cart/carts_products/`, {product_size_id},
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
}