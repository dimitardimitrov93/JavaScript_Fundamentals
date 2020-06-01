function solve(numberInput) {
    let chessboardSize = Number(numberInput);

    let currentColour = 'black';
    let previousColour = ''

    console.log('<div class="chessboard">');
    for (let i = 0; i < chessboardSize; i++) {
        console.log('  <div>');
        for (let j = 0; j < chessboardSize; j++) {

            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }
        console.log('  </div>');
        if (chessboardSize % 2 == 0) {
            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>');
}

solve(3);