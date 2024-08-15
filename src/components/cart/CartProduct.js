import { useEffect, useState } from "react";
import apiClient from '../../api/authApi';
import { jwtDecode } from 'jwt-decode';

function CartProduct(props){
    const cartProduct = props.data;
    const [productSize, setProductSize] = useState(null);
    const [product, setProduct] = useState(null); 
    const [size, setSize] = useState(null);
    const imageURL = product && product.product_images.length > 0 ? `http://localhost:3001/${product.product_images[0].url}` : '/images/watch1.png';

    useEffect(()=>{
        const fetchProductSizes = async ()=>{
            try{
                const response = await apiClient.get(`/product_sizes/${cartProduct && cartProduct.product_size_id}`);
                setProductSize(response.data);
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchProductSizes();
    }, []
    );

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                if(productSize){
                    const response = await apiClient.get(`/products/${productSize && productSize.product_id}`);
                    setProduct(response.data);
                }
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchProduct();
    }, [productSize]
    );

    useEffect(()=>{
        const fetchSize = async ()=>{
            try{
                if(productSize){
                    const response = await apiClient.get(`/sizes/${productSize && productSize.size_id}`);
                    setSize(response.data);
                    console.log("size", response.data);
                }
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchSize();
    }, [productSize]
    );

    const addOneToQuantity = async() =>{
        const token = localStorage.getItem('token');
        const decoded_token = jwtDecode(token); 
        const user_id = decoded_token.user_id;
        try{
            await apiClient.patch(`/users/${user_id}/cart/carts_products/${cartProduct && cartProduct.id}/add_one_to_quantity`);
        }catch(error){
            console.log("ERROR", error);
        }
        
    };

    const subtractOneFromQuantity = async() =>{
        const token = localStorage.getItem('token');
        const decoded_token = jwtDecode(token); 
        const user_id = decoded_token.user_id;
        try{
            await apiClient.patch(`/users/${user_id}/cart/carts_products/${cartProduct && cartProduct.id}/subtract_one_from_qantity`);
        }catch(error){
            console.log("ERROR", error);
        }
        
    };

    return(
        <>
            <div className='flex flex-row'>
                <div style={{backgroundImage: `url(${imageURL})`, height: "170px", width: "150px", backgroundSize: "cover"}} className='flex flex-col mt-2 ml-2'></div>
                <div className='flex flex-col ml-4'>
                    <p className='mt-2 ml-2 text-2xl font-bold flex flex-row'>{product && product.title}</p>
                    <p className='mt-2 ml-2 font-bold flex flex-row'>Size: <span className='ml-2 text-rose-500 font-normal'>{size && size.name}</span></p>
                    <p className='mt-2 ml-2 font-bold flex flex-row'>Quantity: <span className='ml-2 font-normal'>{cartProduct.quantity}</span></p>
                    <p className='mt-2 ml-2 font-bold flex flex-row'>Price: <span className='ml-2 font-normal'>{productSize && productSize.price}</span></p>
                    <p className='flex flex-row ml-3 mt-2 '>
                        <button className='flex flex-col justify-center pl-2 border' style={{width: "30px", height: "30px"}} onClick={subtractOneFromQuantity}>-</button>
                        <button className='flex flex-col justify-center pl-2 border' style={{width: "30px", height: "30px"}} onClick={addOneToQuantity}>+</button>
                    </p>
                </div>
                <div className='flex flex-col ml-16 mt-14'>
                    <button><i className="fa fa-close ml-10"></i></button>
                </div>
            </div>
            <hr className='mt-6 mr-6 mb-6'/>
        </>
    );
}

export default CartProduct;