import { Link } from "react-router-dom";

function ShopProduct(){
    return(
        <>
            <div>
                <div style={{backgroundImage: "url('/images/watch1.png')", width: "250px", height: "300px", backgroundSize: "cover"}}></div>
                <div className="mt-3 flex justify-center">
                    <div>
                        <Link to="/product" className="ml-2 hover:text-purple-700 text-1xl">Lorem Ipsum Product</Link>
                    
                        <br></br>
                        <p className="flex justify-center font-bold">$ 500</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopProduct;