function solve(arrInput) {
    
    let arr = arrInput.slice();
    
    let currentKey = arr.shift();
    let currentLine = arr.shift();

    while (currentLine !== 'Generate') {

        let tempKey = '';
        let tokens = currentLine.split('>>>');
        let command = tokens[0];

        if (command === 'Contains') {
            let substring = tokens[1];

            if (currentKey.includes(substring)) {
                console.log(`${currentKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {

            let typeOfCase = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);

            let substring = currentKey.substring(startIndex, endIndex);
            let modifiedSubstring = '';

            if (typeOfCase === 'Upper') {
                modifiedSubstring = substring.toUpperCase();
            } else if (typeOfCase === 'Lower') {
                modifiedSubstring = substring.toLowerCase();
            }

            tempKey = currentKey.replace(substring, modifiedSubstring);
            currentKey = tempKey;
            console.log(currentKey);
        } else if (command === 'Slice') {

            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            let substringToRemove = currentKey.substring(startIndex, endIndex);
            tempKey = currentKey.replace(substringToRemove, '');
            currentKey = tempKey;
            console.log(currentKey);
        }

        currentLine = arr.shift();
    }

    console.log(`Your activation key is: ${currentKey}`);
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);

// solve([
//     '134softsf5ftuni2020rockz42',
//     'Slice>>>3>>>7',
//     'Contains>>>-rock',
//     'Contains>>>-uni-',
//     'Contains>>>-rocks',
//     'Flip>>>Upper>>>2>>>8',
//     'Flip>>>Lower>>>5>>>11',
//     'Generate'
// ]);