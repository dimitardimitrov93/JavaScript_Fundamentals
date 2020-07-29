function msgDecryptor(arrInput) {
    
    let arr = arrInput.slice();
    let numberOfLines = arr.shift();

    let validationPattern = /(^[$|%]{1})((?<tag>[A-Z]{1}[a-z]{2,}))\1[:][ ](\[(?<firstNumber>\d+)\]\|\[(?<secondNumber>\d+)\]\|\[(?<thirdNumber>\d+)\]\|)$/;

    for (let i = 0; i < numberOfLines; i++) {

        let currentMsg = arr[i];
        let isValidMsg = validationPattern.test(currentMsg);

        if (isValidMsg) {

            let msgInfo = validationPattern.exec(currentMsg);
            let msgTag = msgInfo.groups['tag'];
            let firstNum = Number(msgInfo.groups['firstNumber']);
            let secondNum = Number(msgInfo.groups['secondNumber']);
            let thirdNum = Number(msgInfo.groups['thirdNumber']);

            let decryptedMsg = String.fromCharCode(firstNum, secondNum, thirdNum);
            console.log(`${msgTag}: ${decryptedMsg}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

msgDecryptor([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);

msgDecryptor([
    '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
]);