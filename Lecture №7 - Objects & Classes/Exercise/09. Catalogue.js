function solution(arrayInput) {
    
    let unsortedProductsArr = arrayInput.slice();
    let sortedProductsArr = [];

    for (let i = 0; i < unsortedProductsArr.length; i++) {

        let currentInitialLetter = unsortedProductsArr[i][0];

        for (let j = 0; j < unsortedProductsArr.length; j++) {
            if (!unsortedProductsArr.includes(currentInitialLetter)) {
                unsortedProductsArr.push(currentInitialLetter);
            } else {
                break;
            }
        }
    }

    sortedProductsArr = unsortedProductsArr.sort((a, b) => a.localeCompare(b));

    for (let j = 0; j < sortedProductsArr.length; j++) {

        if (sortedProductsArr[j].length === 1) {
            console.log(sortedProductsArr[j]);
        } else {
            sortedProductsArr[j] = sortedProductsArr[j].replace(' : ', ': ');
            console.log(`  ${sortedProductsArr[j]}`);
        }
    }
}

solution([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);