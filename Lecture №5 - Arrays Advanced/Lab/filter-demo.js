function filterTest(arrInput) {
    let arr = arrInput.slice();

    let result = arr.filter(symbol => symbol === '*');

    console.log(result);
    
}

filterTest(['five', 5, '*', 1, 'bla-bla', '*', 4, '**']);