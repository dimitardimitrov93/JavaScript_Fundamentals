function productsList(arrayInput) {

    let arr = arrayInput.slice();
    let sortedArray = arr.sort((a, b) => a.localeCompare(b));

    for (const index in sortedArray) {
        sortedArray[index] = `${Number(index) + 1}.${sortedArray[index]}`;
        console.log(sortedArray[index]);
    }
}

productsList(["Potatoes", "Tomatoes", "Onions", "Apples"]);