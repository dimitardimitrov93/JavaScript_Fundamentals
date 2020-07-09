function solve(arrInput) {

    let neighborhoods = arrInput[0].split(', ');
    let futureInhabitants = arrInput.slice(1);

    let finalInhabitants = {};

    neighborhoods.forEach(element => {
        finalInhabitants[element] = [];
    });

    for (const futureInhabitantinfo of futureInhabitants) {
        
        let [futureNeighborHood, futureInhabitant] = futureInhabitantinfo.split(' - ');

        if (finalInhabitants[futureNeighborHood] === []) {
            finalInhabitants[futureNeighborHood] = [futureInhabitant];
        } else if (finalInhabitants[futureNeighborHood] !== [] && finalInhabitants[futureNeighborHood] !== undefined) {
            finalInhabitants[futureNeighborHood] = finalInhabitants[futureNeighborHood].concat(futureInhabitant);
        }
    }

    let sortedArr = Object.entries(finalInhabitants).sort((a, b) => b[1].length - a[1].length);

    sortedArr.forEach(element => {
        console.log(`${element[0]}: ${element[1].length}`);
        console.log(element[1].map(x => `--${x}`).join('\n'));
    });
}

solve([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
