function binaryDigitsCounter(decimalIntInput, binaryDigitInput) {
    let decimalInt = Number(decimalIntInput);
    let binaryDigit = Number(binaryDigitInput);

    let currentBinaryReversed = '';
    let binaryResult = '';

    let currentRemainder = '';

    let binaryDigitCounter = 0;

    while (decimalInt > 0) {

        currentRemainder = (decimalInt % 2).toString();
        currentBinaryReversed += currentRemainder;

        decimalInt = Math.trunc(decimalInt / 2);

        if (Number(currentRemainder) === binaryDigit) {
            binaryDigitCounter++;
        }
    }

    for (let i = (currentBinaryReversed.length - 1); i >= 0; i--) {
        binaryResult += currentBinaryReversed[i];
    }

    binaryResult = Number(binaryResult);

    console.log(`Decimal Integer Input: ${decimalIntInput}`);
    console.log(`Binary Number: ${binaryResult}`);
    console.log(`Number of Specified Binary Digits: ${binaryDigitCounter}`);
}

binaryDigitsCounter(283, 1);