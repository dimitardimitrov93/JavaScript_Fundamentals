function storageInfo(currentStockArrInput, productsForDeliveryInput) {

    class Product {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }

        print() {
            console.log(`${this.product} -> ${this.quantity}`);
        }
    }

    let currentStockArr = currentStockArrInput.slice();
    let productsForDelivery = productsForDeliveryInput.slice();

    while (productsForDelivery.length > 0) {

        let currentDeliveryProduct = productsForDelivery[0];
        let currentDeliveryQuantity = productsForDelivery[1];

        if (currentStockArr.includes(currentDeliveryProduct)) {
            for (let i = 0; i < currentStockArr.length; i++) {
                if (currentStockArr[i] === currentDeliveryProduct) {
                    currentStockArr[i + 1] = ((Number(currentStockArr[i + 1]) + Number(currentDeliveryQuantity)).toString());
                    break;
                } else {
                    continue;
                }
            }
        } else {
            currentStockArr.push(currentDeliveryProduct);
            currentStockArr.push(currentDeliveryQuantity);
        }

        productsForDelivery.splice(0, 2);
    }

    for (let i = 0; i < currentStockArr.length; i+=2) {

        let productInStock = currentStockArr[i];
        let productQuantity = Number(currentStockArr[i + 1]);

        let productObj = new Product(productInStock, productQuantity);
        productObj.print();
    }
}

storageInfo(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);