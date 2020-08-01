function solve(arrInput) {
    
    let arr = arrInput.slice();
    let username = arr.shift();
    let currentLine = arr.shift();

    while (currentLine !== 'Sign up') {

        let tempUsername = '';
        let currentInfo = currentLine.split(' ');
        let command = currentInfo[0];

        if (command === 'Case') {
            let caseType = currentInfo[1];

            if (caseType === 'lower') {
                tempUsername = username.toLowerCase();
            } else if (caseType === 'upper') {
                tempUsername = username.toUpperCase();
            }

            username = tempUsername;
            console.log(username);
        } else if (command === 'Reverse') {

            let startIndex = Number(currentInfo[1]);
            let endIndex = Number(currentInfo[2]);

            if (((startIndex >= 0) && (startIndex <= (username.length - 1))) && ((endIndex >= 0) && endIndex <= (username.length - 1))) {
                let substring = username.substring(startIndex, (endIndex + 1));
                let reversedSubstring = substring.split('').reverse().join('');
                console.log(reversedSubstring);
            }
        } else if (command === 'Cut') {
            let substring = currentInfo[1];

            if (username.includes(substring)) {
                tempUsername = username.replace(substring, '');
                username = tempUsername;
                console.log(username);
            } else {
                console.log(`The word ${username} doesn't contain ${substring}.`);
            }
        } else if (command === 'Replace') {
            let charToReplace = currentInfo[1];

            tempUsername = username.replace(new RegExp(charToReplace, 'g'), '*');
            username = tempUsername;
            console.log(username);
        } else if (command === 'Check') {
            let char = currentInfo[1];

            if (username.includes(char)) {
                console.log('Valid');
            } else {
                console.log(`Your username must contain ${char}.`);
            }
        }

        currentLine = arr.shift();
    }
}

// solve([ 'Pesho', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ]);
solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);