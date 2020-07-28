function solve(arrInput) {

    let arr = arrInput.slice();

    let wordAndDefinitionsArr = arr.shift().split(' | ');
    let calledWordsArr = arr.shift().split(' | ');
    let command = arr.shift();

    let listToPrint = [];

    let dictionaryAssocArr = {};

    for (let i = 0; i < wordAndDefinitionsArr.length; i++) {

        let [word, definition] = wordAndDefinitionsArr[i].split(': ');

        if (!dictionaryAssocArr.hasOwnProperty(word)) {
            dictionaryAssocArr[word] = [definition];
        } else {
            dictionaryAssocArr[word].push(definition);
        }
    }

    let dictionaryArr = Array.from(Object.entries(dictionaryAssocArr));

    for (let j = 0; j < dictionaryArr.length; j++) {
        dictionaryArr[j][1] = dictionaryArr[j][1].sort((a, b) => b.length - a.length);
        listToPrint.push(dictionaryArr[j][0]);
    }

    for (let k = 0; k < calledWordsArr.length; k++) {

        let currentCalledWord = calledWordsArr[k];

        for (let l = 0; l < dictionaryArr.length; l++) {
            if (dictionaryArr[l].includes(currentCalledWord)) {
                console.log(dictionaryArr[l][0]);
                dictionaryArr[l][1].forEach(def => {
                    console.log(`-${def}`);
                });

                break;
            }
        }
    }

    if (command === 'List') {  
        listToPrint = listToPrint.sort((a, b) => a.localeCompare(b));
        console.log(listToPrint.join(' '));
    }
}

// solve([
//     "programmer: an animal, which turns coffee into code | developer: a magician",
//     "Pesho | Gosho",
//     "List",
// ]);

solve([
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
]);