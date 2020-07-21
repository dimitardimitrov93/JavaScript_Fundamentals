function treasureFinder(arrInput) {

    let arr = arrInput.slice();

    let keySequence = arr.shift().split(' ');
    let sequenceIndex = 0;

    let currentLine = arr.shift();
    let decipheredMsg = '';
    let messagesArr = [];

    while (currentLine !== 'find') {

        for (let i = 0; i < currentLine.length; i++) {

            if (sequenceIndex === keySequence.length) {
                sequenceIndex = 0;
            }

            let currentChar = currentLine[i];
            let currentCharValue = currentChar.charCodeAt();
            let decipheredValue = currentCharValue - keySequence[sequenceIndex];

            let decipheredChar = String.fromCharCode(decipheredValue);
            decipheredMsg += decipheredChar;

            sequenceIndex++;
        }

        messagesArr.push(decipheredMsg);
        decipheredMsg = '';
        sequenceIndex = 0;
        currentLine = arr.shift();
    }

    for (const message of messagesArr) {

        let [treasureInfo, treasureCoordinates] = message.split('<');
        treasureCoordinates = treasureCoordinates.replace('>', '');
        treasureInfo = treasureInfo.split('&');
        treasureType = treasureInfo[1];

        console.log(`Found ${treasureType} at ${treasureCoordinates}`);
    }
}

treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
