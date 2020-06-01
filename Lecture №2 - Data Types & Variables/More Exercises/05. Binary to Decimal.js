function solve(binaryNumberInput) {
    let binaryNumber = binaryNumberInput;
    let currentNumber = 0;
    let decimalNumber = 0;
    let power = 0;

    for (let i = (binaryNumber.length - 1); i >= 0; i--) {
        if (Number(binaryNumber[i]) !== 0) {
            currentNumber = Number(Math.pow(2, power));
            decimalNumber += currentNumber;
            power++;
        } else {
            power++;
        }
    }
    console.log(decimalNumber);
}

solve('00001001');