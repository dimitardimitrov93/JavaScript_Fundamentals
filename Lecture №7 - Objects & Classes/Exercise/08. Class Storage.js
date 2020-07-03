function solution() {
    
    class Storage {

        /* Create a class with a single parameter received in the constructor */
        constructor(capacity) {

            this.currentCapacity = capacity;

            /* create a class/object property that will be modified later */
            this.storage = [];
        }

        addProduct(product) {
            /* the function receives an object that is stored within an array */
            this.storage.push([product]);
            this.totalCost = 0;

            /* I create an auxiliary variable in order to preserve the initial <capacity> value until all products are received */
            this.capacity = this.currentCapacity;

            for (const element of this.storage) {
            /* Loop though all the elements of the array which are actually objects and extract their properties in order to calculate the other values */

                this.capacity -= element[0].quantity;
                this.totalCost += element[0].quantity * element[0].price;
            }
        }

        getProducts() {

            for (let element of this.storage) {
                /* Loop though all the elements of the array and convert the objects into JSON data */

                element[0] = JSON.stringify(element[0]);
            }

            /* Return each JSON */
            return this.storage.join('\n');
        }
    }

    /* The purpose of the code below is to test the functionality of the class "Storage" */
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