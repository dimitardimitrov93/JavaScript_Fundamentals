function charReplacer(stringInput) {

    let previousChar = stringInput[0];
    let finalString = previousChar;

    for (let i = 1; i < stringInput.length; i++) {

        let currentChar = stringInput[i];

        if (currentChar != previousChar) {
            finalString += currentChar;
        } else {
            continue;
        }

        previousChar = currentChar;
    }

    console.log(finalString);
}

charReplacer('aaaaabbbbbcdddeeeedssaa');
charReplacer('qqqwerqwecccwd');