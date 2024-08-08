import { useState, useEffect } from "react";
import apiClient from '../../api/authApi';

function getParentCategories(categories){
    const parentCategories = [];
    for (const category of categories){
        if (category.parent_category_id == null){
            parentCategories.push(category);
        }
    }
    return parentCategories;
}

function getChildCategories(parentCategory, categories){
    const childCategories = [];
    for (const category of categories){
        if (category.parent_category_id == parentCategory.id){
            childCategories.push(category);
        }
    }
    return childCategories;
}

function LeftPanel(){
    const [categories, setCategories] = useState(null);
    const [parentCategories, setParentCategories] = useState(null);

    useEffect(()=>{
        const fetchCategories = async ()=>{
            try{
                const response = await apiClient.get('/categories');
                setCategories(response.data);
                setParentCategories(getParentCategories(response.data));
            }catch (error){
                console.error("Error: ", error)
            }
        };
        fetchCategories();
    },[]

    );

    return(
        <>
            <div style={{marginLeft: "20%", marginTop: "20%"}}>
                <span className="font-bold text-2xl">Search</span>
                <br/>
                <input className="mt-4 py-2 border px-4" type="text" placeholder="  Search..."></input>
            </div>

            <div style={{marginLeft: "20%", marginTop: "10%"}}>
                <span className="font-bold text-2xl">Categories</span>
                <br/>

                {categories &&
                    categories.map((category)=>{
                        if(parentCategories.includes(category)){
                            const childCategories = getChildCategories(category, categories)
                            return(
                                <>
                                    <div className="mt-4 font-bold">
                                        <input type="checkbox" id={`c${category.id}`}></input>
                                        <label for={`c${category.id}`} className="hover:text-purple-700"> {category.name}</label>
                                    </div>

                                    {childCategories && (
                                        childCategories.map((child)=>{
                                            console.log("child", child);
                                            return(
                                                <div className="mt-4 ml-3">
                                                    <input type="checkbox" id={`c${child.id}`}></input>
                                                    <label for={`c${child.id}`} className="hover:text-purple-700"> {child.name}</label>
                                                </div>
                                            );
                                        })
                                    )
                                    }
                                </>
                            )
                        }
                    })

                }
            </div>

            <div style={{marginLeft: "20%", marginTop: "10%", marginBottom: "8%"}}>
                <span className="font-bold text-2xl">Size</span>
                <br/>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> XS</label>
                </div>
                
                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> S</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> M</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> L</label>
                </div>

                <div className="mt-4">
                    <input type="checkbox" id="c1"></input>
                    <label for="c1"> XL</label>
                </div>

                

            </div>
        </>
    );
}

export default LeftPanel;