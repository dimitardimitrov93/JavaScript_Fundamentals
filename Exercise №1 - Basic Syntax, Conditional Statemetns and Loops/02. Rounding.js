function solve(firstNumInput, secondNumInput) {
    
    let firstNum = Number(firstNumInput);
    let secondNum = Number(secondNumInput);

    if (secondNum > 15) {
        secondNum = 15;
    }

    let result = firstNum.toFixed(secondNum);

    console.log(parseFloat(result));
}

solve(3.1415926535897932384626433832795, 2);