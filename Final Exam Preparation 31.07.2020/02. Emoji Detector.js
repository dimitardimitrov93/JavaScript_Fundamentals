function emojiDetector(arrInput) {
    
    let arr = arrInput.slice();

    let text = arr.shift();
    let coolThreshHoldPattern = /[\d]/g;

    let digits = Array.from(text.match(coolThreshHoldPattern)).map(Number);
    let coolThreshold = digits.reduce((a, b) => a * b);

    let emojiPattern = /([:]{2}|[\*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/g;
    let pureEmojiPattern = /[A-Z]+/i;
    let containsAnyEmojis = emojiPattern.test(text);

    let emojisArr = [];
    let coolEmojisArr = [];

    if (containsAnyEmojis) {

        emojisArr = text.match(emojiPattern);

        for (let i = 0; i < emojisArr.length; i++) {
            let currentPureEmoji = (emojisArr[i].match(pureEmojiPattern))[0];
            let currentEmojiValue = emojiValueCalculator(currentPureEmoji);

            if (currentEmojiValue >= coolThreshold) {
                coolEmojisArr.push(emojisArr[i]);
            }
        }
    }

    if (emojisArr.length > 0) {
        console.log(`Cool threshold: ${coolThreshold}`);
        console.log(`${emojisArr.length} emojis found in the text. The cool ones are:`);

        if (coolEmojisArr.length > 0) {
            console.log(coolEmojisArr.join('\n'));
        }
    }

    function emojiValueCalculator(emoji) {
        let emojiValue = 0;

        for (let j = 0; j < emoji.length; j++) {
            let currentChar = emoji[j];
            let currentCharValue = currentChar.charCodeAt();
            emojiValue += currentCharValue;
        }

        return emojiValue;
    }
}

emojiDetector(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);

// emojiDetector(['5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::']);

// emojiDetector(['It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using \'Content here, content 99 here\', making it look like readable **English**.']);