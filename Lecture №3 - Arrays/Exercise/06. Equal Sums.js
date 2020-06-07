function solve(arrayInput) {
    
    let sumOfElementsOnTheLeft = 0;
    let sumOfElementsOnTheRight = 0;

    let finalIndex = 0;
    let flag = false;

    for (let i = 0; i < arrayInput.length; i++) {        
        for (let j = i; j > 0; j--) {
            sumOfElementsOnTheLeft += Number(arrayInput[j - 1]);
        }

        for (let k = (i + 1); k < arrayInput.length; k++) {
            sumOfElementsOnTheRight += Number(arrayInput[k]);
        }

        if (arrayInput[i] === sumOfElementsOnTheLeft && arrayInput[i] === sumOfElementsOnTheRight) {
            finalIndex = i;
            flag = true;
        } else if (sumOfElementsOnTheLeft === sumOfElementsOnTheRight) {
            finalIndex = i;
            flag = true;
        }

        sumOfElementsOnTheLeft = 0;
        sumOfElementsOnTheRight = 0;
    }

    if (flag) {
        console.log(finalIndex);
    } else {
        console.log('no');
    }
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);