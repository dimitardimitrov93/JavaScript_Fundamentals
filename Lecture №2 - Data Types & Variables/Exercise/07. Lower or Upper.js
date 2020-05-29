function solve(letterInput) {
    let letter = letterInput;
    letter = letter.charCodeAt();

    if (letter >= 97 && letter <= 122) {
        console.log('lower-case');
    } else if (letter >= 65 && letter <= 90) {
        console.log('upper-case');
    }
}

solve('l');