function smallestNumber(firstNumber, secondNumber, thirdNumber) {

    let smallestNumber = 0;

    if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
        smallestNumber = firstNumber;
    } else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
        smallestNumber = secondNumber;
    } else if (thirdNumber <= firstNumber && thirdNumber <= secondNumber) {
        smallestNumber = thirdNumber;
    }
    
    return smallestNumber;
}

smallestNumber(600, 342, 123);

