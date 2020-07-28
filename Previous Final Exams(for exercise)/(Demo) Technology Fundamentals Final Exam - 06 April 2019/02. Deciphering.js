function solve(arrInput) {
    
    let arr = arrInput.slice();

    let encryptedString = arr.shift();

    let textValidationRegEx = /^[d-z\{\}\#\|]*$/g;
    let isValidText = textValidationRegEx.test(encryptedString);

    if (isValidText) {
        let firstDecryption = '';
        let substringsArr = arr.shift().split(' ');
    
        for (let i = 0; i < encryptedString.length; i++) {
    
            let currentChar = encryptedString[i];
            let currentCharValue = currentChar.charCodeAt();
            let modifiedCharValue = currentCharValue - 3;
    
            firstDecryption += String.fromCharCode(modifiedCharValue);
        }
    
        let decryptedString = firstDecryption.replace(new RegExp(substringsArr[0], 'g'), substringsArr[1]);
        console.log(decryptedString);
    } else {
        console.log('This is not the book you are looking for.');
    }
}

solve([
    'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'
]);

solve([ 'arx#vkdww#qrw#sdvv', 't l' ]);