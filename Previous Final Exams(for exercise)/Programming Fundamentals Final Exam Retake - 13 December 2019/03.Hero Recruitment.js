function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentLine = arr.shift();
    let heroesInfo = {};

    while (currentLine !== 'End') {

        let tokens = currentLine.split(' ');
        let command = tokens[0];
        let heroName = tokens[1];
        let spellName = '';

        if (command === 'Enroll') {

            if (!heroesInfo.hasOwnProperty(heroName)) {
                heroesInfo[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        } else if (command === 'Learn') {
            spellName = tokens[2];

            if (heroesInfo.hasOwnProperty(heroName)) {

                if (!heroesInfo[heroName].includes(spellName)) {
                    heroesInfo[heroName].push(spellName);
                } else {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        } else if (command === 'Unlearn') {
            spellName = tokens[2];

            if (heroesInfo.hasOwnProperty(heroName)) {

                if (!heroesInfo[heroName].includes(spellName)) {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                } else {
                    let spellToRemoveIndex = heroesInfo[heroName].indexOf(spellName);
                    heroesInfo[heroName].splice(spellToRemoveIndex, 1);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        }

        currentLine = arr.shift();
    }

    let unsortedHeroesInfo = Array.from(Object.entries(heroesInfo));
    let sortedHeroesInfo = unsortedHeroesInfo.sort((a, b) => {
        if (a[1].length !== b[1].length) {
            return b[1].length - a[1].length;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    console.log('Heroes:');
    sortedHeroesInfo.forEach(hero => {
        console.log(`== ${hero[0]}: ${hero[1].join(', ')}`);
    });
}

solve([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]);

// solve([
//     'Enroll Stefan',
//     'Learn Stefan ItShouldWork',
//     'Learn Stefan ItShouldWork',
//     'Unlearn Stefan NotFound',
//     'End'
// ]);