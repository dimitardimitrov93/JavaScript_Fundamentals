function solve(arrInput) {
    
    let arr = arrInput.slice();
    let numberOfInputs = Number(arr.shift());

    let validationPattern = /(^[\|])(?<bossName>[A-Z]{4,})\1[:]{1}([#])(?<bossTitle>[A-Za-z]+[ ][A-Za-z]+)\3$/;

    for (let i = 0; i < numberOfInputs; i++) {

        let currentInput = arr[i];
        let isValidInput = validationPattern.test(currentInput);

        if (isValidInput) {
            let tokens = validationPattern.exec(currentInput);
            let boss = tokens.groups['bossName'];
            let title = tokens.groups['bossTitle'];

            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]);

// solve([
//     '3',
//     '|PETER|:#H1gh Overseer#',
//     '|IVAN|:#Master detective#',
//     '|KARL|: #Marketing lead#'
// ]);