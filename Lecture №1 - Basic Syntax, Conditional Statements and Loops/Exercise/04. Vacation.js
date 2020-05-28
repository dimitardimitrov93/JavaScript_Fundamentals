function solve(groupNumber, groupType, dayOfWeek) {
    
    let currentPriceForASinglePerson = 0;
    let currentPriceForGroup = 0;
    let discount = 0;
    let totalPrice = 0;

    if (groupType == "Students") {
        switch (dayOfWeek) {
            case "Friday":
                currentPriceForASinglePerson = 8.45;
                break;
            case "Saturday":
                currentPriceForASinglePerson = 9.8;
                break;
            case "Sunday":
                currentPriceForASinglePerson = 10.46;
                break;
        }
        currentPriceForGroup = groupNumber * currentPriceForASinglePerson;

        if (groupNumber >= 30) {
            discount = currentPriceForGroup * 0.15;
        }

        totalPrice = currentPriceForGroup - discount;
    } else if (groupType == "Business") {
        switch (dayOfWeek) {
            case "Friday":
                currentPriceForASinglePerson = 10.9;
                break;
            case "Saturday":
                currentPriceForASinglePerson = 15.6;
                break;
            case "Sunday":
                currentPriceForASinglePerson = 16;
                break;
        }

        if (groupNumber >= 100) {
            groupNumber -= 10;
        }

        currentPriceForGroup = groupNumber * currentPriceForASinglePerson;
        totalPrice = currentPriceForGroup - discount;
    } else if (groupType == "Regular") {
        switch (dayOfWeek) {
            case "Friday":
                currentPriceForASinglePerson = 15;
                break;
            case "Saturday":
                currentPriceForASinglePerson = 20;
                break;
            case "Sunday":
                currentPriceForASinglePerson = 22.5;
                break;
        }
        currentPriceForGroup = groupNumber * currentPriceForASinglePerson;

        if (groupNumber >= 10 && groupNumber <= 20) {
            discount = currentPriceForGroup * 0.05;
        }

        totalPrice = currentPriceForGroup - discount;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");