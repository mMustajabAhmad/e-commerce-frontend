export function calculateNumberOfRows(products){
    const numberOfProducts = products.length;
    const numberOfRows= numberOfProducts / 3;
    
    return numberOfRows;
};

export function calculateNumberOfProducts(products){
    const numberOfRows = calculateNumberOfRows(products);
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
    const indexes ={"start": start,"end":end}
    return indexes;
}
