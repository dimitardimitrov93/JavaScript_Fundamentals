function solve(numberInput) {
    let number = numberInput;
    let sum = 0;
    while (number > 0) {
        let currentDigit = number % 10;

        sum += currentDigit;

        number = Math.trunc(number / 10);
    }

    console.log(sum);
}

solve(245678);