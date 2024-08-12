import Header from "../shop/Header";
import Footer from "../shop/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from '../../api/authApi';



function Product(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [sizes, setSizes] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0].name : "---");
    const [priceOfSelectedSize, setPriceOfSelectedSize] = useState(sizes ? sizes[0].price : "---");
    
    useEffect(()=>{
        const fetchSizes = async() => {
            try{
                const response = await apiClient.get(`/products/${id}/product_sizes`);
                setSizes(response.data)
            } catch(error){
                console.log(error);
            }
        }
        fetchSizes();  
    },
     []
    );
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const response = await apiClient.get(`/products/${id}`);
            setProduct(response.data);
            console.log("product",product);
            setImageURL(response.data.product_images && response.data.product_images.length > 0 ? `http://localhost:3001/${response.data.product_images[0].url}` : []);
        };
        fetchProduct();
    }, []
    );

    function selectedPrams(size){
        setSelectedSize(size.name);
        setPriceOfSelectedSize(size.price)
    }

    const buttons = [];
    if (sizes != null){
        buttons.push(
            <button onClick={()=> selectedPrams(sizes[0])} className="bg-purple-700 text-white border" type="button" style={{width: "40px", height: "40px"}} >{sizes? sizes[0].name : "XS"}</button>
        );
        for(let i=1; i<sizes.length; i++){
            buttons.push(
                <button onClick={()=> selectedPrams(sizes[i])} className= "bg-purple-700 text-white border ml-2"type="button" style={{width: "40px", height: "40px"}} >{sizes? sizes[i].name : "XS"}</button>
            );
        }    
    }
    function changeImage() {
        if (product && product.product_images && product.product_images.length > 0) {
            let nextImageIndex = currentImage + 1;
            if (nextImageIndex >= product.product_images.length) {
                nextImageIndex = 0;
            }
            setCurrentImage(nextImageIndex);
            setImageURL(`http://localhost:3001/${product.product_images[nextImageIndex].url}`);
            console.log("current image", nextImageIndex);
        }
    }

    
    return(
        <>
            <div className="wrapper mt-3">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200">
                        <span className="font-bold text-2xl mt-4">HOME / SHOP / PRODUCT</span>
                    </div>

                    <div className="flex flex-row" style={{marginLeft: "10%", marginRight: "10%", marginTop: "8%", marginBottom: "4%"}}>
                        <div className="flex flex-col">
                            <div className="rounded" onClick={()=> changeImage()} style={{backgroundImage: `url(${imageURL})`, width: "470px", height: "550px", backgroundSize: "cover"}}></div>
                        </div>
                        <div className="flex flex-col" style={{marginLeft: "10%"}}>
                            {product ? 
                            <>
                                <p className="text-3xl font-bold mt-6">{product.title}</p>
                                <p className="flex justify-center mt-10 " style={{marginRight: "4px"}}>{product.description}</p>
                            </>
                            :
                            <>
                            </>
                            }
                            <p className="text-2xl fornt-bold text-rose-600 mt-2">$ {priceOfSelectedSize}</p>
                            <p className="text-1xl fornt-bold  mt-2"><b>Selected Size: </b><span className="text-rose-600">{selectedSize}</span></p>

                            <hr className="mt-4 ml-2 mr-6"></hr>
                            <p className="mt-4 font-bold text-2xl">Sizes</p>
                            <div className="flex flex-row mt-2">
                                {sizes && buttons}
                            </div>
                            <button className="border bg-black text-white mt-6 hover:bg-purple-700" style={{height: "50px", width: "200px"}}>Add To Cart</button>
                        </div>
                    </div>
                    
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default Product;