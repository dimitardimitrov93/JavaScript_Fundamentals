function msgManager(arrInput) {
    
    let arr = arrInput.slice();
    let msgCapacity = Number(arr.shift());

    let messagesInfo = {};
    let currentLine = arr.shift();

    while (currentLine !== 'Statistics') {

        let currentInfo = currentLine.split('=');
        let command = currentInfo[0];
        let personName = '';

        if (command === 'Add') {
            personName = currentInfo[1];
            let sentMessages = Number(currentInfo[2]);
            let receivedMessages = Number(currentInfo[3]);

            if (!messagesInfo.hasOwnProperty(personName)) {
                messagesInfo[personName] = [sentMessages, receivedMessages];
            }
        } else if (command === 'Message') {
            let senderName = currentInfo[1];
            let receiverName = currentInfo[2];

            if (messagesInfo.hasOwnProperty(senderName) && messagesInfo.hasOwnProperty(receiverName)) {

                let currentSenderCapacity = (messagesInfo[senderName][0] + 1) + messagesInfo[senderName][1];
                let currentReceiverCapacity = (messagesInfo[receiverName][0] + 1) + messagesInfo[receiverName][1];

                let senderNewMsgNumber = messagesInfo[senderName][0] + 1;
                let receiverNewMsgNumber = messagesInfo[receiverName][1] + 1;

                if (currentSenderCapacity < msgCapacity) {
                    messagesInfo[senderName][0] = senderNewMsgNumber;
                } else {
                    console.log(`${senderName} reached the capacity!`);
                    delete messagesInfo[senderName];
                }

                if (currentReceiverCapacity < msgCapacity) {
                    messagesInfo[receiverName][1] = receiverNewMsgNumber;
                } else {
                    console.log(`${receiverName} reached the capacity!`);
                    delete messagesInfo[receiverName];
                }
            }
        } else if (command === 'Empty') {
            let commandInfo = currentInfo[1];

            if (commandInfo !== 'All') {
                personName = commandInfo;
                delete messagesInfo[personName];
            } else {
                messagesInfo = {};
            }
        }

        currentLine = arr.shift();
    }

    let unsortedMessagesInfo = Array.from(Object.entries(messagesInfo));
    let sortedMessagesInfo = unsortedMessagesInfo.sort((a, b) => {
        if (a[1][1] !== b[1][1]) {
            return b[1][1] - a[1][1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });


    let usersCount = sortedMessagesInfo.length;
    console.log(`Users count: ${usersCount}`);

    sortedMessagesInfo.forEach(element => {
        console.log(`${element[0]} - ${(element[1][0] + element[1][1])}`);
    }); 
}

msgManager([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]);

// msgManager([
//     '20',
//     'Add=Mark=3=9',
//     'Add=Berry=5=5',
//     'Add=Clark=4=0',
//     'Empty=Berry',
//     'Add=Blake=9=3',
//     'Add=Michael=3=9',
//     'Add=Amy=9=9',
//     'Message=Blake=Amy',
//     'Message=Michael=Amy',
//     'Statistics'
// ]);

// msgManager([
//     '12',
//     'Add=Bonnie=3=5',
//     'Add=Johny=4=4',
//     'Empty=All',
//     'Add=Bonnie=3=3',
//     'Statistics'
// ]);