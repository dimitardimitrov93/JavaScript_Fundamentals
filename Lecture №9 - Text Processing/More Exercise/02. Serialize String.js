function solve(arrInput) {

    let arr = arrInput.slice();
    let stringInput = arr.shift();
    
    let currentChar = '';
    let allCharsIndices = {};

    let currentString = stringInput;

    for (let i = 0; i < currentString.length; i++) {
        
        currentChar = currentString[i];

        if (!allCharsIndices.hasOwnProperty(currentChar)) {
            allCharsIndices[currentChar] = [];
            allCharsIndices[currentChar].push(i);
        } else {
            allCharsIndices[currentChar].push(i);
        }
    }
    
    for (const key in allCharsIndices) {
        if (allCharsIndices.hasOwnProperty(key)) {
            console.log(`${key}:${allCharsIndices[key].join('/')}`);   
        }
    }
}

solve([ 'abababa', '' ]);