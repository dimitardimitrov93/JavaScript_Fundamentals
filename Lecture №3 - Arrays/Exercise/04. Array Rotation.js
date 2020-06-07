function solve(initialArray, rotationsNumber) {

    let finalArray = initialArray;
    let printLine = '';

    for (let i = 0; i < rotationsNumber; i++) {
        finalArray.push(initialArray[0]);
        finalArray.shift();
    }

    for (let j = 0; j < finalArray.length; j++) {
        if (j < finalArray.length - 1) {
            printLine += `${finalArray[j]} `;
        } else {
            printLine += `${finalArray[j]}`;
        }
    }
    console.log(printLine);
}

solve([2, 4, 15, 31], 5);

// Alternative solution:

// let end = '';

// for (let i = 0; i < rotationsNumber; i++) {
//     end = initialArray[0];
//     for (let j = 0; j < (initialArray.length -1); j++) {
//         finalArray[j] = initialArray[j + 1];
//     }
//     finalArray[finalArray.length - 1] = end;
// }