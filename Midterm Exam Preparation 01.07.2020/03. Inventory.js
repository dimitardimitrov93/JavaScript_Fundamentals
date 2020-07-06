function heroInventory(arrInput) {

    let arr = arrInput.slice();

    let currentItemsArr = arr.shift().split(', ');
    let currentInfo = '';

    let currentValue1 = 0;
    let currentValue2 = 0;

    let currentCommand = '';
    let currentArr = '';

    for (let i = 0; i < arr.length; i++) {

        currentInfo = arr[i];

        if (currentInfo !== 'Craft!') {

            currentArr = arr[i].split(' - ');
            currentCommand = currentArr[0];

            if (currentCommand !== 'Combine Items') {
                currentValue1 = currentArr[1];
            } else {
                currentValue1 = currentArr[1].split(':')[0];
                currentValue2 = currentArr[1].split(':')[1];
            }


            if (currentCommand === 'Collect') {
                if (!currentItemsArr.includes(currentValue1)) {
                    currentItemsArr.push(currentValue1);
                } else {
                    continue;
                }
            } else if (currentCommand === 'Drop') {
                if (currentItemsArr.includes(currentValue1)) {

                    let indexToRemove = currentItemsArr.indexOf(currentValue1);

                    currentItemsArr.splice(indexToRemove, 1);
                } else {
                    continue;
                }
            } else if (currentCommand === 'Combine Items') {

                if (currentItemsArr.includes(currentValue1)) {

                    let indexToPush = currentItemsArr.indexOf(currentValue1) + 1;
                    currentItemsArr.splice(indexToPush, 0, currentValue2);
                }
            } else {
                if (currentItemsArr.includes(currentValue1)) {

                    let indexToRemove = currentItemsArr.indexOf(currentValue1);
                    currentItemsArr.push(currentItemsArr.splice(indexToRemove, 1));
                }
            }

        } else {
            console.log(currentItemsArr.join(', '));
        }
    }
}

// heroInventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
heroInventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);