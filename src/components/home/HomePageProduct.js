import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ProductOptions(props){


    return (
        <div className="bg-white rounded h-full w-full opacity-75" >
            <Link to={`/products/${props.data.id}`}><span className='flex justify-center font-bold hover:text-purple-700' style={{paddingTop: "40%"}}>{props.data.title}</span></Link>
            <div className='flex justify-center mt-2 opacity-100'>
            <Link to={`/products/${props.data.id}`}><button className='bg-purple-600 text-white hover:bg-fuchsia-500 opacity-100' style={{width:"50px", height: "50px", borderRadius: "25px"}}><i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '20px'}} ></i></button></Link>
                <button className='bg-purple-600 text-white ml-2 hover:bg-fuchsia-500 opacity-100' style={{width:"50px", height: "50px", borderRadius: "25px"}}><i className="fas fa-eye" style={{ color: 'white', fontSize: '20px'}} ></i></button>
            </div>
        </div>
    );
}

function HomePageProduct(props){
    const [hovered, setHovered] = useState(false);
    const imageURL = props.data.product_images && props.data.product_images.length > 0 ? `http://localhost:3001/${props.data.product_images[0].url}` : '/images/watch1.png'
    console.log("image url",imageURL);
    console.log("length ",props.data.product_images);
    return (
        <div className="rounded" style={{backgroundImage: `url(${imageURL})`, height: "370px", width: "325px",  backgroundSize: "cover"}}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}>
            {hovered && <ProductOptions data={props.data}/>}
            
        </div>
    );
}
export default HomePageProduct;