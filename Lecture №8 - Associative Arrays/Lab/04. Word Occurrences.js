function solve(arrInput) {

    let arr = arrInput.slice();
    let wordsCount = new Map();

    arr.forEach(element => {
        if (!wordsCount.has(element)) {
            wordsCount.set(element, 1);
        } else {
            let newCount = wordsCount.get(element) + 1;
            wordsCount.set(element, newCount);
        }
    });

    let sortedWords = Array.from(wordsCount.entries()).sort((a, b) => b[1] - a[1]);

    for (const word of sortedWords) {
        console.log(`${word[0]} -> ${word[1]} times`);   
    }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);