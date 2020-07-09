function solve(stringInput) {

    let wordsAssocArr = stringInput.split(' ').map(x => x.toLowerCase());

    let wordsMap = new Map();

    wordsAssocArr.forEach(word => {
        if (!wordsMap.has(word)) {
            wordsMap.set(word, 1);
        } else {
            let oldCount = wordsMap.get(word);
            wordsMap.set(word, (oldCount + 1));
        }
    });

    let wordsArr = Array.from(wordsMap.entries());
    let oddCountWords = [];

    wordsArr.forEach(wordInfo => {
        if (wordInfo[1] % 2 !== 0) {
            oddCountWords.push(wordInfo[0]);
        }
    });
    
    console.log(oddCountWords.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');