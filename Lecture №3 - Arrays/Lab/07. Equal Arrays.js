function solve(firstArray, secondArray) {
    
    let firstArraySum = 0;

    let differentElementIndex = 0;
    let flag = false;

    for (let i = 0; i < firstArray.length; i++) {
        firstArraySum += Number(firstArray[i]);
            if (firstArray[i] !== secondArray[i]) {
                flag = true;
                differentElementIndex = i;
                break;
            }
        if (flag) {
            break;
        }
    }

    if (flag) {
        console.log(`Arrays are not identical. Found difference at ${differentElementIndex} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${firstArraySum}`);
    }
}

solve(['1','2','3','4','5'], ['1','2','4','4','5']);