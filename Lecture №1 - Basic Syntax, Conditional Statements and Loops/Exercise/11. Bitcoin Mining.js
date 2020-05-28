function goldDigger(input) {

    let days = input.length;
    let diggedGold = 0;
    let currentMoneyInLeva = 0;
    let dayOfTheFirstPurchasedBitcoin = 0;

    let oneBitcoinPrice = 11949.16;
    let oneGramOfGoldPrice = 67.51;

    let numberOfPurchasedBitcoins = 0;
    let totalNumOfPurchasedBitcoins = 0;

    for (let i = 1; i <= days; i++) {
        diggedGold = Number(input.shift());

        if (i % 3 == 0) {
            diggedGold -= (diggedGold * 0.3);
        }

        currentMoneyInLeva += (parseFloat(diggedGold * oneGramOfGoldPrice));

        if (currentMoneyInLeva >= oneBitcoinPrice) {
            numberOfPurchasedBitcoins = (Math.floor(currentMoneyInLeva / oneBitcoinPrice));
            totalNumOfPurchasedBitcoins += numberOfPurchasedBitcoins;

            if (dayOfTheFirstPurchasedBitcoin < 1) {
                dayOfTheFirstPurchasedBitcoin = i;
            }

            currentMoneyInLeva -= (numberOfPurchasedBitcoins * oneBitcoinPrice); 
        }
    }

    currentMoneyInLeva = parseFloat(currentMoneyInLeva);
    currentMoneyInLeva = currentMoneyInLeva.toFixed(2);

    console.log(`Bought bitcoins: ${totalNumOfPurchasedBitcoins}`);

    if (totalNumOfPurchasedBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitcoin}`);
    }
    
    console.log(`Left money: ${currentMoneyInLeva} lv.`);
}

goldDigger([ 100, 200, 300 ]);