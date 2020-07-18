function solve(wordInput, textInput) {

    let word = wordInput.toLowerCase();
    let text = textInput.toLowerCase().split(' ');

    if (text.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve("javascript", "JavaScript is the best programming language");

solve('python', 'JavaScript is the best programming language');