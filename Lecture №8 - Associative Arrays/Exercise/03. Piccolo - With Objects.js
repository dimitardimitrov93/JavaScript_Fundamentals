function solve(arrInput) {

    let arr = arrInput.slice();
    let carInfoArr = [];
    let carsLot = {};

    arr.forEach(carInfo => {
        carInfoArr.push(carInfo.split(', '));
    });

    carInfoArr.forEach(carInfo => {
        let direction = carInfo[0];
        let firstLetters = carInfo[1].slice(0, 2);
        let number = Number(carInfo[1].slice(2, 6));
        let lastLetters = carInfo[1].slice(6);

        registrationPlate = [firstLetters, number, lastLetters];

        if (!carsLot[carInfo[1]] && direction === 'IN') {
            carsLot[carInfo[1]] = [...registrationPlate];
        } else if (carsLot[carInfo[1]] && direction === 'OUT') {
            delete carsLot[carInfo[1]];
        }
    });

    let sortedCarNumbers = Object.entries(carsLot).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumbers.length > 0) {
        sortedCarNumbers.forEach(kvp => {
            console.log(kvp[0]);
        });
    } else {
        console.log('Parking Lot is Empty');
    }
}

// solve([
//     "IN, CA2844AA",
//     "IN, CA1234TA",
//     "OUT, CA2844AA",
//     "IN, CA9999TT",
//     "IN, CA2866HI",
//     "OUT, CA1234TA",
//     "IN, CA2844AA",
//     "OUT, CA2866HI",
//     "IN, CA9876HH",
//     "IN, CA2822UU",
// ]);
  
solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);