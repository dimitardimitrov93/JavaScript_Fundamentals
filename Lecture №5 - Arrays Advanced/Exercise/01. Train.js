function train(arrayInput) {
    let arr = arrayInput.slice();

    let wagonsOccupationArr = [];
    wagonsOccupationArr = arr.shift().split(' ');

    let wagonCapacity = Number(arr.shift());

    let commandsArray = [];
    commandsArray = arr.slice(0, arr.length);

    for (let i = 0; i < commandsArray.length; i++) {

        let currentCommandArr = [];
        currentCommandArr = commandsArray[i].split(' ');

        let command = currentCommandArr[0];
        let commandValue = currentCommandArr[1];

        if (command === 'Add') {
            wagonsOccupationArr.push(commandValue);
        } else {
            commandValue = command;

            for (let j = 0; j < wagonsOccupationArr.length; j++) {
                if (((Number(wagonsOccupationArr[j]) + Number(commandValue))) <= Number(wagonCapacity)) {
                    wagonsOccupationArr[j] = Number(wagonsOccupationArr[j]) + Number(commandValue);
                    break;
                } else {
                    continue;
                }
            }
        }
    }

    console.log(wagonsOccupationArr.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);