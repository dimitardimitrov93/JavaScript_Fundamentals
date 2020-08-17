function solve(arrInput) {
    
    let arr = arrInput.slice();
    let shelvesAndBooks = {};

    for (let i = 0; i < arr.length; i++) {

        let currentLine = arr[i];

        if (currentLine.includes('->')) {
            let [shelfId, shelfGenre] = currentLine.split(' -> ');

            if (!shelvesAndBooks[shelfGenre]) {

                let isUniqueId = false;

                if (Object.entries(shelvesAndBooks).length !== 0) {
                    for (const key in shelvesAndBooks) {
                        if (shelvesAndBooks[key][0] !== shelfId) {
                            isUniqueId = true;
                        } else {
                            isUniqueId = false;
                            break;
                        }
                    }
                } else {
                    shelvesAndBooks[shelfGenre] = [shelfId, []]; 
                }

                if (isUniqueId) {
                    shelvesAndBooks[shelfGenre] = [shelfId, []]; 
                }
            }

        } else {
            let authorAndBook = currentLine.split(', ')[0];
            let bookTokens = currentLine.split(': ');
            let bookName = bookTokens[0];
            let [author, bookGenre] = bookTokens[1].split(', ');

            if (shelvesAndBooks[bookGenre]) {
                shelvesAndBooks[bookGenre][1].push(authorAndBook)
            }
        }
    }

    let unsortedShelvesAndBooks = Array.from(Object.entries(shelvesAndBooks));
    let sortedShelvesAndBooks = unsortedShelvesAndBooks.sort((a, b) => {  
        return b[1][1].length - a[1][1].length;
    });

    for (let shelf of sortedShelvesAndBooks) {

        shelf[1][1] = shelf[1][1].sort((a, b) => {
            return a.localeCompare(b);
        });
    }

    for (const element of sortedShelvesAndBooks) {
        console.log(`${element[1][0]} ${element[0]}: ${element[1][1].length}`);
        element[1][1].forEach(book => {
            console.log(`--> ${book}`);
        });
    }
}

solve([
    '1 -> history', 
    '1 -> action', 
    'Death in Time: Criss Bell, mystery', 
    '2 -> mystery', 
    '3 -> sci-fi', 
    'Child of Silver: Bruce Rich, mystery', 
    'Hurting Secrets: Dustin Bolt, action', 
    'Future of Dawn: Aiden Rose, sci-fi', 
    'Lions and Rats: Gabe Roads, history', 
    '2 -> romance', 
    'Effect of the Void: Shay B, romance', 
    'Losing Dreams: Gail Starr, sci-fi', 
    'Name of Earth: Jo Bell, sci-fi', 
    'Pilots of Stone: Brook Jay, history'
]);