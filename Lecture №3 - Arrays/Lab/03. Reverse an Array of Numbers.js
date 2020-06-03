function solve(length, arrayInput) {
    
    let printLine = '';

    for (let i = length - 1; i >= 0; i--) {
        printLine += `${arrayInput[i]} `;
    }

    console.log(printLine);
}

solve(3, [10, 20, 30, 40, 50]);