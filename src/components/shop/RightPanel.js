import { useState } from "react";
import ProductGrid from "./ProductGrid";

function RightPanel(props){
    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        if (menuClicked)
        {
            setMenuClicked(false);
        }  
        else
        {
            setMenuClicked(true);
        }
           
    }

    
    return (
        <div className="relative">
            <button type="button" className="relative border rounded  pl-4 pr-3 py-2 hover:bg-purple-700 hover:text-white w-1/4" onClick={handleClick} style={{marginTop: "13%"}}>
                default
                 <div className="float-right ml-12 mr-2"><i className='fa fa-angle-down '></i></div>
            </button>
            {menuClicked &&
             <div className="border rounded mt-1 p-2 w-1/4 absolute bg-white">
                <a href="#" className="hover:text-purple-700">Price High to Low</a>
                <br></br>
                <hr className="m-1 " ></hr>
                <a href="#" className="hover:text-purple-700">Price Low to High</a>
                <br></br>
                <hr className="m-1"></hr>
                <a href="#" className="hover:text-purple-700">New to Old</a>
                <br></br>
                <hr className="m-1"></hr>
                <a href="#" className="hover:text-purple-700">Old to New</a>
             </div>
            }
            <div className="mb-12">
                <ProductGrid data={props.data} />
            </div>
            
        </div>
    );

}

export default RightPanel;