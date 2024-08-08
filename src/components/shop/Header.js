import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function Header(){
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
    return (
        <header>
            <nav className='bg-white h-20'>
                <div className='flex flex-row'>
                    <span className="font-bold text-5xl ml-20 mt-2">Flone.</span>
                    <Link to="/home" className="ml-20 hover:text-purple-700 mt-4">Home</Link>
                    <Link to="/shop" className="ml-10 hover:text-purple-700 mt-4">Shop</Link>
                    <div className='relative mt-4 bg-white mt-2'>
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton className="ml-10">
                                Categories
                                <i className='fa fa-angle-down pl-2'></i>
                            </MenuButton>
                            <MenuItems className="absolute mt-2 w-48 bg-white rounded border">
                                <div className="p-1">
                                    {categories && (
                                        categories.map((category) => {
                                            if (parentCategories.includes(category)) {
                                                const childCategories = getChildCategories(category, categories)
                                                return (
                                                    <>
                                                        <MenuItem key={category.id} as={Fragment}>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={`block px-4 py-2 hover:bg-purple-500 hover:text-white font-bold text-sm ${active ? 'bg-gray-200' : ''}`}
                                                                >
                                                                    {category.name}
                                                                </a>
                                                            )}
                                                        </MenuItem>

                                                        {childCategories && (
                                                            childCategories.map((child)=>{
                                                                console.log("child", child);
                                                                return(
                                                                    <MenuItem key={child.id} as={Fragment} className="ml-3">
                                                                        {({ active }) => (
                                                                            <a
                                                                                href="#"
                                                                                className={`block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm ${active ? 'bg-gray-200' : ''}`}
                                                                            >
                                                                                {child.name}
                                                                            </a>
                                                                        )}
                                                                    </MenuItem>
                                                                );
                                                            })
                                                        )
                                                        }
                                                        
                                                    </>
                                                );
                                            }
                                        })
                                    )
                                    }  
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                    <a href="#" className="ml-10 hover:text-purple-700 mt-4">About Us</a>
                        <a href="#" className="ml-10 hover:text-purple-700 mt-4">Contact Us</a>
                    <div>
                        
                        <input className='px-2 py-1 rounded border' type='text' style={{marginLeft: "150px", marginTop: "20px"}} placeholder='Search...' ></input>
                        <i className="fas fa-search mt-4 ml-2" style={{ color: 'black', fontSize: '24px' ,paddingLeft: "10px"}} ></i>
                        <i className="fas fa-user pl-10 mt-4" style={{ color: 'black', fontSize: '24px'}} ></i>
                        <i className="fas fa-shopping-cart pl-10 mt-4" style={{ color: 'black', fontSize: '24px'}} ></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;