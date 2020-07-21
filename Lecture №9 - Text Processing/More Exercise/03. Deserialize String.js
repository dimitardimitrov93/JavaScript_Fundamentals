function solve(arrInput) {

    let arr = arrInput.slice();

    let currentLine = arr.shift();
    let resultAsArr = [];

    while (currentLine !== 'end') {

        let [letter, positionsInfo] = currentLine.split(':');
        let positions = positionsInfo.split('/');

        for (let i = 0; i < positions.length; i++) {

            resultAsArr[positions[i]] = letter;
        }

        currentLine = arr.shift();
    }

    console.log(resultAsArr.join(''));
}

solve([ 'a:0/2/4/6', 'b:1/3/5', 'end' ]);
solve([
    'a:0/3/5/11', 'v:1/4',
    'j:2', 'm:6/9/15',
    's:7/13', 'd:8/14',
    'c:10', 'l:12',
    'end'
]);