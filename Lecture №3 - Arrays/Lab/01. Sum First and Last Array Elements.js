function solve(input) {
    
    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[input.length - 1]);

    let result = firstNumber + lastNumber;

    console.log(result);
}

solve(['20', '30', '40']);