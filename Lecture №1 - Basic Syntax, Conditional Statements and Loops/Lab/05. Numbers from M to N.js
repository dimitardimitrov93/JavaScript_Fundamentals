function solve(numberMInput, numberNInput) {
    let numberM = Number(numberMInput);
    let numberN = Number(numberNInput);

    for (let i = numberM; i >= numberN; i--) {
        console.log(i);
    }
}

solve(6, 2);