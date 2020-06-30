function solution() {
    
    class Storage {

        constructor(capacity) {

            this.currentCapacity = capacity;
            this.storage = [];
        }

        addProduct(product) {
            
            this.storage.push([product]);
            this.totalCost = 0;
            this.capacity = this.currentCapacity;

            for (const element of this.storage) {
                this.capacity -= element[0].quantity;
                this.totalCost += element[0].quantity * element[0].price;
            }
        }

        getProducts() {

            for (let element of this.storage) {

                element[0] = JSON.stringify(element[0]);

            }

            return this.storage.join('\n');
        }
    }

    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);

    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();

    console.log(storage.capacity);
    console.log(storage.totalCost);
}

solution();