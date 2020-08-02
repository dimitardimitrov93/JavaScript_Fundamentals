function solve(arrInput) {
    
    let arr = arrInput.slice();
    let message = arr.shift();

    let currentLine = arr.shift();

    while (currentLine !== 'Finish') {

        let tokens = [];
        let command = '';
        let tempMessage = '';

        if ((currentLine === 'Make Lower') || (currentLine === 'Make Upper')) {
            command = currentLine;
        } else {
            tokens = currentLine.split(' ');
            command = tokens[0];
        }

        if (command === 'Replace') {
            let charToReplace = tokens[1];
            let replacement = tokens[2];

            tempMessage = message.replace(new RegExp(charToReplace, 'g'), replacement);
            message = tempMessage;
            console.log(message);
            
        } else if (command === 'Cut') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (indicesValidator(startIndex, endIndex)) {
                let substringToRemove = message.substring(startIndex, (endIndex + 1));
                tempMessage = message.replace(substringToRemove, '');
                message = tempMessage;
                console.log(message);
    
            } else {
                console.log('Invalid indexes!');
            }

        } else if (command === 'Make Upper') {
            tempMessage = message.toUpperCase();
            message = tempMessage;
            console.log(message);

        } else if (command === 'Make Lower') {
            tempMessage = message.toLowerCase();
            message = tempMessage;
            console.log(message);

        } else if (command === 'Sum') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (indicesValidator(startIndex, endIndex)) {
                let substring = message.substring(startIndex, (endIndex + 1));

                let sumOfAsciiValues = substring.split('')
                .map(x => x = x.charCodeAt())
                .reduce((a, b) => a + b, 0);

                console.log(sumOfAsciiValues);
            } else {
                console.log('Invalid indexes!');
            }
        } else if (command === 'Check') {
            let substringToSearch = tokens[1];

            if (message.includes(substringToSearch)) {
                console.log(`Message contains ${substringToSearch}`);
            } else {
                console.log(`Message doesn't contain ${substringToSearch}`);
            }
        }

        currentLine = arr.shift();
    }

    function indicesValidator(startIndex, endIndex) {
        if (((startIndex >= 0) && (startIndex <= (message.length - 1))) && ((endIndex >= 0) && (endIndex <= (message.length - 1)))) {
            return true;
        } else {
            return false;
        }
    }
}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]);

// solve([
//     'HappyNameDay',
//     'Replace p r',
//     'Make Lower',
//     'Cut 2 23',
//     'Sum -2 2',
//     'Finish'
// ]);

// solve([
//     'DinnerIsServed',
//     'Make Upper',
//     'Check Dinner',
//     'Replace N M',
//     'Finish'
// ]);