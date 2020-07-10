function cardGame(arrInput) {

    let arr = arrInput.slice();
    let currentDecks = {};
    let finalResults = {};

    for (const element of arr) {

        let currentInfo = element.split(': ')
        let currentPerson = currentInfo[0];
        let currentDraw = Array.from(new Set(currentInfo.slice(1)[0].split(', ')).values());

        if (!currentDecks[currentPerson]) {
            currentDecks[currentPerson] = currentDraw;
        } else {
            let uniqueCards = Array.from(new Set(currentDecks[currentPerson].concat(currentDraw)));
            currentDecks[currentPerson] = uniqueCards;
        }
    }

    let peopleDecksArr = Object.entries(currentDecks);

    for (let i = 0; i < peopleDecksArr.length; i++) {

        let personCardsValue = 0;

        for (let j = 0; j < peopleDecksArr[i][1].length; j++) {

            let currentCardTypeInfo = peopleDecksArr[i][1][j].slice(peopleDecksArr[i][1][j].length - 1);
            let currentCardPowerInfo = peopleDecksArr[i][1][j].slice(0, peopleDecksArr[i][1][j].length - 1);

            personCardsValue += cardValueCalculator(currentCardTypeInfo, currentCardPowerInfo);
        }

        finalResults[peopleDecksArr[i][0]] = personCardsValue;
    }

    let results = Object.entries(finalResults);

    results.forEach(result => {
        console.log(`${result[0]}: ${result[1]}`);
    });

    function cardValueCalculator(cardTypeInfo, cardPowerInfo) {

        let powerValue = 0;
        let multiplier = 0;

        switch (cardTypeInfo) {
            case 'S':
                multiplier = 4;
                break;
            case 'H':
                multiplier = 3;
                break;
            case 'D':
                multiplier = 2;
                break;
            case 'C':
                multiplier = 1;
                break;
        }

        switch (cardPowerInfo) {
            case 'J':
                powerValue = 11;
                break;
            case 'Q':
                powerValue = 12;
                break;
            case 'K':
                powerValue = 13;
                break;
            case 'A':
                powerValue = 14;
                break;
            default:
                powerValue = Number(cardPowerInfo);
            break;
        }

        let cardValue = powerValue * multiplier;
        return cardValue;
    }
}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);