function arrayManipulator(arrayInput) {

    let arr = arrayInput.slice();

    let arrToManipulate = [];
    arrToManipulate = arr.shift();
    arrToManipulate = arrToManipulate.split(' ');

    let commandsArray = [];
    commandsArray = arr.slice(0, arr.length);

    for (let i = 0; i < commandsArray.length; i++) {

        let currentCommandArr = [];
        currentCommandArr = commandsArray[i].split(' ');

        let command = currentCommandArr[0];
        let commandFirstValue = currentCommandArr[1];
        let commandSecondValue = currentCommandArr[2];

        if (command === 'Add') {
            arrToManipulate.push(commandFirstValue);
        } else if (command === 'Remove') {
            arrToManipulate = arrToManipulate.filter(element => element !== commandFirstValue);
        } else if (command === 'RemoveAt') {
            arrToManipulate.splice(commandFirstValue, 1);
        } else if (command === 'Insert') {
            arrToManipulate.splice(commandSecondValue, 0, commandFirstValue);
        }
    }

    console.log(arrToManipulate.join(' '));
}

arrayManipulator([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
