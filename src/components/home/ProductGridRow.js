import HomePageProduct from "./HomePageProduct";

function ProductGridRow(){
    return(
        <div className="mt-10 flex flex-row ">
            <div>
                <HomePageProduct />
            </div>
            <div className="ml-8">
                <HomePageProduct />
            </div>
            <div className="ml-8">
                <HomePageProduct />
            </div>
            <div className="ml-8">
                <HomePageProduct />
            </div>
        </div>
    );
}

export default ProductGridRow;