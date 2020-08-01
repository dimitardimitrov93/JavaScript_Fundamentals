function emailValidator(arrInput) {
    
    let arr = arrInput.slice();
    let emailAddress = arr.shift();
    let currentLine = arr.shift();

    while (currentLine !== 'Complete') {

        let tempEmail = '';
        let command = '';
        let tokens = '';

        if (currentLine.includes('GetDomain') || (currentLine.includes('Replace'))) {
            tokens = currentLine.split(' ');
            command = tokens[0];
        } else {
            command = currentLine;
        }

        if (command === 'Make Upper') {
            tempEmail = emailAddress.toUpperCase();
            emailAddress = tempEmail;
            console.log(emailAddress);

        } else if (command === 'Make Lower') {
            tempEmail = emailAddress.toLowerCase();
            emailAddress = tempEmail;
            console.log(emailAddress);

        } else if (command === 'GetDomain') {
            let count = Number(tokens[1]);
            let domain = emailAddress.slice(emailAddress.length - count);
            console.log(domain);

        } else if (command === 'GetUsername') {
            let atSignIndex = emailAddress.indexOf('@');

            if (atSignIndex > -1) {
                let substring = emailAddress.substring(0, atSignIndex);
                console.log(substring);
            } else {
                console.log(`The email ${emailAddress} doesn't contain the @ symbol.`);
            }

        } else if (command === 'Replace') {
            let charToReplace = tokens[1];
            tempEmail = emailAddress.replace(new RegExp(charToReplace, 'g'), '-');
            emailAddress = tempEmail;
            console.log(emailAddress);
            
        } else if (command === 'Encrypt') {
            let encryptedCharsArr = emailAddress.split('').map(x => x = x.charCodeAt());
            console.log(encryptedCharsArr.join(' '));
        }

        currentLine = arr.shift();
    }
}

emailValidator([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
]);

// emailValidator([
//     'AnotherMail.com',
//     'Make Lower',
//     'GetUsername',
//     'Replace a',
//     'Complete',
//     ''
// ]);

// emailValidator([
//     'Another@Mail.com',
//     'Make Lower',
//     'GetUsername',
//     'GetDomain 3',
//     'Encrypt',
//     'Complete'
// ]);