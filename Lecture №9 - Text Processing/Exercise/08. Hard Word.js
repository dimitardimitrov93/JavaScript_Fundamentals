function solve(arrInput) {

    let letter = arrInput.shift();
    let wordsArr = arrInput.shift();

    let emptySpace = '';
    let separatorFlag = false;

    let substitueWord = '';

    for (let i = 0; i < letter.length; i++) {

        let currentChar = letter[i];

        if (currentChar === '_') {
            emptySpace += '_';
            separatorFlag = false;
        } else {
            separatorFlag = true;
        }

        if (separatorFlag && (emptySpace.length > 0)) {

            wordsArr.forEach(word => {
                if (word.length === emptySpace.length) {
                    substitueWord = word;
                }
            });

            letter = letter.replace(emptySpace, substitueWord);
            flag = false;
            emptySpace = '';
        }
    }

    console.log(letter);
}

solve([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
