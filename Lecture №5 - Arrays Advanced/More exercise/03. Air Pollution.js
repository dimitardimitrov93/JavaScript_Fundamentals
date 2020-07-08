function solve(matrixArrInput, forcesArrInput) {
    
    let matrixArr = matrixArrInput.slice().map(x => x.split(' ').map(Number));
    let forcesArr = forcesArrInput.slice();
    const pollutionThreshold = 50;

    for (let i = 0; i < forcesArr.length; i++) {

        let currentForceArr = forcesArr[i].split(' ');
        let force = currentForceArr[0];
        let value = Number(currentForceArr[1]);

        if (force === 'breeze') {
            matrixArr[value] = matrixArr[value].map(x => Math.max(0, (x - 15)));
        } else if (force === 'gale') {
            
            for (let j = 0; j < matrixArr.length; j++) {
                matrixArr[j][value] = Math.max(0, (matrixArr[j][value] - 20));
            }
        } else {
            
            for (let k = 0; k < matrixArr.length; k++) {
                matrixArr[k] = matrixArr[k].map(x => (x + value));
            }
        }
    }

    let pollutedBlocksArr = [];
    let pollutionFlag = false;

    for (let i = 0; i < matrixArr.length; i++) {

        for (let j = 0; j < matrixArr[i].length; j++) {

            if (matrixArr[i][j] >= pollutionThreshold) {
                pollutedBlocksArr.push(`[${i}-${j}]`);
                pollutionFlag = true;
            }
        }
    }

    if (pollutionFlag) {
        console.log(`Polluted areas: ${pollutedBlocksArr.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

solve(
    [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24"
    ],
    [
        "breeze 1",
        "gale 2",
        "smog 25"
    ]
);

solve(
    [
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24"
    ],
    [ 
        "smog 11", 
        "gale 3", 
        "breeze 1", 
        "smog 2"
    ]
);