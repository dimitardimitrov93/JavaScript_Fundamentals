function numberMatrix(number) {

    let printLine = '';

    for(let i = 0; i < number; i++) {
        printLine += `${number} `;
    }

    for (let j = 0; j < number; j++) {
        console.log(printLine);   
    }
}


numberMatrix(3);