function solve(typeOfDay, personAgeInput) {
    let personAge = Number(personAgeInput);
    let ticketPrice = 0;

    if (typeOfDay == "Weekday") {
        if (personAge >= 0 && personAge <= 18) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        } else if (personAge > 18 && personAge <= 64) {
            ticketPrice = 18;
            console.log(`${ticketPrice}$`);
        } else if (personAge > 64 && personAge <= 122) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        } else {
            console.log("Error!");
        }
    } else if (typeOfDay == "Weekend") {
        if (personAge >= 0 && personAge <= 18) {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);
        } else if (personAge > 18 && personAge <= 64) {
            ticketPrice = 20;
            console.log(`${ticketPrice}$`);
        } else if (personAge > 64 && personAge <= 122) {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);
        } else {
            console.log("Error!");
        }
    } else if (typeOfDay == "Holiday") {
        if (personAge >= 0 && personAge <= 18) {
            ticketPrice = 5;
            console.log(`${ticketPrice}$`);
        } else if (personAge > 18 && personAge <= 64) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        } else if (personAge > 64 && personAge <= 122) {
            ticketPrice = 10;
            console.log(`${ticketPrice}$`);
        } else {
            console.log("Error!");
        }
    }
}

solve('Weekday', 42);