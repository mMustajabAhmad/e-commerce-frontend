import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <nav className='bg-white h-20'>
                <span className="font-bold text-5xl ml-20" style={{marginTop: "20%"}}>Flone.</span>
                <Link to="/home" className="ml-20 hover:text-purple-700">Home</Link>
                <Link to="/shop" className="ml-10 hover:text-purple-700">Shop</Link>
                <a href="#" className="ml-10 hover:text-purple-700">Categories</a>
                <a href="#" className="ml-10 hover:text-purple-700">About Us</a>
                <a href="#" className="ml-10 hover:text-purple-700">Contact Us</a>
                
                    <input className='px-2 py-1 rounded border' type='text' style={{marginLeft: "150px", marginTop: "20px"}} placeholder='Search...' ></input>
                
                
                    <i className="fas fa-search" style={{ color: 'black', fontSize: '24px' ,paddingLeft: "10px"}} ></i>
                    <i className="fas fa-user pl-10" style={{ color: 'black', fontSize: '24px'}} ></i>
                    <i className="fas fa-shopping-cart pl-10" style={{ color: 'black', fontSize: '24px'}} ></i>
            </nav>
        </header>
    );
}
export default Header;