function registration(arrInput) {
    
    let arr = arrInput.slice();
    let inputsNumber = Number(arr.shift());

    let validationPattern = /(^[U][\$])(?<usrname>[A-Z]{1}[a-z]{2,})\1([P][@][\$])(?<pass>[A-Za-z]{5,}[\d]+)\3$/;
    let successfulRegistrationsCount = 0;

    for (let i = 0; i < inputsNumber; i++) {

        let currentInput = arr[i];
        let isValidRegistration = validationPattern.test(currentInput); 

        if (isValidRegistration) {
            console.log('Registration was successful');
            let credentials = validationPattern.exec(currentInput);
            let username = credentials.groups['usrname'];
            let password = credentials.groups['pass'];
            console.log(`Username: ${username}, Password: ${password}`);
            successfulRegistrationsCount++;
        } else {
            console.log('Invalid username or password'); 
        }
    }
    console.log(`Successful registrations: ${successfulRegistrationsCount}`);
}

registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);

// registration([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]);

// registration([
//     '3',
//     'U$myU$-->P@$asdqwe123P@$',
//     'Sara 1232412',
//     'U$NameU$P@$Pass234P@$'
// ]);