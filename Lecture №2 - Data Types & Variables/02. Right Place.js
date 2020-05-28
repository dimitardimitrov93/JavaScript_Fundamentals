function solve(firstString, character, targetString) {
    let currentCharacter = '';
    let underscorePosition = 0;
    let editedString = '';

    for (let i = 0; i < firstString.length; i++) {
        currentCharacter = firstString[i];
        if (currentCharacter == '_') {
            underscorePosition = i;
        }
    }

    for (let j = 0; j < firstString.length; j++) {
        if (j != underscorePosition) {
            editedString += `${firstString[j]}`;
        } else {
            editedString += `${character}`;
        }
    }

    if (editedString == targetString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'i', 'String');