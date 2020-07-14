function solution(arrInput) {

    let arr = arrInput.slice();

    let armiesInfo = {};

    for (const element of arr) {
        let currentInfo = element;
        let leader = '';
        let armyName = '';
        let armyNumber = 0;

        if (currentInfo.includes('arrives')) {

            leader = currentInfo.slice(0, currentInfo.indexOf('arrives') - 1);

            if (!armiesInfo[leader]) {
                armiesInfo[leader] = [];
            }
        } else if (currentInfo.includes('+')) {

            currentInfo = currentInfo.split(' + ');

            armyName = currentInfo[0];
            armyNumber = Number(currentInfo[1]);

            for (const key in armiesInfo) {

                for (const element of armiesInfo[key]) {

                    if (element[armyName]) {
                        element[armyName] = element[armyName] + armyNumber;
                    }
                }
            }

        } else if (currentInfo.includes(':')) {

            currentInfo = currentInfo.split(': ');
            leader = currentInfo.shift();
            currentInfo = currentInfo[0].split(', ');

            armyName = currentInfo[0];
            armyNumber = Number(currentInfo[1]);

            if (armiesInfo[leader]) {
                armiesInfo[leader].push({[armyName]: armyNumber});
            }

        } else if (currentInfo.includes('defeated')) {
            leader = currentInfo.slice(0, currentInfo.indexOf('defeated') - 1);
            delete armiesInfo[leader];
        }
    }

    for (const key in armiesInfo) {

        for (let i = 0; i < armiesInfo[key].length; i++) {
            armiesInfo[key][i] = Object.entries(armiesInfo[key][i]);
        }
    }

    let sortedArmies = Array.from(Object.entries(armiesInfo)).sort((a, b) => {

        let totalArmyA = 0;
        let totalArmyB = 0;

        for (let j = 0; j < a[1].length; j++) {
            totalArmyA += a[1][j][0][1];
        }

        for (let k = 0; k < b[1].length; k++) {
            totalArmyB += b[1][k][0][1];  
        }

        return totalArmyB - totalArmyA;
    });

    for (const element of sortedArmies) {
        
        element[1].sort((a, b) => {

            let armyA = 0;
            let armyB = 0;
            
            armyA = a[0][1];
            armyB = b[0][1];

            return armyB - armyA;
        });
    }

    sortedArmies.forEach(element => {
        let totalArmy = 0;

        element[1].forEach(army => {
            totalArmy += army[0][1];
        });

        console.log(`${element[0]}: ${totalArmy}`);
        element[1].forEach(x => {
            console.log(`>>> ${x[0].join(' - ')}`);
        });
    });
}

solution([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 200000",
  "Britox + 4500",
  "Britox + 4500",
  "Findlay: Army, 34540",
  "Army + 4500",
  "Army + 4500",
]);
