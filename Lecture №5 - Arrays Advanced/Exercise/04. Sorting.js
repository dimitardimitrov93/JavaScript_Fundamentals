function sorting(arrayInput) {

    let arr = arrayInput.slice();
    let sortedArray = [];

    while (arr.length > 0) {

        if (arr.length > 1) {
            arr = arr.sort((a, b) => b - a);
            sortedArray.push(arr[0]);
    
            arr = arr.sort((a, b) => a - b);
            sortedArray.push(arr[0]);
    
            arr = arr.slice(1, (arr.length - 1));
        } else {
            sortedArray.push(arr[0]);
            arr = arr.slice(1, (arr.length - 1));
        }
    }

    console.log(sortedArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 18]);