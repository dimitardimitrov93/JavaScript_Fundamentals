function solve(arrInput) {
    
    let arr = arrInput.slice();
    let demonNamesArr = arr.shift().split(/[, ]+/g);

    let healthCharsRegEx = /[^0-9.\/+*-]/g;
    let damageCalcNumsRegEx = /[+-]?\d+\.?\d*/g;
    let operatorsFinderRegEx = /[\*\/]/g;
    
    let demonsBook = {};

    while (demonNamesArr.length > 0) {

        let currentDemonInfo = demonNamesArr.shift();

        let arrForHealthCalc = currentDemonInfo.match(healthCharsRegEx);
        let currentDemonHealth = healthCalculator(arrForHealthCalc);

        let numbersForDamageArr = currentDemonInfo.match(damageCalcNumsRegEx);
        let operatorsArr = currentDemonInfo.match(operatorsFinderRegEx);
        let currentDemonDamage = damageCalculator(numbersForDamageArr, operatorsArr);

        demonsBook[currentDemonInfo] = [currentDemonHealth, currentDemonDamage];
    }

    let unsortedDemonsBookArr = Array.from(Object.entries(demonsBook));
    let sortedDemonsBookArr = unsortedDemonsBookArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let k = 0; k < sortedDemonsBookArr.length; k++) {
        console.log(`${sortedDemonsBookArr[k][0]} - ${sortedDemonsBookArr[k][1][0]} health, ${sortedDemonsBookArr[k][1][1].toFixed(2)} damage`);  
    }

    function healthCalculator(arr) {

        let totalHealth = 0;

        if (arr !== null) {
            for (let i = 0; i < arr.length; i++) {
                let currentChar = arr[i];
                let currentCharValue = currentChar.charCodeAt(0);
                totalHealth += currentCharValue;
            }
        }

        return totalHealth;
    }

    function damageCalculator(arr, operators) {

        let totalDamage = 0;

        if (arr !== null) {
            for (let j = 0; j < arr.length; j++) {

                let currentChars = arr[j];
                totalDamage += Number(currentChars);
            }
        }

        if (operators !== null) {
            for (const operator of operators) {
                if (operator === '*') {
                    totalDamage *= 2;
                } else if (operator === '/') {
                    totalDamage /= 2; 
                }
            }
        }

        return totalDamage;
    }
}

solve([ 'M+3p/h-0.5s-0.5t0.0**' ]);
// solve([ 'M3ph-1st+1*/*, Azazel' ]);
// solve([ 'Gos/ho' ]);