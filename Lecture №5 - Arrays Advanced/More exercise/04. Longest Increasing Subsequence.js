function lis(arrInput) {

    let arrStr = arrInput.slice();

    arrStr = arrStr[0].split(' ');
    let arrNum = arrStr.map(Number);

    let previousNum = arrNum[0];
    let biggerNumsCounter = 0;

    let previousIndex = 0;

    let lisArr = [];
    lisArr.push(previousNum);

    let length = arrNum.length;

    for (let i = 0; i < length; i++) {

        previousIndex = Math.max(0, lisArr.indexOf(previousNum));

        if ((arrNum[i] < previousNum)) {

            let lisArrLength = lisArr.length - 1;
            let index = lisArrLength;
            let counter = 0;
            for (let j = lisArrLength; j > 0; j--) {
                
                if ((arrNum[i] < lisArr[j])) {
                    index--;
                    counter++;
                } else {

                    continue;
                }
            }

            if (arrNum[i] < lisArr[lisArr.length - 1]) {
                lisArr.splice(index, counter);
                lisArr.push(arrNum[i]);
            } else {
                lisArr.push(arrNum[i]);
            }

        } else if ((arrNum[i] > previousNum)) {

            lisArr.push(arrNum[i]);
            previousNum = arrNum[i];
        }
    }

    console.log(lisArr.join(' '));
}

lis([ '11 12 13 3 14 4 15 5 6 7 8 7 16 9 8' ]);