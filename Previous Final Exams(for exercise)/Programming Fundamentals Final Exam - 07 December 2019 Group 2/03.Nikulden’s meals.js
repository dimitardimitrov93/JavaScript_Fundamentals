function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentLine = arr.shift();

    let guestsFeedback = {};
    let unlikedMealsCount = 0;

    while (currentLine !== 'Stop') {

        let tokens = currentLine.split('-');
        let currentFeedback = tokens[0];
        let guest = tokens[1];
        let meal = tokens[2];

        if (currentFeedback === 'Like') {

            if (!guestsFeedback.hasOwnProperty(guest)) {
                guestsFeedback[guest] = [meal];
            } else if (guestsFeedback.hasOwnProperty(guest) && (!guestsFeedback[guest].includes(meal))) {
                guestsFeedback[guest].push(meal);
            }

        } else if (currentFeedback === 'Unlike') {
            if (guestsFeedback.hasOwnProperty(guest)) {

                if (guestsFeedback[guest].includes(meal)) {
                    let indexOfMealToRemove = guestsFeedback[guest].indexOf(meal);                
                    guestsFeedback[guest].splice(indexOfMealToRemove, 1);
                    unlikedMealsCount++;
    
                    console.log(`${guest} doesn't like the ${meal}.`);
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }

            } else if (!guestsFeedback.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            }
        }

        currentLine = arr.shift();
    }

    let unsortedGuestsFeedback = Array.from(Object.entries(guestsFeedback));
    let sortedGuestsFeedback = unsortedGuestsFeedback.sort((a, b) => {

        if (a[1].length !== b[1].length) {
            return b[1].length - a[1].length;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    sortedGuestsFeedback.forEach(guest => {
        console.log(`${guest[0]}: ${guest[1].join(', ')}`);
    });
    console.log(`Unliked meals: ${unlikedMealsCount}`);
}

solve([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]);

// solve([
//     'Like-Krisi-shrimps',
//     'Unlike-Vili-carp',
//     'Unlike-Krisi-salad',
//     'Unlike-Krisi-shrimps',
//     'Stop'
// ]);

// solve([
//     'Like-Mike-frenchFries',
//     'Like-Mike-salad',
//     'Like-George-fruit',
//     'Like-Steven-salad',
//     'Unlike-Steven-salad',
//     'Unlike-Steven-fruit',
//     'Stop'
// ]);