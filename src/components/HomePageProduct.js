import React, { useState } from 'react';

function ProductOptions(){

    const [openPreview, setopenPreview]=useState(false)

    const handlePreview = () => {
        setopenPreview(true);
    };

    const handleClose = () => {
        setopenPreview(false);
    };

    return (
        <div className="bg-white" style={{height: "340px", width: "285px", opacity: "0.85"}}>
            <span className='flex justify-center font-bold hover:text-purple-700' style={{paddingTop: "40%"}}>Lorem ipsum accessories one</span>
            <span className='flex justify-center font-bold'>$ 100</span>
            <div className='flex justify-center mt-2'>
                <button className='bg-purple-600 text-white hover:bg-fuchsia-500' style={{width:"50px", height: "50px", borderRadius: "25px"}}><i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '20px'}} ></i></button>
                <button className='bg-purple-600 text-white ml-2 hover:bg-fuchsia-500' style={{width:"50px", height: "50px", borderRadius: "25px"}} onClick={handlePreview}><i className="fas fa-eye" style={{ color: 'white', fontSize: '20px'}} ></i></button>
            </div>
            

            {openPreview && (
                <div className="fixed inset-0 bg-gray-700 flex items-center justify-center">
                    <button onClick={handleClose} className="absolute top-2 right-2 text-xl font-bold">&times;</button>

                    <div className="bg-white p-4 w-1/2 h-1/2 rounded" style={{ backgroundColor: 'white', opacity: 1 }}>
                        <hr/>
                        <div className='flex flex-row mt-2 '>
                            <div className='flex flex-col w-1/3'>
                                <img src="/images/watch1.png" alt="Product" className="w-full h-48 object-cover" />
                            </div>
                            <div className='flex flex-col ml-4 w-1/2'>
                                <p className='font-bold'>Lorem ipsum accessories one</p>
                                <p>$ 100</p>
                                <br/>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
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