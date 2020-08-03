function solve(arrInput) {
    
    let arr = arrInput.slice();
    let barcodesCount = Number(arr.shift());
    let validationPattern = /(^[@])[#]+(?<code>[A-Z]{1,}[A-Za-z0-9]{4,}[A-Z]{1,})\1[#]+$/;

    for (let i = 0; i < barcodesCount; i    ++) {

        let barcode = arr[i];
        let isValidBarcode = validationPattern.test(barcode);

        if (isValidBarcode) {

            let digitsInBarcode = barcode.match(/[0-9]/g);
            let productGroup = '00';

            if (digitsInBarcode !== null) {
                productGroup = digitsInBarcode.join('');
            }
            
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}

solve([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);

// solve([
//     '6',
//     '@###Val1d1teM@###',
//     '@#ValidIteM@#',
//     '##InvaliDiteM##',
//     '@InvalidIteM@',
//     '@#Invalid_IteM@#',
//     '@#ValiditeM@#'
// ]);