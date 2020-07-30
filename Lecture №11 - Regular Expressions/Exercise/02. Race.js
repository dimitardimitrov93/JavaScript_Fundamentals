function solve(arrInput) {

    let arr = arrInput.slice();

    let participantsAndScore = {};
    let participantsArr = arr.shift().split(', ');

    let currentLine = arr.shift();

    let nameExtractorRegEx = /[A-Z]+/gi;
    let scoreExtractorRegEx = /\d/gi;

    let currentString = '';

    participantsArr.forEach(participant => {
        if (!participantsAndScore.hasOwnProperty(participant)) {
            participantsAndScore[participant] = 0;
        }
    });

    while (currentLine !== 'end of race') {

        let name = nameExtractor(currentLine);
        let currentScore = scoreExtractor(currentLine);

        if (participantsAndScore.hasOwnProperty(name)) {
            let oldScore = participantsAndScore[name];

            participantsAndScore[name] = oldScore + currentScore;
        }

        currentLine = arr.shift();
    }

    function nameExtractor(string) {

        let currentParticipant = '';
        
        while ((currentString = nameExtractorRegEx.exec(string)) !== null) {
            currentParticipant += currentString[0];
        }
        return currentParticipant;
    }

    function scoreExtractor(string) {
        let score = 0;
        
        while ((currentString = scoreExtractorRegEx.exec(string)) !== null) {
            score += Number(currentString[0]);
        }
        return score;
    }
    
    let unsortedArr = Array.from(Object.entries(participantsAndScore));
    let sortedArr = unsortedArr.sort((a, b) => b[1] - a[1]);

    for(let i = 0; i < sortedArr.length; i++) {
        if (i === 0) {
            console.log(`${i + 1}st place: ${sortedArr[i][0]}`);
        } else if (i === 1) {
            console.log(`${i + 1}nd place: ${sortedArr[i][0]}`);
        } else if (i === 2) {
            console.log(`${i + 1}rd place: ${sortedArr[i][0]}`);
        } else {
            break;
        }
    }
}

solve([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
