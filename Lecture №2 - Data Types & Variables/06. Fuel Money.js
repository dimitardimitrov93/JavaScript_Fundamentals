function solve(travelDistance, passengersNumber, dieselPriceForLiter) {
    
    let neededFuelforTheTrip = (travelDistance / 100) * 7;
    neededFuelforTheTrip += passengersNumber * 0.1;
    let neededMoneyForTrip = neededFuelforTheTrip * dieselPriceForLiter;

    console.log(`Needed money for that trip is ${neededMoneyForTrip}lv.`);
}

solve(90, 14, 2.88);