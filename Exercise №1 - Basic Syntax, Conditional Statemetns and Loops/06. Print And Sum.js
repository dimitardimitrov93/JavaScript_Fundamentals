function solve(startNumberInput, endNumberInput) {

    let startNumber = Number(startNumberInput);
    let endNumber = Number(endNumberInput);

    let printLine = "";
    let sum = 0;
    
    for (let i = startNumber; i <= endNumber; i++) {
        printLine += `${i} `
        sum += i;
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

solve(5, 10);