import ProductGridRow from "./ProductGridRow";

function calculateNumberOfRows(products){
    const numberOfProducts = products.length;
    const numberOfRows= numberOfProducts / 3;
    
    return numberOfRows;
};

function ProductGrid(props){
    const numberOfRows = calculateNumberOfRows(props.data);
    const products = props.data;
    var startingIndexOfProducts = 0;
    const endingIndexOfProducts = products.length;
    const start = [];
    const end = [];

    for (let i = 0; i < numberOfRows; i++){
        start.push(startingIndexOfProducts);
        if (endingIndexOfProducts % 3 == 0 || i != numberOfRows - 1){
            end.push(startingIndexOfProducts + 3);
            startingIndexOfProducts += 3;
        }
        else {
            end.push(startingIndexOfProducts + (endingIndexOfProducts % 3));
        }
    }

    const rows = [];

    for(let i = 0;i < numberOfRows; i++){
        rows.push(
            <>
                <ProductGridRow data={products ? products.slice(start[i],end[i]): []}/>
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