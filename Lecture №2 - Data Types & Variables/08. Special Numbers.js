function solve(number) {
    
    let currentNumber = '';
    let booleanResult = '';

    for (let i = 1; i <= number; i++) {
        currentNumber = i.toString();
        let digitsSum = 0;

        for (let j = 0; j < (currentNumber.length); j++) {
            digitsSum += Number(currentNumber[j]);
        }

        if (digitsSum === 5 || digitsSum === 7 || digitsSum === 11) {
            booleanResult = 'True';
        } else {
            booleanResult = 'False';
        }

        console.log(`${i} -> ${booleanResult}`);
    }
}

solve(15);