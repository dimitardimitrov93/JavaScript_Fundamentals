function palindromeChecker(arrayInput) {
    let number = 0;
    let reversedNumber = 0;

    let numberAsString = '';
    let currentString = '';

    let stringToInteger = char => Number(char);
    let integerToString = integer => integer.toString();

    for (let i = 0; i < arrayInput.length; i++) {

        number = arrayInput[i];
        numberAsString = integerToString(arrayInput[i]);
        for (j = numberAsString.length - 1; j >= 0; j--) {
            currentString += numberAsString[j];
            reversedNumber = stringToInteger(currentString);
        }

        if (number === reversedNumber) {
            console.log(true);
        } else {
            console.log(false);
        }

        currentString = '';
        reversedNumber = 0;
    }
}

palindromeChecker([123,323,421,121]);