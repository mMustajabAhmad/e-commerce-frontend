function Header(){
    return (
        <header>
            <nav className='bg-white h-20'>
                <span className="font-bold text-5xl ml-20 mt-4">Flone.</span>
                <a href="#" className="ml-20">Home</a>
                <a href="#" className="ml-10">Shop</a>
                <a href="#" className="ml-10">Categories</a>
                <a href="#" className="ml-10">About Us</a>
                <a href="#" className="ml-10">Contact Us</a>
                
                    <input className='px-2 py-1 rounded' type='text' style={{marginLeft: "150px", marginTop: "20px"}} placeholder='Search...' ></input>
                
                
                    <i className="fas fa-search" style={{ color: 'black', fontSize: '24px' ,paddingLeft: "10px"}} ></i>
                    <i className="fas fa-user  pl-10" style={{ color: 'black', fontSize: '24px'}} ></i>
                    <i className="fas fa-shopping-cart  pl-10" style={{ color: 'black', fontSize: '24px'}} ></i>
            </nav>
        </header>
    );
}
export default Header;