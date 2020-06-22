function distinctArray(arrayInput) {
    
    let arr = arrayInput.slice();
    
    let duplicateFinder = arr.filter((element, index) => arr.indexOf(element) === index);

    console.log(duplicateFinder.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);