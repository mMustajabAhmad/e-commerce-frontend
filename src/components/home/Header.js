import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api/authApi';
import {getParentCategories, getChildCategories} from '../../utils/CategoryUtils'
import { getCurrentUserId } from '../../utils/JWT_TokenDecoder';
import CartProduct from '../cart/CartProduct';

function Header() {
    const [categories, setCategories] = useState(null);
    const [parentCategories, setParentCategories] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState(null);
    const user_id = getCurrentUserId();


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
    }, [cart]);

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
                                    <Link to="/categories">Categories</Link>
                                    <i className='fa fa-angle-down ml-2'></i>
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
                                                                href={`/categoryProducts/${category.id}`}
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
                                                                            href = {`/categoryProducts/${child.id}`}
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
                    <a className='text-white pt-6 font-bold pl-10 hover:text-purple-500' href="https://wa.me/+923356517758" target="_blank"><span>Contact Us</span></a>
                    
                    <span className='text-white font-bold pt-3 text-5xl pl-14'>Flone.</span>
                    <div className='items-center'>
                        <input className='flex flex-row-reverse px-2 py-1 rounded' type='text' style={{ marginLeft: "150px", marginTop: "20px" }} placeholder='Search...' />
                    </div>
                    <div className='pt-6 pl-4 '>
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
                            <i className="fas fa-shopping-cart pl-10" style={{ color: 'white', fontSize: '24px' }} onClick={() => setIsOpen(!isOpen)}></i>
                            <div className='absolute mt-2' style={{right: "7%"}}>
                                {isOpen ? 
                                    <div className='bg-white relative z-10 mt-2 rounded border' style={{width: "500px"}}>
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
                                }
                            </div>
                            
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;
