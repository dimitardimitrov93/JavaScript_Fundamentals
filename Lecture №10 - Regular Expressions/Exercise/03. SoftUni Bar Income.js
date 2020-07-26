function solve(arrInput) {

    let arr = arrInput.slice();
    let currentLine = arr.shift();

    let totalIncomeForDay = 0;

    let nameRegEx = /(\%[A-Z][a-z]+\%)/g;
    let productRegEx = /\<\w+\>/;
    let countRegEx = /\|\d+\|/g;
    let priceRegEx = /(\d+\.\d+)|(\d+)\$/g;

    while (currentLine !== 'end of shift') {

        if (lineTester(currentLine)) {
            let customerName = currentLine.match(nameRegEx)[0].replace(/%/g, '');
            let product = currentLine.match(productRegEx)[0].replace(/\<|\>/g, '');
            let count = Number(currentLine.match(countRegEx)[0].replace(/\|/g, ''));
            let price = Number((currentLine.match(priceRegEx)[0]).replace(/\$/g, ''));
    
            let orderCost = count * price;
            totalIncomeForDay += orderCost;
    
            console.log(`${customerName}: ${product} - ${orderCost.toFixed(2)}`);
        } 

        currentLine = arr.shift();
    }

    function lineTester(line) {

        let nameFlag = nameRegEx.test(line);
        let productFlag = productRegEx.test(line);
        let countFlag = countRegEx.test(line);
        let priceFlag = priceRegEx.test(line);

        if (nameFlag && productFlag && countFlag && priceFlag) {
            return true;
        } else {
            return false;
        }
    }

    console.log(`Total income: ${totalIncomeForDay.toFixed(2)}`);
}

solve([
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
]);

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);