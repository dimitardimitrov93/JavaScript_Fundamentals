function solve(arrInput) {

    let arr = arrInput.slice();
    let numberOfInputs = Number(arr.shift());

    let validationPattern = /([\*]|[@])(?<tag>[A-Z][a-z]{3,})\1[:][ ](?<msg>\[[A-Za-z]+\][\|]\[[A-Za-z]+\][\|]\[[A-Za-z]+\][\|])$/;

    for (let i = 0; i < numberOfInputs; i++) {

        let currentInput = arr[i];
        let isValidInput = validationPattern.test(currentInput);

        if (isValidInput) {
            let currentMatches = validationPattern.exec(currentInput);
            let currentTag = currentMatches.groups['tag'];
            let currentMessage = currentMatches.groups['msg'];
            let messageLetters = currentMessage.match(/[A-Za-z]/g);
            let decryptedMessage = messageLetters.map(x => x = x.charCodeAt());
            console.log(`${currentTag}: ${decryptedMessage.join(' ')}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);

// solve([
//     '3',
//     '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
//     '*tAGged*: [i][i][i]|',
//     'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
// ]);