function solve(firstNumber, operatorInput, secondNumber) {
  let operator = operatorInput;
  let result = 0;

  switch (operator) {
      case '+':
          result = firstNumber + secondNumber;
          break;
      case '-':
          result = firstNumber - secondNumber;
          break;
      case '>':
          result = firstNumber > secondNumber;
          break;
      case '<':
          result = firstNumber > secondNumber;
          break;
      case '/':
          result = firstNumber / secondNumber;
          break;
      case '*':
          result = firstNumber * secondNumber;
          break;
      case '%':
          result = firstNumber % secondNumber;
          break;
  }

  console.log(result.toFixed(2));
}

solve(5, "+", 10);
