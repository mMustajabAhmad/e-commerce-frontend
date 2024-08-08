import HomePageProduct from "./HomePageProduct";

function ProductGridRow(props){
    return(
        <div className="mt-10 flex flex-row ">
            <div>
                <HomePageProduct data={props.data[0]}/>
            </div>
            <div className="ml-8">
                <HomePageProduct data={props.data[1]}/>
            </div>
            <div className="ml-8">
                <HomePageProduct data={props.data[2]}/>
            </div>
            <div className="ml-8">
                <HomePageProduct data={props.data[3]}/>
            </div>
        </div>
    );
}

export default ProductGridRow;