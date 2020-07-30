function solve(arrInput) {
    
    let arr = arrInput.slice();
    let stringsToDecryptNum = Number(arr.shift());

    let decrKeyRegEx = /[star]/gi;
    let msgValidatorRegEx = /@[A-Z][a-z]+([^@\-:\>!]*):\d+([^@\-:\>!]*)![AD]!([^@\-:\>!]*)\-\>\d+/;

    let unsortedAttackedPlanets = [];
    let unsortedDestroyedPlanets = [];

    let planetNameRegEx = /@[A-Z][a-z]+/;
    let attackTypeRegEx = /![AD]!/;

    for (let i = 0; i < stringsToDecryptNum; i++) {

        let currentString = arr[i];
        let currentSpecialCharsNum = (currentString.split(decrKeyRegEx).length - 1);

        let currentMsg = charValueDecreaser(currentString, currentSpecialCharsNum); 
        let isValidMsg = msgValidatorRegEx.test(currentMsg);

        if (isValidMsg) {

            let planetName = ((currentMsg.match(planetNameRegEx))[0]).replace(/@/, '');
            let attackType = ((currentMsg.match(attackTypeRegEx))[0]).replace(/!/g, '');

            if (attackType === 'A') {
                unsortedAttackedPlanets.push(planetName);
            } else if (attackType === 'D') {
                unsortedDestroyedPlanets.push(planetName);
            }
        }
    }

    let sortedAttackedPlanets = unsortedAttackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = unsortedDestroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);

    if (sortedAttackedPlanets.length > 0) {
        sortedAttackedPlanets.forEach(planet => {
            console.log(`-> ${planet}`);
        });
    }

    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);

    if (sortedDestroyedPlanets.length > 0) {
        sortedDestroyedPlanets.forEach(planet => {
            console.log(`-> ${planet}`);
        });
    }

    function charValueDecreaser(string, decreaserValue) {

        let modifiedString = '';
        
        for (let j = 0; j < string.length; j++) {
            let currentChar = string[j];
            let initialCharValue = currentChar.charCodeAt();

            let modifiedCharValue = initialCharValue - decreaserValue;
            let finalChar = String.fromCharCode(modifiedCharValue);

            modifiedString += finalChar;
        }

        return modifiedString;
    }
}

solve([ '2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR' ]);

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR',
]);