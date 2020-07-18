function pascalCaseSpliter(stringInput) {

    let separatedWords = '';

    for (let i = 0; i < stringInput.length; i++) {

        let currentChar = stringInput[i];

        if ((currentChar.charCodeAt() >= 65) && (currentChar.charCodeAt() <= 90)) {
            if (i === 0) {
                separatedWords += currentChar;
            } else {
                separatedWords += ` ${currentChar}`;
            }
        } else {
            separatedWords += currentChar;
        }
    }

    console.log(separatedWords.split(' ').join(', '));
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSpliter('HoldTheDoor');