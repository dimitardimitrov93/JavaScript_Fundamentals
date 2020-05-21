function solve(numberInput) {

    let number = Number(numberInput);
    let counter = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0) {
            counter++;
            console.log(i);
            sum += i;
        }

        if (counter >= number) {
            break;
        }
    }

    console.log(`Sum: ${sum}`);
}

solve(5);