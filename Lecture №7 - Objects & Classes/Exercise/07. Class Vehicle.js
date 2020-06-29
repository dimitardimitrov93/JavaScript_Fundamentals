function solution() {
    
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.fuel = fuel;

            let partsArr = Object.values(parts);
            let engineValue = partsArr[0];
            let powerValue = partsArr[1];

            this.parts = {
                engine: engineValue,
                power: powerValue,
                quality: engineValue * powerValue
            };
        }

        drive(fuelLoss) {
            return this.fuel -= fuelLoss;
        }
    }

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}

solution();