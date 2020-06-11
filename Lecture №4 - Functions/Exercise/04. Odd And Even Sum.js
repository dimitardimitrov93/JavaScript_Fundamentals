function oddAndEvenSum(integerInput) {
    let integerToString = integer => integer.toString();
    let numberAsString = integerToString(integerInput);

    let stringToInteger = stringInput => Number(stringInput);
    let currentNumber = 0;

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        currentNumber = stringToInteger(numberAsString[i]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    let printLine = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

    return printLine;
}

oddAndEvenSum(1000435);

