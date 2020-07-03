function dictionaryMaker(jsonArrInput) {

    let jsonArr = jsonArrInput.slice();
    let objArr = [];
    let dictionaryArr = [];

    class Entry {
        constructor(term, definition) {
            this.term = term;
            this.definition = definition;
        }

        printInfo() {
            console.log(`Term: ${this.term} => Definition: ${this.definition}`);
        }
    }
    
    for (const element of jsonArr) {
        objArr.push(JSON.parse(element));
    }

    for (const element of objArr) {

        let currentTerm = Object.keys(element);   
        let currentDefinition = Object.values(element);

        dictionaryArr.push([currentTerm[0], currentDefinition[0]]);
    }

    for (let i = 0; i < dictionaryArr.length; i++) {

        let currentTerm = dictionaryArr[i][0];
        let flag = false;

        for (let j = (i + 1); j < dictionaryArr.length; j++) {
            if (currentTerm === dictionaryArr[j][0]) {
                dictionaryArr.splice([i], 1, dictionaryArr[j]);
                dictionaryArr.splice(j, 1);
                flag = true;
                break;
            }
        }
    }

    let sortedUniqueTermsArr = dictionaryArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (let k = 0; k < sortedUniqueTermsArr.length; k++) {
        currentTerm = sortedUniqueTermsArr[k][0];
        currentDefinition = sortedUniqueTermsArr[k][1];

        let currentObj = new Entry(currentTerm, currentDefinition);
        currentObj.printInfo();
    }
}

dictionaryMaker([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);