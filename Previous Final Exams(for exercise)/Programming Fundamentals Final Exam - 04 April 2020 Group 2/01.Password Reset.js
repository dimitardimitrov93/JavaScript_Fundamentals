function passwordReset(arrInput) {
    
    let arr = arrInput.slice();
    let password = arr.shift();

    let currentLine = arr.shift();

    while (currentLine !== 'Done') {
        
        let tokens = currentLine.split(' ');
        let command = tokens[0];
        let tempPassword = '';

        if (command === 'TakeOdd') {

            for (let i = 1; i < password.length; i+=2) {
                tempPassword += password[i];
            }

            password = tempPassword;
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);

            let substringToRemove = password.substring(index, (index + length));
            tempPassword = password.replace(substringToRemove, '');
            password = tempPassword;
            console.log(password);
        } else if (command === 'Substitute') {

            let substituteString = tokens[1];
            let replacementString = tokens[2];

            if (password.includes(substituteString)) {
                tempPassword = password.replace(new RegExp(substituteString, 'g'), replacementString);
                password = tempPassword;
                console.log(password);
            } else {
                console.log('Nothing to replace!');   
            }
        }

        currentLine = arr.shift();
    }

    console.log(`Your password is: ${password}`);
}

passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);

// passwordReset([
//     'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
//     'TakeOdd',
//     'Cut 18 2',
//     'Substitute ! ***',
//     'Substitute ? .!.',
//     'Done'
// ]);