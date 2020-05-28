function solve(numberInput) {
    let number = numberInput.toString();
    let currentDigit = 0;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        currentDigit = Number(number[i]);
        sum += currentDigit;
    }

    sum = sum.toString();

    if (sum.includes('9')) {
        console.log(`${numberInput} Amazing? True`);
    } else {
        console.log(`${numberInput} Amazing? False`);
    }
}

solve(1233);