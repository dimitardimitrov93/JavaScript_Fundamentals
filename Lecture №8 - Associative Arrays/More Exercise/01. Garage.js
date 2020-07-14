function garage(arrInput) {

    let arr = arrInput.slice();
    let garage = new Map();

    arr.forEach(element => {
        
        let currentLine = element.split(' - ');
        let garageNumber = Number(currentLine[0]);
        let carInfo = currentLine[1].split(', ');

        for (let i = 0; i < carInfo.length; i++) {
            carInfo[i] = carInfo[i].replace(': ', ' - ');
        }

        if (!garage.has(garageNumber)) {
            garage.set(garageNumber, [carInfo]);
        } else {
            arrToPush = garage.get(garageNumber);
            arrToPush.push(carInfo);
            garage.set(garageNumber, arrToPush);
        }
    });

    let sortedGarageNumbers = Array.from(garage.entries());
    
    sortedGarageNumbers.forEach(garage => {
        console.log(`Garage № ${garage[0]}`);
        garage[1].forEach(car => {
            console.log(`--- ${car.join(', ')}`);
        });
    });
}

garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat"
]);
