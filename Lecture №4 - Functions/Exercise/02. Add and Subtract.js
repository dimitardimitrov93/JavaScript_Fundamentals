function sum(firstInteger, secondInteger, thirdInteger) {

    let addition = (a, b) => a + b;
    const resultFromAddition = addition(firstInteger, secondInteger);

    let subtract = (a, b) => a - b;
    const resultFromSubtraction = subtract(resultFromAddition, thirdInteger);
    
    return resultFromSubtraction;
}

sum(23, 6, 10);
