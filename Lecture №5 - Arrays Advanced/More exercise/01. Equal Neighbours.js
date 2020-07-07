function neighbourFinder(arrInput) {

    let arr = arrInput.slice();

    let currentElement = '';
    let currentStringIndex = 0;
    let currentArrIndex = 0;
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {

        currentArrIndex = i;
        for (let j = 0; j < arr[i].length; j++) {

            currentElement = arr[i][j];
            currentStringIndex = j;
            currentArrIndex = i;

            if (arr[i][j + 1] === currentElement) {
                counter++;
            }
            
            for (let k = (i + 1); k < arr.length; k++) {

                if (arr[k].includes(currentElement)) {
                    
                    if ((k - currentArrIndex) === 1) {

                        for (let l = 0; l < arr[k].length; l++) {

                            if ((arr[k][l] === currentElement) && (l === currentStringIndex)) {
                                currentArrIndex = k + 1;
                                counter++;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    return counter;
}

neighbourFinder([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

neighbourFinder([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

neighbourFinder([
    [ '2', '2', '5', '7', '4' ],
    [ '4', '0', '5', '3', '4' ],
    [ '2', '5', '5', '4', '2' ]
]);