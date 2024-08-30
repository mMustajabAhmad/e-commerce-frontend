export function makeListOfEightProducts(products){
    if (products.length == 8){
        return products;
    }else if(products.length >8){
        return products.slice(0,8);
    }
    else if (products.length > 0 && products.length < 8){ 
        const updated_product_list = [...products]
        const numberOfProductsPresent = products.length;
        var required_number_of_products = 8 - products.length;
        while(required_number_of_products > 0){
            const randomProduct = Math.floor(Math.random() * numberOfProductsPresent);
            updated_product_list.push(products[randomProduct])
            required_number_of_products -=1;
        }
        console.log("updated product list: ",updated_product_list);
        return updated_product_list;
    }
    else{
        return [];
    }
    
}