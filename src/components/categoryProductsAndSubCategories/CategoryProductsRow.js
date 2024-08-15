import { useEffect, useState } from "react";
import CategoryProduct from "./CategoryProduct";

function CategoryProductRow(props){
    const products = props.data || [];
    const [productRow, setProductRow] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);

    useEffect(()=>{
        if(products && products.length < 4){
            setEnd(products.length);
        }else{
            setEnd(4);
        }
    },[products]);

    useEffect(()=>{
        if(products.length > 0){
            console.log("start", start);
            console.log("end", end);
            const rows = [];
            for(let i = start; i < end; i++){
                if(products[i]){
                    rows.push(
                        <CategoryProduct data={products[i]}/>
                    );
                }
            }
            setProductRow(rows);
        }
    },[products, start, end]);

    function moveRight(){
        if(start < products.length && end < products.length){
            console.log("moving right");
            setStart(start + 1);
            setEnd(end + 1);
        }
    }

    function moveLeft(){
        if(start > 0 && end  > 0){
            console.log("moving left");
            setStart(start - 1);
            setEnd(end - 1);
        }
    }

    return(
        <>
            <div style={{marginTop: "10%"}} onClick={()=>moveLeft()}>
                <i className="fa fa-angle-double-left text-2xl hover:text-purple-700"  ></i>
            </div>
            
            {productRow}

            <div className="ml-4" style={{marginTop: "10%"}} onClick={()=>moveRight()}>
                <i className="fa fa-angle-double-right text-2xl hover:text-purple-700"></i>
            </div>
        </>
    );
}

export default CategoryProductRow;