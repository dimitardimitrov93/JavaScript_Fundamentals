function solve(word, stringToManipulate) {

    let result = stringToManipulate;
    
    while (result.indexOf(word) >= 0) {
        result = result.replace(word, '');
    }

    console.log(result);
}

solve('ice', 'kicegiciceeb');