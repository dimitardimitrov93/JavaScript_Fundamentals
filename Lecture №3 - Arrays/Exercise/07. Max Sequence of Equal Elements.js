function solve(arrayInput) {
    
    let previousNumber;
    let currentNumber = 0;
    let currentSequence = [];
    let currentLongestSequence = [];
    let currentSequenceEqualityCounter = 0;
    let previousSequenceEqualityCounter = 0;
    let printLine = '';

    for (let i = 0; i < arrayInput.length; i++) {
        currentNumber = arrayInput[i];
        if (currentNumber == previousNumber) {
            if (currentSequenceEqualityCounter == 0) {
                currentSequence.push(previousNumber);
                currentSequence.push(currentNumber);
                currentSequenceEqualityCounter++;
            } else {
                currentSequence.push(currentNumber);
            }
            currentSequenceEqualityCounter++;
        } else if (i > 0 && currentNumber != previousNumber) {
            previousNumber = currentNumber;

            if (currentSequenceEqualityCounter > previousSequenceEqualityCounter) {
                currentLongestSequence = currentSequence;
                previousSequenceEqualityCounter = currentSequenceEqualityCounter;
            }

            currentSequence = [];
            currentSequenceEqualityCounter = 0;
        } else {
            previousNumber = currentNumber;
        }
    }

    for (let j = 0; j < currentLongestSequence.length; j++) {
        if (j < currentLongestSequence.length - 1) {
            printLine += `${currentLongestSequence[j]} `;
        } else {
            printLine += `${currentLongestSequence[j]}`;
        }
    }
    console.log(printLine);
}

solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);