function smallestNumberFinder(arrayInput) {

    let arr = arrayInput.slice();

    let sortedArray = arr.sort((a, b) => a - b);
    let result = sortedArray.slice(0, 2);

    console.log(result.join(' '));
}

smallestNumberFinder([30, 15, 50, 5,]);