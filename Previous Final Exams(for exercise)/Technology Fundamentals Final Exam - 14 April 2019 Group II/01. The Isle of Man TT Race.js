function solve(arrInput) {
    
    let arr = arrInput.slice();

    let validationPattern = /([#\$%\*&]+)(?<racer>[A-Za-z]+)\1[=](?<codeLength>[0-9]+)[!]{2}(?<code>.+)$/;

    let currentInput = arr.shift();

    while (currentInput !== undefined) {

        let isValidInput = validationPattern.test(currentInput);

        if (isValidInput) {
            let tokens = validationPattern.exec(currentInput);
            let racerName = tokens.groups['racer'];
            let geohashCodeLength = Number(tokens.groups['codeLength']);
            let encryptedGeohashCode = tokens.groups['code'];

            let decryptedGeohashCode = hashCodeDecrypter(encryptedGeohashCode, geohashCodeLength);

            if (geohashCodeLength === decryptedGeohashCode.length) {
                console.log(`Coordinates found! ${racerName} -> ${decryptedGeohashCode}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }

        currentInput = arr.shift();
    }

    function hashCodeDecrypter(code, codeLength) {

        let decryptedCode = '';

        for (let i = 0; i < code.length; i++) {
            let currentChar = code[i];
            let currentValue = currentChar.charCodeAt();
            let modifiedValue = currentValue + codeLength;
            let decryptedChar = String.fromCharCode(modifiedValue);

            decryptedCode += decryptedChar;
        }

        return decryptedCode;
    }
}

solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]);

// solve([
//     'Ian6Hutchinson=7!!\\(58ycb4',
//     "#MikeHailwood#!!'gfzxgu6768=11",
//     'slop%16!!plkdek/.8x11ddkc',
//     '$Steve$=9Hhffjh',
//     "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
//     'RichardQ^uayle=16!!fr5de5kd'
// ]);
