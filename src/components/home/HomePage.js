import Header from "./Header";
import Footer from "./Footer";
import EmailSubscription from "./EmailSubsription";
import ProductGridRow from "./ProductGridRow";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from '../../api/authApi';
import { makeListOfEightProducts } from '../../utils/HomeProductsUtils'

function HomePage(){
    const [products, setProducts] = useState(null)
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const response = await apiClient.get('/products');
                setProducts(response.data);
                setProducts(makeListOfEightProducts(response.data));
            }catch(error){
                console.error("Error: ", error);
            }
        };
        fetchProducts();
    },[]
    );

    let productList1 = [];
    let productList2 = [];

    if(products){
        productList1 = products.slice(0,4);
        productList2 = products.slice(4,8);
    }
    

    return (
        <>
            <div className="wrapper mt-6 ml-6 mr-6">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div style={{backgroundImage: "url('/images/watch.avif')", height: "590px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: "0.93"}} class="grid place-items-center">
                        <div>
                            <span class="text-white font-bold text-3xl flex justify-center">Home</span>
                            <br></br>
                            <span class="text-white font-bold text-6xl flex justify-center">New Arrivals</span>
                            <br></br>
                            <span class="text-white text-2xl flex justify-center">Shop your favorite products</span>
                            <br></br>
                            <button type="submit" className="bg-white pl-10 pr-10 pt-4 pb-4 ml-20 mt-2 hover:bg-purple-700 hover:text-white"><Link to="/shop">Shop Now</Link></button>
                        </div>
                    </div>
                    <div className="mb-12">
                        {products &&
                            <>
                                <ProductGridRow data={productList1}/>
                                <ProductGridRow data={productList2}/>
                            </>
                        }
                    </div>
                    <EmailSubscription />
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default HomePage;