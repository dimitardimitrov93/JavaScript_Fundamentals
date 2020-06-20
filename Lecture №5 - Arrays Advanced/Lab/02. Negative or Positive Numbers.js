function negativeOrPositive(arrayInput) {

    let arr = arrayInput.slice();
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }    

    for (const number of newArr) {
        console.log(number);
    }
}

negativeOrPositive([3, -2, 0, -1]);