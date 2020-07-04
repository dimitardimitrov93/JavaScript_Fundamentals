function game(arrInput) {

    let arr = arrInput.slice();

    const initialHealth = 100;
    let initialBitcoins = 0;

    let currentHealth = initialHealth;
    let healAmount = 0;

    let currentBitcoins = initialBitcoins;

    let currentMonster = '';

    let roomCounter = 0;

    let roomsArr = arr.split('|');

    for (let i = 0; i < roomsArr.length; i++) {

        roomCounter++;

        let currentRoom = roomsArr[i].split(' ');
        let currentCommand = currentRoom[0];
        let currentValue = Number(currentRoom[1]);

        if (currentCommand === 'potion') {

            if (currentValue <= (initialHealth - currentHealth)) {

                healAmount = currentValue;
                currentHealth += healAmount;

                console.log(`You healed for ${healAmount} hp.`);
                console.log(`Current health: ${currentHealth} hp.`);
            } else {

                healAmount = initialHealth - currentHealth;
                currentHealth += healAmount;

                console.log(`You healed for ${healAmount} hp.`);
                console.log(`Current health: ${currentHealth} hp.`);
            }
        } else if (currentCommand === 'chest') {

            currentBitcoins += currentValue;
            console.log(`You found ${currentValue} bitcoins.`);
        } else {
            currentMonster = currentCommand;

            if (currentValue >= currentHealth) {
                currentHealth -= currentValue;
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            } else {
                currentHealth -= currentValue;
                console.log(`You slayed ${currentMonster}.`);
            }
        }
    }

    if ((roomCounter === roomsArr.length) && (currentHealth > 0)) {
        console.log('You\'ve made it!');
        console.log(`Bitcoins: ${currentBitcoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

// game('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
game('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');