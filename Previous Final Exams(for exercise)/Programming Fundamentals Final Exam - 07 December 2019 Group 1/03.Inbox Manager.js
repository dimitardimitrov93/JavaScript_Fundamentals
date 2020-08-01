function inboxManager(arrInput) {
    
    let arr = arrInput.slice();
    let usersInfo = {};

    let currentLine = arr.shift();

    while (currentLine !== 'Statistics') {

        let tokens = currentLine.split('->');
        let command = tokens[0];
        let username = tokens[1];

        if (command === 'Add') {
            if (!usersInfo.hasOwnProperty(username)) {
                usersInfo[username] = [];
            } else {
                console.log(`${username} is already registered`);
            }

        } else if (command === 'Send') {
            let emailMessage = tokens[2];
            usersInfo[username].push(emailMessage);
            
        } else if (command === 'Delete') {
            if (usersInfo.hasOwnProperty(username)) {
                delete usersInfo[username];
            } else {
                console.log(`${username} not found!`);
            }
        }

        currentLine = arr.shift();
    }

    let unsortedUsers = Array.from(Object.entries(usersInfo));
    let sortedUsers = unsortedUsers.sort((a, b) => {
        if (a[1].length !== b[1].length) {
            return b[1].length - a[1].length;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    console.log(`Users count: ${sortedUsers.length}`);
    for (const user of sortedUsers) {
        console.log(user[0]);
        
        user[1].forEach(message => {
            console.log(` - ${message}`);
        });
    }
}

inboxManager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);

// inboxManager([
//     'Add->Mike',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Your loan is overdue',
//     'Add->Mike',
//     'Send->Mike->Hello, do you want to meet up tomorrow?',
//     'Delete->Peter',
//     "Send->George->I'm busy",
//     'Send->Mike->Another random test mail',
//     'Delete->George',
//     'Statistics'
// ]);

// inboxManager([
//     'Add->Annie',
//     'Add->George',
//     'Send->George->Hello World',
//     'Send->George->Some random test mail',
//     'Send->Annie->Hello, do you want to meet up tomorrow?',
//     'Send->George->It would be a pleasure',
//     'Send->Annie->Another random test mail',
//     'Delete->Annie',
//     'Delete->George',
//     'Statistics'
// ]);