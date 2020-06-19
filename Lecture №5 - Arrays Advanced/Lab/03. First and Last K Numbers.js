function arraySlicer(arrayInput) {
    
    let arr = arrayInput.slice();
    let k = arr.shift();

    let firstKElements = arr.slice(0, k);
    let lastKElements = arr.splice(arr.length - k);
    
    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));
}

arraySlicer([2, 7, 8, 9]);