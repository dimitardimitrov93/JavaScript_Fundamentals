function solve(arrayInput, magicNumber) {

    let magicPair = [];
    let printLine = '';

    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = i + 1; j < arrayInput.length; j++) {
            if ((arrayInput[i] + arrayInput[j]) == magicNumber) {
                magicPair[0] = arrayInput[i];
                magicPair[1] = arrayInput[j];

                printLine = `${magicPair[0]} ${magicPair[1]}`;

                console.log(printLine);
            }
        }
        magicPair = [];
        printLine = '';
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
