function solve(firstNum, secondNum, thirdNum) {
    
    if (firstNum >= secondNum && firstNum >= thirdNum) {
        console.log(firstNum);
        console.log(secondNum);
        console.log(thirdNum);
    } else if (firstNum >= secondNum && firstNum < thirdNum) {
        console.log(thirdNum);
        console.log(firstNum);
        console.log(secondNum);
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
        if (thirdNum > firstNum) {
            console.log(secondNum);
            console.log(thirdNum);
            console.log(firstNum);
        } else {
            console.log(secondNum);
            console.log(firstNum);
            console.log(thirdNum);
        }
    } else if (secondNum >= firstNum && secondNum < thirdNum) {
        console.log(thirdNum);
        console.log(secondNum);
        console.log(firstNum);
    } else if (thirdNum >= firstNum && thirdNum < secondNum) {
        console.log(secondNum);
        console.log(thirdNum);
        console.log(firstNum);
    } else if (firstNum >= thirdNum && thirdNum > secondNum) {
        console.log(firstNum);
        console.log(thirdNum);
        console.log(secondNum);
    }
}

solve(1, 2, 2);