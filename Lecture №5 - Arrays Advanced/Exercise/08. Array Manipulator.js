function arrayManipulator(intArrayInput, strArrayInput) {
    let intArray = intArrayInput.slice();
    let strArray = strArrayInput.slice();

    while (strArray.length > 0) {

        let currentCommandArr = strArray.shift().split(' ');
        let currentCommand = currentCommandArr.shift();

        let firstValue = Number(currentCommandArr[0]);
        let secondValue = Number(currentCommandArr[1]);

        let tempArr = [];
        
        if (currentCommand === 'add') {
            intArray.splice(firstValue, 0, secondValue);
        } else if (currentCommand === 'addMany') {

            tempArr = intArray.slice();
            intArray = [];

            let currentCommandArrLength =  currentCommandArr.length - 1;

            let index = Number(currentCommandArr.shift());
            let loopEnd = ((tempArr.length) + currentCommandArr.length);

            for (let i = 0; i < loopEnd; i++) {
                if (index === 0) {
                    if (i < currentCommandArrLength) {
                        intArray.push(Number(currentCommandArr.shift()));
                    } else {
                        intArray.push(Number(tempArr.shift()));
                    }
                } else {
                    if (i <= (index + currentCommandArrLength)) {
                        tempArr.push(Number(currentCommandArr.shift()));
                    } else {
                        intArray.push(Number(tempArr.shift()));
                    }

                    intArray = tempArr.slice();
                }
            }

            // for (let i = 0; i < loopEnd; i++) {
            //     if (i < index || i >= currentCommandArrLength) {
            //         intArray.push(Number(tempArr.shift()));
            //     } else if ((i >= index) && (i < (i + currentCommandArrLength))) {
            //         intArray.push(Number(currentCommandArr.shift()));
            //     }
            // }

        } else if (currentCommand === 'contains') {
            console.log(intArray.findIndex(element => element === firstValue));
        } else if (currentCommand === 'remove') {
            intArray.splice(firstValue, 1);
        } else if (currentCommand === 'shift') {
            for (let j = 0; j < firstValue; j++) {
                intArray.push(intArray.shift());
            }
        } else if (currentCommand === 'sumPairs') {
            intArray = sumArrPairs(intArray);
        } else if (currentCommand === 'print') {
            console.log(intArray);
            break;
        }
    }

    function sumArrPairs(arr) {

        let sumPairsArr = [];

        while (arr.length > 0) {
            let firstNumber = Number(arr[0]);
            let secondNumber = Number(arr[1]);

            let sum = firstNumber + secondNumber;

            sumPairsArr.push(sum);
            arr.splice(0, 2);
        }

        return sumPairsArr;
    }
}

// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
// ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);

arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);