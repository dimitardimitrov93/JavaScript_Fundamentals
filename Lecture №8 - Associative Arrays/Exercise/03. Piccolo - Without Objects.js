function solve(arrInput) {

    let arr = arrInput.slice();
    let carPlatesArr = [];
    let carsLot = [];

    arr.forEach(carInfo => {
        carPlatesArr.push(carInfo.split(', '));
    });

    carPlatesArr.forEach(carPlate => {
        let direction = carPlate.shift();
        if (!carsLot.includes(carPlate[0]) && direction === 'IN') {
            carsLot.push(carPlate[0]);
        } else if (carsLot.includes(carPlate[0]) && direction === 'OUT') {
            carsLot.splice(carsLot.indexOf(carPlate[0]), 1);
        }
    });

    let sortedCarPlates = carsLot.sort((a, b) => a.localeCompare(b));

    if (sortedCarPlates.length > 0) {
        sortedCarPlates.forEach(carPlate => {
            console.log(carPlate);
        });
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

// solve([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ]);
