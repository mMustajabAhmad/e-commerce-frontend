import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


function Header(){

    return (
        <header>
            <nav className='bg-black h-20'>
                <div className='flex flex-row'>
                    <a className='text-white pt-6 font-bold' style={{paddingLeft: "80px"}}><span>Home</span></a>
                    <a className='text-white pt-6 font-bold pl-10'><span>Shop</span></a>
                    <div className='relative'>
                        <Menu>
                            <div>
                                <MenuButton className='text-white pt-6 font-bold pl-10'>
                                    Categories <i className='fa fa-angle-down'></i>
                                </MenuButton>
                            </div>
                            <MenuItems className="absolute bg-white ">

                                <MenuItem className="pl-4 pr-4 pt-3 pb-3">
                                    <a href="#">Category 1</a>
                                </MenuItem>
                                <hr />

                                <MenuItem className="pl-4 pr-4">
                                    <a href="#">Category 2</a>
                                </MenuItem>
                                <hr />

                                <MenuItem className="pl-4 pr-4">
                                    <a href="#">Category 3</a>
                                </MenuItem>
                                <hr />

                            </MenuItems>
                        </Menu>
                    </div>
                    <a className='text-white pt-6 font-bold pl-10'><span>About Us</span></a>
                    <a className='text-white pt-6 font-bold pl-10'><span>Contact Us</span></a>
                    
                    <span className='text-white font-bold pt-3 text-5xl pl-14'>Flone.</span>
                    <div className=' items-center'>
                        <input className='flex flex-row-reverse px-2 py-1 rounded' type='text' style={{marginLeft: "150px", marginTop: "20px"}} placeholder='Search...' ></input>
                    </div>
                    <div className='items-center pt-6 pl-4'>
                        <i className="fas fa-search" style={{ color: 'white', fontSize: '24px' ,paddingLeft: "10px"}} ></i>
                        <i className="fas fa-user  pl-10" style={{ color: 'white', fontSize: '24px'}} ></i>
                        <i className="fas fa-shopping-cart  pl-10" style={{ color: 'white', fontSize: '24px'}} ></i>
                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Header;