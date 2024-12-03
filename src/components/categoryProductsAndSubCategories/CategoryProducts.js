import Header from "../shop/Header";
import Footer from "../shop/Footer";
import { useParams } from "react-router-dom";
import CategoryProductRow from "./CategoryProductsRow";
import { useEffect, useState } from "react";
import apiClient from '../../api/authApi';
import SubCategoryRow from "./SubCategoryRow";

function CategoryProducts(){
    const { id } = useParams();
    const [products, setProducts] = useState(null);
    const [subCategories, setSubCategories] = useState(null);
    const [category, setCategory] = useState(null);
    const [parent, setParent] = useState(null);

    useEffect(() =>{
        const fetchProducts = async ()=>{
            try{
                const response = await apiClient.get(`/categories/${id}/category_products`);
                setProducts(response.data);
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchProducts();
    }, []
    );

    useEffect(() =>{
        const fetchParent = async ()=>{
            try{
                const response = await apiClient.get(`/categories/${category && category.parent_category_id}`);
                setParent(response.data);
                console.log("pareent", response.data)
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchParent();
    }, parent
    );


    useEffect(() =>{
        const fetchCategory = async ()=>{
            try{
                const response = await apiClient.get(`/categories/${id}`);
                setCategory(response.data);
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchCategory();
    }, []
    );

    useEffect(() =>{
        const fetchSubCategories = async ()=>{
            try{
                const response = await apiClient.get(`/categories/${id}/sub_categories`);
                setSubCategories(response.data);
                console.log("subCategories", subCategories)
            }catch(error){
                console.log("Error", error);
            }
        };
        fetchSubCategories();
    }, []
    );

    return(
        <>
            <div className="mt-3">
                <Header />

                <main className="flex flex-col min-h-screen">
                    <div className="h-20 flex justify-center bg-gray-200 ">
                        <span className="font-bold text-2xl mt-4">SHOP / CATEGORY {parent && `/ ${parent.name.toUpperCase()}`} / {category && category.name.toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col">
                                {products && products.length > 0 &&
                                    <>
                                        <p className="text-4xl font-bold flex flex-row justify-center">Products</p>
                                        <div className="flex flex-row mt-6">
                                            <CategoryProductRow data={products}/>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col mt-12">
                                {subCategories && subCategories.length > 0 &&
                                    <>
                                        <p className="text-4xl font-bold flex flex-row justify-center">Sub Categories</p>
                                        <div className="flex flex-row mt-6 mb-10">
                                            <SubCategoryRow data={subCategories}/>
                                        </div>
                                    </>
                                }
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