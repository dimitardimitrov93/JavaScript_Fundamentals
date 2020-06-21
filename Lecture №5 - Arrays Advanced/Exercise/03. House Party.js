function houseParty(arrayInput) {
    
    let arr = arrayInput.slice();
    let guestsList = [];

    for (let i = 0; i < arr.length; i++) {

        let currentInfoArr = arr[i].split(' ');
        let currentPerson = currentInfoArr[0];
        
        let isgoing = currentInfoArr[2] === 'going!' ? true : false;
        
        if (isgoing) {

            if (guestsList.includes(currentPerson)) {
                console.log(`${currentPerson} is already in the list!`);
            } else {
                guestsList.push(currentPerson);
            }         
        } else {

            if (guestsList.includes(currentPerson)) {
                guestsList.splice(guestsList.indexOf(currentPerson), 1);
            } else {
                console.log(`${currentPerson} is not in the list!`);
            }
        }
    }

    for (const guest of guestsList) {
        console.log(guest);
    }
}

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
  ]);
