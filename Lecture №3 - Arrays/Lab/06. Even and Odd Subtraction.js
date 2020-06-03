function solve(arrayInput) {
    
    let oddSum = 0;
    let evenSum = 0;

    for (let currentNumber of arrayInput) {
        if (currentNumber % 2 === 0) {
            evenSum += Number(currentNumber);
        } else {
            oddSum += Number(currentNumber);
        }
    }

    let difference = evenSum - oddSum;

    console.log(difference);
}

solve([3,5,7,9]);