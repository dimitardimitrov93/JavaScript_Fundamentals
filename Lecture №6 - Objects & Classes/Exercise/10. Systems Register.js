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
        auxArr[k] = [{["systemName"]: auxArr[k]}];
    }


    for (let l = 0; l < databaseArr.length; l++) {
        let flag = false;
        for (let m = 0; m < auxArr.length; m++) {

            if (databaseArr[l][0] === auxArr[m][0].systemName) {
                console.log(auxArr[m].componentName);
                console.log(databaseArr[l][1]);
                
                
                for (let k = 0; k < auxArr[m].length; k++) {
                    if (auxArr[m][k].componentName !== databaseArr[l][1]) {
                        flag = true;
                    } else {
                        flag = false;
                    }
                }

                if (flag) {
                    auxArr[m].push({["componentName"]: databaseArr[l][1]});
                }
            } 
        }
    }

    for (let n = 0; n < auxArr.length; n++) {
        console.log(auxArr[n]);
        console.log(auxArr[n].componentName);
        console.log(auxArr[n].systemName);
        

        for (let o = 0; o < auxArr[n].length; o++) {
            console.log(databaseArr[n][o]);
            
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
    
    let sortedSystemsArr = auxArr.sort(function(a, b) {
         if (a.length !== b.length) {
            return b.length - a.length;
         } else {
            return a[0][0][0][0][0].toUpperCase().localeCompare(b[0][0][0][0][0].toUpperCase());
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
    'lambda | CoreA | A13',
    'lambda | CoreB | A13',
    'lambda | CoreC | A13',
]);