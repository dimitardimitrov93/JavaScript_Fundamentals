function solve(numberInput) {
    let number = Number(numberInput);
    let printLine = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            printLine += `${i} `;
        }
        console.log(printLine);
        printLine = "";
    }
}

solve(5);