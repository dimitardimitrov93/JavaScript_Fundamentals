function arrayManipulator(intArrayInput, strArrayInput) {
    let intArray = intArrayInput.slice();
    let strArray = strArrayInput.slice();

    let printLine = '';

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

            let index = Number(currentCommandArr.shift());
            let loopEnd = currentCommandArr.length;

            for (let i = 0; i < loopEnd; i++) {
                intArray.splice(index, 0, Number(currentCommandArr[i]));
                index++;
            }

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
            let length = intArray.length;
            for (let i = 0; i < length; i++) {
                if (i === 0) {
                    printLine += `[ ${intArray[i]}, `;
                } else if ((i > 0) && (i < (intArray.length - 1))) {
                    printLine += `${intArray[i]}, `;
                } else {
                    printLine += `${intArray[i]} ]`;
                }
            }
            console.log(printLine);
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

// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);

arrayManipulator(
    [1, 2, 3, 4, 5],
    ["addMany 0 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
    );