function register(arrInput) {

    let databaseArr = arrInput.slice();
    let auxArr = [];

    for (let i = 0; i < databaseArr.length; i++) {

        databaseArr[i] = databaseArr[i].split(' | ');

        for (let j = 0; j < databaseArr[i].length; j++) {
            if (!auxArr.includes(databaseArr[i][0])) {
                auxArr.push(databaseArr[i][0]);
            }
        }
    }

    for (let k = 0; k < auxArr.length; k++) {
        auxArr[k] = [auxArr[k]];
    }

    for (let l = 0; l < databaseArr.length; l++) {

        for (let m = 0; m < auxArr.length; m++) {

            if (databaseArr[l][0] === auxArr[m][0]) {

                if (!auxArr[m].includes(databaseArr[l][1])) {
                    auxArr[m].push(databaseArr[l][1]);
                }
            } 
        }
    }

    for (let n = 0; n < auxArr.length; n++) {
        auxArr[n][0] = [auxArr[n][0]];

        for (let o = 0; o < auxArr[n].length; o++) {
            auxArr[n][o] = [auxArr[n][o]];
        }
    }

    for (let l = 0; l < databaseArr.length; l++) {
        let flag = false;

        for (let m = 0; m < auxArr.length; m++) {

            if (flag) {
                break;
            }

            for (let n = 1; n < auxArr[m].length; n++) {
                
                if (databaseArr[l][1] === auxArr[m][n][0]) {
                    if (!auxArr[m][n].includes(databaseArr[l][2])) {
                        auxArr[m][n].push(databaseArr[l][2]);
                        flag = true;
                        break;
                    }
                } 
            }
        }
    }

    for (let i = 0; i < auxArr.length; i++) {

        for (let j = 1; j < auxArr[i].length; j++) {

            auxArr[i][j][0] = [auxArr[i][j][0]];
        }
    }
    
    // doesnt sort correctly
    let sortedSystemsArr = auxArr.sort(function(a, b) {
         if (a.length !== b.length) {
            return b[0].length - a[0].length;
         } else {
            return a[0][0][0][0].toUpperCase().localeCompare(b[0][0][0][0].toUpperCase());
         }
    });
    
    for (let j = 0; j < sortedSystemsArr.length; j++) {
        for (let k = 0; k < sortedSystemsArr[j].length; k++) {
            sortedSystemsArr[j][k].sort(function(a, b) {
                return a.length - b.length;
            });
        }
    }


    for (let i = 0; i < sortedSystemsArr.length; i++) {
        console.log(sortedSystemsArr[i][0][0][0]);
        
        for (let j = 1; j < sortedSystemsArr[i].length; j++) {
            console.log(`|||${sortedSystemsArr[i][j][0][0]}`);

            for (let k = 1; k < sortedSystemsArr[i][j].length; k++) {

                console.log(`||||||${sortedSystemsArr[i][j][k]}`);
            }
        }
    }
}

register([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
    'a | aaa | Default Security | das1',
    'a | $vf | Default Security | das1',
    'a | fgfds | Default Security | das1',
    'a | $fdasds | Default Security | das1',
    'a | $vvvb | Default Security | das1'
]);