import Header from "./Header";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useEffect, useState } from "react";
import apiClient from "../../api/authApi";


function Shop(){
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const response = await apiClient.get('/products');
                setProducts(response.data)
            } catch(error){
                console.log(error);
            }
        };
        fetchProducts();
    }, []
    );
    return (
        <>
            <div className="wrapper mt-3">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200">
                        <span className="font-bold text-3xl mt-4">HOME / SHOP</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-1/3">
                            <LeftPanel />
                        </div>
                        <div className="flex flex-col">
                            <RightPanel data={products ? products : []}/>
                        </div>
                    </div>
                </main>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
}

export default Shop;