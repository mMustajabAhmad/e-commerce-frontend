import ProductGridRow from "./ProductGridRow";

function calculateNumberOfRows(products){
    const numberOfProducts = products.length;
    const numberOfRows= numberOfProducts/3;
    return numberOfRows;
};

function ProductGrid(props){
    const numberOfRows = calculateNumberOfRows(props.data);
    const rows=[];

    for(let i=0;i<numberOfRows;i++){
        rows.push(
            <>
                <ProductGridRow />
                <br/>
            </>
        );
    }

    return (
        <>
            {/* <ProductGridRow />
            <br></br>
            <ProductGridRow />
            <br></br>
            <ProductGridRow />
            <br></br> */}
            {rows}
            
        </>
    );
};

export default ProductGrid;