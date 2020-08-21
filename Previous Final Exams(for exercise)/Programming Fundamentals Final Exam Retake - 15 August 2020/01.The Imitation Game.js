function solve(arrInput) {
    
    let arr = arrInput.slice();
    let message = arr.shift();

    let currentLine = arr.shift();

    while (currentLine !== 'Decode') {

        let tempMessage = '';
        let tokens = currentLine.split('|');
        
        let command = tokens[0];

        if (command === 'Move') {
            let lettersNumber = Number(tokens[1]);
            let lettersToMove = message.substring(0, lettersNumber);
            tempMessage = message.replace(lettersToMove,'');
            tempMessage += lettersToMove;
            message = tempMessage;
            
        } else if (command === 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];

            tempMessage = message.split('');
            tempMessage.splice(index, 0, value);
            message = tempMessage.join('');
            
        } else if (command === 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];

            while (message.includes(substring)) {
                tempMessage = message.replace(substring, replacement);
                message = tempMessage;
            }

            message = tempMessage;
        }

        currentLine = arr.shift();
    }
    
    console.log(`The decrypted message is: ${message}`);
}

solve([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);