function solve(arrInput) {
    
    let arr = arrInput.slice();
    let currentLine = arr.shift();
    let followers = {};

    while (currentLine !== 'Log out') {

        let tokens = currentLine.split(': ');
        let event = tokens[0];
        let username = tokens[1];

        if ((event === 'New follower') && (!followers.hasOwnProperty(username))) {
            followers[username] = [0, 0];
        } else if (event === 'Like') {
            let currentLikesNumber = Number(tokens[2]);

            if (!followers.hasOwnProperty(username)) {
                followers[username] = [currentLikesNumber, 0];
            } else {
                let newLikesNumber = currentLikesNumber + (followers[username][0]);
                followers[username][0] = newLikesNumber;
            }
        } else if (event === 'Comment') {

            if (!followers.hasOwnProperty(username)) {
                followers[username] = [0, 1];
            } else {
                let newCommentsNumber = (followers[username][1]) + 1;
                followers[username][1] = newCommentsNumber;
            }
        } else if (event === 'Blocked') {
            if (!followers.hasOwnProperty(username)) {
                console.log(`${username} doesn't exist.`);
            } else {
                delete followers[username];
            }
        }

        currentLine = arr.shift();
    }

    let unsortedFollowers = Array.from(Object.entries(followers));

    let sortedFollowers = unsortedFollowers.sort((a, b) => {
        if (a[1][0] !== b[1][0]) {
            return b[1][0] - a[1][0];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    console.log(`${sortedFollowers.length} followers`);
    sortedFollowers.forEach(follower => {
        console.log(`${follower[0]}: ${(follower[1][0] + follower[1][1])}`);
    });
}

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]);

solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
]);