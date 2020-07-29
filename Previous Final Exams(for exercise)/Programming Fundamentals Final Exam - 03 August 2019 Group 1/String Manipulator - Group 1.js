function stringManipulator(arrInput) {
    
    let arr = arrInput.slice();

    let stringToManipulate = arr.shift();
    let currentLine = arr.shift();

    while (currentLine !== 'End') {

        let currentInfo = currentLine.split(' ');
        let command = currentInfo[0];
        let firstArgument = currentInfo[1];
        let secondArgument = currentInfo[2];

        let tempString = '';

        if (command === 'Translate') {
            tempString = stringToManipulate.replace(new RegExp(firstArgument, 'g'), secondArgument);
            stringToManipulate = tempString;
            console.log(stringToManipulate);
        } else if (command === 'Includes') {
            if (stringToManipulate.includes(firstArgument)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Start') {
            if (stringToManipulate.startsWith(firstArgument)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (command === 'Lowercase') {
            tempString = stringToManipulate.toLowerCase();
            stringToManipulate = tempString;
            console.log(stringToManipulate);
        } else if (command === 'FindIndex') {
            console.log(stringToManipulate.lastIndexOf(firstArgument));
        } else if (command === 'Remove') {
            let startIndex = Number(firstArgument);
            let count = Number(secondArgument);

            let substringToRemove = stringToManipulate.substring(startIndex, (startIndex + count));
            let tempString = stringToManipulate.replace(substringToRemove, '');
            stringToManipulate = tempString;
            console.log(stringToManipulate);
        }

        currentLine = arr.shift();
    }
}

stringManipulator([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);