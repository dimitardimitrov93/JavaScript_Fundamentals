function solve(numberInput) {
    
    let number = Number(numberInput);
    let divisibleBy = 0;

    if (number % 2 == 0) {
        divisibleBy = 2;

        if (number % 3 == 0) {
            divisibleBy = 3;
        }

        if (number % 6 == 0) {
            divisibleBy = 6;
        } 

        if (number % 7 == 0) {
            divisibleBy = 7;
        } 
        
        if (number % 10 == 0) {
            divisibleBy = 10;
        }

        printLine = `The number is divisible by ${divisibleBy}`;
    } else if (number % 3 == 0) {
        divisibleBy = 3;

        if (number % 6 == 0) {
            divisibleBy = 6;
        }

        if (number % 7 == 0) {
            divisibleBy = 7;
        } 

        if (number % 10 == 0) {
            divisibleBy = 10;
        } 

        printLine = `The number is divisible by ${divisibleBy}`;
    } else if (number % 6 == 0) {
        divisibleBy = 6;

        if (number % 10 == 0) {
            divisibleBy = 10;
        }

        printLine = `The number is divisible by ${divisibleBy}`;
    } else if (number % 7 == 0) {
        divisibleBy = 7;

        if (number % 10 == 0) {
            divisibleBy = 10;
        }

        printLine = `The number is divisible by ${divisibleBy}`;
    } else if (number % 10 == 0) {
        divisibleBy = 10;
        
        printLine = `The number is divisible by ${divisibleBy}`;
    } else {
        printLine = `Not divisible`;
    }

    console.log(printLine);
}

solve(30);