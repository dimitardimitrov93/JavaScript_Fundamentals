function solve(arrInput) {

    let operandsArr = [];

    let firstOperand = 0;
    let secondOperand = 0;
    let currentResult = 0;

    let flag = true;

    for (const element of arrInput) {

        if (typeof element === 'number') {
            operandsArr.push(element);
        } else {
           operator = element;

           if (operandsArr.length <= 1) {
                console.log('Error: not enough operands!');
                flag = false;
                break;
            }
        
            if ((operator === '+')) {
                firstOperand = operandsArr[operandsArr.length - 2];
                secondOperand = operandsArr[operandsArr.length - 1];

                operandsArr.length -= 2;

                currentResult = firstOperand + secondOperand;
                operandsArr.push(currentResult);
            } else if ((operator === '-')) {
                firstOperand = operandsArr[operandsArr.length - 2];
                secondOperand = operandsArr[operandsArr.length - 1];

                operandsArr.length -= 2;

                currentResult = firstOperand - secondOperand;
                operandsArr.push(currentResult);
            } else if ((operator === '*')) {
                firstOperand = operandsArr[operandsArr.length - 2];
                secondOperand = operandsArr[operandsArr.length - 1];

                operandsArr.length -= 2;

                currentResult = firstOperand * secondOperand;
                operandsArr.push(currentResult);
            } else if ((operator === '/')) {
                firstOperand = operandsArr[operandsArr.length - 2];
                secondOperand = operandsArr[operandsArr.length - 1];

                operandsArr.length -= 2;

                currentResult = firstOperand / secondOperand;
                operandsArr.push(currentResult);
            }
        } 
    }

    if (operandsArr.length > 1 && flag) {
        console.log('Error: too many operands!');
    } else if (flag) {
        console.log(operandsArr[0]);
    }
}

solve([
    5,
    3,
    4,
    '*',
    '-'
]);