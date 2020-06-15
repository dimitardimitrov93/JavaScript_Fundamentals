function modifyNumber(numberInput) {
    let number = numberInput;

    let integerToString = integer => integer.toString();
    let stringToInteger = string => Number(string);

    let currentString = '';
    let currentAverageSum = 0;

    function appendNumber(number) {

        currentString = integerToString(number);
        let currentSum = 0;

        for (let i = 0; i < currentString.length; i++) {
            currentSum += stringToInteger(currentString[i]);
        }

        currentAverageSum = currentSum / (currentString.length);

        if (currentAverageSum <= 5) {
            currentString += '9';
            return appendNumber(currentString);
        } else {
            return stringToInteger(currentString);
        }
    }

    console.log(appendNumber(numberInput));
}

modifyNumber(5835);