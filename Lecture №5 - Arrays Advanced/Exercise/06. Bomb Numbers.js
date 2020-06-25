function bombNumbers(firstArrayInput, secondArrayInput) {

    let firstArray = firstArrayInput.slice();
    let secondArray = secondArrayInput.slice();

    let bomb = secondArray[0];
    let bombRange = secondArray[1];

    let length = firstArray.length;
    let sum = 0;

    while (firstArray.includes(bomb)) {
        let bombIndex = firstArray.indexOf(bomb);
        let startOfExplosion = Math.max(0, (bombIndex - bombRange));
        let endOfExplosion = Math.min(length, (bombIndex + bombRange));
 
        let currentRange = ((Math.abs((startOfExplosion) - (endOfExplosion + 1))));

        firstArray.splice(startOfExplosion, currentRange);
    }

    sum = (firstArray.reduce((a, b) => a + b, 0));
    return sum;
}

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);