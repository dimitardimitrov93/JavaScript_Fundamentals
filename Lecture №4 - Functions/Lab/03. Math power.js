function mathPower(number, powerCounter) {
    let result = 1;

    for (let i = 0; i < powerCounter; i++) {
        result *= number;
    }

    return result;
}

mathPower(2, 8);