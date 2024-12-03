import HomePageProduct from "./HomePageProduct";

function ProductGridRow(props){
    return(
        <div className="flex flex-row justify-center gap-4">
            <div>
                <HomePageProduct data={props.data[0]}/>
            </div>
            <div >
                <HomePageProduct data={props.data[1]}/>
            </div>
            <div >
                <HomePageProduct data={props.data[2]}/>
            </div>
            <div >
                <HomePageProduct data={props.data[3]}/>
            </div>
        </div>
    );
}

export default ProductGridRow;