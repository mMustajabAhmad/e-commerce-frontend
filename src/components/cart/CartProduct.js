import { useEffect, useState } from "react";
import apiClient from '../../api/authApi';

function CartProduct(props){
    const product = props.data;
    const [productSize, setProductSize] = useState(null); 
    
    useEffect(()=>{
        const fetchProductSizes = async()=>{
            try{
                const response = await apiClient.get(`/product_sizes/${product && product.product_size_id}`);
                setProductSize(response.data);
                console.log("product size: ", response.data);
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchProductSizes();
    }, []
    );
    

    return(
        <>
            <div className='flex flex-row'>
                <div style={{backgroundImage: `url(/images/watch1.png)`, height: "170px", width: "150px", backgroundSize: "cover"}} className='flex flex-col mt-2 ml-2'></div>
                <div className='flex flex-col ml-4'>
                    <p className='mt-2 ml-2 text-2xl font-bold flex flex-row'>Product Name</p>
                    <p className='mt-2 ml-2 font-bold flex flex-row'>Size: <span className='ml-2 text-rose-500 font-normal'>S</span></p>
                    <p className='mt-2 ml-2 font-bold flex flex-row'>Quantity: <span className='ml-2 font-normal'>{product.quantity}</span></p>
                    <p className='mt-2 ml-2 font-bold flex flex-row'>Price: <span className='ml-2 font-normal'>{productSize && productSize.price}</span></p>
                    <p className='flex flex-row ml-3 mt-2 '>
                        <button className='flex flex-col justify-center pl-2 border' style={{width: "30px", height: "30px"}}>-</button>
                        <button className='flex flex-col justify-center pl-2 border' style={{width: "30px", height: "30px"}}>+</button>
                    </p>
                </div>
                <div className='flex flex-col ml-16 mt-14'>
                    <button><i class="fa fa-close"></i></button>
                </div>
            </div>
            <hr className='mt-6 mr-6 mb-6'/>
        </>
    );
}

export default CartProduct;