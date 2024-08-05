import React, { useState } from 'react';

function ProductOptions(){
    return (
        <div className="bg-white" style={{height: "340px", width: "285px", opacity: "0.85"}}>
            <span className='flex justify-center font-bold hover:text-purple-700' style={{paddingTop: "40%"}}>Lorem ipsum accessories one</span>
            <span className='flex justify-center font-bold'>$ 100</span>
            <div className='flex justify-center mt-2'>
                <button className='bg-purple-600 text-white hover:bg-fuchsia-500' style={{width:"50px", height: "50px", borderRadius: "25px"}}><i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '20px'}} ></i></button>
                <button className='bg-purple-600 text-white ml-2 hover:bg-fuchsia-500' style={{width:"50px", height: "50px", borderRadius: "25px"}}><i className="fas fa-eye" style={{ color: 'white', fontSize: '20px'}} ></i></button>
            </div>
        </div>
    );
}

function HomePageProduct(){
    const [hovered, setHovered] = useState(false);
    return (
        <div style={{backgroundImage: "url('/images/watch1.png')", height: "370px", width: "325px",  backgroundSize: "cover"}}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}>
            {hovered && <div className='flex justify-center pt-3'><ProductOptions /></div>}
            
        </div>
    );
}
export default HomePageProduct;