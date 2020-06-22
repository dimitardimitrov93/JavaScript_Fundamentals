function bombNumbers(firstArrayInput, secondArrayInput) {

    let firstArray = firstArrayInput.slice();
    let secondArray = secondArrayInput.slice();

    let trigger = secondArray[0];
    let bombPower = secondArray[1];

    let start = 0;
    let numbersAboutToBlow = 0;

    let sum = 0;

    for (let i = 0; i < firstArray.length; i++) {

        if (firstArray[i] === trigger) {

            start = Math.max(0, i - bombPower);
            numbersAboutToBlow = bombPower * 2 + 1;

            firstArray.splice(start, numbersAboutToBlow);
            i = i - bombPower - 1;
        }
    }

    sum = (firstArray.reduce((a, b) => a + b, 0));
    return sum;
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);