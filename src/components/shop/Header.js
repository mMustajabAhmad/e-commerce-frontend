import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiClient from '../../api/authApi';
import { getParentCategories, getChildCategories } from '../../utils/CategoryUtils';
import { getCurrentUserId } from '../../utils/JWT_TokenDecoder';
import CartProduct from '../cart/CartProduct';

function Header(){
    const [categories, setCategories] = useState(null);
    const [parentCategories, setParentCategories] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState(null);
    const user_id = getCurrentUserId();

    useEffect(()=>{
        const fetchCategories = async ()=>{
            try{
                const response = await apiClient.get('/categories');
                setCategories(response.data);
                setParentCategories(getParentCategories(response.data));
            }catch (error){
                console.error("Error: ", error);
            }
        };
        fetchCategories();
    }, []
    );

    useEffect(() =>{
        const fetchCart = async () =>{
            try{
                const response = await apiClient.get(`/users/${user_id}/cart`);
                setCart(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchCart();
    }, []);


    const cartProducts = [];

    if(cart){
        for(let i=0; i< cart.length; i++){
            cartProducts.push(
                <CartProduct data={cart[i]}/>
            );
        }
    }

    const clearCart = async()=>{
        try{
            await apiClient.delete(`/users/${user_id}/cart`);
        }catch(error){
            console.log("ERROR", error);
        }
    }

    function logout(){
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('token');
    }

    return (
        <header>
            <nav className='bg-white h-20'>
                <div className='flex flex-row'>
                    <span className="font-bold text-5xl ml-20 mt-2">Flone.</span>
                    <Link to="/home" className="ml-20 hover:text-purple-700 mt-4">Home</Link>
                    <Link to="/shop" className="ml-10 hover:text-purple-700 mt-4">Shop</Link>

                    <div className=' mt-4 bg-white'>
                        <Menu as="div" className=" inline-block text-left">

                            <MenuButton className="ml-10 hover:text-purple-700">
                                <Link to="/categories">Categories</Link>
                                <i className='fa fa-angle-down pl-2'></i>
                            </MenuButton>

                            <MenuItems className="absolute mt-2 w-48 bg-white rounded border z-10">
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
                                                                    href={`/categoryProducts/${category.id}`}
                                                                    className={`block px-4 py-2 hover:bg-purple-700 hover:text-white font-bold text-sm ${active ? 'bg-gray-200' : ''}`}
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
                                                                                href = {`/categoryProducts/${child.id}`}
                                                                                className = {`block px-4 py-2 hover:bg-purple-700 hover:text-white text-sm ${active ? 'bg-gray-200' : ''}`}
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
                    <a href="https://wa.me/+923356517758" target="_blank" className="ml-10 hover:text-purple-700 mt-4">Contact Us</a>

                    <div>
                        <input className='px-2 py-1 rounded border' type='text' style={{marginLeft: "150px", marginTop: "20px"}} placeholder='Search...' ></input>
                        <i className="fas fa-search mt-4 ml-2" style={{ color: 'black', fontSize: '24px' ,paddingLeft: "10px"}} ></i>
                        <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="text-white font-bold pl-10">
                                        <i className="fas fa-user text-black" style={{ fontSize: '24px' }}></i>
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
                                        <MenuItem as={Fragment}>
                                            {({ active }) => (
                                                <a
                                                    href="/signin"
                                                    className={`block px-4 py-2 hover:bg-purple-500 hover:text-white text-sm ${active ? 'bg-gray-200' : ''}`}
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </a>
                                            )}
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </Menu>
                        <i className="fas fa-shopping-cart pl-10 mt-4" style={{ color: 'black', fontSize: '24px'}} onClick={() => setIsOpen(!isOpen)}></i>

                        {/* {isOpen ? 
                            <div className='bg-white relative z-10 mt-2 rounded border'>
                                <p className='flex justify-center float-right mt-4 mr-4 p-1 hover:bg-purple-700 bg-black text-white rounded-3xl' onClick={() => setIsOpen(!isOpen)}><i className="fa fa-angle-up flex justify-center pl-1 pt-1" style={{width: "25px", height: "25px"}}></i></p>
                                <br/>
                                <hr className='mt-9'/>
                                {cart && cart.length > 0 ?
                                    <div className='flex flex-col mt-6 ml-10 mr-4'>
                                        {cartProducts}
                                        <button className='bg-black hover:bg-purple-700 text-white font-bold ml-14 mr-16 p-2 mb-2'>CHECKOUT</button>
                                        <button className='bg-black hover:bg-purple-700 text-white font-bold ml-14 mr-16 p-2 mb-6' onClick={clearCart}>CLEAR CART</button>
                                    </div>
                                    :
                                    <div className='flex flex-col mt-6 ml-10 mr-4'>
                                        <p className='text-2xl font-bold mb-4'>Your Cart is empty :(</p>
                                    </div>
                                }
                            </div> 
                            : 
                            <>
                            </>
                        } */}
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;