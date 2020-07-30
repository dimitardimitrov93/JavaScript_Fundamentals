function solve(arrInput) {

    let arr = arrInput.slice();
    let text = arr.shift();
    let pattern = /([@|#])(?<word1>[A-Za-z]{3,})\1(\1(?<word2>[A-Za-z]{3,})\1)/g;

    let mirrorWordsArr = [];

    let validationFlag = pattern.test(text);
    let validPairsCount = 0;

    if (validationFlag) {

        let matches = text.match(pattern);

        while (matches.length > 0) {

            let words = matches.shift().match(/[A-Za-z]+/g);

            validPairsCount++;

            let firstWord = words[0];
            let secondWord = words[1];
            
            let reversedFirstWord = firstWord.split('').reverse().join('');
            let reversedSecondWord = secondWord.split('').reverse().join('');
    
            if ((firstWord === reversedSecondWord) && (reversedFirstWord === secondWord)) {
                mirrorWordsArr.push([`${firstWord} <=> ${secondWord}`]);
            }
        }

        console.log(`${validPairsCount} word pairs found!`);

        if (mirrorWordsArr.length > 0) {
            console.log('The mirror words are:');
            console.log(mirrorWordsArr.join(', '));
        } else {
            console.log(`No mirror words!`);
        }

    } else {
        console.log('No word pairs found!');
        console.log(`No mirror words!`);
    }
}

solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);

solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);

solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);