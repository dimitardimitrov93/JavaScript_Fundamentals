function solve(arrayInput) {
    
    let currentInteger = 0;
    let isItCurrentTopInteger = false;
    let topIntegersArray = [];
    let printLine = '';
    let indexCounter = 0;

    for (let i = 0; i < arrayInput.length; i++) {
        currentInteger = arrayInput[i];
        for (let j = (i + 1); j < arrayInput.length; j++) {
            if (currentInteger > arrayInput[j]) {
                isItCurrentTopInteger = true;
            } else {
                isItCurrentTopInteger = false;
                indexCounter++;
                break;
            }
        }
        if (isItCurrentTopInteger || i === (arrayInput.length - 1)) {
            topIntegersArray[i - indexCounter] = currentInteger;
        }
    }

    for (let k = 0; k < topIntegersArray.length; k++) {
        if (k < (topIntegersArray.length - 1)) {
            printLine += `${topIntegersArray[k]} `;
        } else {
            printLine += `${topIntegersArray[k]}`;
        }
    }
    console.log(printLine);
}

solve([14, 24, 3, 19, 15, 17]);