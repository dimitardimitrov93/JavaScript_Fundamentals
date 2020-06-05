function solve(firstArray) {
    
    let firstArraySum = 0;
    let secondArraySum = 0;

    let currentNumber = 0;

    let secondArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] % 2 === 0) {
            currentNumber = firstArray[i] + i;
            secondArray[i] = currentNumber;
            firstArraySum += firstArray[i];
            secondArraySum += currentNumber;
        } else {
            currentNumber = firstArray[i] - i;
            secondArray[i] = currentNumber;
            firstArraySum += firstArray[i];
            secondArraySum += currentNumber;
        }
    }

    console.log(secondArray);
    console.log(firstArraySum);
    console.log(secondArraySum);
}

solve([-5, 11, 3, 0, 2]);