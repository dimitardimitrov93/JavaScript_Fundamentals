function travelling(arrInput) {

    let arr = arrInput.slice();

    let destinationsAssocArr = {};

    arr.forEach(destination => {
        let currentDestinationInfo = destination.split(' > ');
        let currentCountry = currentDestinationInfo[0];
        let currentTown = currentDestinationInfo[1];
        let currentCost = Number(currentDestinationInfo[2]);

        if (!destinationsAssocArr[currentCountry]) {
            destinationsAssocArr[currentCountry] = [[currentTown, currentCost]];
        } else {
            
            for (let i = 0; i < destinationsAssocArr[currentCountry].length; i++) {

                if (destinationsAssocArr[currentCountry][i][0] !== currentTown) {
                    destinationsAssocArr[currentCountry].push([currentTown, currentCost]);
                    break;
                } else {

                    if (currentCost < destinationsAssocArr[currentCountry][i][1]) {
                        destinationsAssocArr[currentCountry][i][1] = currentCost;
                        break;
                    }
                }
            }
        }
    });

    let alphabeticalDestinationsArr = Object.entries(destinationsAssocArr).sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < alphabeticalDestinationsArr.length; i++) {

        for (let j = 0; j < alphabeticalDestinationsArr[i][1].length; j++) {

            alphabeticalDestinationsArr[i][1].sort((a, b) => {
                return a[1] - b[1];
            });
        }
    }

    for (let i = 0; i < alphabeticalDestinationsArr.length; i++) {        
        for (let j = 0; j < alphabeticalDestinationsArr[i][1].length; j++) {
            alphabeticalDestinationsArr[i][1][j] = alphabeticalDestinationsArr[i][1][j].join(' -> ');
        }

        console.log(`${alphabeticalDestinationsArr[i][0]} -> ${alphabeticalDestinationsArr[i][1].join(' ')}`);
    }
}

// travelling([
//   "Bulgaria > Sofia > 500",
//   "Bulgaria > Sopot > 800",
//   "France > Paris > 2000",
//   "Albania > Tirana > 1000",
//   "Bulgaria > Sofia > 200",
// ]);

travelling([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
]);