function solve(arrInput) {
    
    let arr = arrInput.slice();
    let usernames = {};
    let articlesAndComments = {};

    for (let i = 0; i < arr.length; i++) {

        let currentLine = arr[i];
        let tokens = currentLine.split(' ');
        let direction = tokens[0];

        if (direction === 'user') {

            let currentUser = tokens[1];

            if (!usernames.hasOwnProperty(currentUser)) {
                usernames[currentUser] = currentUser;
            }
        } else if (direction === 'article') {

            let article = tokens[1];

            if (!articlesAndComments.hasOwnProperty(article)) {
                articlesAndComments[article] = {};
            }
        } else {

            let currentTokens = currentLine.split(': ');
            let userAndArticleInfo = currentTokens[0].split(' posts on ');
            let commentAndTitleInfo = currentTokens[1].split(', ');

            let currentUser = userAndArticleInfo[0];
            let article = userAndArticleInfo[1];

            let commentTitle = commentAndTitleInfo[0];
            let comment = commentAndTitleInfo[1];

            if (usernames[currentUser] && articlesAndComments[article]) {
                
                if (articlesAndComments[article][0] === undefined) {
                    articlesAndComments[article] = [[currentUser, commentTitle, comment]];
                } else {
                    articlesAndComments[article].push([currentUser, commentTitle, comment]);
                }
            }
        }
    }

    let unsortedArticlesAndComments = Array.from(Object.entries(articlesAndComments));
    let sortedArticlesAndComments = unsortedArticlesAndComments.sort((a, b) => {
        return b[1].length - a[1].length;
    });
    
    for (const element of sortedArticlesAndComments) {
        element[1].sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
    }

    for (const article of sortedArticlesAndComments) {
        console.log(`Comments on ${article[0]}`);
        article[1].forEach(element => {
            console.log(`--- From user ${element[0]}: ${element[1]} - ${element[2]}`);
        });
    }
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);