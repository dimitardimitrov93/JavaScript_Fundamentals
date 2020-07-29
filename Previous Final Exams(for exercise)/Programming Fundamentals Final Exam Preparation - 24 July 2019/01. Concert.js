function solve(arrInput) {
    
    let arr = arrInput.slice();
    let finalBand = arr.pop();
    let currentLine = arr.shift();

    let bandAndMembers = {};
    let bandAndPlayTime = {};

    while (currentLine !== 'start of concert') {

        let tokens = currentLine.split('; ');
        let command = tokens[0];
        let bandName = tokens[1];
        let bandMembers = '';
        let playTime = 0;

        if (command === 'Play') {
            playTime = Number(tokens[2]);
            
            if (!bandAndPlayTime.hasOwnProperty(bandName)) {
                bandAndPlayTime[bandName] = playTime;
            } else {
                let oldPlayTime = bandAndPlayTime[bandName];
                bandAndPlayTime[bandName] = (oldPlayTime + playTime);
            }

        } else if (command === 'Add') {
            bandMembers = tokens[2].split(', ');

            if (!bandAndMembers.hasOwnProperty(bandName)) {
                bandAndMembers[bandName] = bandMembers;
            } else {
                let temporaryMembersInfo = bandAndMembers[bandName].concat(bandMembers);
                let uniqueMembers = new Set(temporaryMembersInfo);
                bandAndMembers[bandName] = Array.from(uniqueMembers.keys());
            }
        }

        currentLine = arr.shift();
    }

    let unsortedBandAndPlayTime = Array.from(Object.entries(bandAndPlayTime));

    let totalPlayTime = 0;
    unsortedBandAndPlayTime.forEach(element => totalPlayTime += element[1]);

    let sortedBandAndPlayTime = unsortedBandAndPlayTime.sort((a, b) => {

        if (b[1] !== a[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    console.log(`Total time: ${totalPlayTime}`);
    
    for (const element of sortedBandAndPlayTime) {
        console.log(`${element[0]} -> ${element[1]}`);
    }
    
    console.log(finalBand);
    bandAndMembers[finalBand].forEach(member => {
        console.log(`=> ${member}`);
    }); 
}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]);

solve([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
]);