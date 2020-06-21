function productsList(arrayInput) {

    let arr = arrayInput.slice();
    let sortedArray = arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedArray.length; i++) {
        console.log(`${i + 1}.${sortedArray[i]}`);
    }
}

productsList(["Potatoes", "Tomatoes", "Onions", "Apples"]);