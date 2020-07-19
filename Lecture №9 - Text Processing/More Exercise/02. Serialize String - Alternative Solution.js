function solve(arrInput) {

    let arr = arrInput.slice();
    let stringInput = arr.shift();
    
    let currentChar = '';
    let currentIndex = 0;
    let currentCharIndices = '';

    let previousIndex = 0;
    let allCharsIndices = [];

    let currentString = stringInput;

    for (let i = 0; i < currentString.length; i++) {
        
        currentChar = currentString[i];

        if (!allCharsIndices.includes(currentChar)) {
            while (currentString.includes(currentChar, previousIndex)) {

                if (!currentCharIndices.includes(currentChar)) {
                    currentCharIndices += `${currentChar}:`;
                } else {
                    currentIndex = currentString.indexOf(currentChar, previousIndex);
                    currentCharIndices += `${currentIndex}/`;
                    previousIndex = currentIndex + 1;
                }
            }
    
            currentCharIndices = currentCharIndices.substring(0, currentCharIndices.length - 1);
            currentCharIndices += '\n';
            allCharsIndices += currentCharIndices;
            currentCharIndices = '';
            previousIndex = 0;
        }
    }

    console.log(allCharsIndices);
}