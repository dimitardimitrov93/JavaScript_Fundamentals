function solve(lostFightsNumber, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let brokenHelmets = 0;
  let brokenSwords = 0;
  let brokenShields = 0;
  let brokenArmors = 0;
  let brokenShieldsCounter = 0;

    for (let i = 1; i <= lostFightsNumber; i++) {
        if (i % 2 == 0) {
            brokenHelmets++;
            if (i % 2 == 0 && i % 3 == 0) {
                brokenShields++;
                brokenShieldsCounter++;
            }
        }
    
        if (i % 3 == 0) {
            brokenSwords++;
        }

        if (brokenShieldsCounter > 0 && brokenShieldsCounter % 2 == 0) {
            brokenArmors++;
            brokenShieldsCounter = 0;
        }
    }

    let totalPriceOfBrokenHelmets = brokenHelmets * helmetPrice;
    let totalPriceOfBrokenSwords = brokenSwords * swordPrice;
    let totalPriceOfBrokenShields = brokenShields * shieldPrice;
    let totalPriceOfBrokenArmors = brokenArmors * armorPrice;

    let expenses = totalPriceOfBrokenHelmets + totalPriceOfBrokenSwords + totalPriceOfBrokenShields + totalPriceOfBrokenArmors;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200
    );
