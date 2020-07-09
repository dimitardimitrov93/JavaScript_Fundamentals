function solve(arrInput) {
    
    let productsArr = arrInput.slice();

    // SOLUTION WITH MAP()
    // let map = new Map();

    // for (const string of productsArr) {
    //     let tokens = string.split(' ');
    //     let productName = tokens[0];
    //     let productQuantity = Number(tokens[1]);

    //     if (!map.has(productName)) {
    //         map.set(productName, Number(productQuantity));
    //     } else {
    //         let currentQuantity = map.get(productName);
    //         let newQuantity = currentQuantity += productQuantity;
    //         map.set(productName, newQuantity);
    //     }
    // }

    // for (const kvp of map) {
    //     console.log(`${kvp[0]} -> ${kvp[1]}`);
    // }


    // SOLUTION WITHOUT MAP()

    let productsAssocArr = {};

    for (const element of productsArr) {

        // Destructuring array assignment
        let [productName, productQuantity] = element.split(' ');

        // If the assocArray doesn't contain this product, then add it with its respective quantity
        if (productsAssocArr[productName] === undefined) {
            productsAssocArr[productName] = Number(productQuantity);
        } else {
            // If the product already exists in the assocArray, then extract its quantity, sum it with the new quantity and overwrite the product quantity in the assocArr

            let newQuantity = Number(productsAssocArr[productName]) + Number(productQuantity);
            productsAssocArr[productName] = newQuantity;
        }
    }

    // Object.entries(productsAssocArr).forEach(element => {
    //     console.log(`${element[0]} -> ${element[1]}`);
    // });

    Object.keys(productsAssocArr).forEach(key => {
        console.log(`${key} -> ${productsAssocArr[key]}`)
    });
}

solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);