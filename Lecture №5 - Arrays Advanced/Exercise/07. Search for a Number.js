function numberFinder(firstArrayInput, secondArrayInput) {
    let firstArray = firstArrayInput.slice();
    let secondArray = secondArrayInput.slice();

    let elementsToTake = secondArray[0];
    let elementsToDelete = secondArray[1];
    let elementToFind = secondArray[2];

    let currentArray = firstArray.slice(0, elementsToTake);
    currentArray.splice(0, elementsToDelete);

    let finder = currentArray.filter(element => element === elementToFind);

    console.log(`Number ${elementToFind} occurs ${finder.length} times.`);
}

numberFinder([5, 2, 3, 4, 1, 6], [5, 2, 3]);