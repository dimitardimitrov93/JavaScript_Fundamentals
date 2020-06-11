function charactersInRange(firstChar, secondChar) {

    let stringToInteger = char => char.charCodeAt();

    const firstInteger = stringToInteger(firstChar);
    const secondInteger = stringToInteger(secondChar);

    let rangeStart = 0;
    let rangeEnd = 0;

    if (firstInteger < secondInteger) {
        rangeStart = firstInteger;
        rangeEnd = secondInteger;
    } else {
        rangeStart = secondInteger;
        rangeEnd = firstInteger;
    }

    let printLine = '';
    let integerToChar = integer => String.fromCharCode(integer);

    for (let i = rangeStart + 1; i < rangeEnd; i++) {
        if (i < (rangeEnd - 1)) {
            printLine += `${integerToChar(i)} `;
        } else {
            printLine += `${integerToChar(i)}`;
        }
    }

    return printLine;
}

charactersInRange("a", "d");
