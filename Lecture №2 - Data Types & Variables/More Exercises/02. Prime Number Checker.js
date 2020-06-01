function solve(number) {
    
    let flag = false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            flag = false;
            break;
        } else {
            flag = true;
        }
    }
    
    console.log(flag);
}

solve(81);