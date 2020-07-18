function solve(stringInput) {
    
    let firstLetter = '';
    let secondLetter = '';

    let currentResult = 0;

    let number = 0;
    let sum = 0;

    let stringsArr = stringInput.split(' ');

    for (let i = 0; i < stringsArr.length; i++) {

        let currentString = stringsArr[i];

        if (currentString === '') {
            continue;
        }

        firstLetter = currentString[0];
        secondLetter = currentString[currentString.length - 1];
        number = Number(currentString.substring(1, currentString.length - 1));

        if (isUpperCase(firstLetter)) {
            currentResult = (number / valueFinder(firstLetter));
        } else {
            currentResult = (number * valueFinder(firstLetter));
        }

        if (isUpperCase(secondLetter)) {
            currentResult = (currentResult - valueFinder(secondLetter));
        } else {
            currentResult = (currentResult + valueFinder(secondLetter));
        }

        sum += currentResult;
        currentResult = 0;
    }

    function isUpperCase(char) {

        if ((char.charCodeAt() >= 65) && (char.charCodeAt() <= 90)) {
            return true;
        } else {
            return false;
        }
    }

    function valueFinder(char) {

        let value = (char.toLowerCase().charCodeAt()) - 96;
        return value;  
    }

    console.log(sum.toFixed(2));
}

// solve('A12b s17G');

solve('P34562Z q2576f   H456z');

// solve ('a1A');