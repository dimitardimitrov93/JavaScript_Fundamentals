function solve(mineStartingYield) {
    let currentMineYield = mineStartingYield;
    let totalAmountOfSpice = 0;

    const mineWorkersSpiceConsumation = 26;
    let spiceConsumationForThisDay = 0;

    let dayCounter = 0;

    while (currentMineYield >= 100) {
        totalAmountOfSpice += currentMineYield;

        if (totalAmountOfSpice >= mineWorkersSpiceConsumation) {
            spiceConsumationForThisDay = mineWorkersSpiceConsumation;
        } else {
            spiceConsumationForThisDay = (mineWorkersSpiceConsumation - (Math.abs(totalAmountOfSpice - mineWorkersSpiceConsumation)));
        }

        totalAmountOfSpice -= spiceConsumationForThisDay;
        currentMineYield -= 10;
        dayCounter++;
    }

    if (totalAmountOfSpice >= mineWorkersSpiceConsumation) {
        spiceConsumationForThisDay = mineWorkersSpiceConsumation;
    } else {
        spiceConsumationForThisDay = (mineWorkersSpiceConsumation - (Math.abs(totalAmountOfSpice - mineWorkersSpiceConsumation)));
    }

    totalAmountOfSpice -= spiceConsumationForThisDay;

    console.log(dayCounter);
    console.log(totalAmountOfSpice);
    
}

solve(111);