function numbersAddition(arrayInput) {
    arr = arrayInput.slice();

    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length - 1]);

    let sum = firstNumber + lastNumber;

    console.log(sum);
}

numbersAddition(['20', '30', '40']);