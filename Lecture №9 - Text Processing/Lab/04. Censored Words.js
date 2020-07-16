function censore(text, wordToCensore) {

    let result = text;
    let replacementChars = '';

    for (const char of wordToCensore) {
        replacementChars += '*';
    }

    while (result.indexOf(wordToCensore) >= 0) {  
        result = result.replace(wordToCensore, replacementChars);
    }

    console.log(result);
}

censore("A small sentence with some words", "small");