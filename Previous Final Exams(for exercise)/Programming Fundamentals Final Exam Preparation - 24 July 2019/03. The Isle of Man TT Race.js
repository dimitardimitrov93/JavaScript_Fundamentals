function solve(arrInput) {
    
    let arr = arrInput.slice();

    let stringFormatValidationRegEx = /(^[\3\$\*\%\&\#]+)(?<racerName>[A-Za-z]+)(\1)(?<hashCodeLength>[=]{1}\d+)(?<hashCode>[!]{2}.+)/;

    let decryptedHashCode = '';

    for (let i = 0; i < arr.length; i++) {

        let currentString = arr[i];
        let isValidFormat = stringFormatValidationRegEx.test(currentString);

        if (isValidFormat) {
            let currentInfo = currentString.match(stringFormatValidationRegEx);

            let racerName = currentInfo[2];
            let hashCodeLength = Number(currentInfo[4].replace(/=/g, ''));
            let encryptedHashCode = currentInfo[5].substring(2);

            if (hashCodeLength === encryptedHashCode.length) {
                
                for (let j = 0; j < encryptedHashCode.length; j++) {

                    let currentChar = encryptedHashCode[j];
                    let currentCharValue = currentChar.charCodeAt();
                    let modifiedCharValue = currentCharValue + hashCodeLength;
                    let decryptedChar = String.fromCharCode(modifiedCharValue);
                    decryptedHashCode += decryptedChar;
                }

                console.log(`Coordinates found! ${racerName} -> ${decryptedHashCode}`);
                return;
            } 
        }

        console.log('Nothing found!');
    }
}

 solve([
     '%GiacomoAgostini%=7!!hbqw',
     '&GeoffDuke*=6!!vjh]zi',
     'JoeyDunlop=10!!lkd,rwazdr',
     'Mike??Hailwood=5!![pliu',
     '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
 ]);

solve([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
]);