function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

solve(9, 100, 1.1);