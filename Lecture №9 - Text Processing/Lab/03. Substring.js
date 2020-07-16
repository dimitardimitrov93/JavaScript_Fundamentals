function solve(string, firstIndexInput, secondIndexInput) {
    
    let firstIndex = Number(firstIndexInput);
    let secondIndex = Number(secondIndexInput);

    let result = string.substr(firstIndex, secondIndex);

    console.log(result);
}

solve('ASentence', 1, 8);