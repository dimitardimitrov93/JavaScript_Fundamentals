function solve(elements) {
    
    let printLine = '';

    for (i = elements.length - 1; i >= 0; i--) {
        printLine += `${elements[i]} `;
    }

    console.log(printLine);
}

solve(['a', 'b', 'c', 'd', 'e']);