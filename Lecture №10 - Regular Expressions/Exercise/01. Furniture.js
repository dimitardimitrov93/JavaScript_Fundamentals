function solve(arrInput) {
    
    let arr = arrInput.slice();

    let formatValidatorRegExp = /(\>\>([A-Z]+)\<\<)((\d+)|(\d+(\.\d+)))!\d+/i;
    let currentLine = arr.shift();

    let validFormats = [];

    let infoExtractorRegExp = /(\>\>(?<furniture>(([A-Z][a-z]+)|([A-Z]+))+)\<\<)(?<price>((\d+)|(\d+(\.\d+))))!(?<number>\d+)/gi;

    let currentInfo;
    let purchasedFurnitureArr = [];

    let totalPrice = 0;

    while(currentLine !== 'Purchase') {

        let flag = (formatValidatorRegExp.test(currentLine));
        
        if (flag) {
            validFormats.push(currentLine);
        }

        currentLine = arr.shift();
    }
    
    for (const element of validFormats) {
        
        while((currentInfo = infoExtractorRegExp.exec(element)) !== null) {
            purchasedFurnitureArr.push(currentInfo.groups['furniture']);
            let currentPrice = Number(currentInfo.groups['price']) * Number(currentInfo.groups['number']);
            totalPrice += currentPrice;
        }
    }

    console.log('Bought furniture:');
    purchasedFurnitureArr.forEach(furniture => {
        console.log(furniture);
    });
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);