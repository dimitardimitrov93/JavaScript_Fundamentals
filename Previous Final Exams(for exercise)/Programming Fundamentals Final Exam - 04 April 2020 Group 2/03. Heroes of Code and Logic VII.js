function solve(arrInput) {
    
    let arr = arrInput.slice();
    let heroesNumber = Number(arr.shift());

    let heroesInfo = {};

    for (let i = 0; i < heroesNumber; i++) {

        let currentHeroInfo = arr.shift().split(' ');
        let heroName = currentHeroInfo[0];
        let hitPoints = Math.min(100, Number(currentHeroInfo[1]));
        let manaPoints = Math.min(200, Number(currentHeroInfo[2]));

        if (!heroesInfo.hasOwnProperty(heroName)) {
            heroesInfo[heroName] = [hitPoints, manaPoints];
        }
    }

    let currentLine = arr.shift();
    
    while (currentLine !== 'End') {

        let currentHeroInfo = currentLine.split(' - ');
        let command = currentHeroInfo[0];
        let heroName = currentHeroInfo[1];

        if (command === 'CastSpell') {

            let manaPointsRequired = Number(currentHeroInfo[2]);
            let spellName = currentHeroInfo[3];
            let currentHeroManaPoints = heroesInfo[heroName][1];

            if (currentHeroManaPoints >= manaPointsRequired) {
                heroesInfo[heroName][1] = currentHeroManaPoints - manaPointsRequired;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesInfo[heroName][1]} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === 'TakeDamage') {

            let damage = Number(currentHeroInfo[2]);
            let attacker = currentHeroInfo[3];

            let oldHitPoints = heroesInfo[heroName][0];
            let currentHitPoints =  oldHitPoints - damage;

            if (currentHitPoints > 0) {
                heroesInfo[heroName][0] = currentHitPoints;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${currentHitPoints} HP left!`);
            } else {
                delete heroesInfo[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`);
            }
            
        } else if (command === 'Recharge') {

            let amount = Math.min((200 - heroesInfo[heroName][1]), Number(currentHeroInfo[2]));
            let currentManaPoints = Math.min(200, (amount + heroesInfo[heroName][1]));
            heroesInfo[heroName][1] = currentManaPoints;
            console.log(`${heroName} recharged for ${amount} MP!`);

        } else if (command === 'Heal') {
            let amount = Math.min((100 - heroesInfo[heroName][0]), Number(currentHeroInfo[2]));
            let currentHitPoints = Math.min(100, (amount + heroesInfo[heroName][0]));
            heroesInfo[heroName][0] = currentHitPoints;
            console.log(`${heroName} healed for ${amount} HP!`);
        }

        currentLine = arr.shift();
    }

    let unsortedHeroesInfo = Array.from(Object.entries(heroesInfo));
    let sortedHeroesInfo = unsortedHeroesInfo.sort((a, b) => {
        if (a[1][0] !== b[1][0]) {
            return b[1][0] - a[1][0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (const hero of sortedHeroesInfo) {
        console.log(hero[0]);
        console.log(`  HP: ${hero[1][0]}`);
        console.log(`  MP: ${hero[1][1]}`); 
    }
}

// solve([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);