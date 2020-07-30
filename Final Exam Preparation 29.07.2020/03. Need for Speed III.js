function solve(arrInput) {
    
    let arr = arrInput.slice();

    let carsNumber = Number(arr.shift());
    let garage = {};

    for (let i = 0; i < carsNumber; i++) {

        let currentInfo = arr.shift().split('|');
        let car = currentInfo[0];
        let mileage = Number(currentInfo[1]);
        let fuel = Number(currentInfo[2]);
        
        garage[car] = [mileage, fuel];
    }

    let currentLine = arr.shift();

    while (currentLine !== 'Stop') {

        let currentInfo = currentLine.split(' : ');
        let command = currentInfo[0];
        let car = currentInfo[1];
        let firstArgument = Number(currentInfo[2]);
        let secondArgument = Number(currentInfo[3]);

        if (command === 'Drive') {
            let distance = firstArgument;
            let fuel = secondArgument;

            if (garage[car][1] >= fuel) {
                let oldMileage = garage[car][0];
                let oldFuel = garage[car][1];

                garage[car][0] = oldMileage + distance;
                garage[car][1] = oldFuel - fuel;

                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (garage[car][0] >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete garage[car];
                }
                
            } else {
                console.log('Not enough fuel to make that ride');
            }
        } else if (command === 'Refuel') {
            let fuel = firstArgument;
            let oldFuel = garage[car][1];
            let refuelAmount = 0;

            if ((oldFuel + fuel) > 75) {
                refuelAmount = 75 - oldFuel;
                garage[car][1] = oldFuel + refuelAmount;
            } else {
                refuelAmount = fuel;
                garage[car][1] = oldFuel + fuel;
            }
            
            console.log(`${car} refueled with ${refuelAmount} liters`);
        } else if (command === 'Revert') {
            let kilometers = firstArgument;

            let oldMileage = garage[car][0];
            let newMileage = oldMileage - kilometers;

            if (newMileage < 10000) {
                garage[car][0] = 10000;
            } else {
                garage[car][0] = newMileage;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        currentLine = arr.shift();
    }

    let unsortedGarageArr = Array.from(Object.entries(garage));
    let sortedGarageArr = unsortedGarageArr.sort((a, b) => {
        if (a[1][0] !== b[1][0]) {
            return b[1][0] - a[1][0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    sortedGarageArr.forEach(element => {
        console.log(`${element[0]} -> Mileage: ${element[1][0]} kms, Fuel in the tank: ${element[1][1]} lt.`);
    });
}

// solve([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);