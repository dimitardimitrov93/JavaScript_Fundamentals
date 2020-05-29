function solve(firstString, character, targetString) {
    let editedString = '';

    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] == '_') {
            editedString += character;
        } else {
            editedString += firstString[i];
        }
    }

    if (editedString == targetString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'i', 'String');