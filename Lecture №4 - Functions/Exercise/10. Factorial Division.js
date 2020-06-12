function factorialDivision(firstNumber, secondNumber) {
    let factorialSum = 1;

    function factorialFormula(number) {
        factorialSum *= number;
        number--;
        if (number >= 1) {
            return factorialFormula(number);
        } else {
            return factorialSum;
        }
    }

    let firstNumberFactorial = factorialFormula(firstNumber);
    factorialSum = 1;
    let secondNumberFactorial = factorialFormula(secondNumber);
    let finalResult = firstNumberFactorial / secondNumberFactorial;
    
    return finalResult.toFixed(2);
}

factorialDivision(5, 2);