function solve(arrInput) {
    
    let arr = arrInput.slice();

    let string = arr.shift();
    let stringCase = arr.shift();

    let currentCharValue = 0;
    let totalSum = 0;

    for (let i = 0; i < string.length; i++) {

        let currentChar = string[i];

        if (stringCase === 'LOWERCASE') {

            if ((currentChar.charCodeAt() >= 97) && (currentChar.charCodeAt() <= 122)) {
                currentCharValue = currentChar.charCodeAt();
                totalSum += currentCharValue;
            } else {
                continue;
            }
        } else {
            if ((currentChar.charCodeAt() >= 65) && (currentChar.charCodeAt() <= 90)) {
                currentCharValue = currentChar.charCodeAt();
                totalSum += currentCharValue;
            } else {
                continue;
            }
        }
    }

    console.log(`The total sum is: ${totalSum}`);
}

solve([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]);
solve([ 'AC/DC', 'UPPERCASE', '' ]);