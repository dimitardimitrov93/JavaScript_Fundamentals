function solve(arrInput) {

    let arr = arrInput.slice();

    let partyIndex = arr.indexOf('PARTY');

    let allReservations = arr.slice(0, partyIndex);
    let arrivingGuests = arr.slice(partyIndex + 1);

    let vipReservations = [];
    let regularReservations = [];

    for (const reservation of allReservations) {
        if (!isNaN(Number(reservation[0]))) {
            vipReservations.push(reservation);
        } else {
            regularReservations.push(reservation);
        }
    }

    let missingVipGuests = vipReservations.slice();
    let missingRegularGuests = regularReservations.slice();

    for (const arrivingGuest of arrivingGuests) {
        
        if (missingVipGuests.indexOf(arrivingGuest) >= 0) {
            missingVipGuests.splice(missingVipGuests.indexOf(arrivingGuest), 1);
        }

        if (missingRegularGuests.indexOf(arrivingGuest) >= 0) {
            missingRegularGuests.splice(missingRegularGuests.indexOf(arrivingGuest), 1);
        }
    }

    console.log(missingVipGuests.length + missingRegularGuests.length);
    missingVipGuests.forEach(missingVipGuest => {
        console.log(missingVipGuest);
    });
    
    missingRegularGuests.forEach(missingRegularGuest => {
        console.log(missingRegularGuest);
    });
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  '8DSdfdds',
  "Ce8vwPmE",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

// solve([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]);
