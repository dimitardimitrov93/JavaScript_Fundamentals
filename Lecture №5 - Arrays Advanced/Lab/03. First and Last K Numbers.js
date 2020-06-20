function arraySlicer(arrayInput) {
    
    let arr = arrayInput.slice();
    let k = arr.shift();

    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(arr.length - k);
    
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}

arraySlicer([2, 7, 8, 9]);