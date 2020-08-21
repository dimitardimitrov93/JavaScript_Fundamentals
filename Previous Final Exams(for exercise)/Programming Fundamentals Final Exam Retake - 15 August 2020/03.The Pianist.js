function solve(arrInput) {
    
    let arr = arrInput.slice();

    let piecesNumber = Number(arr.shift());
    let piecesInfo = {};

    for (let i = 0; i < piecesNumber; i++) {

        let [piece, composer, key] = arr.shift().split('|');
        piecesInfo[piece] = {'composer' : composer, 'key' : key};
    }

    let currentLine = arr.shift();

    while (currentLine !== 'Stop') {

        let tokens = currentLine.split('|');
        let command = tokens.shift();

        if (command === 'Add') {

            let [piece, composer, key] = tokens;

            if (!piecesInfo[piece]) {
                piecesInfo[piece] = {'composer' : composer, 'key' : key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (command === 'Remove') {

            let piece = tokens.shift();

            if (piecesInfo[piece]) {
                delete piecesInfo[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {

            let piece = tokens.shift();
            let newKey = tokens.shift();

            if (piecesInfo[piece]) {
                piecesInfo[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        currentLine = arr.shift();
    }

    let unsortedPiecesInfo = Array.from(Object.entries(piecesInfo));
    let sortedPiecesInfo = unsortedPiecesInfo.sort((a, b) => {
        
        if (a[0] !== b[0]) {
            return a[0].localeCompare(b[0]);
        } else {
            return a[1].composer.localeCompare(b[1].composer);
        }
    });

    for (const element of sortedPiecesInfo) {
        console.log(`${element[0]} -> Composer: ${element[1].composer}, Key: ${element[1].key}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])

// solve([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);