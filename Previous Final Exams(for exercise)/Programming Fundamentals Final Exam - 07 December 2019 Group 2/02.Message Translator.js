function messageTranslator(arrInput) {
    
    let arr = arrInput.slice();
    let numberOfInputs = Number(arr.shift());

    let validationPattern = /(^[!])(?<cmd>[A-Z][a-z]{2,})\1[:][\[](?<msg>[A-Za-z]{8,})[\]]$/;

    for (let i = 0; i < numberOfInputs; i++) {

        let currentInput = arr[i];
        let isValidInput = validationPattern.test(currentInput);

        if (isValidInput) {

            let tokens = validationPattern.exec(currentInput);
            let command = tokens.groups['cmd'];
            let message = tokens.groups['msg'];
            
            let encryptedMessage = message.split('').map(x => x = x.charCodeAt());
            console.log(`${command}: ${encryptedMessage.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

messageTranslator([ 
    '2',
    '!Send!:[IvanisHere]',
    '*Time@:[Itis5amAlready]' 
]);

// messageTranslator([
//     '3',
//     'go:[outside]',
//     '!drive!:YourCarToACarWash',
//     '!Watch!:[LordofTheRings]'
// ]);

// messageTranslator([
//     '3',
//     '!play!:[TheNewSong]',
//     '!Ride!:[Bike]',
//     '!Watch!:[LordofTheRings]'
// ]);