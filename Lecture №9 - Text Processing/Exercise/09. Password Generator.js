function passwordGenerator(arrInput) {

    let arr = arrInput.slice();

    let [firstString, secondString, word] = [...arr];

    let concatenatedString = firstString + secondString;7
    let wordIndex = 0;

    let password = '';

    for (let i = 0; i < concatenatedString.length; i++) {

        let currentChar = concatenatedString[i].toLowerCase();

        if (wordIndex === word.length) {
            wordIndex = 0;
        }

        if ((currentChar === 'a') || (currentChar === 'e') || (currentChar === 'i') || (currentChar === 'o') || (currentChar === 'u')) {
            concatenatedString = concatenatedString.replace(currentChar, word[wordIndex].toUpperCase());
            wordIndex++;
        }
    }

    for (let j = concatenatedString.length - 1; j >= 0; j--) {

        password += concatenatedString[j];
    }

    console.log(`Your generated password is ${password}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);
