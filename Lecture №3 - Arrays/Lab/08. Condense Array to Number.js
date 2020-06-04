function solve(arrayInput) {
    
    let currentArray = arrayInput;
    let finalArray = [];

    let currentIndex = currentArray.length;
    let currentCoupleSum = 0;

    if (currentArray.length !== 1) {
        while (currentArray[1] !== undefined) {
            for (let i = 0; i < currentIndex - 1; i++) {
                currentCoupleSum = currentArray[0] + currentArray[1];
                finalArray[i] = currentCoupleSum;
                currentArray.shift();
            }
            currentArray = finalArray;
            finalArray = [];
            currentIndex = currentArray.length;
        }
    } else {
        currentCoupleSum = currentArray[0];
    }
    console.log(currentCoupleSum);
}

solve([5,0,4,1,2]);