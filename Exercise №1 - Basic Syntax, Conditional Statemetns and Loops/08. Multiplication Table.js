function solve(numberInput) {
    
    let number = Number(numberInput);

    let result = 0;
    let printLine = "";

    for (let i = 1; i <= 10; i++) {
        result = number * i;
        printLine = `${number} X ${i} = ${result}`;
        console.log(printLine);
    }
}

solve(5);