function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentLine = arr.shift();
    let peopleInfo = {};

    while (currentLine !== 'Results') {

        let tokens = currentLine.split(':');
        let command = tokens[0];

        if (command === 'Add') {
            let personName = tokens[1];
            let currentHealth = Number(tokens[2]);
            let currentEnergy = Number(tokens[3]);

            if (!peopleInfo.hasOwnProperty(personName)) {
                peopleInfo[personName] = [currentHealth, currentEnergy];
            } else {

                let newHealth = peopleInfo[personName][0] + currentHealth;
                let energy = peopleInfo[personName][1];

                peopleInfo[personName] = [newHealth, energy];
            }
        } else if (command === 'Attack') {
            let attackerName = tokens[1];
            let defenderName = tokens[2];
            let damage = Number(tokens[3]);

            if (peopleInfo.hasOwnProperty(attackerName) && peopleInfo.hasOwnProperty(defenderName)) {

                let defenderNewHealth = peopleInfo[defenderName][0] - damage;
                let attackerNewEnergy = peopleInfo[attackerName][1] - 1;

                if (defenderNewHealth <= 0) {
                    delete peopleInfo[defenderName];
                    console.log(`${defenderName} was disqualified!`);
                } else {
                    peopleInfo[defenderName][0] = defenderNewHealth;
                }

                if (attackerNewEnergy <= 0) {
                    delete peopleInfo[attackerName];
                    console.log(`${attackerName} was disqualified!`);
                } else {
                    peopleInfo[attackerName][1] = attackerNewEnergy;
                }
            }
        } else if (command === 'Delete') {
            let username = tokens[1];

            if (username === 'All') {
                peopleInfo = {};
            } else {
                delete peopleInfo[username];
            }
        }

        currentLine = arr.shift();
    }

    let unsortedPeopleInfo = Array.from(Object.entries(peopleInfo));
    let sortedPeopleInfo = unsortedPeopleInfo.sort((a, b) => {
        if (a[1][0] !== b[1][0]) {
            return b[1][0] - a[1][0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    console.log(`People count: ${sortedPeopleInfo.length}`);
    for (const person of sortedPeopleInfo) {
        console.log(`${person[0]} - ${person[1].join(' - ')}`);
    }
}

solve([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);

// solve([
//     'Add:Bonnie:3000:5',
//     'Add:Johny:4000:10',
//     'Attack:Johny:Bonnie:400',
//     'Add:Chicken:1000:1',
//     'Add:Rabbit:3000:5',
//     'Add:Buggy:1259:10',
//     'Attack:Chicken:Rabbit:1000',
//     'Results'
// ]);

// solve([
//     'Add:Bonnie:3000:5',
//     'Add:Johny:4000:10',
//     'Delete:All',
//     'Add:Bonnie:3333:3',
//     'Results'
// ]);