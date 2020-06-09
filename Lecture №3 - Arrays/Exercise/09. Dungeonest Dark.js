function solve(dungeonRooms) {
    // convert the initial array into a proper array that seprates each room
    let dungeonRoomsString = dungeonRooms.toString();
    let dungeonRoomsArray = dungeonRoomsString.split("|");

    let currentRoomString = '';
    let currentRoomArray = [];

    let encounterType = '';
    let encounterValue = 0;

    const initialHealth = 100;
    const initialCoins = 0;

    let currentHealth = initialHealth;
    let currentCoins = initialCoins;

    let healAmount = 0;
    let monsterAttack = 0;
    let monsterType = '';

    let bestRoom = '';

    for (let i = 0; i < dungeonRoomsArray.length; i++) {
        currentRoomString = dungeonRoomsArray[i].toString();
        currentRoomArray = currentRoomString.split(" ");
        bestRoom = i + 1;

        encounterType = currentRoomArray[0];
        encounterValue = Number(currentRoomArray[1]);

        if (encounterType == 'potion') {
            if (currentHealth == 100) {
                healAmount = 0;

            } else if (currentHealth < 100) {
                if (encounterValue <= (100 - currentHealth)) {
                    healAmount = encounterValue;
                    currentHealth += healAmount;
                } else {
                    healAmount = 100 - currentHealth;
                    currentHealth += healAmount;
                }
            }
            console.log(`You healed for ${healAmount} hp.`);
            console.log(`Current health: ${currentHealth} hp.`);
        } else if (encounterType == 'chest') {
            currentCoins += encounterValue;
            console.log(`You found ${encounterValue} coins.`);
        } else {
            monsterType = encounterType;
            monsterAttack = encounterValue;

            currentHealth -= monsterAttack;

            if (currentHealth > 0) {
                console.log(`You slayed ${monsterType}.`);
            } else {
                console.log(`You died! Killed by ${monsterType}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }

    if ((bestRoom == dungeonRoomsArray.length) && (currentHealth > 0)) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${currentCoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

solve([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]);