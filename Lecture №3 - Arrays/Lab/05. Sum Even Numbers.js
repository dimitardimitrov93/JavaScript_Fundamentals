function solve(arrayInput) {
    
    let sum = 0;

    for (let currentNumber of arrayInput) {
        if (currentNumber % 2 == 0) {
            sum += Number(currentNumber);
        }
    }

    console.log(sum);
}

solve(['1','2','3','4','5','6']);