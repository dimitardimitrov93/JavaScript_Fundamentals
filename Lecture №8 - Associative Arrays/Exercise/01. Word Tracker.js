function wordTracker(arrInput) {

    let arr = arrInput.slice();

    let targetWords = arr.shift().split(' ');
    let wordsToTrack = arr.slice();

    let trackedWords = new Map();

    targetWords.forEach(word => {
        trackedWords.set(word, 0);
    });

    wordsToTrack.forEach(word => {
        if (trackedWords.has(word)) {
            let oldCount = trackedWords.get(word);
            trackedWords.set(word, (oldCount + 1));
        }
    });

    let sortedWords = Array.from(trackedWords.entries()).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
  "this word"
]);