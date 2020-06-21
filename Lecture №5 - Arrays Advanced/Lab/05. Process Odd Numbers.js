function oddNumbers(arrayInput) {
    let arr = arrayInput.slice();
    let resultArr = [];

    for (const index in arr) {
        if (index % 2 !== 0) {
           resultArr.unshift(arr[index] * 2); 
        }
    }

    console.log(resultArr.join(' '));
}

oddNumbers([3, 0, 10, 4, 7, 3]);