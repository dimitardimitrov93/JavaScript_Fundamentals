function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentLine = arr.shift();

    let inputValidatorRegEx = /(?<artist>^[A-Z]{1}[ \'a-z]+)[:](?<song>[A-Z ]+[ ]*[A-Z]+[ ]*)/g;

    let encryptedResult = '';

    while (currentLine !== 'end') {

        let isValidInput = inputValidatorRegEx.test(currentLine);

        if (isValidInput) {
            let currentInfo = currentLine.match(inputValidatorRegEx);
            let [artist, song] = currentInfo[0].split(':');

            let key = artist.length;

            for (let i = 0; i < currentInfo[0].length; i++) {
                let currentChar = currentInfo[0][i];

                if ((currentChar !== ' ') && (currentChar !== '\'') && (currentChar !== ':')) {

                    let currentValue = currentChar.charCodeAt();
                    let modifiedValue = currentValue + key;
                    let encryptedChar = '';

                    if (currentValue >= 65 && currentValue <= 90) {
                        if (modifiedValue > 90) {
                            modifiedValue = 64 + (modifiedValue - 90);
                        }
                    } else if (currentValue >= 97 && currentValue <= 122) {
                        if (modifiedValue > 122) {
                            modifiedValue = 96 + (modifiedValue - 122);
                        }
                    }

                    encryptedChar = String.fromCharCode(modifiedValue);
                    encryptedResult += encryptedChar;

                } else if (currentChar === ':') {
                    encryptedChar = '@';
                    encryptedResult += encryptedChar;
                } else if (currentChar === ' ') {
                    encryptedResult += currentChar;
                } else if (currentChar === '\'') {
                    encryptedResult += currentChar;
                }
            }
            console.log(`Successful encryption: ${encryptedResult}`);
            encryptedResult = '';
        } else {
            console.log('Invalid input!');
        }

        currentLine = arr.shift();
    }
}

solve([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);

solve([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
]);