function solve(sentenceInput) {
    
    let sentenceArr = sentenceInput.split(' ');
    let specialWordsArr = [];

    for (const word of sentenceArr) {
        if (word.startsWith('#') && (word.length > 1) && lettersValidator(word)) {
            let specialWord = word.replace('#', '');
            specialWordsArr.push(specialWord);
        }
    }

    function lettersValidator (word) {

        let splittedWord = word.split('').slice(1);
        let flag = false;

        for (let i = 0; i < splittedWord.length; i++) {

            let currentChar = splittedWord[i];

            if ((currentChar.toLowerCase().charCodeAt() >= 97) && (currentChar.toLowerCase().charCodeAt() <= 122)) {
                flag = true;
            } else {
                return false;
            }
        }

        if (flag) {
            return true;
        }
    }

    console.log(specialWordsArr.join('\n'));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');