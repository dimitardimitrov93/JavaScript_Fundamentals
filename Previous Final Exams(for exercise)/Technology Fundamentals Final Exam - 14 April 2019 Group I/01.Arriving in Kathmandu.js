function solve(arrInput) {
    
    let arr = arrInput.slice();

    let firstValidationPattern = /(?<peakName>^[A-Za-z0-9!@#\$\?]+)[=](?<lengthOfCode>[0-9]+)[<]{2}(?<code>.+)$/;
    let currentLine = arr.shift();

    while (currentLine !== 'Last note') {

        let firstValidation = firstValidationPattern.test(currentLine);
        let secondValidation = false;

        let peak = '';
        let codeLength = 0;
        let geohashCode = '';

        if (firstValidation) {

            let tokens = firstValidationPattern.exec(currentLine);
            peak = tokens.groups['peakName'].match(/[A-Za-z0-9]+/g).join('');
            codeLength = Number(tokens.groups['lengthOfCode']);
            geohashCode = tokens.groups['code'];

            if (codeLength === geohashCode.length) {
                secondValidation = true;
            }
        }

        if (firstValidation && secondValidation) {
            console.log(`Coordinates found! ${peak} -> ${geohashCode}`);
        } else {
            console.log('Nothing found!');
        }

        currentLine = arr.shift();
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
]);

// solve([
//     'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
//     '=9Cho?@#Oyu<<thvb7ydht',
//     'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
//     'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
//     'Last note'
// ]);