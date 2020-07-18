function solve(wordsInput, templateInput) {

    let wordsArr = wordsInput.split(', ');
    let templateArr = templateInput.split(' ');

    while (wordsArr.length > 0) {

        let currentWord = wordsArr.shift();

        for (let j = 0; j < templateArr.length; j++) {

            if (templateArr[j].includes('*') && (templateArr[j].length === currentWord.length)) {
                templateArr[j] = currentWord;
            }
        }
    }

    console.log(templateArr.join(' '));
}

solve("great", "softuni is ***** place for learning new programming languages");

solve('great, learning', 'softuni is ***** place for ******** new programming languages');