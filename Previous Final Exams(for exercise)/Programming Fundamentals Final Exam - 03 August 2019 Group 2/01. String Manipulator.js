function solve(arrInput) {
    
    let arr = arrInput.slice();

    let stringToManipulate = arr.shift();
    let currentLine = arr.shift();

    while (currentLine !== 'Done') {

        let tempString = '';
        let tokens = currentLine.split(' ');
        let command = tokens[0];

        if (command === 'Change') {

            let char = tokens[1];
            let replacement = tokens[2];

            tempString = stringToManipulate.replace(new RegExp(char, 'g'), replacement);
            stringToManipulate = tempString;
            console.log(stringToManipulate);
        } else if (command === 'Includes') {

            let stringToSearch = tokens[1];

            if (stringToManipulate.includes(stringToSearch)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'End') {

            let stringToSearch = tokens[1];

            if (stringToManipulate.endsWith(stringToSearch)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Uppercase') {
            tempString = stringToManipulate.toUpperCase();
            stringToManipulate = tempString;
            console.log(stringToManipulate);
        } else if (command === 'FindIndex') {

            let char = tokens[1];
            let indexOfChar = stringToManipulate.indexOf(char);
            console.log(indexOfChar);
        } else if (command === 'Cut') {

            let startIndex = Number(tokens[1]);
            let length = Number(tokens[2]);

            tempString = stringToManipulate.substring(startIndex, (startIndex + length));
            stringToManipulate = tempString;
            console.log(stringToManipulate);
        }

        currentLine = arr.shift();
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);