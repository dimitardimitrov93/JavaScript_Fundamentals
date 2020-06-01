function solve(firstNumber, secondNumber, thirdNumber) {
    
    let biggestNumber = secondNumber;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        biggestNumber = firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        biggestNumber = secondNumber;
    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        biggestNumber = thirdNumber;
    }

    console.log(biggestNumber);
}

solve(-2, 7, 3);