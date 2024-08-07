import ShopProduct from "./ShopProduct";

function ProductGridRow(){
    return(
        <>
            <div className="flex flex-row mt-4">
                <div className="flex flex-col ">
                    <ShopProduct />
                </div>

                <div className="flex flex-col ml-4">
                    <ShopProduct />
                </div>

                <div className="flex flex-col ml-4">
                    <ShopProduct />
                </div>
            </div>
        </>
    );
}

export default ProductGridRow;