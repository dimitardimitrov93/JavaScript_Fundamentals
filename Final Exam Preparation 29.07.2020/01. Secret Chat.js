function solve(arrInput) {
    
    let arr = arrInput.slice();
    let message = arr.shift();

    let currentLine = arr.shift();

    while (currentLine !== 'Reveal') {

        let [command, firstArgument, secondArgument] = currentLine.split(':|:');
        let substring = '';
        let replacement = '';
        let tempMessage = '';

        if (command === 'InsertSpace') {
            let index = Number(firstArgument);
            tempMessage = `${message.substring(0, index)} ${message.substring(index)}`;
            message = tempMessage;
            console.log(message);

        } else if (command === 'Reverse') {
            substring = firstArgument;
            replacement = secondArgument;

            if (message.includes(substring)) {
                tempMessage = message.replace(substring, '');
                let reversedSubstring = substring.split('').reverse().join('');
                message = tempMessage + reversedSubstring;

                console.log(message);
            } else {
                console.log('error');
            }

        } else if (command === 'ChangeAll') {
            substring = firstArgument;
            replacement = secondArgument;

            tempMessage = message.replace(new RegExp(substring, 'g'), replacement);
            message = tempMessage;
            
            console.log(message);
        }

        currentLine = arr.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

// solve([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
// ]);