function resultChecker(numOne, numTwo, numThree) {
    let result = '';

    if (numOne > 0 && numTwo > 0 && numThree > 0) {
        result = 'Positive'; 
    } else if ((numOne < 0 && numTwo < 0 && numThree >= 0) || (numOne < 0 && numThree < 0 && numTwo >= 0) || (numTwo < 0 && numThree < 0 && numOne >= 0)) {
        result = 'Positive';
    } else if (numOne == 0 || numTwo == 0 || numThree == 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }

    return result;
}

resultChecker(-1, 0, 1);
