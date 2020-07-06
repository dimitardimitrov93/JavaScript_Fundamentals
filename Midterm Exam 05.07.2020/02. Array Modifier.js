function arrayModifier(arrInput) {

    let numbersToModifyArr = arrInput[0].split(' ').map(Number);
    let commandsInfoArr = arrInput.slice(1);

    let currentCommandInfo = commandsInfoArr.shift().split(' ');

    let numberToModify = 0;
    let multiplicationResult = 0;

    while (currentCommandInfo[0] !== 'end') {

        let currentCommand = currentCommandInfo[0];
        let firstIndex = Number(currentCommandInfo[1]);
        let secondIndex = Number(currentCommandInfo[2]);

        if (currentCommand === 'swap') {
            numberToModify = numbersToModifyArr[firstIndex];
            numbersToModifyArr.splice(firstIndex, 1, numbersToModifyArr[secondIndex]);
            numbersToModifyArr.splice(secondIndex, 1, numberToModify);
        } else if (currentCommand === 'multiply') {
            multiplicationResult = numbersToModifyArr[firstIndex] * numbersToModifyArr[secondIndex];
            numbersToModifyArr.splice(firstIndex, 1, multiplicationResult);
        } else {
            numbersToModifyArr = numbersToModifyArr.map(x => x - 1);
        }

        currentCommandInfo = commandsInfoArr.shift().split(' ');
    }

    console.log(numbersToModifyArr.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);