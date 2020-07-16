function solve(text, stringToFind) {

    let textArr = text.split(' ');
    let occurrenceCount = 0;

    for (const string of textArr) {
        if (string === stringToFind) {
            occurrenceCount++;
        }
    }

    console.log(occurrenceCount);
}

solve("This is a word and it also is a sentence", "is");