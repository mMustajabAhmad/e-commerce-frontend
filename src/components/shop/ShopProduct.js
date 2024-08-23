import { Link } from "react-router-dom";

function ShopProduct(props){
    const product = props.data;
    const imageURL = product.product_images && product.product_images.length > 0 ? `http://localhost:3001/${product.product_images[0].url}` : '/images/watch1.png'

    
    return(
        <>
            <div >
                <div className="rounded" style={{backgroundImage: `url(${imageURL})`, width: "250px", height: "300px", backgroundSize: "cover"}}></div>
                <div className="mt-3">
                    <div>
                        <Link to={`/products/${product.id}`} className="ml-2 hover:text-purple-700 text-1xl">{product.title}</Link>
                        <br></br>
                        {/* <p className="flex justify-center font-bold">$ 500</p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopProduct;