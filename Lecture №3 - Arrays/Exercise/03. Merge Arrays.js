function solve(firstArray, secondArray) {

    let thirdArray = [];
    let evenNumber = 0;
    let oddNumber = 0;
    let printLine = '';

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            evenNumber = Number(firstArray[i]) + Number(secondArray[i]);
            thirdArray[i] = evenNumber;
        } else {
            oddNumber = firstArray[i] + secondArray[i];
            thirdArray[i] = oddNumber;
        }
    }

    for (let j = 0; j < thirdArray.length; j++) {
        if (j < (thirdArray.length - 1)) {
            printLine += `${thirdArray[j]} - `;
        } else {
            printLine += `${thirdArray[j]}`;
        }
    }

    console.log(printLine);
}

solve(["5", "15", "23", "56", "35"], 
["17", "22", "87", "36", "11"]);