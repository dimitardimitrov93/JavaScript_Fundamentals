function solve(arrInput) {
    
    let arr = arrInput.slice();
    let cities = {};

    let currentLine = arr.shift();

    while (currentLine !== 'Sail') {

        let tokens = currentLine.split('||');
        let town = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!cities.hasOwnProperty(town)) {
            cities[town] = [population, gold];
        } else {
            let newPopulation = cities[town][0] + population;
            let newGold = cities[town][1] + gold;

            cities[town] = [newPopulation, newGold];
        }

        currentLine = arr.shift();
    }

    currentLine = arr.shift();

    while (currentLine !== 'End') {

        let currentInfo = currentLine.split('=>');
        let command = currentInfo[0];
        let townName = currentInfo[1];

        if (command === 'Plunder') {
            let peopleToKill = Number(currentInfo[2]);
            let goldAmount = Number(currentInfo[3]);

            let newPopulation = cities[townName][0] - peopleToKill;
            let newGold = cities[townName][1] - goldAmount;

            cities[townName] = [newPopulation, newGold];

            console.log(`${townName} plundered! ${goldAmount} gold stolen, ${peopleToKill} citizens killed.`);

            if ((cities[townName][0] === 0) || (cities[townName][1] === 0)) {
                console.log(`${townName} has been wiped off the map!`);
                delete cities[townName];
            }
        } else if (command === 'Prosper') {
            let goldAmount = Number(currentInfo[2]);

            if (goldAmount >= 0) {
                
                let population = cities[townName][0];
                let newGold = cities[townName][1] + goldAmount;

                cities[townName] = [population, newGold];

                console.log(`${goldAmount} gold added to the city treasury. ${townName} now has ${newGold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }

        currentLine = arr.shift();
    }

    let unsortedCities = Array.from(Object.entries(cities));

    if (unsortedCities.length > 0) {
        let sortedCities = unsortedCities.sort((a, b) => {
            if (a[1][1] !== b[1][1]) {
                return b[1][1] - a[1][1];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });

        console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`);
        sortedCities.forEach(city => {
            console.log(`${city[0]} -> Population: ${city[1][0]} citizens, Gold: ${city[1][1]} kg`);
        });
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]);

// solve([
//     'Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End'
// ]);