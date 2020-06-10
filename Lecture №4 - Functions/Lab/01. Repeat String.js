function repeatString(stringInput, repeatCounter) {
    
    let resultString = '';

    for (let i = 0; i < repeatCounter; i++) {
        resultString += `${stringInput}`;
    }

    return resultString;
}

repeatString('abc', 3);