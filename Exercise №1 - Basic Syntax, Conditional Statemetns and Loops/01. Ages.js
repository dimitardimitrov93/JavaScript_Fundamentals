function solve(ageInput) {
    let age = Number(ageInput);
    let printLine = "";

    if (age >= 0 && age <= 2) {
        printLine = "baby";
    } else if (age >= 3 && age <= 13) {
        printLine = "child";
    } else if (age >= 14 && age <= 19) {
        printLine = "teenager";
    } else if (age >= 20 && age <= 65) {
        printLine = "adult";
    } else if (age >= 66) {
        printLine = "elder";
    } else {
        printLine = "out of bounds";
    }

    console.log(printLine);
}

solve(14);