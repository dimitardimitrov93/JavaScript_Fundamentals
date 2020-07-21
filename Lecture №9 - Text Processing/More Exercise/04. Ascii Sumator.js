function asciiSumator(arrInput) {
    
    let arr = arrInput.slice();

    let firstCharValue = arr.shift().charCodeAt();
    let secondCharValue = arr.shift().charCodeAt();

    let start = Math.min(firstCharValue, secondCharValue);
    let end = Math.max(firstCharValue, secondCharValue);

    let stringToManipulate = arr.shift();

    let sum = 0;

    for (let i = 0; i < stringToManipulate.length; i++) {

        let currentCharValue = stringToManipulate[i].charCodeAt();

        if ((currentCharValue > start) && (currentCharValue < end)) {
            sum += currentCharValue;
        }
    }

    console.log(sum);
}

asciiSumator([ '.', '@', 'dsg12gr5653feee5' ]);
asciiSumator([ '?', 'E', '@ABCEF' ]);
asciiSumator([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]);