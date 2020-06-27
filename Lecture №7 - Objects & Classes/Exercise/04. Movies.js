function movieDatabase(arrInput) {

    let arr = arrInput.slice();
    let movieDatabaseArr = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let movieInfoObj = {};
        let currentInfoArr = arr[i].split(' ');

        if (currentInfoArr.includes('addMovie')) {
            currentInfoArr.shift();
            currentInfoArr.join(' ');
            movieInfoObj.name = currentInfoArr.join(' ');

            for (let index in arr) {
                currentInfoArr = arr[index].split(' ');
                if (arr[index].includes(`${movieInfoObj.name} directedBy`)) {
                    movieInfoObj.director = currentInfoArr.splice(currentInfoArr.indexOf('directedBy') + 1).join(' ');
                } else if (arr[index].includes(`${movieInfoObj.name} onDate`)) {
                    movieInfoObj.date = currentInfoArr[currentInfoArr.indexOf('onDate') + 1];
                }
            }

            if (movieInfoObj.name && movieInfoObj.director && movieInfoObj.name) {
                movieDatabaseArr.push(movieInfoObj);
            }
        }  
    }

    for (const element of movieDatabaseArr) {
        console.log(JSON.stringify(element));
    }
}

movieDatabase([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
    'addMovie The Terminator',
    'The Terminator onDate 26.10.1984',
    'The Terminator James Cameron'
]);