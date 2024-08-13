import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api/authApi';
import {getParentCategories, getChildCategories} from '../../utils/CategoryUtils'

function Header() {
    const [categories, setCategories] = useState(null);
    const [parentCategories, setParentCategories] = useState(null)
    useEffect(()=>{
        const fetchCategories = async () => {
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
            <nav className='bg-black h-20'>
                <div className='flex flex-row'>
                    <Link to="/home" className='text-white pt-6 font-bold hover:text-purple-500' style={{ paddingLeft: "80px" }}>
                        <span>Home</span>
                    </Link>
                    <Link to="/shop" className='text-white pt-6 font-bold pl-10 hover:text-purple-500'><span>Shop</span></Link>
                    <div className='relative'>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className='text-white pt-6 font-bold pl-10 hover:text-purple-500'>
                                    Categories <i className='fa fa-angle-down'></i>
                                </MenuButton>
                            </div>
                            <MenuItems className="absolute bg-white text-black rounded shadow-lg ring-1 ring-black ring-opacity-5 mt-2 w-48 z-50">
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
                    <a className='text-white pt-6 font-bold pl-10 hover:text-purple-500'><span>About Us</span></a>
                    <a className='text-white pt-6 font-bold pl-10 hover:text-purple-500'><span>Contact Us</span></a>
                    
                    <span className='text-white font-bold pt-3 text-5xl pl-14'>Flone.</span>
                    <div className='items-center'>
                        <input className='flex flex-row-reverse px-2 py-1 rounded' type='text' style={{ marginLeft: "150px", marginTop: "20px" }} placeholder='Search...' />
                    </div>
                    <div className='items-center pt-6 pl-4'>
                    <i className="fas fa-search" style={{ color: 'white', fontSize: '24px' ,paddingLeft: "10px"}} ></i>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="text-white font-bold pl-10">
                                    <i className="fas fa-user" style={{ color: 'white', fontSize: '24px' }}></i>
                                </MenuButton>
                            </div>
                            <MenuItems className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="p-1">
                                    <MenuItem as={Fragment}>
                                        {({ active }) => (
                                            <a
                                                href="/signin"
                                                className={`block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm ${active ? 'bg-gray-200' : ''}`}
                                            >
                                                Sign In
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem as={Fragment}>
                                        {({ active }) => (
                                            <a
                                                href="/signup"
                                                className={`block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm ${active ? 'bg-gray-200' : ''}`}
                                            >
                                                Sign Up
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem as={Fragment}>
                                        {({ active }) => (
                                            <a
                                                href="/myProfile"
                                                className={`block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm ${active ? 'bg-gray-200' : ''}`}
                                            >
                                                My Profile
                                            </a>
                                        )}
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                        <i className="fas fa-shopping-cart pl-10" style={{ color: 'white', fontSize: '24px' }}></i>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;
