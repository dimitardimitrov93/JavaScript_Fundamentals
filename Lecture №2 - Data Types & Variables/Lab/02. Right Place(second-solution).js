function solve(firstString, character, targetString) {

    let editedString = firstString.replace('_', character);
    let output = editedString == targetString ? 'Matched' : 'Not Matched'; 

    console.log(output);
}

solve('Str_ng', 'i', 'String');