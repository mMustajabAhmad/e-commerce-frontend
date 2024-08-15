import Header from "../shop/Header";
import Footer from "../shop/Footer";
import { Link, useParams } from "react-router-dom";
import CategoryProductRow from "./CategoryProductsRow";
import { useEffect, useState } from "react";
import apiClient from '../../api/authApi';

function CategoryProducts(){
    const { id } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() =>{
        const fetchProducts = async ()=>{
            try{
                const response = await apiClient.get(`/categories/${id}/category_products`);
                setProducts(response.data);
            }catch(error){
                console.log("Error", error)
            }
        };
        fetchProducts();
    }, []
    );

    return(
        <>
            <div className="mt-3">
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200 ">
                        <span className="font-bold text-2xl mt-4">CATEGORY / NAME</span>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col">
                                <p className="text-4xl font-bold flex flex-row justify-center">Products</p>
                                <div className="flex flex-row mt-6">
                                    <CategoryProductRow data={products}/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col mt-12">
                                <p className="text-4xl font-bold flex flex-row justify-center">Sub Categories</p>
                                <div className="flex flex-row mt-6 mb-10">
                                    <div style={{marginTop: "13%"}}>
                                        <i className="fa fa-angle-double-left text-2xl hover:text-purple-700" ></i>
                                    </div>
                                    <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
                                        <Link to="/categoryProducts">
                                            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>
                                                Category Name
                                            </span>
                                        </Link>
                                    </div>
                                    <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
                                        <Link to="/categoryProducts">
                                            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>
                                                Category Name
                                            </span>
                                        </Link>
                                    </div>
                                    <div style={{backgroundImage: `url(/images/watch1.png)`, width: "350px", height: "350px", backgroundSize: "cover"}} className="ml-6">
                                        <Link to="/categoryProducts">
                                            <span className="flex justify-center text-white font-bold text-2xl hover:text-purple-700 hover:text-3xl" style={{marginTop: "40%"}}>
                                                Category Name
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="ml-4" style={{marginTop: "13%"}}>
                                        <i className="fa fa-angle-double-right text-2xl hover:text-purple-700"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
                <Footer />
            </div>
        </>
    );
}
export default CategoryProducts;