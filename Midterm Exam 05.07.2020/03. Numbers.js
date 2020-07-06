function topNumberFinder(stringInput) {

    let numbersArr = stringInput.split(' ').map(Number);

    let averageSeqValue = (numbersArr.reduce((a, b) => a + b, 0)) / numbersArr.length;
    let biggerNumbersThanAverage = [];
    let topNumbersArr = [];

    for (let i = 0; i < numbersArr.length; i++) {

        if (numbersArr[i] > averageSeqValue) {
            biggerNumbersThanAverage.push(numbersArr[i]);
        }
    }

    if (biggerNumbersThanAverage.length > 0) {
        topNumbersArr = biggerNumbersThanAverage.sort((a, b) => b - a).slice(0, 5);
        console.log(topNumbersArr.join(' '));
    } else {
        console.log('No');
    }
}

// topNumberFinder('10 20 30 40 50');
// topNumberFinder('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// topNumberFinder('1');
topNumberFinder('-1 -2 -3 -4 -5 -6');